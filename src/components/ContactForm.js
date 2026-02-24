import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';
import { sendAdminNotification } from '../utils/whatsappService';
import { trackFormSubmission } from '../utils/analytics';
import './ContactForm.css';

const ContactForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const formData = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      await addDoc(collection(db, 'contact_submissions'), {
        ...formData,
        timestamp: new Date(),
        status: 'unread',
        source: 'Contact Form',
        type: 'contact',
      });

      setTimeout(() => {
        sendAdminNotification(formData, 'contact');
      }, 1000);

      trackFormSubmission('contact', 'contact_form');

      navigate("/thank-you?form=contact", {
        state: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
        }
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      setIsSubmitting(false);
    }
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

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
