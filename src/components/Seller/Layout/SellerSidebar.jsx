import React from 'react';
import {
    Archive,
    PlusCircle,
    Wallet,
} from 'lucide-react';
import './SellerSidebar.css';
import {useAuth} from '../../../hooks/AuthContext';
import { useRef } from 'react';
import { useEffect } from 'react';


const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: "🏠" },
  { id: 'products', label: 'Products', icon: '📦' },
  { id: 'add-product', label: 'Add Product', icon: PlusCircle },
  { id: 'orders', label: 'Orders', icon: '🛒' },
  { id: 'analytics', label: 'Analytics', icon: '📊' },
  { id: 'wallet', label: 'Wallet', icon: Wallet },
  { id: 'inventory', label: 'Inventory', icon: Archive },
];

// const bottomItems = [
//   { id: 'settings', label: 'Settings', icon: Settings },
//   { id: 'logout', label: 'Logout', icon: LogOut },
// ];

function SellerSidebar({ activePage, onPageChange, collapsed = false, onClose}) {
  const {user} = useAuth()
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (!collapsed) return;
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e)) {
        onClose?.();
      }
    };
    // Delay so the toggle click doesn't immediately close it
    const timer = setTimeout(() => document.addEventListener('mousedown', handleClick), 0);
    return () => {
      clearTimeout(timer);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [collapsed, onClose]);

  const handleItemClick = (id) => {
    onPageChange(id);
    onClose?.();
  };
  
  const NavItems = ({ items }) => (
    <>
      {items.map((item) => {
        const Icon = item.icon;
  
        return (
          <li key={item.id}>
            <button
              className={`sidebar-item ${
                activePage === item.id ? 'active' : ''
              }`}
              onClick={() => handleItemClick(item.id)}
            >
              <span className="sidebar-icon">
                {typeof Icon === "string" ? (
                  Icon
                ) : (
                  <Icon size={20} />
                )}
              </span>
  
              <span className="sidebar-label">
                {item.label}
              </span>
            </button>
          </li>
        );
      })}
    </>
  );

   
  
  
  // Dropdown mode (shown when sidebar is collapsed)
  if (collapsed) {
    return (
      <div className="seller-dropdown" ref={dropdownRef}>
        <div className="seller-dropdown-inner">
          <div className="dropdown-profile-card">
            <div className="profile-avatar">
              <img src="https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Seller" />
            </div>
            <div className="profile-info">
              <p className="profile-name">{user?.name}</p>
              <p className="profile-email">{user?.email}</p>
            </div>
          </div>
          <ul className="sidebar-menu">
            <NavItems items={menuItems} />
          </ul>
          <div className="sidebar-divider" />
        </div>
      </div>
    );
  }

  // Full sidebar mode
  return (
    <aside className= 'seller-sidebar' >
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">🌿</div>
           <span className="web-name">AgroMak Seller</span>
        </div>
      </div>

      <nav className="sidebar-nav">
      <ul className="sidebar-menu">
          <NavItems items={menuItems} />
        </ul>

        <div className="sidebar-divider"></div>

        {/* <ul className="sidebar-menu sidebar-bottom">
          {bottomItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  className={`sidebar-item ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => onPageChange(item.id)}
                >
                  <Icon size={20} className="sidebar-icon" />
                  {!collapsed && <span className="sidebar-label">{item.label}</span>}
                </button>
              </li>
            );
          })}
        </ul> */}
      </nav>

      {!collapsed && (
        <div className="seller-profile-card">
          <div className="profile-avatar">
            <img
              src="https://images.unsplash.com/photo-1740252117044-2af197eea287?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Seller"
            />
          </div>
          <div className="profile-info">
            <p className="profile-name">{user?.name}</p>
            <p className="profile-email">{user?.email}</p>
          </div>
        </div>
      )}
    </aside>
  );
}

export default SellerSidebar;
