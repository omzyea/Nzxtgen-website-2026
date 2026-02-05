import React from 'react';
import './ContactForm.css';
import { trackFormSubmission } from '../utils/analytics';

const ContactForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    trackFormSubmission('contact', 'contact_form');
    // Form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
  };

  return (
    <section className="contact-form-section">
      <div className="contact-form-wrapper">
        <div className="contact-form-container">
          <h3 className="form-title">Get In Touch</h3>
          <p className="form-description">
            Please fill out the form below, and we'll get back to you as soon as possible.
          </p>

          <form className="modern-contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" name="firstName" required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
