import React, { useState } from 'react';
import { 
  FaCheckCircle,
  FaLightbulb,
  FaSun,
  FaHome,
  FaFan,
  FaEye,
  FaMobileAlt,
  FaExclamationTriangle
} from 'react-icons/fa';
import ServiceSidebar from './ServiceSidebar';
import './ElectricServiceContent.css';

const LightingServiceContent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqItems = [
    {
      question: "Can lighting be upgraded without rewiring the entire property?",
      answer: "In many cases, yes. Existing wiring can often support new fittings and controls after assessment."
    },
    {
      question: "Are dimmers suitable for all lights?",
      answer: "Not all lights are dimmable. We ensure compatible fittings and dimmers are installed together."
    },
    {
      question: "Can sensor lighting be adjusted after installation?",
      answer: "Yes. Sensitivity, timing, and light levels can be configured to suit how the area is used."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const coreServices = [
    {
      id: "led-strips",
      icon: <FaLightbulb />,
      title: "LED Strip Lighting",
      text: "LED strip lighting has become a leading lighting trend in contemporary homes, renovations and new builds. This modern, versatile lighting solution enhances both functionality and ambience. We design and install LED strip lighting to suit your layout with warm white, cool white or colour-changing (RGB/RGBW) options, dimmable systems, and hidden aluminium channels for a seamless finish."
    },
    {
      id: "indoor",
      icon: <FaHome />,
      title: "Indoor Lighting",
      text: "Indoor lighting is designed to provide comfortable, functional illumination for everyday tasks. This includes general lighting for living areas, task lighting for kitchens and workspaces, and softer lighting options for bedrooms and relaxation zones. We install ceiling-mounted lights, downlights, feature lighting, and ensure proper switching arrangements."
    },
    {
      id: "outdoor",
      icon: <FaSun />,
      title: "Outdoor Lighting",
      text: "Outdoor lighting improves visibility, safety, and property usability after dark. It is commonly used around entrances, pathways, driveways, outdoor living areas, and building perimeters. Properly installed outdoor lighting also helps deter unauthorised access and reduces trip hazards. All outdoor installations are weather-rated and compliant."
    },
    {
      id: "ceiling-fans",
      icon: <FaFan />,
      title: "Ceiling Fans",
      text: "Ceiling fans are a practical addition to many homes and businesses, improving airflow and reducing reliance on air conditioning. We install ceiling fans with appropriate support, wiring, and controls to ensure safe and quiet operation. Fans can be integrated with existing lighting or installed as standalone units."
    },
    {
      id: "sensor",
      icon: <FaEye />,
      title: "Sensor and Automated Lighting",
      text: "Sensor lighting improves convenience and energy efficiency by operating only when needed. Motion-activated lighting is commonly used in hallways, bathrooms, garages, and outdoor areas. Day and night lighting control allows lights to respond automatically to ambient light levels, ensuring exterior and security lighting operates when required."
    },
    {
      id: "smart",
      icon: <FaMobileAlt />,
      title: "Smart Lighting and Controls",
      text: "Smart lighting systems allow lights to be linked, scheduled, or controlled remotely. These systems can integrate with other smart devices and offer flexibility for changing routines or occupancy patterns. We install standard switches, two-way and three-way switching, dimmers, and smart switches depending on how the space is accessed and used."
    },
    {
      id: "emergency",
      icon: <FaExclamationTriangle />,
      title: "Emergency Lighting",
      text: "Emergency lighting is essential in certain residential and commercial settings, particularly where safe exit paths must be maintained during power outages. We install and maintain emergency lighting systems that activate automatically and meet required compliance standards."
    }
  ];

  const whenYouNeedUs = [
    "Rooms feel dim or poorly balanced",
    "Outdoor areas lack safe illumination",
    "Lighting layouts no longer suit furniture or usage",
    "Energy costs are higher than expected",
    "Renovations or extensions are underway",
    "Safety or compliance requirements have changed"
  ];

  const whyChooseUs = [
    "Clear advice on suitable lighting options",
    "Neat, well-finished installations",
    "Correct load management and circuit protection",
    "Safe, compliant wiring practices",
    "Future flexibility for upgrades and modifications"
  ];

  return (
    <div className="es-two-column-layout">
      {/* Left Sidebar */}
      <ServiceSidebar />

      {/* Right Content */}
      <main className="es-main-content">
        {/* Intro Section */}
        <section className="es-content-section">
          <p className="es-intro-text">
            Lighting plays a critical role in how a space functions, feels, and performs. The right 
            lighting improves visibility, safety, comfort, and energy efficiency, while poor lighting 
            can make even well-designed spaces impractical or uncomfortable to use.
          </p>
          <p className="es-intro-text">
            NZXTGEN provides professional lighting installation services for homeowners and small 
            businesses, delivering practical solutions that suit real-world use. From everyday indoor 
            lighting to outdoor security lighting and automated systems, our work focuses on clean 
            installation, reliable performance, and long-term usability. Every lighting setup is planned 
            with how the space is used, not just how it looks.
          </p>
        </section>

        {/* What Lighting Installation Involves */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            What Lighting Installation <span className="es-highlight">Involves</span>
          </h2>
          <p className="es-intro-text">
            Lighting installation covers far more than replacing existing fittings. It involves 
            selecting appropriate fixtures, ensuring circuits are suitable, positioning lights correctly, 
            and installing controls that make lighting easy and intuitive to use. All installations are 
            completed in line with Australian Standards, with careful attention to wiring integrity, 
            load limits, and switching arrangements.
          </p>
        </section>

        {/* Core Services Grid */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Our Core <span className="es-highlight">Lighting Services</span>
          </h2>
          <div className="es-services-grid">
            {coreServices.map((service, index) => (
              <div key={index} id={service.id} className="es-service-card">
                <div className="es-service-icon">{service.icon}</div>
                <div className="es-service-content">
                  <h3 className="es-service-title">{service.title}</h3>
                  <p className="es-service-text">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* When You May Need Lighting Installation */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            When You May Need <span className="es-highlight">Lighting Installation</span>
          </h2>
          <p className="es-intro-text">
            Lighting upgrades are often prompted by changes in how a space is used or when existing 
            lighting no longer performs effectively. Flickering lights, uneven coverage, outdated 
            fittings, or insufficient brightness are common indicators that improvements are needed.
          </p>
          <p className="es-intro-text">You may require lighting installation if:</p>
          <ul className="es-checklist">
            {whenYouNeedUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="es-intro-text">
            Lighting installation is also common when upgrading to energy-efficient systems or 
            introducing automation. Modern lighting solutions allow better control while reducing 
            ongoing power usage.
          </p>
        </section>

        {/* Why Choose NZXTGEN */}
        <section className="es-content-section es-why-choose-section">
          <h2 className="es-section-heading">
            Why Choose <span className="es-highlight">NZXTGEN</span>
          </h2>
          <p className="es-intro-text es-white-text">
            NZXTGEN approaches lighting installation with a practical mindset. Our focus is on 
            installing systems that work reliably, are easy to operate, and suit the way people use 
            their spaces. We take the time to assess each environment, considering ceiling heights, 
            natural light, room purpose, and switching requirements.
          </p>
          <p className="es-intro-text es-white-text es-approach-intro">Our approach is based on:</p>
          <ul className="es-checklist es-white-checklist">
            {whyChooseUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="es-intro-text es-white-text">
            We also ensure that lighting systems remain flexible. Whether adding dimmers, upgrading 
            controls, or linking lights into smart systems later, installations are designed with 
            future adaptability in mind. Clients are always informed about how their lighting operates 
            and how to make the most of installed controls.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="es-content-section es-faq-section">
          <h2 className="es-section-heading">
            Frequently Asked <span className="es-highlight">Questions</span>
          </h2>
          <div className="es-faq-list">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`es-faq-item ${openFaqIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="es-faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="es-faq-number">{index + 1}.</span>
                  <span className="es-faq-question-text">{item.question}</span>
                  <span className="es-faq-icon">
                    {openFaqIndex === index ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 12h8"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 8v8M8 12h8"/>
                      </svg>
                    )}
                  </span>
                </button>
                <div className="es-faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default LightingServiceContent;
