import React, {useState} from 'react';
import ProfileLayout from '../components/profile/layout/profileLayout';
import OrdersPage from '../pages/orders/OrderPage';
import VouchersPage from '../components/profile/vouchers/vouchers';
import WishlistPage from '../components/profile/wishlist/wishlist';
import ReviewsPage from '../components/profile/reviews/reviewPage';
import AddressBookPage from '../pages/AddressBook/AddressBook';
import AccountManagementPage from '../components/profile/settings/accountManager';
import AccountOverview from '../components/profile/account/accountOverview';

// Simple placeholder pages
const InboxPage = () => (
  <div style={{ background: 'white', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
    <h2>Inbox</h2>
    <p>Message center coming soon...</p>
  </div>
);

const FollowedSellersPage = () => (
  <div style={{ background: 'white', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
    <h2>Followed Sellers</h2>
    <p>Your followed sellers will appear here...</p>
  </div>
);

const RecentlyViewedPage = () => (
  <div style={{ background: 'white', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
    <h2>Recently Viewed</h2>
    <p>Your browsing history will appear here...</p>
  </div>
);

const RecentlySearchedPage = () => (
  <div style={{ background: 'white', borderRadius: '12px', padding: '40px', textAlign: 'center' }}>
    <h2>Recently Searched</h2>
    <p>Your search history will appear here...</p>
  </div>
);

export function ProfileDashboard() {
  const [activePage, setActivePage] = useState('AccountOverview');

  const renderPage = () => {
    switch (activePage) {
      case 'AccountOverview':
        return <AccountOverview />;
      case 'orders':
        return <OrdersPage />;
      case 'inbox':
        return <InboxPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'vouchers':
        return <VouchersPage />;
      case 'wishlist':
        return <WishlistPage />;
      case 'followed-sellers':
        return <FollowedSellersPage />;
      case 'recently-viewed':
        return <RecentlyViewedPage />;
      case 'recently-searched':
        return <RecentlySearchedPage />;
      case 'address-book':
        return <AddressBookPage />;
      case 'account-management':
        return <AccountManagementPage />;
      default:
        return <AccountOverview />;
    }
  };

  return (
    <ProfileLayout activePage={activePage} onPageChange={setActivePage}>
      {renderPage()}
    </ProfileLayout>
  );
}


