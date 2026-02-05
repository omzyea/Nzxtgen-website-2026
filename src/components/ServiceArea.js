import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceArea.css';

const ServiceArea = () => {
  return (
    <div className="service-area-section">
      <div className="service-area-container">
        <h1 className="service-area-title">Areas We Service</h1>
        <p className="service-area-subtitle">We service all of Sydney!</p>
        <p className="service-area-text">
          We service Condell Park and surrounding areas across Sydney's south-west, supporting homeowners, renovators, landlords and small businesses with dependable <Link to="/our-services">electrical and technology services</Link>. Our services include <Link to="/our-services">electrical installations</Link>, <Link to="/smart-home">smart home automation</Link>, <Link to="/our-services">security systems</Link>, and <Link to="/switchboard-upgrade">switchboard upgrades</Link>.
        </p>
        <div className="service-area-cta-buttons">
          <Link to="/free-quote" className="cta-button-primary">
            Book Now
          </Link>
          <Link to="/contact-us" className="cta-button-secondary">
            PROMPT RESPONSE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceArea;
