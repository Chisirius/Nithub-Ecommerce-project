import { NavLink } from 'react-router-dom'
import './cart.css'

function Cart() {
  return (
    <div className="cart-container">
        <h1>Shopping Cart</h1>
  
        <div className="cart-items">
          <div className="cart-item">
            <img
              src="/beans grain.jpeg"
              alt="agric product"
              className="cart-img"
            />
            <div className="item-details">
              <h3>Product 1</h3>
              <p>$30.00</p>
            </div>
            <div className="quantity">
              <button>-</button>
              <input type="number" value="1" min="1" />
              <button>+</button>
            </div>
            <div className="subtotal">$30.00</div>
            <button className="remove-btn">Remove</button>
          </div>
  
          <div className="cart-item">
            <img
              src="/beans grain.jpeg"
              alt="agric product"
              className="cart-img"
            />
            <div className="item-details">
              <h3>Product 2</h3>
              <p>$20.00</p>
            </div>
            <div className="quantity">
              <button>-</button>
              <input type="number" value="2" min="1" />
              <button>+</button>
            </div>
            <div className="subtotal">$40.00</div>
            <button className="remove-btn">Remove</button>
          </div>
        </div>
  
        <div className="cart-total">
          <h2>Total: $70.00</h2>
          <NavLink to ='/checkout'>
          <button className="checkout-btn">Proceed to Checkout</button>
          </NavLink>
        </div>
      </div>
  )
}

export default Cart
