import React from 'react';
import {Edit2, Star, Trash2} from 'lucide-react';
import {reviews} from '../data/mockProfileData';
import './ReviewPage.css';

function ReviewsPage() {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        fill={i < rating ? '#FBBF24' : 'none'}
        stroke={i < rating ? '#FBBF24' : '#D1D5DB'}
      />
    ));
  };

  return (
    <div className="reviews-page">
      <div className="page-header">
        <h1 className="page-title">My Reviews</h1>
        <p className="page-subtitle">Manage your product reviews</p>
      </div>

      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <div className="review-product">
              <img src={review.productImage} alt={review.productName} />
              <div className="product-info">
                <h3 className="product-name">{review.productName}</h3>
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
                <span className="review-date">{review.date}</span>
              </div>
            </div>

            <div className="review-content">
              <p className="review-text">{review.reviewText}</p>
              <span className={`review-status status-${review.status}`}>
                {review.status}
              </span>
            </div>

            <div className="review-actions">
              <button className="review-action-btn edit">
                <Edit2 size={16} />
                <span>Edit</span>
              </button>
              <button className="review-action-btn delete">
                <Trash2 size={16} />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewsPage;
