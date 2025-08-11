import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Shop from "./pages/Shop";
import Footer from "./components/footer/Footer";
import LocationHeader from "./components/location header/LocationHeader";
import React from "react";
import Navbar from "./components/navbar/Navbar";
import LoginSignup from "./pages/LoginSignup/LoginSignup";
import FilterBar from "./components/filter bar/FilterBar";
import Explore from "./pages/Explore/Explore";
import Cart from "./pages/Cart/cart";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";
import ProductDesc from "./pages/product desc/ProductDesc";

function App() {
  return (
    <>
      <BrowserRouter>
        <LocationHeader />
        <Navbar />
        <FilterBar/>
        
        <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/Home" element={<Shop />} />
        <Route path="/explore" element={<Explore category="Explore" />} />
        <Route path="/Cart" element={<Cart category="Cart" />} />
        <Route path='/checkout' element={<Checkout />} />
          {/* 
          <Route path="/category" element={<Category category="category " />} />
          <Route path="/blog" element={<blog category="blog" />} />
          <Route path="/prodct" element={<Product category="product" />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} /> */}
          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path='/productDesc/:id' element={<ProductDesc />} />
          
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
