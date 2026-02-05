import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SMDescription from '../components/SMDescription';
import SMServices from '../components/SMServices';

const SmartHome = () => {
  return (
    <div id='SmartHome'>
      <SEO 
        title="Smart Home Installation & Automation Systems | NZXTGEN"
        description="Professional smart home installation and automation systems for homes and businesses. Integrated control, scheduling and reliability by NZXTGEN."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/smart-home' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <SMDescription/>
      <SMServices/>
      <Footer/>
    </div>
  );
};

export default SmartHome;
