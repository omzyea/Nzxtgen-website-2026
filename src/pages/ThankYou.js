import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import WhatsappChat from "../components/WhatsappChat";
import MobileCallButton from "../components/MobileCallButton";
import { trackCustomEvent } from "../utils/analytics";
import "./ThankYou.css";

const formMessages = {
  quote: {
    title: "Quote Request Received",
    message: "We've received your quote request and will review the details shortly. A member of our team will be in touch with you soon.",
  },
  enquiry: {
    title: "Enquiry Submitted",
    message: "Thanks for your enquiry. We've received your details and will get back to you shortly with your $50 discount offer.",
  },
  contact: {
    title: "Message Received",
    message: "We've received your message and will respond as soon as possible.",
  },
};

const ThankYou = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const formType = params.get("form") || "contact";
  const content = formMessages[formType] || formMessages.contact;

  useEffect(() => {
    window.scrollTo(0, 0);

    // Push form-specific dataLayer events for GTM
    const eventMap = {
      contact: 'contact_form_submission',
      quote: 'online_quote_submission',
      enquiry: '50off_form_submission'
    };

    const eventName = eventMap[formType];
    if (eventName) {
      trackCustomEvent(eventName, {
        event_category: 'Lead',
        form_type: formType
      });
    }
  }, [formType]);

  return (
    <div id="ThankYouPage" className="thankyou-page">
      <SEO
        title="Thank You | NZXTGEN"
        description="Thank you for contacting NZXTGEN. We will be in touch shortly."
        canonical={typeof window !== "undefined" ? window.location.origin + "/thank-you" : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="thankyou-content">
        <div className="thankyou-card">
          <div className="thankyou-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="30" stroke="#667eea" strokeWidth="3" fill="none" />
              <path d="M20 33L28 41L44 23" stroke="#667eea" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 className="thankyou-title">Thank You</h1>
          <h2 className="thankyou-subtitle">{content.title}</h2>
          <p className="thankyou-message">{content.message}</p>

          <div className="thankyou-contact">
            <p className="thankyou-contact-label">Need immediate assistance?</p>
            <div className="thankyou-actions">
              <a href="tel:0437885910" className="thankyou-btn thankyou-btn-phone">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                0437 885 910
              </a>
              <a
                href="https://wa.me/61437885910?text=Hi%20NZXTGEN%2C%20I%20just%20submitted%20a%20form%20and%20wanted%20to%20follow%20up."
                className="thankyou-btn thankyou-btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="thankyou-nav">
            <Link to="/" className="thankyou-link">Back to Home</Link>
            <Link to="/our-signature-services" className="thankyou-link">View Our Services</Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
