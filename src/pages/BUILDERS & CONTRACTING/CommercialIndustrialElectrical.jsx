import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhatsappChat from "../../components/WhatsappChat";
import MobileCallButton from "../../components/MobileCallButton";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
// Assets for hero and sections – each section uses a unique image
import "./CommercialIndustrialElectrical.css";

const CommercialIndustrialElectrical = () => {
  const scopeItems = [
    { label: "Electrical installations for offices, warehouses, factories, and commercial facilities", to: "/builders-contracting/commercial-industrial-electrical" },
    { label: "Power distribution systems and switchboard installations or upgrades", to: "/switchboard-upgrade" },
    { label: "Internal and external lighting systems, including emergency and exit lighting", to: "/lighting-installation" },
    { label: "Equipment and machinery power connections", to: "/builders-contracting/commercial-industrial-electrical" },
    { label: "Electrical infrastructure for fitouts and refurbishments", to: "/services/electrical-services" },
    { label: "Ongoing electrical maintenance and fault diagnosis", to: "/services/electrical-fault-finding-repairs" },
  ];

  const fitOffServices = [
    "Final installation of lighting, power points, switches, and control systems",
    "Equipment and appliance connections",
    "Testing and commissioning of installed systems",
    "Ensuring all components are correctly labelled and documented",
  ];

  const plansInterpretation = [
    "Working from construction drawings and electrical schematics",
    "Coordinating with builders, project managers, and other trades",
    "Ensuring power capacity and circuit design match equipment requirements",
    "Adjusting installations where site conditions require approved modifications",
  ];

  const complianceProcess = [
    "Installation in accordance with Australian Standards and relevant codes",
    "Electrical testing of circuits, equipment, and safety systems",
    "Verification of load capacity, protection devices, and earthing",
    "Issuing required compliance documentation and certification",
  ];

  const cablingInstallation = [
    "Load requirements and duty cycles",
    "Environmental conditions such as heat, moisture, or mechanical stress",
    "Separation requirements between power, data, and fire systems",
    "Long-term durability and accessibility for maintenance",
  ];

  const subcontractingSupport = [
    "Electrical systems and power infrastructure",
    "Security systems including access control and CCTV",
    "Data and communications cabling",
    "Dry fire systems, including fire alarm and EWIS installations",
  ];

  const schedulingPriorities = [
    "Coordinated scheduling with site supervisors and project managers",
    "Clear communication around access requirements and timelines",
    "Staged installations to align with construction progress",
    "Minimising downtime in operational environments",
  ];

  const whyChooseItems = [
    {
      title: "Practical, standards-based approach",
      description: "Our solutions are built for real-world operational needs and compliance.",
    },
    {
      title: "Experience across electrical, data, security, and fire systems",
      description: "Integrated services for complex projects, ensuring seamless coordination.",
    },
    {
      title: "Clean, organised installations suitable for professional environments",
      description: "Work is completed neatly with minimal disruption to your operations.",
    },
    {
      title: "Clear documentation and compliance support",
      description: "All necessary certifications and documentation provided for peace of mind.",
    },
  ];

  const faqItems = [
    {
      question: "Can work be completed without disrupting operations?",
      answer: "In many cases, yes. We plan staged or after-hours work to minimise downtime wherever possible.",
    },
    {
      question: "Do you work with builders and project managers?",
      answer: "Yes. We regularly coordinate with builders, facility managers, and other contractors.",
    },
    {
      question: "Do you provide compliance documentation?",
      answer: "Yes. All required testing, certification, and compliance documentation is provided upon completion.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="CommercialIndustrialElectrical" className="commercial-industrial-page">
      <SEO
        title="Commercial & Industrial Electrician | NZXTGEN NSW"
        description="Licensed commercial and industrial electrical services for workplaces, warehouses and facilities. Safe, compliant solutions delivered by NZXTGEN."
        canonical={typeof window !== "undefined" ? window.location.origin + "/builders-contracting/commercial-industrial-electrical" : undefined}
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="commercial-industrial-content">
        <section
          className="commercial-industrial-hero"
          style={{ backgroundImage: `url("/images/services/nzxtgen-commercial-hero.webp")` }}
        >
          <div className="commercial-industrial-hero-overlay">
            <div className="commercial-industrial-hero-inner">
              <p className="commercial-industrial-kicker">Need reliable electrical support for your business or site?</p>
              <h1>Commercial & Industrial Electrician in Condell Park – NZXTGEN</h1>
              <p className="commercial-industrial-hero-subtext">
                Licensed commercial and industrial electrical services for workplaces, warehouses and facilities. Safe, compliant solutions delivered by NZXTGEN.
              </p>
              <Link className="commercial-industrial-cta" to="/free-quote">
                👉 Request a free quote
              </Link>
            </div>
          </div>
        </section>

        <section className="commercial-industrial-section">
          <div className="commercial-industrial-section-inner commercial-industrial-intro-grid">
            <div className="commercial-industrial-intro-copy">
              <h2 className="commercial-industrial-section-title">Reliable Commercial & Industrial Electrical Services in Condell Park</h2>
              <p className="commercial-industrial-lead">
                Condell Park is a well-established commercial and industrial hub in Sydney’s south-west, home to warehouses, manufacturing units, workshops, logistics facilities, retail spaces, and mixed-use developments. Electrical systems in these environments must support higher loads, stricter compliance requirements, and uninterrupted daily operations. At NZXTGEN, we provide commercial and industrial electrical services in Condell Park that are designed for reliability, safety, and long-term performance.
              </p>
              <p className="commercial-industrial-text">
                Our team works across a wide range of commercial and industrial settings, delivering structured, standards-based electrical solutions that align with building regulations, operational needs, and project timelines. Whether you are fitting out a new facility, upgrading existing infrastructure, or coordinating multiple services on a construction site, we approach every project with planning, precision, and accountability.
              </p>
            </div>
            <div className="commercial-industrial-intro-image-card">
              <img src="/images/services/nzxtgen-commercial-small-large-scale.webp" alt="Commercial electrical infrastructure" />
            </div>
          </div>
        </section>

        <section className="commercial-industrial-section commercial-industrial-feature-band">
          <div className="commercial-industrial-section-inner">
            <div className="commercial-industrial-feature-content">
              {/* <div className="commercial-industrial-feature-image">
                <img src="/images/electricity/nzxtgen-electrician-professional.webp" alt="Industrial cabling and wiring" />
              </div> */}
              <div className="commercial-industrial-feature-text">
                <h2 className="commercial-industrial-section-title">What Our Commercial & Industrial Electrical Service Covers</h2>
                <p className="commercial-industrial-text">
                  Our commercial and industrial electrical services are structured to support businesses at every stage, from initial construction through to ongoing operation and maintenance. We understand that electrical work in these environments is rarely standalone, which is why our services are designed to integrate seamlessly with data, security, and fire systems.
                </p>
                <p className="commercial-industrial-text">Our scope typically includes:</p>
                <ul className="commercial-industrial-list">
                  {scopeItems.map((item, index) => (
                    <li key={index}>
                      {typeof item === 'object' && item.to ? (
                        <Link to={item.to} className="commercial-industrial-text-link">{item.label}</Link>
                      ) : (
                        item
                      )}
                    </li>
                  ))}
                </ul>
                <p className="commercial-industrial-text">
                  Each project is assessed individually to ensure the electrical design matches how the space is used, rather than applying generic layouts or assumptions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="commercial-industrial-section">
          <div className="commercial-industrial-section-inner">
            <h2 className="commercial-industrial-section-title">Fit-Offs and Cabling for New Builds and Upgrades</h2>
            <p className="commercial-industrial-lead">
              Fit offs are a critical phase in commercial and industrial projects. This stage involves the final connection and installation of electrical equipment, fixtures, and systems once the main infrastructure is in place. In Condell Park, we regularly complete fit-offs for new builds, warehouse conversions, office interiors, and industrial refurbishments.
            </p>
            <p className="commercial-industrial-text">Our fit-off services include:</p>
            <div className="commercial-industrial-compliance-boxes">
              {fitOffServices.map((item) => (
                <div key={item} className="commercial-industrial-compliance-box">
                  <div className="commercial-industrial-compliance-box-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#667eea" strokeWidth="2" fill="none" />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="#667eea"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="commercial-industrial-compliance-box-text">{item}</p>
                </div>
              ))}
            </div>
            <p className="commercial-industrial-text">
              We also handle full cabling installations for new developments, ensuring that electrical pathways are planned efficiently, future capacity is considered, and compliance requirements are met from the outset.
            </p>
          </div>
        </section>

        <section className="commercial-industrial-section commercial-industrial-feature-band reverse">
          <div className="commercial-industrial-section-inner">
            <div className="commercial-industrial-feature-content">
              <div className="commercial-industrial-feature-image">
                <img src="/images/services/nzxtgen-commercial-interpreting-plans.webp" alt="Interpreting electrical plans" />
              </div>
              <div className="commercial-industrial-feature-text">
                <h2 className="commercial-industrial-section-title">Interpreting Plans and Working to Specifications</h2>
                <p className="commercial-industrial-lead">
                  Commercial and industrial electrical work requires strict adherence to drawings, schedules, and technical specifications. Our electricians are experienced in interpreting electrical plans, architectural layouts, and engineering documentation to ensure installations are delivered exactly as designed.
                </p>
                <p className="commercial-industrial-text">This includes:</p>
                <ul className="commercial-industrial-list">
                  {plansInterpretation.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="commercial-industrial-text">
                  By following specifications closely, we help avoid costly rework, compliance issues, and delays during inspections or handover stages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="commercial-industrial-section">
          <div className="commercial-industrial-section-inner">
            <h2 className="commercial-industrial-section-title">Compliance, Testing, and Certification</h2>
            <p className="commercial-industrial-lead">
              Compliance is a non-negotiable aspect of commercial and industrial electrical work. Electrical systems must meet Australian Standards, workplace safety regulations, and insurance requirements. NZXTGEN places strong emphasis on compliance at every stage of the project.
            </p>
            <p className="commercial-industrial-text">Our process includes:</p>
            <div className="commercial-industrial-compliance-boxes">
              {complianceProcess.map((item) => (
                <div key={item} className="commercial-industrial-compliance-box">
                  <div className="commercial-industrial-compliance-box-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#667eea" strokeWidth="2" fill="none" />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="#667eea"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="commercial-industrial-compliance-box-text">{item}</p>
                </div>
              ))}
            </div>
            <p className="commercial-industrial-text">
              Testing and certification provide assurance that systems are safe to operate, legally compliant, and ready for occupancy or use.
            </p>
          </div>
        </section>

        <section className="commercial-industrial-section commercial-industrial-feature-band reverse">
          <div className="commercial-industrial-section-inner">
            <div className="commercial-industrial-feature-content">
              <div className="commercial-industrial-feature-image">
                <img src="/images/services/nzxtgen-industrial-cabling-compliance.webp" alt="Industrial cabling compliance" />
              </div>
              <div className="commercial-industrial-feature-text">
                <h2 className="commercial-industrial-section-title">Industrial & Commercial Cabling Specifications and Compliance</h2>
                <p className="commercial-industrial-lead">
                  One of the most critical elements of industrial and commercial electrical work is cabling design and installation. Incorrect cable selection, routing, or termination can lead to overheating, voltage drop, operational faults, and compliance failures.
                </p>
                <p className="commercial-industrial-text">We ensure all cabling is installed to suit:</p>
                <ul className="commercial-industrial-list">
                  {cablingInstallation.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="commercial-industrial-text">
                  Our approach to cabling is structured, clearly labelled, and compliant, making future upgrades or fault-finding significantly easier and safer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="commercial-industrial-section">
          <div className="commercial-industrial-section-inner">
            <h2 className="commercial-industrial-section-title">Sub-Contracting for Electrical & LV Systems</h2>
            <p className="commercial-industrial-lead">
              NZXTGEN is willing to undertake works as a subcontractor on larger commercial and industrial projects, providing coordinated cabling and electrical services alongside builders and specialist contractors. This includes structured collaboration on multi-discipline sites where precision and scheduling are essential.
            </p>
            <p className="commercial-industrial-text">Our subcontracting support covers cabling and electrical work for:</p>
            <div className="commercial-industrial-compliance-boxes">
              {subcontractingSupport.map((item) => (
                <div key={item} className="commercial-industrial-compliance-box">
                  <div className="commercial-industrial-compliance-box-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#667eea" strokeWidth="2" fill="none" />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="#667eea"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p className="commercial-industrial-compliance-box-text">{item}</p>
                </div>
              ))}
            </div>
            <p className="commercial-industrial-text">
              Dry fire systems are critical life-safety components, and correct cabling, segregation, and compliance are essential. We ensure these systems are installed in accordance with standards and integrated correctly with other building services.
            </p>
          </div>
        </section>

        <section className="commercial-industrial-section commercial-industrial-feature-band reverse">
          <div className="commercial-industrial-section-inner">
            <div className="commercial-industrial-feature-content">
              <div className="commercial-industrial-feature-image">
                <img src="/images/services/nzxtgen-commercial-reliable-scheduling.webp" alt="Electrical project coordination" />
              </div>
              <div className="commercial-industrial-feature-text">
                <h2 className="commercial-industrial-section-title">Reliable Scheduling and Site Coordination</h2>
                <p className="commercial-industrial-lead">
                  Commercial and industrial projects often involve tight timelines, multiple trades, and staged handovers. We understand the importance of reliable scheduling and clear communication in maintaining project momentum.
                </p>
                <p className="commercial-industrial-text">Our team prioritises:</p>
                <ul className="commercial-industrial-list">
                  {schedulingPriorities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="commercial-industrial-text">
                  This structured approach helps reduce delays and ensures electrical work integrates smoothly into the broader project schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="commercial-industrial-section">
          <div className="commercial-industrial-section-inner">
            <h2 className="commercial-industrial-section-title">Industrial Power and Higher Amp Outlets</h2>
            <p className="commercial-industrial-lead">
              Many industrial and commercial facilities in Condell Park require higher-capacity power outlets to support equipment and machinery. Depending on operational needs, installations may include options such as a 15-amp single-phase outlet for specialised equipment, a 20-amp dedicated GPO for consistent power supply, or higher-capacity connections like a 32-amp industrial single-phase outlet. Larger facilities may also utilise a 3-phase industrial socket to support heavy-duty machinery and balanced power distribution.
            </p>
            <p className="commercial-industrial-text">
              These outlet types are selected based on equipment specifications, load requirements, and compliance considerations, ensuring safe and reliable operation without overloading circuits.
            </p>
          </div>
        </section>

        <section
          className="commercial-industrial-section commercial-industrial-why-choose"
          style={{ backgroundImage: `url("/images/services/nzxtgen-commercial-bottom.webp")` }}
        >
          <div className="commercial-industrial-why-choose-overlay">
            <div className="commercial-industrial-section-inner">
              <h2 className="commercial-industrial-section-title commercial-industrial-title-light">Why Businesses in Condell Park Choose NZXTGEN</h2>
              <p className="commercial-industrial-text commercial-industrial-text-light">
                Businesses across Condell Park rely on NZXTGEN because we understand the operational realities of commercial and industrial environments. Our work is structured, compliant, and focused on long-term reliability rather than short-term fixes.
              </p>
              <p className="commercial-industrial-text commercial-industrial-text-light commercial-industrial-approach-intro">Clients value our:</p>
              <div className="commercial-industrial-key-reasons">
                <div className="commercial-industrial-key-reasons-grid">
                  {whyChooseItems.map((reason, index) => (
                    <div key={index} className="commercial-industrial-key-reason-card">
                      <div className="commercial-industrial-key-reason-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="2" fill="none" />
                          <path
                            d="M8 12L11 15L16 9"
                            stroke="#ffffff"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <h3 className="commercial-industrial-key-reason-title">{reason.title}</h3>
                      <p className="commercial-industrial-key-reason-description">{reason.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="commercial-industrial-text commercial-industrial-text-light">
                Being familiar with Condell Park’s industrial zones, warehouse layouts, and commercial property types allows us to plan efficiently and avoid common site challenges.
              </p>
            </div>
          </div>
        </section>

        <section className="commercial-industrial-cta-band">
          <div className="commercial-industrial-cta-band-inner">
            <h2 className="commercial-industrial-cta-band-title">Plan Your Commercial or Industrial Electrical Work with Confidence</h2>
            <Link className="commercial-industrial-cta-band-button" to="/free-quote">
              👉 Request a free quote today
            </Link>
          </div>
        </section>

        <section className="commercial-industrial-section commercial-industrial-faq-section">
          <div className="commercial-industrial-section-inner">
            <h2 className="commercial-industrial-section-title">Commercial & Industrial Electrical FAQs</h2>
            <div className="commercial-industrial-faq">
              {faqItems.map((item, index) => (
                <div
                  key={item.question}
                  className={`commercial-industrial-faq-item ${openIndexes.includes(index) ? "active" : ""}`}
                >
                  <button
                    className="commercial-industrial-faq-question"
                    type="button"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>
                    <span className="commercial-industrial-faq-icon">
                      {openIndexes.includes(index) ? "–" : "+"}
                    </span>
                  </button>
                  <div className="commercial-industrial-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CommercialIndustrialElectrical;
