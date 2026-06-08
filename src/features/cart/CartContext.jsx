import { createContext, useEffect, useState } from "react";
import {
  getCart,
  addToCartAPI,
  removeFromCartAPI,
  updateCartQtyAPI,
} from "../../services/cartServices";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");

  // -------------------------
  // TOAST
  // -------------------------
  const notify = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2000);
  };

  // -------------------------
  // LOAD CART FROM BACKEND
  // -------------------------

  const fetchCart = async () => {
    try {
      const data = await getCart();
      setCart(data.items || []);
      
    } catch (err) {
      console.log("Cart fetch error", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  
  // -------------------------
  // ADD TO CART
  // -------------------------
  const addToCart = async (product) => {
    try {
     
      await addToCartAPI(product.id, 1);
      await fetchCart();
      notify("Added to cart 🛒");

    } catch (err) {
      console.log(err);
      notify("Failed to add to cart");
    }
  };

  // -------------------------
  // REMOVE FROM CART
  // -------------------------
  const removeFromCart = async (itemId) => {
    try {

      await removeFromCartAPI(itemId);
      await fetchCart();
      notify("Removed from cart");

    } catch (err) {
      console.log(err);
    }
  };

  // -------------------------
  // UPDATE QUANTITY
  // -------------------------
  const updateQuantity = async (itemId, qty) => {
    try {
      await updateCartQtyAPI(itemId, qty);
      await fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  // -------------------------
  // TOTAL PRICE
  // -------------------------
  const subTotal = cart.reduce(
    (sum, item) =>
      sum + item.product.price * item.quantity,
    0
  );

  const getItemSubtotal = (item) => {
    return item.product.price * item.quantity;
  };

  const cartIds = new Set(
    cart.map(item => item.product.id)
  );

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        subTotal,
        notify,
        toast,
        cartIds,
        clearCart,
        getItemSubtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};