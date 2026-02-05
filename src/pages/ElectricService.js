import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ElectricServiceDescription from '../components/ElectricServiceDescription';
import ElectricServiceContent from '../components/ElectricServiceContent';

const ElectricService = () => {
  return (
    <div id='ElectricService'>
      <SEO 
        title="Electrical Services for Homes & Businesses | NZXTGEN"
        description="NZXTGEN provides reliable electrical services including lighting, switchboards, fault finding, smoke alarms and EV chargers for homes and small businesses."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/services/electrical-services' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <ElectricServiceDescription/>
      <ElectricServiceContent/>
      <Footer/>
    </div>
  );
};

export default ElectricService;
