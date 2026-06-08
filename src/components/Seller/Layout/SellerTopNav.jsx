import React, { useState } from 'react';
import { Search, Bell, MessageSquare, PlusCircle, Menu, ChevronDown } from 'lucide-react';
import './SellerTopNav.css';



function SellerTopNav({ onAddProduct, onMenuToggle }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications] = useState(3);
  const [messages] = useState(5);

  return (
    <div className="seller-top-nav">
      <div className="top-nav-left">
        <button className="menu-toggle" onClick={onMenuToggle}>
          <Menu size={24} />
        </button>
        <div className="search-bar">
          <Search size={20} className="search-icon" />
          <input
            type="text"
            placeholder="Search products, orders, customers..."
            className="search-input"
          />
        </div>
      </div>

      <div className="top-nav-right">
        <button className="add-product-btn" onClick={onAddProduct}>
          <PlusCircle size={20} />
          <span>Add Product</span>
        </button>

        <div className="nav-icons">
          <button className="nav-icon-btn">
            <Bell size={22} />
            {notifications > 0 && <span className="badge">{notifications}</span>}
          </button>

          <button className="nav-icon-btn">
            <MessageSquare size={22} />
            {messages > 0 && <span className="badge">{messages}</span>}
          </button>
        </div>

        <div className="seller-avatar-dropdown">
          <button
            className="avatar-trigger"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="Seller"
              className="avatar-image"
            />
            <ChevronDown size={16} />
          </button>

          {showDropdown && (
            <div className="avatar-dropdown-menu">
              <div className="dropdown-header">
                <p className="dropdown-name">Green Farm Co.</p>
                <p className="dropdown-email">greenfarm@myagro.com</p>
              </div>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item">Profile</button>
              <button className="dropdown-item">Settings</button>
              <button className="dropdown-item">Help Center</button>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item logout">Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SellerTopNav;
