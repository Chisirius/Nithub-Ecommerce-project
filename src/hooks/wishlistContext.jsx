import {createContext, useContext, useEffect, useState,} from "react";

import {addToWishlist, getWishlist, removeFromWishlist,} from "../services/wishlistServices"

export const WishlistContext = createContext();
 export const useWishlist = () => useContext(WishlistContext);
  
  export const WishlistProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [toast, setToast] = useState("");

    // -------------------------
  // TOAST
  // -------------------------
  const notify = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2000);
  };
  
    // -------------------------
    // FETCH WISHLIST
    // -------------------------
    const fetchWishlist = async () => {
      try {
        const data = await getWishlist();
        setWishlist(data.items || []);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    
    useEffect(() => {
      fetchWishlist();
    }, []);

    
    
    // -------------------------
    // ADD TO WISHLIST
    // -------------------------
    const addWish = async (product) => {
      try {
        await addToWishlist(product.id);
  
        await fetchWishlist();
        alert("wishlist added")
        notify("wishlist added");
      } catch (err) {
        console.log(err);
      }
    };
  
    // -------------------------
    // REMOVE FROM WISHLIST
    // -------------------------
    const removeWish = async (itemId) => {
      try {
        await removeFromWishlist(itemId);
        await fetchWishlist();
        notify("wishlist removed");
      } catch (err) {
        console.log(err);
      }
    };

   
  
    // -------------------------
    // TOGGLE (UI FRIENDLY)
    // -------------------------
    const toggleWishlist = async (product) => {
      const exists = wishlist.find(
        (item) => item.product.id === product.id
      );
  
      if (exists) {
        await removeWish(exists.id);
      } else {
        await addWish(product);
      }
    };

    const wishlistIds = new Set(
      wishlist.map(item => item.product.id)
    );
  
    return (
      <WishlistContext.Provider
        value={{
          wishlist,
          toggleWishlist,
          loading,
          wishlistIds,
          notify,
          removeWish
        }}
      >
        {children}
      </WishlistContext.Provider>
    );
  };