import {NavLink} from 'react-router-dom'
import './cart.css'
import {useContext} from 'react'
import {CartContext} from '../../hooks/CartContext'
import {Trash2} from 'lucide-react'

export function Cart() {
  const {
    cart,
    removeFromCart,
    subTotal,
    updateQuantity,
    getItemSubtotal
  } = useContext(CartContext)
  

  if (cart.length === 0) {
    return (
      <p style={{
        textAlign: 'center',
        fontSize: "24px",
        padding: "40px"
      }}>
        Your cart is empty. 🥲🥲
      </p>
    );
  }

  return (
    <div className="cart-container">

      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
      <h2>Your Cart Is Empty</h2>): (
        <></>
      )}
    
    {cart.map((item) => (
        <div key={item.id} className="cart-items">

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
              <p>#{item.product.price}</p>
            </div>

            <div className="quantity-selector">
              <button
                className="quantity-btn"
                onClick={() =>
                  updateQuantity(
                    item.id,
                    Math.max(1, item.quantity - 1)
                  )
                }
              >
                -
              </button>

              <select
                id="qty-dropdown"
                onChange={(e) =>
                  updateQuantity(
                    item.id,
                    Number(e.target.value)
                  )
                }
                value={item.quantity}
              >
                {Array.from({ length: 10 }, (_, i) => i + 1)
                  .map((num) => (
                    <option
                      className="option"
                      key={num}
                      value={num}
                    >
                      {num}kg
                    </option>
                  ))}
              </select>

              <button
                className="quantity-btn"
                onClick={() =>
                  updateQuantity(
                    item.id,
                    Math.min(10, item.quantity + 1)
                  )
                }
              >
                +
              </button>

            </div>

            <div className="subtotal">
              ₦{getItemSubtotal(item)}
            </div>

            <button 
            className="action-btn del"
            onClick={() => removeFromCart(item.id)}>
                        <Trash2 />
                      </button>

          </div>

        </div>
      ))}

      <div className="cart-total">
        <h2>Total: ₦{subTotal}</h2>

        <NavLink to='/checkout'>
          <button className="checkout">
            Proceed to Checkout
          </button>
        </NavLink>
      </div>

    </div>
  )
}






