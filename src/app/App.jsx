import React, { useContext } from "react";
import { LocationHeader } from "../components/locationHeader/LocationHeader";
import { SearchProvider } from "../hooks/search/SearchContext";
import { Cart } from "../pages/Cart/Cart";
import { Checkout } from "../pages/Checkout/Checkout";
import { Explore } from "../pages/Explore/Explore";
import { Shop } from "../pages/Shop";
import { Wishlist } from "../pages/Wishlist/Wishlist";
import "./App.css";
import "./index.css";
import {Route, Routes} from "react-router-dom";
import { Login } from "../pages/Login/Login";
import { LoginSignup } from "../pages/LoginSignup/LoginSignup";
import { ProductDesc } from "../pages/productDesc/ProductDesc";
import { ProtectedRoute } from "../routes/protectedRoutes";
import { SellerDashboard } from "../pages/SellerDashboard";
import { ProfileDashboard } from "../pages/ProfileDashboard";
import AddressBookPage from "../pages/AddressBook/AddressBook";
import NewsletterPreferencesPage from "../components/profile/newsLetter/NewsLetter";
import OrdersPage from "../pages/orders/OrderPage";
import Footer from "../components/FooterHelp./FooterHelp";
import { CartContext } from "../hooks/CartContext";
import { NavBar } from "../components/Navbar/NavBar";
import { AppHeader } from "../components/AppHeader/AppHeader";



function Toast() {
  const { toast } = useContext(CartContext);

  if (!toast) return null;

  return (
    <div className="fixed top-5 right-5 bg-black text-white px-4 py-2 rounded shadow-lg z-100">
      {toast}
    </div>
  );
}


function App() {
  
  return (
    <>
        <LocationHeader />
        <SearchProvider >
        <AppHeader />
        <NavBar />
        <Toast /> 
        
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<LoginSignup />} />
          <Route path='/productDesc/:id' element={<ProductDesc />} />
          
          
          <Route path='/profile' element={<ProtectedRoute><ProfileDashboard /></ProtectedRoute>} />
          <Route path='/seller' element={<ProtectedRoute><SellerDashboard /></ProtectedRoute>} />
          <Route path='/addressBook' element={<ProtectedRoute><AddressBookPage /></ProtectedRoute>} />
          <Route path='/newsletter' element={<NewsletterPreferencesPage />} />
          <Route path='/order' element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
          
          
        </Routes>
        <Footer />
        </SearchProvider>
      
    </>
  );
}

export default App;
