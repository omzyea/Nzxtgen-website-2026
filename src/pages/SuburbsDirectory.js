import React from 'react';
import { Link } from 'react-router-dom';
import WhatsappChat from '../components/WhatsappChat';
import MobileCallButton from '../components/MobileCallButton';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import SuburbsHero from '../components/SuburbsHero';
import { FaMapMarkerAlt, FaBolt, FaHome, FaShieldAlt, FaNetworkWired, FaTv } from 'react-icons/fa';
import './SuburbsDirectory.css';

const SuburbsDirectory = () => {
  const primarySuburbs = [
    { 
      name: 'Condell Park', 
      description: 'Our home base - serving the local community with comprehensive electrical, smart home, and security solutions for over a decade.'
    },
    { 
      name: 'Bankstown', 
      description: 'Professional electrical services for residential and commercial properties throughout the Bankstown area.'
    },
    { 
      name: 'Bass Hill', 
      description: 'Expert electrical installations, smart home automation, and security system services for Bass Hill residents.'
    }
  ];

  const serviceSuburbs = [
    'Yagoona', 'Chester Hill', 'Sefton', 'Birrong', 'Regents Park', 
    'Chullora', 'Greenacre', 'Belfield', 'Berala', 'Lidcombe',
    'Auburn', 'Granville', 'Merrylands', 'Guildford', 'Villawood',
    'Leightonfield', 'Lansdowne', 'Georges Hall', 'Revesby', 'Padstow'
  ];

  const services = [
    { icon: FaBolt, name: 'Electrical Services', link: '/services/electrical-services' },
    { icon: FaHome, name: 'Smart Home', link: '/services/smart-home' },
    { icon: FaShieldAlt, name: 'Security Systems', link: '/services/security-systems' },
    { icon: FaNetworkWired, name: 'Data & Networking', link: '/services/data-networking' },
    { icon: FaTv, name: 'Entertainment', link: '/services/entertainment-technology' }
  ];

  return (
    <div id="SuburbsDirectory">
      <SEO 
        title="Suburbs Directory | Areas We Service | NZXTGEN"
        description="NZXTGEN provides electrical, smart home, and security services across Sydney's south-west including Condell Park, Bankstown, and surrounding suburbs."
        canonical={typeof window !== 'undefined' ? window.location.origin + '/suburbs' : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />
      
      <SuburbsHero />

      <div className="suburbs-directory-container">
        {/* Primary Service Areas */}
        <section className="suburbs-section">
          <h2 className="suburbs-section-title">
            Primary <span className="highlight">Service Areas</span>
          </h2>
          <p className="suburbs-section-intro">
            These are our core service areas where we provide same-day availability and priority scheduling.
          </p>
          
          <div className="primary-suburbs-grid">
            {primarySuburbs.map((suburb, index) => (
              <div key={index} className="primary-suburb-card">
                <div className="suburb-icon-wrapper">
                  <FaMapMarkerAlt className="suburb-icon" />
                </div>
                <h3>{suburb.name}</h3>
                <p>{suburb.description}</p>
                <Link to="/free-quote" className="suburb-quote-btn">
                  Get Quote for {suburb.name}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* All Service Areas */}
        <section className="suburbs-section suburbs-list-section">
          <h2 className="suburbs-section-title">
            All <span className="highlight">Service Areas</span>
          </h2>
          <p className="suburbs-section-intro">
            We extend our professional services to these surrounding suburbs across Sydney's south-west region.
          </p>
          
          <div className="suburbs-tags-container">
            {serviceSuburbs.map((suburb, index) => (
              <span key={index} className="suburb-tag">
                <FaMapMarkerAlt className="tag-icon" />
                {suburb}
              </span>
            ))}
          </div>
        </section>

        {/* Services Available */}
        <section className="suburbs-section services-available-section">
          <h2 className="suburbs-section-title">
            Services <span className="highlight">Available</span>
          </h2>
          <p className="suburbs-section-intro">
            All suburbs receive access to our complete range of professional services.
          </p>
          
          <div className="services-icons-grid">
            {services.map((service, index) => (
              <Link key={index} to={service.link} className="service-icon-card">
                <service.icon className="service-card-icon" />
                <span>{service.name}</span>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="suburbs-cta-section">
          <h2>Not Sure If We Service Your Area?</h2>
          <p>
            Contact us to confirm service availability in your suburb. We're always expanding our coverage 
            to serve more communities across Sydney.
          </p>
          <div className="suburbs-cta-buttons">
            <Link to="/free-quote" className="suburbs-cta-primary">
              Request Free Quote
            </Link>
            <Link to="/contact-us" className="suburbs-cta-secondary">
              Contact Us
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default SuburbsDirectory;
