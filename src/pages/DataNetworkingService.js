import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import DataNetworkingDescription from '../components/DataNetworkingDescription';
import DataNetworkingContent from '../components/DataNetworkingContent';

const DataNetworkingService = () => {
  return (
    <div id='DataNetworkingService'>
      <SEO 
        title="Data & Networking Services | NZXTGEN"
        description="Professional data and networking services. Structured cabling, data points, patch panels and reliable connectivity for homes and businesses."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/services/data-networking' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <DataNetworkingDescription/>
      <DataNetworkingContent/>
      <Footer/>
    </div>
  );
};

export default DataNetworkingService;
