import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SwitchBoardDescription from '../components/SwitchBoardDescription';
import SwitchBoardContent from '../components/SwitchBoardContent';
import RecentSwitchboardUpgrade from '../components/RecentSwitchboardUpgrade';

const SwitchBoard = () => {
  return (
    <div id='SwitchBoard'>
      <SEO 
        title="Electrical Switchboard Upgrades for Homes | NZXTGEN"
        description="NZXTGEN provides safe, compliant electrical switchboard upgrades for homes, improving protection, capacity and reliability for modern electrical use."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/switchboard-upgrade' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <SwitchBoardDescription/>
      <SwitchBoardContent/>
      <RecentSwitchboardUpgrade/>
      <Footer/>
    </div>
  );
};

export default SwitchBoard;
