import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import DesWithTitle from '../components/DesWithTitle';
import "./OurServices.css";
import ResponsiveCardSlider from '../components/ResponsiveCardSlider';

const OurServices = () => {
  return (
    <div id='OurServices'>
      <SEO 
        title="Electrical, Smart Home & Security Services | NZXTGEN"
        description="Explore NZXTGEN's electrical, smart home, security, data and entertainment services for residential and small business properties."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/our-signature-services' : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <div id="space"></div>
      <DesWithTitle 
        title="Our Services" 
        description="At NZXTGEN, we specialize in delivering innovative electrical solutions tailored to your unique needs. Whether you're looking for smart home installations, custom lighting designs, or expert electrical maintenance, our team is committed to providing high-quality, reliable services. With a focus on both functionality and style, we ensure every project meets the highest standards, transforming your space with precision and care. We service Condell Park and surrounding areas across Sydney's south-west."
      />
      <ResponsiveCardSlider/>
      
     
      <Footer/>
    </div>
  );
};

export default OurServices;
