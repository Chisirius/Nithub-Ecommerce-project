import {useContext} from "react";
import {WishlistContext} from "../../hooks/wishlistContext";
import "./Wishlist.css"
import {CartContext} from "../../hooks/CartContext";
import {ShoppingCart, Trash2} from "lucide-react";

export function Wishlist() {
  const { addToCart } = useContext(CartContext);

  const { wishlist, removeWish} =
    useContext(WishlistContext);

    if (wishlist.length === 0){
      return(
        <p style={{
          textAlign: 'center',
          fontSize: "24px",
          padding: "40px"
        }}>
          Your wishlist will appear here 💤
        </p>
      )
    }

  return (
    <div className="cart-container">
       
        <div className="mt-[50px]">

          <h1 className="text-[28px]">Wish List</h1>

          {wishlist.map((item) => (
            <div key={item.id} className="cart-items" >
              <div className="cart-item">

                {/* PRODUCT IMAGE */}
                <img
                  src={item.product.images?.[0]}
                  alt={item.product.name}
                  className="cart-img"
                />

                {/* PRODUCT DETAILS */}
                <div className="item-details">
                  <h3>{item.product.name}</h3>
                  <p>₦{item.product.price}</p>
                </div>

                {/* ADD TO cart */}
                <button
                  className="add-cart"
                  onClick={() =>
                    addToCart(item.product)
                  }
                >
                  <ShoppingCart size={18} />
                </button>

                {/* REMOVE FROM WISHLIST */}
                <button
                  className="remove-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeWish(item.id);
                  }}
                >
                  <Trash2 size={18} />
                </button>

              </div>
            </div>
          ))}

        </div>
      

    </div>
  );
}

