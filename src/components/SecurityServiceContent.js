import React, { useState } from 'react';
import { 
  FaVideo, 
  FaBell, 
  FaKey, 
  FaPhoneAlt,
  FaCheckCircle
} from 'react-icons/fa';
import ServiceSidebar from './ServiceSidebar';
import './ElectricServiceContent.css';

const SecurityServiceContent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqItems = [
    {
      question: "Can security systems be installed in an existing building?",
      answer: "Yes. Most systems can be installed without major structural changes."
    },
    {
      question: "Can different security components work together?",
      answer: "Yes. CCTV, alarms, access control, and intercoms can be integrated into a single system."
    },
    {
      question: "Will I be shown how to use the system after installation?",
      answer: "Yes. We provide clear guidance on operating and managing your system."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const securityServices = [
    { 
      icon: <FaVideo />, 
      title: "CCTV Installation",
      text: "CCTV systems provide visual monitoring of key areas such as entrances, perimeters, shared spaces, and restricted zones. Cameras are positioned to capture clear footage while avoiding unnecessary coverage. Modern CCTV systems allow live viewing and record playback, often accessible remotely."
    },
    { 
      icon: <FaBell />, 
      title: "Alarm Systems",
      text: "Alarm systems are designed to detect unauthorised entry or unusual activity and trigger alerts when this occurs. These systems can include door and window sensors, motion detectors, and audible alarms. A properly configured alarm system should suit how the space is occupied."
    },
    { 
      icon: <FaKey />, 
      title: "Access Control",
      text: "Access control systems manage who can enter specific areas and when. This is particularly important for businesses, shared buildings, and properties with restricted zones. Access may be controlled through keypads, cards, or other secure credentials."
    },
    { 
      icon: <FaPhoneAlt />, 
      title: "Intercom Systems",
      text: "Intercom systems allow communication with visitors before granting access. These systems are commonly installed at entry points to homes, units, offices, and gated areas. Intercoms improve security by allowing occupants to verify visitors without opening doors or gates."
    }
  ];

  const whenYouNeedSecurity = [
    "The property has multiple access points",
    "Visibility around entrances is limited",
    "Valuable equipment or assets are stored onsite",
    "Staff or occupants work outside normal hours",
    "There is a need to monitor activity remotely"
  ];

  const whyChooseUs = [
    "Assessing risks and entry points",
    "Planning camera coverage and sensor placement",
    "Installing cabling and devices neatly and securely",
    "Configuring systems for reliable operation",
    "Explaining system use clearly at handover"
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
            Security systems play a critical role in protecting people, property, and assets. Whether for a home or a small business, modern security solutions are designed to deter unauthorised access, monitor activity, and provide clear information when incidents occur. A well-designed system should offer reliable coverage without being intrusive or difficult to manage.
          </p>
          <p className="es-intro-text">
            NZXTGEN provides professional security system installations that focus on practical protection rather than unnecessary complexity. We design systems that suit the layout of the property, the level of risk, and how the space is used day to day. Every installation is planned carefully to ensure coverage is effective, controls are intuitive, and the system remains reliable over time.
          </p>
        </section>

        {/* What Security Systems Installation Involves */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            What Security Systems Installation <span className="es-highlight">Involves</span>
          </h2>
          <p className="es-intro-text">
            Security systems installation involves integrating devices and infrastructure that work together to monitor, detect, and control access to a property. Rather than relying on a single component, effective security combines visual monitoring, alerts, and controlled entry points.
          </p>
        </section>

        {/* Security Services Grid */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Our Security System <span className="es-highlight">Services</span>
          </h2>
          <div className="es-services-grid">
            {securityServices.map((service, index) => (
              <div key={index} className="es-service-card">
                <div className="es-service-icon">{service.icon}</div>
                <div className="es-service-content">
                  <h3 className="es-service-title">{service.title}</h3>
                  <p className="es-service-text">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CCTV Installation Details */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            CCTV <span className="es-highlight">Installation</span>
          </h2>
          <p className="es-intro-text">
            CCTV systems provide visual monitoring of key areas such as entrances, perimeters, shared spaces, and restricted zones. Cameras are positioned to capture clear footage while avoiding unnecessary coverage of private or irrelevant areas. Proper placement is essential to reduce blind spots and ensure footage is usable if needed.
          </p>
          <p className="es-intro-text">
            Modern CCTV systems allow live viewing and record playback, often accessible remotely. Clear image quality, stable connections, and secure storage are key considerations when designing these systems. NZXTGEN ensures cameras are installed securely, cabling is protected, and recording equipment is configured correctly.
          </p>
        </section>

        {/* Alarm Systems Details */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Alarm <span className="es-highlight">Systems</span>
          </h2>
          <p className="es-intro-text">
            Alarm systems are designed to detect unauthorised entry or unusual activity and trigger alerts when this occurs. These systems can include door and window sensors, motion detectors, and audible alarms that activate when triggered.
          </p>
          <p className="es-intro-text">
            A properly configured alarm system should suit how the space is occupied. This includes separating zones so parts of the property can remain active while others are armed. We take the time to understand daily routines to ensure alarms enhance security without causing unnecessary disruptions.
          </p>
        </section>

        {/* Access Control Details */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Access <span className="es-highlight">Control</span>
          </h2>
          <p className="es-intro-text">
            Access control systems manage who can enter specific areas and when. This is particularly important for businesses, shared buildings, and properties with restricted zones. Access may be controlled through keypads, cards, or other secure credentials.
          </p>
          <p className="es-intro-text">
            By limiting access to authorised users only, these systems reduce the risk of unauthorised entry and provide better oversight of movement within the property. Access control can also simplify management by reducing reliance on physical keys.
          </p>
        </section>

        {/* Intercom Systems Details */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Intercom <span className="es-highlight">Systems</span>
          </h2>
          <p className="es-intro-text">
            Intercom systems allow communication with visitors before granting access. These systems are commonly installed at entry points to homes, units, offices, and gated areas. Intercoms improve security by allowing occupants to verify visitors without opening doors or gates.
          </p>
          <p className="es-intro-text">
            Intercom installations can be integrated with access control, enabling doors or gates to be released remotely once a visitor is identified. Clear audio, reliable connections, and practical placement are essential for effective operation.
          </p>
        </section>

        {/* When You Need Security Systems */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            When You Need Security <span className="es-highlight">Systems</span>
          </h2>
          <p className="es-intro-text">
            Security system installation is often prompted by changes in risk, usage, or property layout. However, many installations are preventative, designed to reduce exposure before issues arise.
          </p>
          <p className="es-intro-text">You may need a security system if:</p>
          <ul className="es-checklist">
            {whenYouNeedSecurity.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="es-intro-text">
            Homes often require security upgrades when layouts change, such as renovations or extensions that introduce new entry points. Businesses commonly install security systems when expanding, relocating, or adjusting operating hours.
          </p>
          <p className="es-intro-text">
            Security systems are also valuable for improving oversight rather than responding to incidents alone. CCTV footage can help resolve disputes, verify events, and support insurance claims when required.
          </p>
          <p className="es-intro-text">
            For small businesses, integrating alarms, cameras, and access control improves accountability while maintaining a professional environment. For homeowners, security systems offer peace of mind without interfering with daily routines.
          </p>
        </section>

        {/* Why Choose NZXTGEN */}
        <section className="es-content-section es-why-choose-section">
          <h2 className="es-section-heading">
            Why Choose <span className="es-highlight">NZXTGEN</span>
          </h2>
          <p className="es-intro-text es-white-text">
            NZXTGEN approaches security systems with a focus on clarity, reliability, and suitability. We do not install generic setups. Every system is planned based on the property's layout, usage patterns, and practical security needs.
          </p>
          <p className="es-intro-text es-white-text es-approach-intro">Our process includes:</p>
          <ul className="es-checklist es-white-checklist">
            {whyChooseUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="es-intro-text es-white-text">
            We ensure that systems are easy to operate and understand. Controls are configured logically, and users are shown how to manage everyday functions without confusion. This reduces reliance on ongoing support and ensures the system is used correctly.
          </p>
          <p className="es-intro-text es-white-text">
            Attention to detail is a priority. Cabling is concealed where possible, equipment is mounted securely, and installations are completed with a clean, professional finish. Systems are tested thoroughly before completion to confirm performance and coverage.
          </p>
          <p className="es-intro-text es-white-text">
            Because we also work across electrical, data, and smart systems, we understand how security integrates with other infrastructure. This allows systems to operate smoothly without conflicts or unnecessary duplication.
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

export default SecurityServiceContent;
