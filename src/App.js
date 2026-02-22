import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import FreeQuote from "./pages/FreeQuote";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import AreaWeService from "./pages/AreaWeService";
import SwitchBoard from "./pages/SwitchBoard";
import SmartHome from "./pages/SmartHome";
// SmartHomeMoreInfo removed - content merged into SmartHomeService at /smart-home/more-info
import Privacypage from "./pages/PrivacyPage";
import Termspage from "./pages/Termspage";
import NotFound from "./pages/NotFound";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ServicesDirectory from "./pages/ServicesDirectory";
import SuburbsDirectory from "./pages/SuburbsDirectory";
import Canterbury from "./pages/city/Canterbury/Canterbury";
import Bankstown from "./pages/city/Bankstown/Bankstown";
import Earlwood from "./pages/city/Earlwood/Earlwood";
import Panania from "./pages/city/Panania/Panania";
import Revesby from "./pages/city/Revesby/Revesby";
import Strathfield from "./pages/city/Strathfield/Strathfield";
import CondellPark from "./pages/city/CondellPark/CondellPark";
import Padstow from "./pages/city/Padstow/Padstow";
import ElectricService from "./pages/ElectricService";
import SmartHomeService from "./pages/SmartHomeService";
import SecuritySystemsService from "./pages/SecuritySystemsService";
import DataNetworkingService from "./pages/DataNetworkingService";
import EntertainmentService from "./pages/EntertainmentService";
// Builders & Contracting pages
import BuildersContracting from "./pages/BUILDERS & CONTRACTING/BuildersContracting";
import ResidentialElectrical from "./pages/BUILDERS & CONTRACTING/ResidentialElectrical";
import CommercialIndustrialElectrical from "./pages/BUILDERS & CONTRACTING/CommercialIndustrialElectrical";
import NewBuildsRenovations from "./pages/BUILDERS & CONTRACTING/NewBuildsRenovations";
import ComplianceLicensing from "./pages/ComplianceLicensing";
import ComplianceLicence from "./pages/BUILDERS & CONTRACTING/ComplianceLicence";
// Quick Links pages
import EmergencyElectrician from "./pages/EmergencyElectrician";
import ElectricalFaultFindingRepairs from "./pages/ElectricalFaultFindingRepairs";
import LightingInstallation from "./pages/LightingInstallation";
import SmokeAlarmSafetyChecks from "./pages/SmokeAlarmSafetyChecks";
import PowerPointsElectricalUpgrades from "./pages/PowerPointsElectricalUpgrades";
import ThankYou from "./pages/ThankYou";
import { usePageTracking } from './hooks/usePageTracking';
import ScrollToTop from './components/ScrollToTop';

// Wrapper component that uses the hook INSIDE the Router context
function AppRoutes() {
  usePageTracking(); 
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/free-quote" element={<FreeQuote />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/our-signature-services" element={<OurServices />} />
      <Route path="/our-services" element={<Navigate to="/our-signature-services" replace />} />
      <Route path="/smart-home" element={<SmartHome />} />
      <Route path="/smart-home-more-info" element={<Navigate to="/smart-home/more-info" replace />} />
      <Route path="/services" element={<ServicesDirectory />} />
      <Route path="/services/electrical-services" element={<ElectricService />} />
      <Route path="/services/power-points-electrical-upgrades" element={<PowerPointsElectricalUpgrades />} />
      <Route path="/smart-home/more-info" element={<SmartHomeService />} />
      <Route path="/services/smart-home" element={<Navigate to="/smart-home/more-info" replace />} />
      <Route path="/services/security-systems" element={<SecuritySystemsService />} />
      <Route path="/lighting-installation" element={<LightingInstallation />} />
      <Route path="/services/data-networking" element={<DataNetworkingService />} />
      <Route path="/services/entertainment-technology" element={<EntertainmentService />} />
      {/* Redirects from old URLs to new service URLs for SEO */}
      <Route path="/security-systems" element={<Navigate to="/services/security-systems" replace />} />
      <Route path="/data-networking" element={<Navigate to="/services/data-networking" replace />} />
      <Route path="/entertainment-technology" element={<Navigate to="/services/entertainment-technology" replace />} />
      {/* Builders & Contracting routes */}
      <Route path="/builders-contracting" element={<BuildersContracting />} />
      <Route path="/residential-electrical" element={<ResidentialElectrical />} />
      <Route path="/commercial-industrial-electrical" element={<CommercialIndustrialElectrical />} />
      <Route path="/new-builds-renovations" element={<NewBuildsRenovations />} />
      <Route path="/compliance-licensing" element={<ComplianceLicensing />} />
      {/* Quick Links routes */}
      <Route path="/compliance-licence" element={<ComplianceLicence />} />
      <Route path="/emergency-electrician" element={<EmergencyElectrician />} />
      <Route path="/electrical-fault-finding-repairs" element={<ElectricalFaultFindingRepairs />} />
      <Route path="/lighting-installation" element={<LightingInstallation />} />
      <Route path="/smoke-alarms-electrical-safety-checks" element={<SmokeAlarmSafetyChecks />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/privacy-policy" element={<Privacypage />} />
      <Route path="/areas-we-service" element={<AreaWeService />} />
      <Route path="/switchboard-upgrade" element={<SwitchBoard />} />
      <Route path="/terms-and-conditions" element={<Termspage />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/suburbs" element={<SuburbsDirectory />} />
      <Route path="/areas-we-service/electrician-canterbury" element={<Canterbury />} />
      <Route path="/areas-we-service/electrician-bankstown" element={<Bankstown />} />
      <Route path="/areas-we-service/electrician-earlwood" element={<Earlwood />} />
      <Route path="/areas-we-service/electrician-panania" element={<Panania />} />
      <Route path="/areas-we-service/electrician-revesby" element={<Revesby />} />
      <Route path="/areas-we-service/electrician-strathfield" element={<Strathfield />} />
      <Route path="/areas-we-service/electrician-condell-park" element={<CondellPark />} />
      <Route path="/areas-we-service/electrician-padstow" element={<Padstow />} />
      {/* Redirects from old suburb URLs */}
      <Route path="/electrician-canterbury" element={<Navigate to="/areas-we-service/electrician-canterbury" replace />} />
      <Route path="/electrician-bankstown" element={<Navigate to="/areas-we-service/electrician-bankstown" replace />} />
      <Route path="/electrician-earlwood" element={<Navigate to="/areas-we-service/electrician-earlwood" replace />} />
      <Route path="/electrician-panania" element={<Navigate to="/areas-we-service/electrician-panania" replace />} />
      <Route path="/electrician-revesby" element={<Navigate to="/areas-we-service/electrician-revesby" replace />} />
      <Route path="/electrician-strathfield" element={<Navigate to="/areas-we-service/electrician-strathfield" replace />} />
      <Route path="/electrician-condell-park" element={<Navigate to="/areas-we-service/electrician-condell-park" replace />} />
      <Route path="/electrician-padstow" element={<Navigate to="/areas-we-service/electrician-padstow" replace />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;