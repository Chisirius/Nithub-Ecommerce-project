import './checkout.css'



function Checkout() {
  return (
    <div>
          <div class="container">
      <div class="checkout-form">
        <h2>Checkout</h2>

        <section>
          <h3>Shipping Information</h3>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Address" required />
          <input type="text" placeholder="City" required />
          <div class="half">
            <input type="text" placeholder="State" required />
            <input type="text" placeholder="ZIP Code" required />
          </div>
        </section>

        <section>
          <h3>Payment Details</h3>
          <input type="text" placeholder="Cardholder Name" required />
          <input type="text" placeholder="Card Number" required />
          <div class="half">
            <input type="text" placeholder="MM/YY" required />
            <input type="text" placeholder="CVV" required />
          </div>
        </section>

        <button class="pay-btn">Place Order</button>
      </div>

      <div class="order-summary">
        <h3>Order Summary</h3>

        <div class="item">
          <img src="https://via.placeholder.com/60" alt="Product 1" />
          <div class="details">
            <p>Product 1</p>
            <span>$30.00</span>
          </div>
        </div>

        <div class="item">
          <img src="https://via.placeholder.com/60" alt="Product 2" />
          <div class="details">
            <p>Product 2</p>
            <span>$20.00</span>
          </div>
        </div>

        <hr />

        <div class="item total">
          <p>Total</p>
          <span>$50.00</span>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Checkout