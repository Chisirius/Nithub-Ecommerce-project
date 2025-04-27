import "./hero.css";

function Hero() {
  return (
    <>
      <div className="page1">
        <div className="a">
          <h1>AgrSoko</h1>
          <p>
            this is my first solo project. Wiyh nithub certification,
            eninchiryurncnvc93nwoowncnwncu
          </p>
        </div>

        <div className="b">
          <div className="phone">
            <div className="phone1">
              <header>
                <span className="icons">
                  <b>09.20</b>
                </span>
                <span className="design"></span>
                <span className="icons">
                  <i className="fa-solid fa-wifi"></i>
                  <i className="fa-solid fa-signal fa-sm"></i>
                  <i className="fa-solid fa-battery-half fa-sm"></i>
                </span>
              </header>

              <div className="search-container">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search in here"
                    className="search-input"
                  />
                  <span className="search-icon">🔍</span>
                </div>

                <button className="search-button">+</button>
              </div>

              <div>
                <div className="category">
                  <span>Search by category</span>
                  <span>view all</span>
                </div>
                <div className="images">
                  <img src="/cereals.jpeg" alt="agric product" />
                  <img src="/beans grain.jpeg" alt="agric product" />
                  <img src="/vegetables.jpeg" alt="agric product" />
                  <img src="/fruits.jpeg" alt="agric product" />
                </div>
              </div>

              <div>
                <p className="recommended">Recommended</p>
              </div>

              <div className="recommend">
                <div className="item">
                  <img src="/vegetables.jpeg" alt="product image" />
                  <p>name</p>
                  <p>price</p>
                  <p>cart</p>
                </div>

                <div className="item">
                  <img src="/tomato.jpeg" alt="product image" />
                  <p>name</p>
                  <p>price</p>
                  <p>cart</p>
                </div>

                <div className="item">
                  <img src="/maize grain.jpeg" alt="product image" />
                  <p>name</p>
                  <p>price</p>
                  <p>cart</p>
                </div>

                <div className="item">
                  <img src="/rice grain.jpeg" alt="product image" />
                  <p>name</p>
                  <p>price</p>
                  <p>cart</p>
                </div>
              </div>

              <footer>
                <div>
                  <i className="fa-solid fa-house"></i>
                  <p>Home</p>
                </div>

                <div>
                  <i
                    className="fa-solid fa-bag-shopping"
                    style={{ color: "#179631" }}
                  ></i>
                  <p>Shop</p>
                </div>

                <div>
                  <i className="fa-solid fa-newspaper"></i>
                  <p>Blog</p>
                </div>

                <div>
                  <i className="fa-solid fa-user"></i>
                  <p>Profile</p>
                </div>
              </footer>
            </div>
          </div>

          <div className="phone phonee ">
            <div className="phone2">
              <header>
                <span className="icons">
                  <b>09.20</b>
                </span>
                <span className="design"></span>
                <span className="icons">
                  <i className="fa-solid fa-wifi"></i>
                  <i className="fa-solid fa-signal fa-sm"></i>
                </span>
              </header>
              <div className="mages">
                <img
                  src="/tomato.jpeg"
                  alt="product-slides"
                  className="mages-slide"
                />

                <div className="product-desc">
                  <p>fresh derica tomatoes from superGreen farm</p>
                  <p>
                    <span>Name:</span> <span>Tomatoe</span>
                  </p>
                  <p>
                    <span>Quantiy:</span> <span>1kg</span>
                  </p>
                  <p>
                    <span>Price:</span> <span>$7/kilo</span>
                  </p>
                  <br />
                </div>
                <div className="seller">
                  <img
                    src="/260x260-pp.jpg"
                    alt="sellers image"
                    className="sellers-img"
                  />

                  <div className="seller-profile">
                    <p>selers Name</p>
                    <p>selers Name</p>
                  </div>
                </div>
                <button className="order">order button</button>
                <footer className="footer">
                  <div>
                    <i className="fa-solid fa-house"></i>
                    <p>Home</p>
                  </div>

                  <div>
                    <i
                      className="fa-solid fa-bag-shopping"
                      style={{ color: " #179631" }}
                    ></i>
                    <p>Shop</p>
                  </div>

                  <div>
                    <i className="fa-solid fa-newspaper"></i>
                    <p>Blog</p>
                  </div>

                  <div>
                    <i className="fa-solid fa-user"></i>
                    <p>Profile</p>
                  </div>
                </footer>
              </div>
            </div>
          </div>

          <div className="phone phonee">
            <div className="phone3">
              <header>
                <span className="icons">
                  <b>09.20</b>
                </span>
                <span className="design"></span>
                <span className="icons">
                  <i className="fa-solid fa-wifi"></i>
                  <i className="fa-solid fa-signal fa-sm"></i>
                  <i className="fa-solid fa-battery-half fa-sm"></i>
                </span>
              </header>

              <div className="search-container">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search in here"
                    className="search-input"
                  />
                  <span className="search-icon">🔍</span>
                </div>

                <button className="search-button">+</button>
              </div>

              <div>
                <div className="items">
                  <div>
                    <img
                      src="/tomato.jpeg"
                      alt="item image"
                      className="cart-img"
                    />
                  </div>
                  <div className="cart-desc">
                    <p>item name</p>
                    <p>item quantity</p>
                    <p>item price</p>
                    <button>delete item</button>
                  </div>
                </div>

                <div className="items">
                  <div>
                    <img
                      src="/irish potatoe.jpeg"
                      alt="item image"
                      className="cart-img"
                    />
                  </div>
                  <div className="cart-desc">
                    <p>item name</p>
                    <p>item quantity</p>
                    <p>item price</p>
                    <button>delete item</button>
                  </div>
                </div>

                <div className="items">
                  <div>
                    <img
                      src="/rice grain.jpeg"
                      alt="item image"
                      className="cart-img"
                    />
                  </div>
                  <div className="cart-desc">
                    <p>item name</p>
                    <p>item quantity</p>
                    <p>item price</p>
                    <button>delete item</button>
                  </div>
                </div>
              </div>
              <footer>
                <div>
                  <i className="fa-solid fa-house"></i>
                  <p>Home</p>
                </div>

                <div>
                  <i
                    className="fa-solid fa-bag-shopping"
                    style={{ color: " #179631" }}
                  ></i>
                  <p>Shop</p>
                </div>

                <div>
                  <i className="fa-solid fa-newspaper"></i>
                  <p>Blog</p>
                </div>

                <div>
                  <i className="fa-solid fa-user"></i>
                  <p>Profile</p>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>

      <div className="hero">
        <div className="hero-left">
          <h2> NEW ARRIVALS ONLY</h2>
          <div>
            <div className="hand-hand-icon">
              <p>new</p>
              <img src="/wave (1).png" alt="avatarpics" />
            </div>
            <p>products</p>
            <p>for all meal</p>
          </div>
          <div className="hero-latest-btn">
            <div>Best sellers</div>
          </div>
        </div>

        <div className="hero-right">
          <img src="/plant.png" alt="avatar" />
        </div>
      </div>
    </>
  );
}

export default Hero;
