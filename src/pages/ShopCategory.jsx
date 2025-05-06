

function ShopCategory() {
  return (
   <div class="page2">
      <header class="head">
        <div class="logo"><h1>superGreen</h1></div>
        <div class="search-container">
          <div class="search-boxx">
            <input
              type="text"
              placeholder="Search in here"
              class="search-input"
            />
            <span class="search-icon">🔍</span>
          </div>

          <button class="search-buttonn">+</button>
        </div>
        <div class="utilities">
          <div class="account">
            <i class="fa-regular fa-user fa-lg"></i>
            <h4>Account</h4>
            <i class="fa-solid fa-angle-down fa-2xs"></i>
          </div>
          <div class="account">
            <i class="fa-regular fa-circle-question fa-lg"></i>
            <h4>Help</h4>
            <i class="fa-solid fa-angle-down fa-2xs"></i>
          </div>
          <div class="account">
            <i class="fa-solid fa-cart-shopping fa-lg"></i>
            <h4>Cart</h4>
            <i class="fa-solid fa-angle-down fa-2xs"></i>
          </div>
        </div>
      </header>
      <div class="main-section">
        <aside>
          <div class="category-item active">Poltries <span>&gt;</span></div>
           <div class="category-item">Livestock <span>&gt;</span></div>
           <div class="category-item">Cereals <span>&gt;</span></div>
           <div class="category-item">Fruits <span>&gt;</span></div>
           <div class="category-item">Vegetables <span>&gt;</span></div>
         
          <div class="category-item">Roots & Tubers <span>&gt;</span></div>
          <div class="category-item">Oil Seeds <span>&gt;</span></div>
          <div class="category-item">Legumes & Pulses <span>&gt;</span></div>
          <div class="category-item">Plantation Crops <span>&gt;</span></div>
          <div class="category-item">Fish/Aquaculture <span>&gt;</span></div>
          <div class="category-item">Apiculture <span>&gt;</span></div>
          <div class="category-item">Micro Livestock <span>&gt;</span></div>
        </aside>
        
          git
          <section class="product-display">
            <div class="product-header">
              <h2 class="section-title">Cereals</h2>
              <select class="product-filter">
                <option value="">Sort by</option>
                <option value="asc">Price: Low to High</option>
                <option value="desc">Price: High to Low</option>
              </select>
            </div>
           
          <div class="product-grid">
           

            <div class="product-card">
              <div class="image-wrapper">
                <img src="images/vegetables.jpeg" alt="product image" />
                <span class="favorite-icon">❤</span>
              </div>
              <p class="product-name">Vegetables</p>
              <p class="product-price">₦1,000</p>
              <button class="add-to-cart">Add to Cart</button>
            </div>
    

            <div class="product-card">
              <div class="image-wrapper">
                <img src="images/tomato.jpeg" alt="Tomato" />
                <span class="favorite-icon">❤</span>
              </div>
              <p class="product-name">Tomato</p>
              <p class="product-price">₦1,200</p>
              <button class="add-to-cart">Add to Cart</button>
            </div>
    
            <div class="product-card">
              <div class="image-wrapper">
                <img src="images/maize grain.jpeg" alt="Maize" />
                <span class="favorite-icon">❤</span>
              </div>
              <p class="product-name">Maize Grain</p>
              <p class="product-price">₦1,800</p>
              <button class="add-to-cart">Add to Cart</button>
            </div>
    
            <div class="product-card">
              <div class="image-wrapper">
                <img src="images/rice grain.jpeg" alt="Rice" />
                <span class="favorite-icon">❤</span>
              </div>
              <p class="product-name">Rice Grain</p>
              <p class="product-price">₦3,000</p>
              <button class="add-to-cart">Add to Cart</button>
            
          </div>
        
      </div>
      </section>
    </div>
  )
 
}

export default ShopCategory
