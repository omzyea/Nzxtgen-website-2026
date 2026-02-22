import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import ServiceSidebar from './ServiceSidebar';
import './ElectricServiceContent.css';

const PowerPointsElectricalUpgradesContent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqItems = [
    {
      question: "Can power points be installed outdoors?",
      answer: "Yes. Weather-rated outdoor power points can be installed for patios, gardens or external equipment use."
    },
    {
      question: "Do electrical upgrades always require switchboard changes?",
      answer: "Not always. Some upgrades can be completed within existing capacity, while others may require switchboard improvements to support added load."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const whenYouNeedUs = [
    { label: "Regular use of power boards or extension leads", to: "/services/electrical-services" },
    { label: "Insufficient outlets in kitchens, living areas or workspaces", to: "/new-builds-renovations" },
    { label: "Installing new appliances such as ovens, air conditioners or office equipment", to: "/new-builds-renovations" },
    { label: "Renovations or room reconfigurations that change how spaces are used", to: "/new-builds-renovations" },
    { label: "Overloading power boards (common warning sign)", to: "/electrical-fault-finding-repairs" },
    { label: "Renovations, extensions or office fitouts requiring additional circuits", to: "/new-builds-renovations" },
    { label: "Older wiring or outdated switchboards unable to safely handle modern electrical loads", to: "/switchboard-upgrade" }
  ];

  const whyChooseUs = [
    "Assessing existing circuits and load capacity",
    "Advising on suitable outlet types and locations",
    "Planning upgrades that support current and future use",
    "Completing installations neatly and with minimal disruption",
    "Positioning power points logically for real-world use and furniture layouts",
    "Concealing cabling where possible and leaving work areas tidy",
    "Clear communication—explaining what is required and why",
    "Experience across residential and small commercial environments"
  ];

  return (
    <div className="es-two-column-layout">
      <ServiceSidebar />

      <main className="es-main-content">
        {/* Intro CTA */}
        <section className="es-content-section">
          <p className="es-intro-text">
            Need more power or safer wiring?{' '}
            <Link to="/free-quote" className="es-cta-link">
              Request a free quote →
            </Link>
          </p>
        </section>

        {/* What This Service Is */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            What This <span className="es-highlight">Service Is</span>
          </h2>
          <p className="es-intro-text">
            Power points and electrical upgrades focus on improving how electricity is delivered, distributed and used throughout a property. As homes and workplaces rely on more appliances, technology and charging devices than ever before, existing electrical setups often struggle to keep up. This service ensures electrical systems remain safe, compliant and practical for modern use.
          </p>
          <p className="es-intro-text">
            We install new power points where they are genuinely needed, including standard outlets, USB charging points and dedicated circuits for higher-load appliances. Installations can be internal or external, depending on usage requirements, and are positioned to suit how spaces are used rather than relying on outdated layouts.
          </p>
          <p className="es-intro-text">
            Electrical upgrades go beyond simply adding outlets. In many cases, additional power points require improvements to wiring, circuit protection or switchboard capacity to safely support increased electrical demand. This may involve redistributing loads across circuits, upgrading cabling or installing modern safety devices to protect both people and equipment.
          </p>
          <p className="es-intro-text">
            All work is completed to current Australian Standards and tested thoroughly before completion. The goal is not just convenience, but long-term safety, reliability and flexibility as electrical needs continue to evolve.
          </p>
          <p className="es-intro-text">
            This service is suitable for residential properties, home offices and small commercial spaces where electrical usage has increased, or layouts have changed over time.
          </p>
        </section>

        {/* When You Need Power Point Upgrades */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            When You Need <span className="es-highlight">Power Point Upgrades</span>
          </h2>
          <p className="es-intro-text">
            Many properties were built when electrical demands were significantly lower. Today's reliance on multiple appliances, devices and charging equipment often exceeds the original design of the electrical system. Power point upgrades become necessary when existing infrastructure no longer supports everyday use safely.
          </p>
          <p className="es-intro-text">Common situations where upgrades are required include:</p>
          <ul className="es-checklist">
            {whenYouNeedUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                <span>
                  {typeof item === 'object' && item.to ? (
                    <Link to={item.to} className="es-text-link">{item.label}</Link>
                  ) : (
                    item
                  )}
                </span>
              </li>
            ))}
          </ul>
          <p className="es-intro-text">
            Overloading power boards is a common warning sign. While they seem convenient, they increase the risk of overheating, tripped circuits and electrical faults. Installing additional power points reduces reliance on temporary solutions and improves overall safety.
          </p>
          <p className="es-intro-text">
            Electrical upgrades are also important when properties undergo changes such as renovations, extensions or office fitouts. Adding new lighting, appliances or technology often requires additional circuits or upgraded load capacity to prevent ongoing issues.
          </p>
          <p className="es-intro-text">
            Older wiring or outdated switchboards may not be able to safely handle modern electrical loads. In these cases, power point upgrades often go together with broader electrical improvements to ensure compliance and reliability.
          </p>
          <p className="es-intro-text">
            Proactive upgrades help prevent faults, reduce fire risk and ensure electrical systems remain functional as needs change.
          </p>
        </section>

        {/* Why Choose NZXTGEN */}
        <section className="es-content-section es-why-choose-section">
          <h2 className="es-section-heading">
            Why Choose <span className="es-highlight">NZXTGEN</span>
          </h2>
          <p className="es-intro-text es-white-text">
            NZXTGEN approaches power point installations and electrical upgrades with a focus on practicality, safety and long-term usability. We do not simply add outlets where requested without considering the broader electrical system and how it will perform under load.
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
            Power points are positioned logically to suit real-world use, furniture layouts and appliance placement. This reduces the need for trailing leads and improves everyday convenience.
          </p>
          <p className="es-intro-text es-white-text">
            We also take care to maintain the appearance of the property. Cabling is concealed where possible, fittings are installed cleanly, and work areas are left tidy once the job is complete.
          </p>
          <p className="es-intro-text es-white-text">
            Clear communication is central to our service. We explain what upgrades are required, why they are necessary and how they improve safety and performance. Clients are kept informed throughout the process, with no unexpected changes or unclear outcomes.
          </p>
          <p className="es-intro-text es-white-text">
            Our experience across residential and small commercial environments allows us to tailor solutions to different property types and usage patterns. Whether upgrading a single room or improving electrical capacity across an entire property, the approach remains consistent and reliable.
          </p>
          <p className="es-intro-text es-white-text">
            We provide power point installations and electrical upgrades throughout Condell Park and the surrounding south-west Sydney region.
          </p>
        </section>

        {/* CTA */}
        <section className="es-content-section">
          <p className="es-intro-text" style={{ textAlign: 'center', fontWeight: 600 }}>
            Improve safety and functionality.{' '}
            <Link to="/free-quote" className="es-cta-link">
              Get your free quote today →
            </Link>
          </p>
        </section>

        {/* FAQ Section */}
        <section className="es-content-section es-faq-section">
          <h2 className="es-section-heading">
            Power Points & Electrical Upgrades - <span className="es-highlight">FAQs</span>
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
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 12h8" />
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8M8 12h8" />
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

export default PowerPointsElectricalUpgradesContent;
