import React, {useState} from 'react';
import SellerSidebar from './SellerSidebar';
import './SellerLayout.css';
import { useEffect } from 'react';


function SellerLayout({ children, activePage, onPageChange }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);


  // Auto-close dropdown when screen grows past the mobile breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const handleChange = (e) => {
      if (e.matches) setDropdownOpen(false);
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const handleMenuToggle = () => {
    setDropdownOpen((prev) => !prev);
  };


  const handleClose = () => setDropdownOpen(false);

  return (
    <div className="seller-layout">
      {/* Full sidebar — always visible on large screens */}
      <div className="seller-sidebar-desktop">
      <SellerSidebar
        activePage={activePage}
        onPageChange={onPageChange}
        collapsed={false}
      />
      </div>

      <button
        className={`sidebar-toggle-btn ${dropdownOpen ? 'open' : ''}`}
        onClick={handleMenuToggle}
        aria-label="Toggle menu"
      >
        <span className="toggle-bar" />
        <span className="toggle-bar" />
        <span className="toggle-bar" />
      </button>

      {/* Dropdown sidebar — shown on small screens when open */}
      {dropdownOpen && (
        <SellerSidebar
          activePage={activePage}
          onPageChange={(page) => {
            onPageChange(page);
            handleClose();
          }}
          collapsed={true}
          onClose={handleClose}
        />
      )}
        
        <main className="seller-main seller-content">
          {children}
        </main>
    </div>
  );
}

export default SellerLayout;
