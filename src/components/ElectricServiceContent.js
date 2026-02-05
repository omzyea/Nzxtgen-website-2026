import React, { useState } from 'react';
import { 
  FaCheckCircle,
  FaLightbulb,
  FaPlug,
  FaBolt,
  FaSearch,
  FaFire,
  FaFan,
  FaChargingStation,
  FaTools
} from 'react-icons/fa';
import ServiceSidebar from './ServiceSidebar';
import './ElectricServiceContent.css';

const ElectricServiceContent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqItems = [
    {
      question: "Do I need to upgrade my switchboard before adding new appliances?",
      answer: "In some cases, yes. Older switchboards may not support additional load safely. We assess capacity and safety before recommending upgrades."
    },
    {
      question: "Can lighting colour temperature be changed after installation?",
      answer: "Some fittings include switchable colour temperature options, allowing adjustment during installation without replacing the light."
    },
    {
      question: "Is electrical maintenance necessary for homes?",
      answer: "Routine checks help identify issues early, improve safety, and reduce the likelihood of unexpected faults."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const coreServices = [
    {
      id: "lighting",
      icon: <FaLightbulb />,
      title: "Lighting Installation and Upgrades",
      text: "We install and upgrade internal and external lighting for homes and small commercial spaces, ensuring appropriate brightness, placement, and control. Some lighting products include switchable colour temperatures (3000K, 4000K, or 6000K) for different rooms and uses."
    },
    {
      id: "power",
      icon: <FaPlug />,
      title: "Power Points and Electrical Outlets",
      text: "We install additional power points, replace damaged outlets, and ensure circuits are correctly loaded to prevent overheating or nuisance tripping. Careful placement improves convenience while maintaining safety and compliance."
    },
    {
      id: "switchboard",
      icon: <FaBolt />,
      title: "Switchboards and Electrical Safety Upgrades",
      text: "The switchboard is the core of any electrical system. We assess existing boards and carry out upgrades where required, including safety switches and circuit protection to meet current standards."
    },
    {
      id: "faults",
      icon: <FaSearch />,
      title: "Electrical Fault Finding",
      text: "We use structured testing methods to identify the root cause of electrical issues such as power loss, tripping circuits, flickering lights, or unexplained outages. This approach reduces repeat problems and improves overall system reliability."
    },
    {
      id: "smoke",
      icon: <FaFire />,
      title: "Smoke Alarm Installation and Compliance",
      text: "We install, replace, and maintain smoke alarms to ensure correct placement, reliable operation, and compliance with current regulations. This includes upgrading outdated units and ensuring alarms are interconnected where required."
    },
    {
      id: "fans",
      icon: <FaFan />,
      title: "Ceiling Fans",
      text: "We install new ceiling fans, replace existing units, and ensure safe mounting and correct wiring. Proper installation ensures quiet operation, effective air movement, and safe long-term use."
    },
    {
      id: "ev",
      icon: <FaChargingStation />,
      title: "EV Charger Installation",
      text: "As electric vehicles become more common, we install EV charging solutions suitable for residential and small business use, ensuring circuits are appropriately rated and integrated with existing electrical systems."
    },
    {
      id: "maintenance",
      icon: <FaTools />,
      title: "Electrical Maintenance",
      text: "We provide routine inspections, testing, and preventative maintenance for homes and small businesses, helping extend the life of electrical systems and reduce long-term repair costs."
    }
  ];

  const whenYouNeedUs = [
    "Lights flickering, power cutting out, or breakers frequently tripping",
    "Adding new appliances or equipment that require additional power capacity",
    "Upgrading older electrical systems to meet current safety standards",
    "Installing new lighting, fans, or EV chargers",
    "Ensuring smoke alarms meet compliance requirements",
    "Carrying out preventative maintenance to avoid future faults"
  ];

  const whyChooseUs = [
    "Clear communication before work begins",
    "Neat, organised installations",
    "Compliance with Australian Standards",
    "Thorough testing before completion",
    "Practical solutions that suit real-world use"
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
            NZXTGEN provides a complete range of core electrical services designed to support safe, functional, and modern homes and small business spaces. While individual services are often listed across a website, this page brings everything together in one place, making it easier to understand what we do and how our services work together.
          </p>
          <p className="es-intro-text">
            Our electrical work focuses on practical outcomes: safe installations, dependable performance, and systems that suit the way people live and work. Whether you need a simple upgrade, fault diagnosis, or ongoing maintenance, our approach is clear, compliant, and well-organised.
          </p>
        </section>

        {/* What Our Electrical Services Cover */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            What Our Electrical Services <span className="es-highlight">Cover</span>
          </h2>
          <p className="es-intro-text">
            Our core electrical services are designed to handle everyday electrical needs as well as more complex upgrades. Each service is delivered with attention to safety, Australian Standards, and long-term reliability.
          </p>
        </section>

        {/* Core Services Grid */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Our Core <span className="es-highlight">Electrical Services</span>
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

        {/* When You May Need an Electrician */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            When You May Need an <span className="es-highlight">Electrician</span>
          </h2>
          <p className="es-intro-text">
            Electrical services are required at many stages, not just during renovations or new installations. Common situations where professional electrical support is essential include:
          </p>
          <ul className="es-checklist">
            {whenYouNeedUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="es-intro-text">
            Addressing issues early helps maintain safety and prevents small problems from developing into larger, more costly repairs.
          </p>
        </section>

        {/* Why Choose NZXTGEN */}
        <section className="es-content-section es-why-choose-section">
          <h2 className="es-section-heading">
            Why Choose <span className="es-highlight">NZXTGEN</span>
          </h2>
          <p className="es-intro-text es-white-text">
            NZXTGEN focuses on delivering electrical work that is practical, compliant, and clearly explained. We understand that homeowners and small business operators value reliability, transparency, and workmanship that lasts.
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
            We work across residential properties and small business premises throughout our service area, providing consistent quality and dependable outcomes without unnecessary complexity.
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

export default ElectricServiceContent;
