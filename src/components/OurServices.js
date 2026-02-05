import React, { useState } from "react";
import "./OurServices.css";
import { FaTimes } from 'react-icons/fa';

import electricalIcon from "../assets/electrical-services-icon.png";
import automationIcon from "../assets/smart-home-automation-icon.png";
import securityIcon from "../assets/security-systems-icon.png";
import entertainmentIcon from "../assets/entertainment-technology-icon.png";

const services = [
  {
    icon: automationIcon,
    title: "Smart Home",
    points: [
      "Smart lights adjust brightness and color instantly via smartphone.",
      "Smart appliances streamline cooking and cleaning tasks.",
      "Smart switches enable seamless control of multiple devices.",
      "Automated curtains enhance comfort and energy savings.",
      "Embrace the future of living with innovative smart solutions."
    ],
    modalContent: "Smart home solutions allow you to control lighting, power, climate, security, and more from your phone or tablet. We design systems that are easy to use, scalable and tailored to how you live or work — not complicated setups you'll never use."
  },
  {
    icon: electricalIcon,
    title: "Electrical",
    points: [
      "Enhance home functionality with lights, switches, powerpoints, and fans.",
      "Safe and efficient electrical system installations.",
      "Upgrade lighting, add powerpoints, install ceiling fans.",
      "Follow safety guidelines and local regulations.",
      "Consult a professional electrician for correct setup."
    ],
    modalContent: "Electrical installations and upgrades include lighting, switches, power points, ceiling fans, smoke alarms, appliance connections, and electrical maintenance. Every job is completed to Australian Standards, with safety and long-term reliability as the priority."
  },
  {
    icon: securityIcon,
    title: "Security",
    points: [
      "Integrate CCTV, smart door locks, alarms, intercoms, smoke alarms.",
      "Single control panel for safety and convenience.",
      "24/7 home security protection and monitoring.",
      "Remote smartphone access anytime, anywhere.",
      "Future-ready security solutions for peace of mind."
    ],
    modalContent: "Security systems are installed with real-world protection in mind. We supply and install CCTV, alarms, intercoms, smart locks and sensors that provide visibility, control and peace of mind whether you're home or away."
  },
  {
    icon: entertainmentIcon,
    title: "Entertainment",
    points: [
      "Professional home theatre installations.",
      "TV wall mounting with hidden cables.",
      "Wall-mounted or ceiling flush-mounted speakers.",
      "Big screen control panels for smart home control.",
      "Complete cabling ensures strong data, video, audio connections."
    ],
    modalContent: "Entertainment technology includes TV mounting, home theatre installations, speaker systems, and clean cable management for a neat, professional finish."
  }
];

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section className="our-services">
        <div className="services-title-overlay">
          <div className="services-title">     
            <h2>Our Core Services</h2>  
          </div>
        </div>
        <div className="services-bg">
          <div className="services-overlay"></div>
          
          <div className="services-wrapper">
            {services.map((service, index) => (
              <div 
                className="service-card" 
                key={index}
                onClick={() => openModal(service)}
                style={{ cursor: 'pointer' }}
              >
                <img src={service.icon} alt={service.title} className="service-icon" loading="lazy" decoding="async" />
                <h3 className="service-title">{service.title}</h3>
                <ul className="service-points">
                  {service.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
        
          
          {/* Service Area Link */}
          <div className="services-area-link">
            <p>We provide these services across <a href="/areas-we-service">Sydney's south-west including Condell Park and surrounding suburbs</a>. <a href="/areas-we-service">View our service areas</a>.</p>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={closeModal}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="service-modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <img src={selectedService.icon} alt={selectedService.title} className="service-modal-icon" loading="eager" />
            <h2 className="service-modal-title">{selectedService.title}</h2>
            <div className="service-modal-divider"></div>
            <p className="service-modal-content">{selectedService.modalContent}</p>
            {selectedService.title === "Entertainment" && (
              <>
                <h3 className="service-modal-subtitle">Data and Networking Services</h3>
                <p className="service-modal-content">
                  Data and networking services ensure fast, stable connectivity throughout your property. From structured cabling and data points to patch panels and server racks, we build networks that support modern households and businesses.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default OurServices;
