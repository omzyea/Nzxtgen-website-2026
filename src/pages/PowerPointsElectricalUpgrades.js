import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import PowerPointsElectricalUpgradesDescription from '../components/PowerPointsElectricalUpgradesDescription';
import PowerPointsElectricalUpgradesContent from '../components/PowerPointsElectricalUpgradesContent';

const PowerPointsElectricalUpgrades = () => {
  return (
    <div id="PowerPointsElectricalUpgrades">
      <SEO
        title="Power Points & Electrical Upgrades | NZXTGEN"
        description="Professional power point installations and electrical upgrades for safer, more functional homes and workplaces by NZXTGEN."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/services/power-points-electrical-upgrades' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />
      <PowerPointsElectricalUpgradesDescription />
      <PowerPointsElectricalUpgradesContent />
      <Footer />
    </div>
  );
};

export default PowerPointsElectricalUpgrades;
