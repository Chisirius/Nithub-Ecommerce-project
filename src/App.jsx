import "./App.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Shop from "./pages/Shop";
import Footer from "./components/footer/Footer";
import LocationHeader from "./components/location header/LocationHeader";
import React from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <LocationHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          {/* <Route path="/explore" element={<explore category="Explore" />} />
          <Route path="/category" element={<Category category="category " />} />
          <Route path="/blog" element={<blog category="blog" />} />
          <Route path="/product" element={<Product category="product" />}>
            <ROute path=":productId" element={<Product />} />
          </Route>
          <ROute part="/cart" element={<Cart />} />
          <ROute part="/login" element={<LoginSignup />} /> */}
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
