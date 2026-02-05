import React, { useState } from 'react';
import { 
  FaCheckCircle,
  FaBolt,
  FaShieldAlt,
  FaPlug,
  FaTools
} from 'react-icons/fa';
import ServiceSidebar from './ServiceSidebar';
import './ElectricServiceContent.css';

const SwitchBoardContent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqItems = [
    {
      question: "Will my power be off during a switchboard upgrade?",
      answer: "Yes, power will need to be temporarily disconnected. We plan work efficiently to keep outages as short as possible."
    },
    {
      question: "Do I need to upgrade my switchboard for renovations?",
      answer: "Often, yes. Renovations typically increase electrical demand and may require updated protection to meet compliance."
    },
    {
      question: "Are safety switches installed on all circuits?",
      answer: "Where required, safety switches are installed to provide protection across relevant circuits in line with current standards."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const coreServices = [
    {
      id: "upgrade-process",
      icon: <FaBolt />,
      title: "Switchboard Upgrade Process",
      text: "A switchboard upgrade involves replacing an outdated electrical board with a modern system that uses circuit breakers and safety switches. This improves protection against electrical faults, ensures compliance with Australian Standards, and allows a home to safely handle modern electrical loads without unnecessary risk."
    },
    {
      id: "safety-protection",
      icon: <FaShieldAlt />,
      title: "Safety Switches & Circuit Protection",
      text: "Modern switchboards replace ceramic fuses with circuit breakers and residual current devices (RCDs), commonly known as safety switches. These devices respond quickly to faults, reducing the risk of electric shock, fire, or equipment damage. Individual circuit protection ensures that faults are isolated quickly."
    },
    {
      id: "consumer-mains",
      icon: <FaPlug />,
      title: "Consumer Mains and Service Fuses",
      text: "Switchboard upgrades often involve reviewing the condition and compliance of consumer mains and service fuses. Older mains cables or fuse arrangements may not meet current standards or support increased electrical demand. Where required, these components can be replaced, upgraded, or relocated to improve safety, accessibility, and compliance."
    },
    {
      id: "testing-commissioning",
      icon: <FaTools />,
      title: "Testing and Commissioning",
      text: "At the end of the upgrade process, the system is tested to confirm correct operation, fault protection, and reliable power distribution throughout the home. All switchboard upgrades are completed by licensed electricians and aligned with current Australian Standards."
    }
  ];

  const whenYouNeedUs = [
    "The switchboard still uses ceramic fuses",
    "Power trips frequently or circuits overload",
    "New appliances cause lights to dim or breakers to trip",
    "There are no safety switches installed",
    "Renovations or extensions are planned",
    "You are adding higher-demand equipment"
  ];

  const whyChooseUs = [
    "Thorough assessment of existing electrical systems",
    "Clear explanations of what is required and why",
    "Neat, well-organised installations",
    "Full testing and commissioning before completion",
    "Minimised downtime and power interruptions"
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
            Electrical switchboards are the control centre of a home's electrical system. As households 
            rely on more appliances, technology, and high-demand equipment, older switchboards often 
            struggle to keep up. Many homes still operate with switchboards installed decades ago, 
            long before current safety expectations existed.
          </p>
          <p className="es-intro-text">
            NZXTGEN provides professional electrical switchboard upgrades designed to improve safety, 
            compliance, and performance in residential properties. Upgrading the switchboard is a 
            practical step toward protecting occupants, preventing electrical damage, and allowing 
            future electrical improvements without limitation.
          </p>
        </section>

        {/* What Switchboard Upgrades Cover */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            What Switchboard Upgrades <span className="es-highlight">Cover</span>
          </h2>
          <p className="es-intro-text">
            A switchboard upgrade is more than simply swapping out old components. It is a structured 
            process that ensures the entire electrical protection system works correctly and safely. 
            Upgrades are completed in line with Australian Standards, ensuring that the installation 
            meets current regulatory and safety requirements.
          </p>
        </section>

        {/* Core Services Grid */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Our Switchboard Upgrade <span className="es-highlight">Services</span>
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

        {/* When You May Need a Switchboard Upgrade */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            When You May Need a <span className="es-highlight">Switchboard Upgrade</span>
          </h2>
          <p className="es-intro-text">
            Many homeowners are unaware that their switchboard is outdated until a problem occurs. 
            In most cases, warning signs appear gradually and should not be ignored. Older switchboards 
            were not designed to support modern living. Appliances such as air conditioning, induction 
            cooktops, EV chargers, and home office equipment place increased demand on electrical systems.
          </p>
          <p className="es-intro-text">You may need a switchboard upgrade if:</p>
          <ul className="es-checklist">
            {whenYouNeedUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="es-intro-text">
            Switchboard upgrades are also commonly required when renovating or selling a home. Bringing 
            the electrical system up to current standards helps avoid compliance issues and improves 
            overall property safety. For small businesses operating from residential properties, an 
            upgraded switchboard ensures that equipment runs reliably and safely without placing stress 
            on outdated infrastructure.
          </p>
        </section>

        {/* Why Choose NZXTGEN */}
        <section className="es-content-section es-why-choose-section">
          <h2 className="es-section-heading">
            Why Choose <span className="es-highlight">NZXTGEN</span>
          </h2>
          <p className="es-intro-text es-white-text">
            NZXTGEN approaches switchboard upgrades with a strong focus on safety, clarity, and 
            long-term performance. We take the time to assess each property individually rather than 
            applying one-size-fits-all solutions. We understand that switchboard work can feel 
            disruptive, which is why we plan upgrades carefully to minimise downtime and inconvenience.
          </p>
          <p className="es-intro-text es-white-text es-approach-intro">Our work is based on:</p>
          <ul className="es-checklist es-white-checklist">
            {whyChooseUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="es-intro-text es-white-text">
            Where possible, work is scheduled efficiently so power interruptions are kept to a minimum. 
            All switchboard upgrades are completed by licensed electricians and aligned with current 
            Australian Standards. Clients are left with a system that is safer, easier to manage, and 
            capable of supporting future electrical needs. We also ensure that homeowners understand how 
            their new switchboard functions, including how safety switches operate and what to do if a 
            circuit trips.
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

export default SwitchBoardContent;
