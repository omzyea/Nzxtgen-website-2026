import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SecurityServiceDescription from '../components/SecurityServiceDescription';
import SecurityServiceContent from '../components/SecurityServiceContent';

const SecuritySystemsService = () => {
  return (
    <div id='SecuritySystemsService'>
      <SEO 
        title="Security Systems Installation | NZXTGEN"
        description="Professional security system installation including CCTV, alarms, access control and intercoms. Reliable protection for homes and businesses by NZXTGEN."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/services/security-systems' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <SecurityServiceDescription/>
      <SecurityServiceContent/>
      <Footer/>
    </div>
  );
};

export default SecuritySystemsService;
