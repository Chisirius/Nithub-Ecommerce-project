import React, {useContext} from 'react';
import {Heart, ShoppingCart} from 'lucide-react';
import './Wishlist.css';
import {CartContext} from '../../../hooks/CartContext';
import {WishlistContext} from '../../../hooks/wishlistContext';

function WishlistPage() {
  // Using first 6 products as wishlist items
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
    <div className="wishlist-page">
      <div className="page-header">
        <h1 className="page-title">My Wishlist</h1>
        <p className="page-subtitle">{wishlist.length} items saved</p>
      </div>

      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-product-card">
            <button className="remove-wishlist-btn"
            onClick={(e) => {
              e.stopPropagation();
              removeWish(item.id);
            }}>
              <Heart size={20} fill="currentColor" />
            </button>

            <div className="product-image-wrapper">
              <img src={item.product.images?.[0]} alt={item.product.name} />
            </div>

            <div className="product-info-section">
              <h3 className="product-name">{item.product.name}</h3>
              <p className="product-category">{item.product.category}</p>

              <div className="product-pricing">
                <span className="current-price">₦{item.product.price.toFixed(2)}</span>
                <span className="old-price">₦{item.product.oldPrice.toFixed(2)}</span>
              </div>

              <button className="add-to-cart-btn"
               onClick={() =>
                addToCart(item.product)
              }>
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WishlistPage;
