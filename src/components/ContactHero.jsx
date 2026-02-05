import React from 'react';
import './ContactHero.css';
import heroImage from '../assets/contact-page/electric-support-contact.WEBP';
import heroImageMobile from '../assets/contact-page/electric-contact-mobile.png';

const ContactHero = () => {
  return (
    <section className="contact-hero-section">
      <div className="contact-hero-image-wrapper">
        <div className="contact-hero-image-inner">
          <picture>
            <source
              media="(max-width: 768px)"
              srcSet={heroImageMobile}
            />
            <img
              src={heroImage}
              alt="NXTGEN Electrical - Contact us"
              className="contact-hero-image"
            />
          </picture>
          <div className="contact-hero-overlay" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
