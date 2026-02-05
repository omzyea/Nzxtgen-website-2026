import React from 'react';
import './ComingSoon.css';

const ComingSoon = ({ title, description }) => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-content">
        <div className="coming-soon-icon">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
        </div>
        <h1 className="coming-soon-title">{title || 'Coming Soon'}</h1>
        <p className="coming-soon-description">
          {description || 'We are working hard to bring you this content. Please check back soon!'}
        </p>
        <div className="coming-soon-actions">
          <a href="/" className="coming-soon-button">Go to Homepage</a>
          <a href="/contact-us" className="coming-soon-button secondary">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
