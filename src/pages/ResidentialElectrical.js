import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ComingSoon from '../components/ComingSoon';

const ResidentialElectrical = () => {
  return (
    <div id='ResidentialElectrical'>
      <SEO 
        title="Residential Electrical Services | NZXTGEN"
        description="Professional residential electrical services for homes. Licensed electricians providing safe and reliable electrical solutions."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/residential-electrical' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <ComingSoon 
        title="Residential Electrical Services"
        description="We are currently building comprehensive information about our residential electrical services. This page will include details about home electrical installations, upgrades, and maintenance services."
      />
      <Footer/>
    </div>
  );
};

export default ResidentialElectrical;
