import React, { useState } from 'react';
import { Upload, Save, User } from 'lucide-react';
import './AccountManager.css';

function AccountManagementPage() {
  const { user } = useAuth();
  const { addresses } = useAddress();

  const defaultAddress = addresses.find(a => a.isDefault) || addresses[0];

  return (
    <div className="account-management-page">
      <div className="page-header">
        <h1 className="page-title">Account Management</h1>
        <p className="page-subtitle">Update your personal information</p>
      </div>

      <div className="account-form-container">
        {/* Profile Avatar */}
        <div className="avatar-section">
          <div className="current-avatar">
            <User size={48} />
          </div>
          <div className="avatar-info">
            <h3 className="avatar-title">Profile Picture</h3>
            <p className="avatar-subtitle">Upload a photo for your profile</p>
            <button className="upload-avatar-btn">
              <Upload size={16} />
              <span>Upload Photo</span>
            </button>
          </div>
        </div>

        {/* Profile Form */}
        <form className="profile-form">
          <div className="form-row">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                value={user.name}
                onChange={handleInputChange}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                value=''
                onChange={handleInputChange}
                className="form-input"
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label className="form-label">Gender</label>
              <select
                name="gender"
                value={profile.gender}
                onChange={handleInputChange}
                className="form-select"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>

          </div>

          <button type="submit" className="save-profile-btn">
            <Save size={18} />
            <span>Save Changes</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default AccountManagementPage;
