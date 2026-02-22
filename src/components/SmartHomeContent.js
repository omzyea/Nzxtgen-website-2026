import React, { useState } from 'react';
import {
  FaLightbulb,
  FaSnowflake,
  FaFan,
  FaLock,
  FaThermometerHalf,
  FaPlug,
  FaBath,
  FaCheckCircle
} from 'react-icons/fa';
import ServiceSidebar from './ServiceSidebar';
import './ElectricServiceContent.css';
import './SmartHomeContent.css';

const SmartHomeContent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqItems = [
    {
      question: "Can smart home systems be added to an existing property?",
      answer: "Yes. Most smart home systems can be retrofitted into existing homes without major structural changes. We assess your property and recommend solutions that work with your current setup."
    },
    {
      question: "Do I need internet for smart home devices to work?",
      answer: "Most smart home devices require a stable internet connection for remote access and full functionality. Some devices can operate locally but with limited features."
    },
    {
      question: "Can I control everything from one app?",
      answer: "In most cases, yes. We design systems that can be managed through a central platform or app, reducing the need to switch between multiple applications."
    },
    {
      question: "Can smart systems work alongside traditional switches?",
      answer: "Yes. Smart switches and automation can be installed while retaining manual control options."
    },
    {
      question: "Will the system still work if the internet goes down?",
      answer: "This depends on system design. We explain which functions operate locally and which rely on cloud access."
    },
    {
      question: "Can automation be changed after installation?",
      answer: "Yes. Schedules and rules can be adjusted as routines or requirements change."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const integratedFeatures = [
    { id: "smart-lights", icon: <FaLightbulb />, title: "Smart Lights", text: "App and voice control with schedules and scenes." },
    { id: "smart-ac", icon: <FaSnowflake />, title: "Smart A/C", text: "Automated cooling based on time and temperature." },
    { id: "smart-fans", icon: <FaFan />, title: "Smart Fans", text: "Integrated with climate control for efficiency." },
    { id: "smart-locks", icon: <FaLock />, title: "Smart Locks", text: "Secure remote access and activity tracking." },
    { id: "smart-temp", icon: <FaThermometerHalf />, title: "Smart Temperature", text: "Automated comfort with energy savings." },
    { id: "smart-appliances", icon: <FaPlug />, title: "Smart Appliances", text: "Remote monitoring and automation." },
    { id: "smart-bathroom", icon: <FaBath />, title: "Smart Bathroom Appliances", text: "Automated fans, heating, and lighting." }
  ];

  const keyPoints = [
    {
      icon: <FaLightbulb />,
      title: "What It Involves",
      text: "Integrating electrical, data, and control systems so different parts of your property communicate and operate together seamlessly."
    },
    {
      icon: <FaThermometerHalf />,
      title: "Scheduling & Automation",
      text: "Systems operate at predefined times without ongoing user intervention, improving energy efficiency and ensuring consistency."
    },
    {
      icon: <FaLock />,
      title: "System Integration",
      text: "Lighting, security, and climate controls operate together, creating a smoother experience with fewer apps or control points."
    }
  ];

  const smartHomeBenefits = [
    "Lighting and climate control are used inconsistently",
    "Multiple systems operate independently and feel disjointed",
    "Security monitoring requires separate platforms",
    "Energy usage is difficult to manage",
    "Daily routines would benefit from automation"
  ];

  const whyChooseUs = [
    "Tailored systems designed for your lifestyle",
    "Integration across lighting, security, and climate",
    "Easy-to-use controls and intuitive interfaces",
    "Scalable solutions that grow with your needs",
    "Professional installation with clean finishes"
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
            Smart home technology allows properties to operate more efficiently, comfortably, and securely through connected systems that work together. Rather than relying on individual devices or manual controls, smart home installations bring lighting, security, climate, and monitoring into a coordinated system that can be managed from one place.
          </p>
          <p className="es-intro-text">
            NZXTGEN delivers smart home installation services that focus on practicality, reliability, and ease of use. Our approach is not about installing technology for its own sake but about designing systems that genuinely improve how a space functions day to day. Every system is planned carefully to match the needs of the household or business, ensuring the technology supports routine rather than complicating it.
          </p>
        </section>

        {/* Key Points Section */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Smart Home <span className="es-highlight">Overview</span>
          </h2>
          <div className="es-services-grid">
            {keyPoints.map((point, index) => (
              <div key={index} className="es-service-card">
                <div className="es-service-icon">{point.icon}</div>
                <div className="es-service-content">
                  <h3 className="es-service-title">{point.title}</h3>
                  <p className="es-service-text">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Can Be Integrated */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            What Can Be Integrated & <span className="es-highlight">Automated</span>
          </h2>
          <div className="es-services-grid">
            {integratedFeatures.map((feature, index) => (
              <div key={index} id={feature.id} className="es-service-card">
                <div className="es-service-icon">{feature.icon}</div>
                <div className="es-service-content">
                  <h3 className="es-service-title">{feature.title}</h3>
                  <p className="es-service-text">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local and Cloud-Based Systems */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Local and Cloud-Based <span className="es-highlight">Systems</span>
          </h2>
          <p className="es-intro-text">
            Smart home systems can operate locally, through cloud services, or a combination of both. Local systems continue to function even if internet access is interrupted, while cloud-based systems offer remote access and updates.
          </p>
          <p className="es-intro-text">
            We explain the differences clearly, so clients understand how their system operates, what relies on internet connectivity, and what continues to function independently. This transparency allows informed decisions about reliability, access, and long-term usability.
          </p>
        </section>

        {/* Switches, Controls, and Centralised Access */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Switches, Controls, and Centralised <span className="es-highlight">Access</span>
          </h2>
          <p className="es-intro-text">
            Physical switches remain an important part of smart home design. Smart switches allow users to control lighting and systems manually while also enabling automation and remote access. Proper switch placement ensures systems remain intuitive for all occupants, including visitors.
          </p>
          <p className="es-intro-text">
            Centralised monitoring is another key feature. Smart home systems can be viewed and managed from a single interface, such as a tablet or wall-mounted touch panel. This allows users to check system status, control devices, and manage daily routines from one place.
          </p>
        </section>

        {/* When Smart Home Installation Is the Right Choice */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            When Smart Home Installation Is the <span className="es-highlight">Right Choice</span>
          </h2>
          <p className="es-intro-text">
            Smart home installation is often considered during renovations or new builds, but it can also be implemented in existing properties. Many clients explore automation when they want better control, improved efficiency, or simpler management of multiple systems.
          </p>
          <p className="es-intro-text">You may benefit from smart home installation if:</p>
          <ul className="es-checklist">
            {smartHomeBenefits.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="es-intro-text">
            Homes with varied occupancy schedules often benefit from automation, as systems can adapt without constant manual adjustment. Small businesses also use smart systems to manage lighting, security, and climate more efficiently across operating hours.
          </p>
        </section>

        {/* Why Choose NZXTGEN */}
        <section className="es-content-section es-why-choose-section">
          <h2 className="es-section-heading">
            Why Choose <span className="es-highlight">NZXTGEN</span>
          </h2>
          <p className="es-intro-text es-white-text">
            NZXTGEN focuses on delivering smart home solutions that are practical, reliable, and easy to manage. We understand that technology should simplify life, not complicate it.
          </p>
          <p className="es-intro-text es-white-text es-approach-intro">Our approach includes:</p>
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

export default SmartHomeContent;
