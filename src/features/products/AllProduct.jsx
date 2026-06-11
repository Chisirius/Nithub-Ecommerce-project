import {useNavigate} from 'react-router-dom'
import './allProduct.css'
import React, {useContext} from 'react'
import {CartContext} from '../../hooks/CartContext'
import {Heart, ShoppingCart} from 'lucide-react';
import {useWishlist} from '../../hooks/useWishlist'
import {useAuth} from '../../hooks/AuthContext'
import {toast} from "react-toastify"


function AllProduct({
  p_name,
  new_price,
  old_price,
  image,
  onClick,
  product
}) {

  const { addToCart } = useContext(CartContext)

  const { toggleWishlist, wishlistIds = new Set() } = useWishlist()

  const { user } = useAuth()
  const navigate = useNavigate()

  // -------------------------
  // SAFE WISHLIST CHECK
  // -------------------------
  const isWishlisted = wishlistIds.has(product.id);

  // -------------------------
  // ADD TO CART (AUTH GUARD)
  // -------------------------
  const handleAddToCart = (e) => {
    e.stopPropagation()

    if (!user) {
      toast.error("Please login to add items to cart")
      navigate("/login")
      return
    }

    addToCart(product)
  }

  // -------------------------
  // ADD TO WISHLIST (AUTH GUARD)
  // -------------------------
  const handleAddToWish = (e) => {
    e.stopPropagation()

    if (!user) {
      toast.error("Please login to use wishlist")
      navigate("/login")
      return
    }

    toggleWishlist(product)
  }

  return (
    <div>
      <div className="product-card">

        <div>

          <div
            className="image-wrapper"
            onClick={onClick}
          >
            <img src={image} alt={p_name} />

            <button
              className={`favorite-icon ${
                isWishlisted ? 'wishlisted' : ''
              }`}
              aria-label="Add to wishlist"
              onClick={handleAddToWish}
            >
              <Heart
                size={18}
                fill={
                  isWishlisted ? "currentColor" : "none"
                }
              />
            </button>

          </div>

          <div className='product-details'>

            <p className="product-name">
              {p_name}
            </p>

            <div className="product-price">

              <p className="product-price-new">
              ₦{Number(new_price || 0)}
              </p>

              <p className="product-price-old">
              ₦{Number(old_price || 0)}
              </p>

            </div>

          </div>

          <button
            className="add-to-cart-icon"
            onClick={handleAddToCart}
            aria-label="Add to cart"
          >
            <ShoppingCart size={18} />
          </button>

        </div>

      </div>
    </div>
  )
}

export default AllProduct