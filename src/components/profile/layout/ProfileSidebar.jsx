import React from 'react';
import {Heart, Mail, ShoppingBag, Sparkles, User} from 'lucide-react';
import './ProfileSidebar.css';
import {becomeSeller} from "../../../services/userServices";
import {useNavigate} from "react-router-dom";


const menuItems = [
  { id: 'AccountOverview', label: 'Account Overview', icon: User },
  { id: 'orders', label: 'Orders', icon: ShoppingBag },
  { id: 'inbox', label: 'Inbox', icon: Mail },
  // { id: 'reviews', label: 'Ratings & Reviews', icon: Star },
  // { id: 'vouchers', label: 'Vouchers', icon: Ticket },
  { id: 'wishlist', label: 'Wishlist', icon: Heart },
  // { id: 'followed-sellers', label: 'Followed Sellers', icon: Users },
  // { id: 'recently-viewed', label: 'Recently Viewed', icon: Eye },
  // { id: 'recently-searched', label: 'Recently Searched', icon: Search },
];

function ProfileSidebar({ activePage, onPageChange }) {

  const navigate = useNavigate();
  const handleBecomeSeller = async () => {

    try {
  
      await becomeSeller();
      navigate("/seller");
  
    } catch (error) {
  
      console.log(error);
  
      alert("Failed to become seller");
    }
  };

  return (
    <aside className="profile-sidebar">
      <div className="profile-sidebar-header">
        <h2 className="sidebar-title">My Account</h2>
      </div>

      <nav className="profile-sidebar-nav">
        <ul className="profile-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  className={`profile-menu-item ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => onPageChange(item.id)}
                >
                  <Icon size={20} className="menu-icon" />
                  <span className="menu-label">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <div className="sidebar-divider"></div>

        {/* Become a Seller CTA */}
        <div className="seller-cta-card">
          <div className="cta-icon">
            <Sparkles size={24} />
          </div>
          <h3 className="cta-title">Become a Seller</h3>
          <p className="cta-description">
            Start selling your agricultural products on MyAgro
          </p>
          
          <button className="cta-button" onClick={handleBecomeSeller}>Get Started</button>
          
        </div>
      </nav>
    </aside>
  );
}

export default ProfileSidebar;
