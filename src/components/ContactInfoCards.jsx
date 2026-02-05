import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { trackPhoneCall } from '../utils/analytics';
import './ContactInfoCards.css';

const ContactInfoCards = () => {

  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        <div className="contact-info-grid">
          <div className="contact-info-card">
            <div className="contact-info-icon phone">
              <FaPhone />
            </div>
            <h3>Call Us</h3>
            <p>Speak directly with our team</p>
            <a 
              href="tel:+61437885910" 
              className="contact-info-link"
              onClick={() => trackPhoneCall('+61437885910', 'contact_page')}
            >
              0437 885 910
            </a>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon email">
              <FaEnvelope />
            </div>
            <h3>Email Us</h3>
            <p>Send us a message anytime</p>
            <a href="mailto:info@nzxtgen.com.au" className="contact-info-link">
              info@nzxtgen.com.au
            </a>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon location">
              <FaMapMarkerAlt />
            </div>
            <h3>Location</h3>
            <p>Based in Condell Park</p>
            <p className="contact-info-address">Condell Park, NSW 2200, Australia</p>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon hours">
              <FaClock />
            </div>
            <h3>Business Hours</h3>
            <p>When we're available</p>
            <div className="contact-info-hours">
              <p>Mon–Fri: 9:00 AM – 5:00 PM</p>
              <p>Sat: 10:00 AM – 2:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>
        </div>

        <div className="contact-cta-box">
          <h3>Ready to Get Started?</h3>
          <p>Request a free quote for your project today</p>
          <Link to="/free-quote" className="cta-button-primary">
            Request Free Quote →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
