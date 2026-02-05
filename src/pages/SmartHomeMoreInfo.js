import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SmartHomeMoreInfoDescription from '../components/SmartHomeMoreInfoDescription';
import SmartHomeMoreInfoContent from '../components/SmartHomeMoreInfoContent';

const SmartHomeMoreInfo = () => {
  return (
    <div id='SmartHomeMoreInfo'>
      <SEO 
        title="Smart Home Installation - More Info | NZXTGEN"
        description="Detailed information about smart home installation, automation systems, local and cloud-based solutions, and FAQs by NZXTGEN."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/smart-home-more-info' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <SmartHomeMoreInfoDescription/>
      <SmartHomeMoreInfoContent/>
      <Footer/>
    </div>
  );
};

export default SmartHomeMoreInfo;
