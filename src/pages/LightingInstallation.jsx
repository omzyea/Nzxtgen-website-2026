import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import LightingServiceDescription from '../components/LightingServiceDescription';
import LightingServiceContent from '../components/LightingServiceContent';

const LightingInstallation = () => {
  return (
    <div id='LightingInstallation'>
      <SEO 
        title="Lighting Installation for Homes & Businesses | NZXTGEN"
        description="Professional lighting installation for homes and small businesses. Indoor, outdoor, sensor and smart lighting installed safely by NZXTGEN."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/lighting-installation' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <LightingServiceDescription/>
      <LightingServiceContent/>
      <Footer/>
    </div>
  );
};

export default LightingInstallation;
