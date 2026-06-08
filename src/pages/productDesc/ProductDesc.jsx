import './productDesc.css'
import { useLocation} from 'react-router-dom'
import { CartContext } from '../../features/cart/CartContext';
import { useContext, useState } from 'react';
import { useAuth } from '../../hooks/AuthContext'



function ProductDesc() {
  const location = useLocation();
   const product = location.state?.product;
   const { addToCart, cartIds } = useContext(CartContext)
   const [quantity, setQuantity] = useState(product.quantity || 1)
   const {user} =useAuth()

   const decrementQty=
    Math.max(1, quantity-1)
   
   const incrementQty=
    Math.min(10, quantity+1)



    const handleAddToCart =(e) =>{
      e.stopPropagation()
    if (!user) {
      alert("Please login to add items to cart")
      navigate("/login")
      return
    }
    addToCart({...product, quantity})
    console.log(product)
    console.log(quantity)
    }

   

  return (
    <div className="product-preview-container">
    <div className="product-image-section">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-main-image"
      />
     </div>
     

    <div className="product-info">
      <p className="product-summary">{`${product.name} from SuperGreen Farm`}</p>
     
        <span className="label">Quantity:</span>

        <div className="quantity-selector">
          <button className="quantity-btn" onClick={()=>setQuantity(Number(decrementQty))}>-</button>
          <select id="qty-dropdown"
            value= {quantity}
            onChange = {(e)=> setQuantity( Number(e.target.value) )}>
            {Array.from({length:10}, (_, i)=> i + 1).map((num)=>
            <option className = "option" key ={num} value= {num}> {num}kg </option>)}
          </select>
          <button className="quantity-btn" onClick={()=>setQuantity( Number(incrementQty))}>+</button>
        </div>

      <p><span className="label">Price:</span> <span>{product.new_price * quantity}</span></p>
    </div>

    <div className="seller-section">
      <img
        src="/260x260-pp.jpg"
        alt="Seller Image"
        className="seller-avatar"
      />

      <div className="seller-details">
        <p><strong>Seller: John Doe</strong></p>
        <p>Contact: johndoe@example.com</p>
      </div>
      <i className="fas fa-heart favorite-icon" title="Add to Favourite"></i>
    </div>
    <button className="order-button" onClick={handleAddToCart}>Add to Cart</button>
    </div>
    
    
  )
}

export default ProductDesc