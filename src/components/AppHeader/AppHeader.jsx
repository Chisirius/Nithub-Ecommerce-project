import "./AppHeader.css";
import { NavLink, useNavigate, useLocation  } from "react-router-dom";
import { useContext, useState } from 'react'
import { CartContext } from '../../features/cart/CartContext'
import { SearchContext } from "../../hooks/search/SearchContext";
import { useAuth } from "../../hooks/AuthContext"
import { Search, Bell, MessageSquare, ChevronDown, ShoppingCart, User } from "lucide-react";
import { useWishlist } from "../../hooks/useWishlist";



function Navbar() {

  const {cart}= useContext(CartContext)
  const {wishlist} =useWishlist()
  const{searchQuery, setSearchQuery} = useContext(SearchContext)
  const { user,logout, authLoading} = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications, setNotification] = useState(3);
  const [messages, setMessages] = useState(5);
  

  const navigate = useNavigate();
  const location = useLocation();

  function handleChange(e) {
    const value = e.target.value;
    setSearchQuery(value)
    // 🚀 Navigate to explore when typing
    if (value.trim() && location.pathname !== "/explore") {
      navigate("/explore");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && location.pathname !== "/explore") {
      navigate("/explore");
    }
  }

  function handleFocus() {
    // Only navigate if not already on explore
    if (location.pathname !== "/explore") {
      navigate("/explore");
    }
  }

  if (authLoading) {
    return null;
  }

  return (
    <header className="app-header">
      <div className="header-left">

        <div className="logo-section">
          <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white">🌾</span>
          </div>
          <span className="logo-text">AgroMarket</span>
        </div>

        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search products, orders, categories..."
            className="search-input"
            value={searchQuery}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
          />
        </div>
      </div>

      <div className="header-right">
        {!user ? (
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <User size={20} />
            <span>Sign up</span>
          </NavLink>
        ) : (
          <>
            {/* <div className="nav-icons">
              <button className="nav-icon-btn">
                <Bell size={22} />
                {notifications > 0 && <span className="badge">{notifications}</span>}
              </button>

              <button className="nav-icon-btn">
                <MessageSquare size={22} />
                {messages > 0 && <span className="badge">{messages}</span>}
              </button>
            </div> */}

            <NavLink
              to="/Cart"
              className={({ isActive }) =>
                isActive ? "nav-link cart-link active" : "nav-link cart-link"
              }
            >
              <ShoppingCart size={20} />
              <span>Cart</span>
              {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
            </NavLink>

            <NavLink
              to="/wishlist"
              className={({ isActive }) =>
                isActive ? "nav-link cart-link active" : "nav-link cart-link"
              }
            >
              <ShoppingCart size={20} />
              <span>Wish</span>
              {wishlist.length > 0 && <span className="cart-badge">{wishlist.length}</span>}
            </NavLink>

            <div className="user-avatar-dropdown">
              <button
                className="avatar-trigger"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                  alt="User"
                  className="avatar-image"
                />
                <ChevronDown size={16} />
              </button>

              {showDropdown && (
                <div className="avatar-dropdown-menu">
                  <div className="dropdown-header">
                    <p className="dropdown-name">Welcome Back!</p>
                    <p className="dropdown-email">{user.email}</p>
                  </div>
                  <div className="dropdown-divider"></div>
                  <NavLink to="/profile" className="dropdown-item">
                    Profile
                  </NavLink>
                  <button className="dropdown-item">Settings</button>
                  <button className="dropdown-item">Help Center</button>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item logout" onClick={logout}>
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
  
}

export default Navbar;


