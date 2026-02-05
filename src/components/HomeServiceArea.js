import React from 'react';
import { Link } from 'react-router-dom';
import './HomeServiceArea.css';

const ServiceArea = () => {
  return (
    <div className="home-service-area-section">
      <div className="home-service-area-container">
        <h2 className="home-service-area-title">Service Area</h2>
        <p className="home-service-area-text">
          We service Condell Park and surrounding areas across Sydney's south-west, supporting homeowners, renovators, landlords and small businesses with dependable electrical and technology services.
        </p>
        <div className="home-service-area-cta">
          <p className="home-cta-question">Ready to get started?</p>
          <Link to="/free-quote" className="home-cta-button">
            👉 Get your free online quote today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
