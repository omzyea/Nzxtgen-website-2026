import React, { useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import './SmartHomeMoreInfoContent.css';

const SmartHomeMoreInfoContent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqItems = [
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

  const benefits = [
    "Lighting and climate control are used inconsistently",
    "Multiple systems operate independently and feel disjointed",
    "Security monitoring requires separate platforms",
    "Energy usage is difficult to manage",
    "Daily routines would benefit from automation"
  ];

  const processSteps = [
    "Understanding how the space is used",
    "Identifying which systems benefit from automation",
    "Designing integration that avoids unnecessary complexity",
    "Installing and configuring systems correctly",
    "Explaining operation clearly at handover"
  ];

  return (
    <div className="shmi-container">
      {/* Intro Section */}
      <section className="shmi-intro">
        <p className="shmi-intro-text">
          This page provides detailed information about smart home installation, system types, controls, and what to consider when planning your smart home project.
        </p>
      </section>

      {/* Local and Cloud-Based Systems */}
      <section className="shmi-section">
        <h2 className="shmi-section-heading">
          Local and Cloud-Based <span className="shmi-highlight">Systems</span>
        </h2>
        <p className="shmi-text">
          Smart home systems can operate locally, through cloud services, or a combination of both. Local systems continue to function even if internet access is interrupted, while cloud-based systems offer remote access and updates.
        </p>
        <p className="shmi-text">
          We explain the differences clearly, so clients understand how their system operates, what relies on internet connectivity, and what continues to function independently. This transparency allows informed decisions about reliability, access, and long-term usability.
        </p>
      </section>

      {/* Switches, Controls, and Centralised Access */}
      <section className="shmi-section">
        <h2 className="shmi-section-heading">
          Switches, Controls, and Centralised <span className="shmi-highlight">Access</span>
        </h2>
        <p className="shmi-text">
          Physical switches remain an important part of smart home design. Smart switches allow users to control lighting and systems manually while also enabling automation and remote access. Proper switch placement ensures systems remain intuitive for all occupants, including visitors.
        </p>
        <p className="shmi-text">
          Centralised monitoring is another key feature. Smart home systems can be viewed and managed from a single interface, such as a tablet or wall-mounted touch panel. This allows users to check system status, control devices, and manage daily routines from one place. These interfaces can also support household reminders or task lists, helping technology blend naturally into everyday life.
        </p>
      </section>

      {/* When Smart Home Installation Is the Right Choice */}
      <section className="shmi-section">
        <h2 className="shmi-section-heading">
          When Smart Home Installation Is the <span className="shmi-highlight">Right Choice</span>
        </h2>
        <p className="shmi-text">
          Smart home installation is often considered during renovations or new builds, but it can also be implemented in existing properties. Many clients explore automation when they want better control, improved efficiency, or simpler management of multiple systems.
        </p>
        <p className="shmi-text">You may benefit from smart home installation if:</p>
        <ul className="shmi-checklist">
          {benefits.map((benefit, index) => (
            <li key={index}>
              <FaCheckCircle className="shmi-check-icon" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <p className="shmi-text">
          Homes with varied occupancy schedules often benefit from automation, as systems can adapt without constant manual adjustment. Small businesses also use smart systems to manage lighting, security, and climate more efficiently across operating hours.
        </p>
        <p className="shmi-text">
          Smart home solutions are especially valuable where reliability and simplicity are priorities. A properly designed system reduces the need for constant interaction while remaining easy to override when needed.
        </p>
      </section>

      {/* Why Choose NZXTGEN */}
      <section className="shmi-section shmi-why-choose">
        <h2 className="shmi-section-heading">
          Why Choose <span className="shmi-highlight">NZXTGEN</span>
        </h2>
        <p className="shmi-text shmi-white-text">
          NZXTGEN approaches smart home installation with care and precision. We recognise that automation systems must be dependable, understandable, and suited to long-term use. Our role is to translate technical capability into practical solutions that work seamlessly in real environments.
        </p>
        <p className="shmi-text shmi-white-text shmi-approach-intro">Our process includes:</p>
        <ul className="shmi-checklist shmi-white-checklist">
          {processSteps.map((step, index) => (
            <li key={index}>
              <FaCheckCircle className="shmi-check-icon" />
              <span>{step}</span>
            </li>
          ))}
        </ul>
        <p className="shmi-text shmi-white-text">
          We focus on clean installation and logical system design, ensuring cabling, controls, and interfaces are placed where they make sense. Every system is tested thoroughly before completion to confirm reliability and responsiveness.
        </p>
        <p className="shmi-text shmi-white-text">
          Importantly, we avoid overloading systems with features that are unlikely to be used. Smart technology should simplify daily life, not add layers of confusion. Our designs prioritise clarity, flexibility, and ease of control.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="shmi-section shmi-faq-section">
        <h2 className="shmi-section-heading">
          Frequently Asked <span className="shmi-highlight">Questions</span>
        </h2>
        <div className="shmi-faq-list">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className={`shmi-faq-item ${openFaqIndex === index ? 'active' : ''}`}
            >
              <button 
                className="shmi-faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span className="shmi-faq-number">{index + 1}.</span>
                <span className="shmi-faq-question-text">{item.question}</span>
                <span className="shmi-faq-icon">
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
              <div className="shmi-faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SmartHomeMoreInfoContent;
