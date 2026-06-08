import React, { useState } from 'react';
import { Save, Bell, ArrowLeft } from 'lucide-react';
import './Newsletter.css';



function NewsletterPreferencesPage({ onBack }) {
  const [preferences, setPreferences] = useState({
    agreeToPolicy: false,
    subscription: 'subscribe', // 'subscribe' or 'unsubscribe'
  });

  const handleCheckboxChange = (e) => {
    setPreferences((prev) => ({
      ...prev,
      agreeToPolicy: e.target.checked,
    }));
  };

  const handleSubscriptionChange = (value) => {
    setPreferences((prev) => ({
      ...prev,
      subscription: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter preferences saved:', preferences);
    // Show success message or redirect
  };

  return (
    <div className="newsletter-preferences-page" >
      <div className="page-header">
        {onBack && (
          <button className="back-button" onClick={onBack}>
            <ArrowLeft size={20} />
            <span>Back</span>
          </button>
        )}
        <div>
          <h1 className="page-title">Newsletter Preferences</h1>
          <p className="page-subtitle">Define your preferences</p>
        </div>
      </div>

      <div className="newsletter-form-container">
        <div className="newsletter-intro">
          <div className="intro-icon">
            <Bell size={32} />
          </div>
          <p className="intro-text">
            Subscribe to our newsletter to get updates on our latest offers. You can unsubscribe at any time as described in our Privacy Policy.
          </p>
          <p className="intro-note">
            To subscribe to our newsletter, you must first read and agree to MyAgro's <strong>Privacy Policy</strong> and <strong>Cookie Notice</strong>.
          </p>
        </div>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          {/* Privacy Policy Agreement */}
          <div className="form-section">
            <h3 className="section-title">Privacy Agreement</h3>
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={preferences.agreeToPolicy}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span className="checkbox-text">
                I agree to MyAgro's <a href="#privacy" className="policy-link">Privacy and Cookie Policy</a>.
              </span>
            </label>
          </div>

          {/* Subscription Preference */}
          <div className="form-section">
            <h3 className="section-title">Communication Subscription</h3>
            <div className="radio-group">
              <label className="radio-label">
                <input
                  type="radio"
                  name="subscription"
                  value="subscribe"
                  checked={preferences.subscription === 'subscribe'}
                  onChange={(e) => handleSubscriptionChange(e.target.value)}
                  className="form-radio"
                  disabled={!preferences.agreeToPolicy}
                />
                <div className="radio-content">
                  <span className="radio-title">I want to receive daily newsletters</span>
                  <span className="radio-description">
                    Get the latest updates, offers, and news delivered to your inbox daily
                  </span>
                </div>
              </label>

              <label className="radio-label">
                <input
                  type="radio"
                  name="subscription"
                  value="unsubscribe"
                  checked={preferences.subscription === 'unsubscribe'}
                  onChange={(e) => handleSubscriptionChange(e.target.value)}
                  className="form-radio"
                  disabled={!preferences.agreeToPolicy}
                />
                <div className="radio-content">
                  <span className="radio-title">I don't want to receive daily newsletters</span>
                  <span className="radio-description">
                    You'll only receive important account-related emails
                  </span>
                </div>
              </label>
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="save-preferences-button"
            disabled={!preferences.agreeToPolicy}
          >
            <Save size={18} />
            <span>Save Preferences</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewsletterPreferencesPage;
