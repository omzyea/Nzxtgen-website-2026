import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import ServicesData from '../components/ServicesData';
import './ServicesDirectory.css';

const ServicesDirectory = () => {
  return (
    <div id="ServicesDirectory">
      <SEO 
        title="Electrical, Smart Home & Security Services | NZXTGEN"
        description="Explore NZXTGEN's electrical, smart home, security, data and entertainment services for residential and small business properties."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/services' : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />
      
      <ServicesData />
      <Footer />
    </div>
  );
};

export default ServicesDirectory;
