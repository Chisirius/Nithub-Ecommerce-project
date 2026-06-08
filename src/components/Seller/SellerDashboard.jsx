import React, { useState } from 'react';
import SellerLayout from './Layout/SellerLayout';
import Dashboard from './Dashboard/Dashboard';
import ProductsManagement from './Products/ProductManager';
import AddProduct from './Products/AddProduct';
import OrdersManagement from './Orders/Orders';
import WalletPage from './Wallet/Wallet';
import SettingsPage from './Settings/Settings';

function SellerDashboard() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'products':
        return <ProductsManagement />;
      case 'add-product':
        return <AddProduct />;
      case 'orders':
        return <OrdersManagement />;
      case 'wallet':
        return <WalletPage />;
      case 'settings':
        return <SettingsPage />;
      case 'customers':
        return (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Customers Page</h2>
            <p>Customer management coming soon...</p>
          </div>
        );
      case 'analytics':
        return (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Analytics Page</h2>
            <p>Advanced analytics coming soon...</p>
          </div>
        );
      case 'reviews':
        return (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Reviews Page</h2>
            <p>Review management coming soon...</p>
          </div>
        );
      case 'inventory':
        return (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Inventory Page</h2>
            <p>Inventory management coming soon...</p>
          </div>
        );
      case 'logout':
        return (
          <div style={{ padding: '40px', textAlign: 'center' }}>
            <h2>Logging Out...</h2>
            <p>Redirecting to login page...</p>
          </div>
        );
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <SellerLayout activePage={activePage} onPageChange={setActivePage}>
      {renderPage()}
    </SellerLayout>
  );
}

export default SellerDashboard;
