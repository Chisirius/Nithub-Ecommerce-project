import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";


import Shop from "../pages/Shop";
import Footer from "../components/Footer/Footer";
import LocationHeader from "../components/locationHeader/LocationHeader";
import React, { useContext } from "react";
import Navbar from "../components/AppHeader/AppHeader";
import {SearchProvider} from "../hooks/search/SearchContext"
import LoginSignup from "../pages/LoginSignup/LoginSignup";
import FilterBar from "../components/Navbar/NavBar";
import Explore from "../pages/Explore/Explore";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import Login from "../pages/Login/Login";
import ProductDesc from "../pages/productDesc/ProductDesc";
import { CartContext } from "../hooks/CartContext";
import SellerDashboard from "../pages/SellerDashboard";
import ProfileDashboard from "../pages/profileDashboard";
import ProtectedRoute from "../routes/protectedRoutes";
import Wishlist from "../pages/Wishlist/Wishlist";
import AddressBookPage from "../pages/AddressBook/AddressBook";
import NewsletterPreferencesPage from "../components/profile/newsLetter/NewsLetter";
import OrdersPage from "../pages/orders/OrderPage";



function Toast() {
  const { toast } = useContext(CartContext);

  if (!toast) return null;

  return (
    <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded shadow-lg z-50">
      {toast}
    </div>
  );
}


function App() {
  
  return (
    <>
     
        <LocationHeader />
      <SearchProvider>
        <Navbar />
        <Toast /> 
       
        <FilterBar/>
        
        <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/Home" element={<Shop />} />
        <Route path="/explore" element={<Explore category="Explore" />} />
        
        <Route path="/Cart" element={
          <ProtectedRoute>
          <Cart  category="Cart"/>
          </ProtectedRoute>
        } />
        
        <Route path="/wishlist" element={
          <ProtectedRoute>
          <Wishlist  category="wishlist"/>
          </ProtectedRoute>
        } />


          
          <Route path='/checkout' element={
          <ProtectedRoute><Checkout /></ProtectedRoute>} />
          
          {/* 
          <Route path="/blog" element={<blog category="blog" />} />
           */}
          <Route path="/login" element={<ProtectedRoute><Login /></ProtectedRoute>} />
          <Route path="/signup" element={<ProtectedRoute><LoginSignup /></ProtectedRoute>} />
          <Route path='/productDesc/:id' element={<ProductDesc />} />
          
          
          <Route path='/profile' element={<ProtectedRoute><ProfileDashboard /></ProtectedRoute>} />
          <Route path='/seller' element={<ProtectedRoute><SellerDashboard /></ProtectedRoute>} />
          <Route path='/addressBook' element={<ProtectedRoute><AddressBookPage /></ProtectedRoute>} />
          <Route path='/newsletter' element={<NewsletterPreferencesPage />} />
          <Route path='/order' element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
          
          
        </Routes>
        </SearchProvider>
      <Footer />
    </>
  );
}

export default App;
