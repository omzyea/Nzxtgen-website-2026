import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import EntertainmentServiceDescription from '../components/EntertainmentServiceDescription';
import EntertainmentServiceContent from '../components/EntertainmentServiceContent';

const EntertainmentService = () => {
  return (
    <div id='EntertainmentService'>
      <SEO 
        title="Entertainment & Home Theatre Installation | NZXTGEN"
        description="Professional entertainment and home theatre installation including TV mounting, AV wiring and speaker setup. Clean, reliable solutions by NZXTGEN."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/services/entertainment-technology' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <EntertainmentServiceDescription/>
      <EntertainmentServiceContent/>
      <Footer/>
    </div>
  );
};

export default EntertainmentService;
