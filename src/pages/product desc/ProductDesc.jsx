import './productDesc.css'
import allData from '../../components/assets/allData'
import { useLocation} from 'react-router-dom'

function ProductDesc() {
  const location = useLocation();
   const product = location.state?.product;
  return (
  
    <div class="product-preview-container">
    <div class="product-image-section">
      <img
        src={product.image}
        alt={product.name}
        class="product-main-image"
      />
     </div>
     

    <div class="product-info">
      <p class="product-summary">{`${product.name} from SuperGreen Farm`}</p>
     
        <span class="label">Quantity:</span>
        <div class="quantity-selector">
          <button class="quantity-btn" onclick="decrementQty()">-</button>
          <select id="qty-dropdown">
            <option>1kg</option>
            <option>2kg</option>
            <option>3kg</option>
            <option>4kg</option>
            <option>5kg</option>
          </select>
          <button class="quantity-btn" onclick="incrementQty()">+</button>
        </div>
      <p><span class="label">Price:</span> <span>{product.new_price}</span></p>
    </div>

    <div class="seller-section">
      <img
        src="/260x260-pp.jpg"
        alt="Seller Image"
        class="seller-avatar"
      />

      <div class="seller-details">
        <p><strong>Seller: John Doe</strong></p>
        <p>Contact: johndoe@example.com</p>
      </div>
      <i class="fas fa-heart favorite-icon" title="Add to Favourite"></i>
    </div>
    <button class="order-button">Add to Cart</button>
    </div>
    
    
  )
}

export default ProductDesc