import React from "react";
import "./Footer.css";
import { trackPhoneCall, trackWhatsAppClick } from "../utils/analytics";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Row: Social Media */}
      <div className="footer-top">
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </div>

      {/* Bottom Row: 5 Columns */}
      <div className="footer-bottom">
        {/* Column 1: Contact Info */}
        <div className="footer-column">
          <h3>Contact Info</h3>
          <p><FaMapMarkerAlt /> Condell Park, NSW 2200, Australia</p>
          <p><strong>Business Hours:</strong></p>
          <p>Mon–Fri: 9:00 AM – 5:00 PM</p>
          <p>Sat: 10:00 AM – 2:00 PM</p>
          <p>Sun: Closed</p>
        </div>

        {/* Column 2: Get in Touch */}
        <div className="footer-column">
          <h3>Get in Touch</h3>
          <a href="/free-quote">Online Quote</a>
          <a href="/contact-us">Contact Us Now</a>
          <a href="tel:+61437885910" onClick={() => trackPhoneCall('+61437885910', 'footer')}>Call: 0437 885 910</a>
          <a href="https://wa.me/61437885910" target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('61437885910')}>Live Chat</a>
          <p className="footer-note">
            Have a question or ready to get started? Reach out anytime using the buttons above!
          </p>
        </div>

        {/* Column 3: Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms & Conditions</a>
          <a href="/compliance-licence">Compliance & Licence</a>
          <a href="/emergency-electrician">Emergency Electrician</a>
          <a href="/electrical-fault-finding-repairs">Electrical Fault Finding & Repairs</a>
        </div>

        {/* Column 4: Service Areas */}
        <div className="footer-column">
          <h3>Service Areas</h3>
          <a href="/areas-we-service">Areas We Service</a>
          <a href="/electrician-padstow">Padstow</a>
          <a href="/electrician-condell-park">Condell Park</a>
          <a href="/electrician-bankstown">Bankstown</a>
          <a href="/electrician-revesby">Revesby</a>
          <a href="/electrician-canterbury">Canterbury</a>
          <a href="/electrician-earlwood">Earlwood</a>
          <a href="/electrician-panania">Panania</a>
          <a href="/electrician-strathfield">Strathfield</a>
        </div>

        {/* Column 5: Large Logo */}
        <div className="footer-column footer-logo-large">
          <img src="/images/site-logo.png" alt="NZXTGEN Electrical and Smart Home Services Logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
