import React from 'react';
import {CheckCircle, Copy, Ticket} from 'lucide-react';
import {vouchers} from '../data/mockProfileData';
import './Vouchers.css';

function VouchersPage() {
  return (
    <div className="vouchers-page">
      <div className="page-header">
        <h1 className="page-title">My Vouchers</h1>
        <p className="page-subtitle">Save more with exclusive discounts</p>
      </div>

      {/* Voucher Input */}
      <div className="voucher-input-card">
        <h3 className="input-title">Have a voucher code?</h3>
        <div className="voucher-input-group">
          <input
            type="text"
            placeholder="Enter voucher code"
            className="voucher-input"
          />
          <button className="apply-btn">Apply</button>
        </div>
      </div>

      {/* Vouchers Grid */}
      <div className="vouchers-grid">
        {vouchers.map((voucher) => (
          <div
            key={voucher.id}
            className={`voucher-card ${voucher.used ? 'used' : ''}`}
          >
            <div className="voucher-header">
              <div className="voucher-icon">
                <Ticket size={32} />
              </div>
              <span className="voucher-discount">{voucher.discount}</span>
            </div>

            <div className="voucher-body">
              <h3 className="voucher-title">{voucher.title}</h3>
              <p className="voucher-min">Min. purchase: ${voucher.minPurchase}</p>
            </div>

            <div className="voucher-footer">
              <div className="voucher-code-section">
                <span className="code-label">Code:</span>
                <span className="code-value">{voucher.code}</span>
                <button className="copy-btn">
                  <Copy size={16} />
                </button>
              </div>
              <span className="expiry-date">Expires: {voucher.expiryDate}</span>
            </div>

            {voucher.used && (
              <div className="used-overlay">
                <CheckCircle size={48} />
                <span>Used</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default VouchersPage;
