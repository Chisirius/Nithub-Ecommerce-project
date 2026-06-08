import React, { useState } from 'react';
import SellerSidebar from './SellerSidebar';
import SellerTopNav from './SellerTopNav';
import './SellerLayout.css';



function SellerLayout({ children, activePage, onPageChange }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleAddProduct = () => {
    onPageChange('add-product');
  };

  const handleMenuToggle = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="seller-layout">
      <SellerSidebar
        activePage={activePage}
        onPageChange={onPageChange}
        collapsed={sidebarCollapsed}
      />
      <div className={`seller-main ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        <SellerTopNav
          onAddProduct={handleAddProduct}
          onMenuToggle={handleMenuToggle}
        />
        <main className="seller-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default SellerLayout;
