import React, {useState} from 'react';
import {Bell, Lock, Package, Save, Upload} from 'lucide-react';
import './Settings.css';

function SettingsPage() {
  const [settings, setSettings] = useState({
    storeName: 'Green Farm Co.',
    email: 'greenfarm@myagro.com',
    phone: '+1 (555) 123-4567',
    description: 'Premium organic farm products delivered fresh to your door',
    address: '123 Farm Road, Agricultural Valley, CA 95123',
    emailNotifications: true,
    orderNotifications: true,
    marketingEmails: false,
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSettings((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="settings-page">
      <div className="settings-header">
        <div>
          <h1 className="page-title">Settings</h1>
          <p className="page-subtitle">Manage your store settings and preferences</p>
        </div>
      </div>

      <div className="settings-grid">
        {/* Store Profile */}
        <div className="settings-section">
          <div className="section-header">
            <Package size={20} />
            <h3 className="section-title">Store Profile</h3>
          </div>
          <div className="section-content">
            <div className="form-group">
              <label className="form-label">Store Logo</label>
              <div className="logo-upload">
                <div className="current-logo">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                    alt="Store Logo"
                  />
                </div>
                <button className="upload-logo-btn">
                  <Upload size={16} />
                  <span>Change Logo</span>
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Store Name</label>
              <input
                type="text"
                name="storeName"
                value={settings.storeName}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Business Description</label>
              <textarea
                name="description"
                value={settings.description}
                onChange={handleInputChange}
                className="form-textarea"
                rows={4}
              ></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Store Address</label>
              <input
                type="text"
                name="address"
                value={settings.address}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="settings-section">
          <div className="section-header">
            <h3 className="section-title">Contact Information</h3>
          </div>
          <div className="section-content">
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={settings.email}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={settings.phone}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <button className="save-btn">
              <Save size={16} />
              <span>Save Changes</span>
            </button>
          </div>
        </div>

        {/* Security */}
        <div className="settings-section">
          <div className="section-header">
            <Lock size={20} />
            <h3 className="section-title">Security</h3>
          </div>
          <div className="section-content">
            <div className="form-group">
              <label className="form-label">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={settings.currentPassword}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter current password"
              />
            </div>

            <div className="form-group">
              <label className="form-label">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={settings.newPassword}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter new password"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={settings.confirmPassword}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Confirm new password"
              />
            </div>

            <button className="save-btn">
              <Lock size={16} />
              <span>Update Password</span>
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="settings-section">
          <div className="section-header">
            <Bell size={20} />
            <h3 className="section-title">Notifications</h3>
          </div>
          <div className="section-content">
            <div className="notification-item">
              <div>
                <p className="notification-title">Email Notifications</p>
                <p className="notification-desc">Receive email about your account activity</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={settings.emailNotifications}
                  onChange={handleCheckboxChange}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="notification-item">
              <div>
                <p className="notification-title">Order Notifications</p>
                <p className="notification-desc">Get notified when you receive new orders</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="orderNotifications"
                  checked={settings.orderNotifications}
                  onChange={handleCheckboxChange}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>

            <div className="notification-item">
              <div>
                <p className="notification-title">Marketing Emails</p>
                <p className="notification-desc">Receive emails about new features and offers</p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  name="marketingEmails"
                  checked={settings.marketingEmails}
                  onChange={handleCheckboxChange}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
