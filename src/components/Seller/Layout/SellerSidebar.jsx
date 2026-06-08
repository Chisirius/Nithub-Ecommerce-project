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



const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'products', label: 'Products', icon: Package },
  { id: 'add-product', label: 'Add Product', icon: PlusCircle },
  { id: 'orders', label: 'Orders', icon: ShoppingBag },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'wallet', label: 'Wallet', icon: Wallet },
  { id: 'reviews', label: 'Reviews', icon: Star },
  { id: 'inventory', label: 'Inventory', icon: Archive },
];

const bottomItems = [
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'logout', label: 'Logout', icon: LogOut },
];

function SellerSidebar({ activePage, onPageChange, collapsed = false }) {
  return (
    <aside className={`seller-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">🌾</div>
          {!collapsed && <span className="logo-text">MyAgro Seller</span>}
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

        <ul className="sidebar-menu sidebar-bottom">
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
        </ul>
      </nav>

      {!collapsed && (
        <div className="seller-profile-card">
          <div className="profile-avatar">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="Seller"
            />
          </div>
          <div className="profile-info">
            <p className="profile-name">Green Farm Co.</p>
            <p className="profile-email">greenfarm@myagro.com</p>
          </div>
        </div>
      )}
    </aside>
  );
}

export default SellerSidebar;
