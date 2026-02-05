import React from 'react';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SmokeAlarmDescription from '../components/SmokeAlarmDescription';
import SmokeAlarmContent from '../components/SmokeAlarmContent';

const SmokeAlarmSafetyChecks = () => {
  return (
    <div id='SmokeAlarmSafetyChecks'>
      <SEO 
        title="Smoke Alarms & Electrical Safety Checks | NZXTGEN"
        description="Smoke alarm testing and electrical safety checks by licensed electricians. Ensure compliance, reduce fire risk, and protect your property with NZXTGEN."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/smoke-alarms-electrical-safety-checks' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar/>
      <SmokeAlarmDescription/>
      <SmokeAlarmContent/>
      <Footer/>
    </div>
  );
};

export default SmokeAlarmSafetyChecks;
