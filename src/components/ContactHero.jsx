import React from 'react';
import './ContactHero.css';

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
              src="/images/contact-page/electric-support-contact.WEBP"
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
