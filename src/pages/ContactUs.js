import React from "react";
import WhatsappChat from "../components/WhatsappChat";
import MobileCallButton from "../components/MobileCallButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import ContactHero from "../components/ContactHero";
import ContactInfoCards from "../components/ContactInfoCards";
import ContactForm from "../components/ContactForm";
import ContactMap from "../components/ContactMap";

const ContactUs = () => {
  return (
    <div id="ContactUs">
      <SEO 
        title="Contact NZXTGEN | Electrical & Smart Home Services"
        description="Contact NZXTGEN to discuss your electrical, smart home or security needs. Licensed, reliable service with free online quotes."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/contact-us' : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />
      <ContactHero />
      <ContactInfoCards />
      <ContactForm />
      <ContactMap />
      <Footer />
    </div>
  );
};

export default ContactUs;
