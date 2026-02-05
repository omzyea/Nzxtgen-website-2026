import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhatsappChat from "../../components/WhatsappChat";
import MobileCallButton from "../../components/MobileCallButton";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import complianceHero from "../../assets/services/nzxtgen-commercial-electrical-service.webp";
import electricianWorking from "../../assets/electricity/electrician-1.WEBP";
import circuitImage from "../../assets/electricity/circuit-1.WEBP";
import whyChooseBg from "../../assets/services/nzxtgen-compliance-electrical-service.webp";
import "./ComplianceLicence.css";

const ComplianceLicence = () => {
  const safetyProcesses = [
    "Risk assessments conducted prior to work",
    "Compliant isolation and lock-out procedures",
    "Clear identification of live services",
    "Clean, safe, and respectful work sites",
  ];

  const complianceEnvironments = [
    "Homes and renovations",
    "New residential builds",
    "Commercial and industrial premises",
    "Strata and real estate maintenance",
    "Builder handovers and defect rectifications",
  ];

  const serviceTriggers = [
    "Building a new home or commercial property",
    "Renovating kitchens, bathrooms, or extensions",
    "Upgrading outdated wiring or switchboards",
    "Preparing for council, strata, or insurance inspections",
    "Completing builder handovers or rectifications",
    "Addressing safety concerns or repeated electrical faults",
  ];

  const complianceRisks = [
    "Void home or business insurance policies",
    "Fail council or strata inspections",
    "Create fire and electrical safety risks",
    "Require costly rectification work later",
  ];

  const keyReasons = [
    {
      title: "Fully Licensed Services",
      description: "All work performed under Electrical Licence No. 486465C by qualified professionals.",
    },
    {
      title: "Clear Safety & Compliance Processes",
      description: "Structured approach with transparent documentation and risk management.",
    },
    {
      title: "Practical Solutions for Real-World Use",
      description: "Compliance that works in practice, not just on paper.",
    },
    {
      title: "Clean Workmanship & Organized Sites",
      description: "Professional installations that meet inspection standards.",
    },
    {
      title: "Reliable Communication",
      description: "Clear documentation and updates throughout projects.",
    },
  ];

  const faqItems = [
    {
      question: "Do I need a licensed electrician for renovation work?",
      answer: "Yes. All electrical work in Australia must be completed by a licensed electrician.",
    },
    {
      question: "Will non-compliant work affect my insurance?",
      answer:
        "It can. Insurance claims may be denied if electrical work is unlicensed or non-compliant.",
    },
    {
      question: "Do you provide compliance documentation if required?",
      answer: "Yes. We ensure work meets inspection and handover requirements.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="ComplianceLicence" className="compliance-page">
      <SEO
        title="Licensed Electrical Services & Compliance | NZXTGEN"
        description="Licensed electrical services compliant with Australian standards. Residential, commercial and construction electrical works delivered safely by NZXTGEN."
        canonical={
          typeof window !== "undefined"
            ? window.location.origin + "/compliance-licensing"
            : undefined
        }
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="compliance-content">
        <section
          className="compliance-hero"
          style={{ backgroundImage: `url(${complianceHero})` }}
        >
          <div className="compliance-hero-overlay">
            <div className="compliance-hero-inner">
              <p className="compliance-kicker">Need licensed, compliant electrical work you can rely on?</p>
              <h1>Licences & Compliance – NZXTGEN</h1>
              <p className="compliance-hero-subtext">
                Licensed electrical services compliant with Australian standards. Residential,
                commercial and construction electrical works delivered safely by NZXTGEN.
              </p>
              <Link className="compliance-cta" to="/free-quote">
                👉 Speak with NZXTGEN today to discuss your project
              </Link>
            </div>
          </div>
        </section>

        <section className="compliance-section compliance-intro-section">
          <div className="compliance-section-inner">
            <div className="compliance-intro-content">
              <p className="compliance-intro-text">
                Electrical work is not just about functionality — it is about safety, compliance, and
                long-term reliability. Whether you are building a new property, renovating an existing
                space, or managing ongoing electrical needs, all electrical work must meet strict
                Australian standards and legal requirements.
              </p>
              <p className="compliance-intro-text">
                NZXTGEN provides licensed electrical services for residential, commercial, and
                construction projects. Our work is delivered with a strong focus on compliance, risk
                management, and practical outcomes that protect property owners, occupants, and
                builders. Every project is approached methodically, with safety and regulations at the
                forefront.
              </p>
            </div>
          </div>
        </section>

        <section className="compliance-section">
          <div className="compliance-section-inner">
            <h2 className="compliance-section-title">What This Electrical Service Covers</h2>
            <p className="compliance-text">
              Electrical services for new builds, renovations, and ongoing works require planning,
              technical knowledge, and licensed execution. Each stage of work must align with Australian
              Standards, wiring rules, and site-specific safety requirements.
            </p>

            <div className="compliance-service-cards">
              <div className="compliance-service-card">
                <div className="compliance-service-card-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect x="4" y="6" width="24" height="20" rx="2" stroke="#365996" strokeWidth="2" fill="none" />
                    <path d="M8 12H24M8 16H24M8 20H20" stroke="#365996" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="compliance-service-card-title">Licensed Electrical Work for New Builds</h3>
                <p className="compliance-text">
                  New construction projects require complete electrical design and installation from the
                  ground up. This includes power distribution, lighting, appliance circuits, safety
                  devices, and compliance documentation.
                </p>
                <p className="compliance-text">
                  We work alongside builders and trades to ensure electrical installations are completed
                  at the correct construction stages. All cabling, switchboards, and fixtures are
                  installed to current wiring rules, allowing for future expansion and upgrades without
                  compromising safety.
                </p>
              </div>

              <div className="compliance-service-card">
                <div className="compliance-service-card-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M16 4L20 12H28L22 17L24 25L16 20L8 25L10 17L4 12H12L16 4Z"
                      stroke="#365996"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <h3 className="compliance-service-card-title">Renovation & Upgrade Electrical Services</h3>
                <p className="compliance-text">
                  Renovations often involve modifying or upgrading existing electrical systems to suit
                  new layouts or increased electrical demand. Older wiring may no longer meet modern
                  safety requirements, making compliance checks essential.
                </p>
                <p className="compliance-text">
                  NZXTGEN carries out electrical upgrades that align with current regulations, including
                  circuit protection, earthing, and load management. Power and lighting layouts are
                  updated to suit the renovated space, with careful consideration given to accessibility
                  and future needs.
                </p>
              </div>

              <div className="compliance-service-card">
                <div className="compliance-service-card-icon">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="16" r="10" stroke="#365996" strokeWidth="2" fill="none" />
                    <path d="M12 16L15 19L20 14" stroke="#365996" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="compliance-service-card-title">Ongoing Electrical Services & Maintenance</h3>
                <p className="compliance-text">
                  Ongoing electrical support is essential for homes, small businesses, and managed
                  properties. Electrical systems experience wear over time, and faults can pose safety
                  risks if not addressed early.
                </p>
                <p className="compliance-text">
                  We provide ongoing electrical services including fault finding, repairs, compliance
                  upgrades, and system modifications. Each task is assessed for safety risks before work
                  begins, ensuring minimal disruption and safe outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="compliance-section compliance-standards-section">
          <div className="compliance-section-inner">
            <h2 className="compliance-section-title">Licence, Compliance & Safety Standards</h2>
            <div className="compliance-standards-grid">
              <div className="compliance-standards-content">
                <div className="compliance-licence-badge">
                  <div className="compliance-licence-number">486465C</div>
                  <div className="compliance-licence-label">Electrical Licence</div>
                </div>
                <p className="compliance-text">
                  All electrical work carried out by NZXTGEN is performed under Electrical Licence No.
                  486465C. Licensing is a legal requirement in Australia and ensures that work is
                  completed by a qualified professional with verified training and experience.
                </p>
              </div>
              <div className="compliance-standards-image">
                <img src={electricianWorking} alt="Licensed electrician performing compliant electrical work" />
              </div>
            </div>

            <div className="compliance-standards-details">
              <div className="compliance-standard-item">
                <h3 className="compliance-subtitle">Compliance with Australian Standards</h3>
                <p className="compliance-text">
                  We comply with all applicable Australian Standards and wiring rules, ensuring
                  installations meet legal and safety requirements. This includes correct cable sizing,
                  circuit protection, isolation procedures, and installation methods.
                </p>
              </div>

              <div className="compliance-standard-item">
                <h3 className="compliance-subtitle">Safe Work Method Statements (SWMS)</h3>
                <p className="compliance-text">
                  For applicable jobs, Safe Work Method Statements are prepared and followed. These
                  outline the steps required to complete work safely and identify potential hazards
                  before work commences.
                </p>
                <p className="compliance-text">Our safety processes include:</p>
                <ul className="compliance-list">
                  {safetyProcesses.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="compliance-text">
                  These measures protect occupants, trades, and property while ensuring work proceeds
                  efficiently.
                </p>
              </div>

              <div className="compliance-standard-item">
                <h3 className="compliance-subtitle">Residential, Commercial & Construction Compliance</h3>
                <p className="compliance-text">
                  NZXTGEN ensures electrical compliance across a wide range of property types and
                  project scopes. Our services support:
                </p>
                <ul className="compliance-list">
                  {complianceEnvironments.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="compliance-text">
                  Each environment has unique compliance requirements. We understand the expectations of
                  councils, strata managers, and inspectors, ensuring electrical work passes inspection
                  and avoids delays or rework.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="compliance-section">
          <div className="compliance-section-inner">
            <h2 className="compliance-section-title">When You Need Licensed & Compliant Electrical Services</h2>
            <p className="compliance-text">
              Electrical compliance is critical at multiple stages of a property's lifecycle. You may
              require licensed electrical services when:
            </p>
            <ul className="compliance-list">
              {serviceTriggers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="compliance-text">
              Using a licensed electrician ensures work is completed legally and safely, protecting both
              occupants and property owners.
            </p>
          </div>
        </section>

        <section className="compliance-section compliance-risks-section">
          <div className="compliance-section-inner">
            <div className="compliance-risks-content">
              <div className="compliance-risks-image">
                <img src={circuitImage} alt="Compliant electrical installation and safety standards" />
              </div>
              <div className="compliance-risks-text">
                <h2 className="compliance-section-title">Why Choosing a Licensed Electrician Matters</h2>
                <p className="compliance-text">
                  Using an unlicensed or non-compliant electrician can result in serious consequences.
                  Electrical work that does not meet standards may:
                </p>
                <ul className="compliance-list">
                  {complianceRisks.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="compliance-text">
                  NZXTGEN provides peace of mind by ensuring all work is compliant, documented, and
                  completed by a licensed professional. We prioritise long-term safety over shortcuts,
                  reducing risk for property owners and project managers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="compliance-section compliance-why-choose"
          style={{ backgroundImage: `url(${whyChooseBg})` }}
        >
          <div className="compliance-why-choose-overlay">
            <div className="compliance-section-inner">
              <h2 className="compliance-section-title compliance-title-light">Why Choose NZXTGEN</h2>
              <p className="compliance-text compliance-text-light">
                NZXTGEN delivers electrical services with a strong compliance-first approach. Our work
                is structured, transparent, and aligned with Australian regulations.
              </p>
              <p className="compliance-text compliance-text-light">
                We understand the importance of getting electrical work right the first time,
                particularly in construction and renovation environments where compliance is critical.
              </p>
              <div className="compliance-key-reasons">
                <div className="compliance-key-reasons-grid">
                  {keyReasons.map((reason, index) => (
                    <div key={index} className="compliance-key-reason-card">
                      <div className="compliance-key-reason-icon">
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
                      <h3 className="compliance-key-reason-title">{reason.title}</h3>
                      <p className="compliance-key-reason-description">{reason.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="compliance-cta-band">
          <div className="compliance-cta-band-inner">
            <h2 className="compliance-cta-band-title">Need compliant electrical work completed correctly?</h2>
            <Link className="compliance-cta-band-button" to="/free-quote">
              👉 Contact NZXTGEN today to arrange a licensed electrical service
            </Link>
          </div>
        </section>

        <section className="compliance-section compliance-faq-section">
          <div className="compliance-section-inner">
            <h2 className="compliance-section-title">Electrical Compliance FAQs</h2>
            <div className="compliance-faq">
              {faqItems.map((item, index) => (
                <div
                  key={item.question}
                  className={`compliance-faq-item ${openIndexes.includes(index) ? "active" : ""}`}
                >
                  <button
                    className="compliance-faq-question"
                    type="button"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>
                    <span className="compliance-faq-icon">
                      {openIndexes.includes(index) ? "–" : "+"}
                    </span>
                  </button>
                  <div className="compliance-faq-answer">
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

export default ComplianceLicence;
