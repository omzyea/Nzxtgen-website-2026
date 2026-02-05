import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import DataNetworkingDescription from '../components/DataNetworkingDescription';
import DataNetworkingContent from '../components/DataNetworkingContent';

const DataNetworking = () => {
  return (
    <div id='DataNetworking'>
      <SEO 
        title="Data & Networking Services in Condell Park | NZXTGEN"
        description="Professional data and networking services in Condell Park. Structured cabling, data points, 
        patch panels and reliable connectivity for homes and businesses."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/data-networking' : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <DataNetworkingDescription/>
      <DataNetworkingContent/>
      <Footer/>
    </div>
  );
};

export default DataNetworking;
