import React from 'react';
import './ProfileLayout.css';
import ProfileSidebar from './profileSidebar';


function ProfileLayout({ children, activePage, onPageChange }) {
  return (
    <div className="profile-layout">
      <div className="profile-container">
        <ProfileSidebar activePage={activePage} onPageChange={onPageChange} />
        <main className="profile-main-content">
          {children}
        </main>
      </div>
    </div>
  );
}

export default ProfileLayout;
