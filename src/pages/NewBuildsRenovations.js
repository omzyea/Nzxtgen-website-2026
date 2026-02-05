import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ComingSoon from '../components/ComingSoon';

const NewBuildsRenovations = () => {
  return (
    <div id='NewBuildsRenovations'>
      <SEO 
        title="New Builds, Renovations & Ongoing Works | NZXTGEN"
        description="Professional electrical services for new builds, renovations, and ongoing construction projects. Licensed electricians for residential and commercial projects."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/new-builds-renovations' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <ComingSoon 
        title="New Builds, Renovations & Ongoing Works"
        description="We are currently building comprehensive information about our new builds, renovations, and ongoing works services. This page will include details about electrical planning, installation, and project management."
      />
      <Footer/>
    </div>
  );
};

export default NewBuildsRenovations;
