import React from 'react';
import {
  LayoutDashboard,
  Package,
  PlusCircle,
  ShoppingBag,
  Users,
  BarChart3,
  Wallet,
  Star,
  Archive,
  Settings,
  LogOut,
  ChevronRight,
} from 'lucide-react';
import './SellerSidebar.css';
import { useAuth } from '../../../hooks/AuthContext';



const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'add-product', label: 'Add Product', icon: PlusCircle },
  { id: 'orders', label: 'Orders', icon: ShoppingBag },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'wallet', label: 'Wallet', icon: Wallet },
  { id: 'inventory', label: 'Inventory', icon: Archive },
];

// const bottomItems = [
//   { id: 'settings', label: 'Settings', icon: Settings },
//   { id: 'logout', label: 'Logout', icon: LogOut },
// ];

function SellerSidebar({ activePage, onPageChange, collapsed = false }) {
  const {user} = useAuth()
  return (
    <aside className= 'seller-sidebar' >
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">🌿</div>
           <span className="logo-text">AgroMak Seller</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  className={`sidebar-item ${activePage === item.id ? 'active' : ''}`}
                  onClick={() => onPageChange(item.id)}
                >
                  <Icon size={20} className="sidebar-icon" />
                  {!collapsed && <span className="sidebar-label">{item.label}</span>}
                  {!collapsed && activePage === item.id && (
                    <ChevronRight size={16} className="sidebar-arrow" />
                  )}
                </button>
              </li>
            );
          })}
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
