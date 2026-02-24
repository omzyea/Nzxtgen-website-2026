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
              srcSet="/images/contact-page/nzxtgen-electrical-support-contact-mobile.webp"
            />
            <img
              src="/images/contact-page/nzxtgen-electrical-support-contact.webp"
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
