import React, { useState } from 'react';
import { User, Mail, MapPin, Edit2, CreditCard, Bell } from 'lucide-react';
import './AccountOverview.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/AuthContext';
import { useAddress } from '../../../hooks/AddressContext';

function AccountOverview() {
 const {user} =useAuth()

 const { addresses } = useAddress();

 const defaultAddress = addresses.find(a => a.isDefault) || addresses[0];
  const navigate = useNavigate();

  return (
    <div className="account-overview">
      <div className="overview-header">
        <h1 className="overview-title">Account Overview</h1>
        <p className="overview-subtitle">Manage your account information and preferences</p>
      </div>

      {/* Account Details Section */}
      <div className="overview-section">
        <div className="section-header">
          <div className="section-title-wrapper">
            <User size={20} className="section-icon" />
            <h2 className="section-title">Account Details</h2>
          </div>
        </div>
        <div className="section-content">
          <div className="info-row">
            <span className="info-label">Name</span>
            <span className="info-value">{user?.name}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Email</span>
            <span className="info-value">{user?.email}</span>
          </div>
        </div>
      </div>

      {/* Address Book Section */}
      <div className="overview-section">
        <div className="section-header">
          <div className="section-title-wrapper">
            <MapPin size={20} className="section-icon" />
            <h2 className="section-title">Address Book</h2>
          </div>
          <NavLink to= "/addressBook">
          <button
            className="edit-button"
          >
            <Edit2 size={16} />
            <span>Edit</span>
          </button>
          </NavLink>

          

        </div>
        <div className="section-content">
          <div className="address-display">
          {defaultAddress ? (
  <>
    <p className="address-line">
      {defaultAddress.street}
    </p>

    <p className="address-line">
      {defaultAddress.city}, {defaultAddress.region}
    </p>

    <p className="address-phone">
      {defaultAddress.phoneNumber}
    </p>
  </>
) : (
  <p>No address found</p>
)}
          </div>
        </div>
      </div>

      {/* MyAgro Store Credit Section */}
      <div className="overview-section credit-section">
        <div className="section-header">
          <div className="section-title-wrapper">
            <CreditCard size={20} className="section-icon" />
            <h2 className="section-title">MyAgro Store Credit</h2>
          </div>
        </div>
        <div className="section-content">
          <div className="credit-display">
            <div className="credit-amount">0</div>
            <p className="credit-description">Available store credit for your next purchase</p>
          </div>
        </div>
      </div>

      {/* Newsletter Preferences Section */}
      <div className="overview-section">
        <div className="section-header">
          <div className="section-title-wrapper">
            <Bell size={20} className="section-icon" />
            <h2 className="section-title">Newsletter Preferences</h2>
          </div>
        </div>
        <div className="section-content">
          <p className="newsletter-description">
            Manage your email communications to stay updated with the latest news and offers.
          </p>
          <NavLink
            to= "/newsletter"
            className="newsletter-link"
          >
            Edit Newsletter Preferences →
          </NavLink>
        </div>
      </div>


    </div>
  );
}

export default AccountOverview;
