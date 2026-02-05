import React from 'react';
import './ContactMap.css';

const ContactMap = () => {
  // Google Maps embed URL for Condell Park, NSW 2200, Australia
  // Using place name for better accuracy
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.1!2d151.0125!3d-33.9244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b1d4b8b8b8b9%3A0x0!2sCondell%20Park%20NSW%202200!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau";

  return (
    <div className="contact-map-section">
      <div className="contact-map-container">
        <h2 className="contact-map-title">Find Us</h2>
        <p className="contact-map-subtitle">Located in Condell Park, serving Sydney's South-West</p>
        <div className="map-wrapper">
          <iframe
            src={mapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="NZXTGEN Location - Condell Park, NSW"
          ></iframe>
        </div>
        <div className="map-address">
          <p><strong>Address:</strong> Condell Park, NSW 2200, Australia</p>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
