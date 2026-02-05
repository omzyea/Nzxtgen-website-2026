import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaMapMarkerAlt,
  FaCheckCircle,
  FaTools,
  FaHome,
  FaBuilding
} from 'react-icons/fa';
import './SuburbContent.css';

const SuburbContent = ({ 
  suburbName, 
  introContent, 
  servicesOffered = [],
  whyChooseUs = [],
  serviceAreas = [],
  ctaText = "Ready to get started with professional electrical services?"
}) => {
  const defaultServices = [
    { name: "Electrical Services", link: "/services/electrical-services" },
    { name: "Smart Home Automation", link: "/smart-home" },
    { name: "Security Systems", link: "/security-systems" },
    { name: "Entertainment Technology", link: "/entertainment-technology" },
    { name: "Switchboard Upgrades", link: "/switchboard-upgrade" },
    { name: "Data & Networking", link: "/data-networking" }
  ];

  const servicesToShow = servicesOffered.length > 0 ? servicesOffered : defaultServices;

  return (
    <div className="suburb-content">
      {/* Top CTA Section */}
      <div className="suburb-top-cta">
        <div className="suburb-cta-container">
          <p className="suburb-cta-question">Need electrical services in {suburbName}?</p>
          <Link to="/free-quote" className="suburb-cta-button">
            👉 Request a free quote today
          </Link>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="suburb-main-container">
        {/* Main Title and Intro */}
        <div className="suburb-header-section">
          <h1 className="suburb-main-title">Electrical Services in {suburbName} – NZXTGEN</h1>
          <div className="suburb-intro-content">
            {introContent && introContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Services Offered Section */}
        <div className="suburb-section suburb-services-section">
          <h2 className="suburb-section-title">Services Available in {suburbName}</h2>
          <p>
            NZXTGEN provides a comprehensive range of electrical, smart home, and technology services 
            for properties in {suburbName}. Our licensed electricians deliver professional installations, 
            upgrades, and maintenance services tailored to local needs.
          </p>
          <div className="suburb-services-grid">
            {servicesToShow.map((service, index) => (
              <Link key={index} to={service.link} className="suburb-service-link-card">
                <div className="suburb-service-link-icon">
                  <FaTools />
                </div>
                <h3 className="suburb-service-link-title">{service.name}</h3>
                <span className="suburb-service-link-arrow">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Why Choose NZXTGEN Section */}
        {whyChooseUs.length > 0 && (
          <div className="suburb-section suburb-why-choose">
            <h2 className="suburb-section-title">Why Choose NZXTGEN in {suburbName}</h2>
            <p>
              NZXTGEN is committed to providing reliable, professional electrical services for {suburbName} 
              residents and businesses. We understand local needs and deliver solutions that suit the area.
            </p>
            <ul className="suburb-process-list">
              {whyChooseUs.map((item, index) => (
                <li key={index}>
                  <FaCheckCircle className="suburb-check-icon" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Service Areas Section */}
        {serviceAreas.length > 0 && (
          <div className="suburb-section">
            <h2 className="suburb-section-title">Nearby Areas We Service</h2>
            <p>
              In addition to {suburbName}, we also provide services to surrounding suburbs in Sydney's south-west.
            </p>
            <div className="suburb-areas-grid">
              {serviceAreas.map((area, index) => (
                <div key={index} className="suburb-area-badge">
                  <FaMapMarkerAlt className="suburb-area-icon" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Final CTA */}
        <div className="suburb-final-cta">
          <h2>{ctaText}</h2>
          <Link to="/free-quote" className="suburb-cta-button">
            👉 Get your free quote today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuburbContent;
