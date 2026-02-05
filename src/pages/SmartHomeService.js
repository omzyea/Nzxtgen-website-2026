import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SmartHomeDescription from '../components/SmartHomeDescription';
import SmartHomeContent from '../components/SmartHomeContent';

const SmartHomeService = () => {
  return (
    <div id='SmartHomeService'>
      <SEO 
        title="Smart Home Solutions | NZXTGEN"
        description="NZXTGEN delivers smart home installation services that focus on practicality, reliability, and ease of use for homes and businesses."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/services/smart-home' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <SmartHomeDescription/>
      <SmartHomeContent/>
      <Footer/>
    </div>
  );
};

export default SmartHomeService;
