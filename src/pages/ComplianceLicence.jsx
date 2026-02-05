import React from "react";
import { Link } from "react-router-dom";
import WhatsappChat from "../components/WhatsappChat";
import MobileCallButton from "../components/MobileCallButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import "./ComplianceLicence.css";

const ComplianceLicence = ({
  canonicalPath = "/compliance-licence",
  pageTitle = "Licensed Electrical Services & Compliance | NZXTGEN",
  pageDescription =
    "Licensed electrical services compliant with Australian standards. Residential, commercial and construction electrical works delivered safely by NZXTGEN.",
}) => {
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

  const reasonsList = [
    "Fully licensed electrical services",
    "Clear safety and compliance processes",
    "Practical solutions suited to real-world use",
    "Clean workmanship and organized sites",
    "Reliable communication throughout projects",
  ];

  const faqItems = [
    {
      question: "Do I need a licensed electrician for renovation work?",
      answer: "Yes. All electrical work in Australia must be completed by a licensed electrician.",
    },
    {
      question: "Will non-compliant work affect my insurance?",
      answer: "It can. Insurance claims may be denied if electrical work is unlicensed or non-compliant.",
    },
    {
      question: "Do you provide compliance documentation if required?",
      answer: "Yes. We ensure work meets inspection and handover requirements.",
    },
  ];

  return (
    <div id="ComplianceLicence" className="compliance-page">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonical={
          typeof window !== "undefined" ? window.location.origin + canonicalPath : undefined
        }
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="compliance-content">
        <section className="compliance-hero">
          <div className="compliance-hero-inner">
            <p className="compliance-kicker">Need licensed, compliant electrical work you can rely on?</p>
            <h1>Licences & Compliance - NZXTGEN</h1>
            <div className="compliance-hero-actions">
              <Link className="compliance-cta" to="/contact-us">
                👉 Speak with NZXTGEN today to discuss your project
              </Link>
            </div>
          </div>
        </section>

        <section className="compliance-section">
          <div className="compliance-section-inner">
            <p className="compliance-text">
              Electrical work is not just about functionality -- it is about safety, compliance, and
              long-term reliability. Whether you are building a new property, renovating an existing
              space, or managing ongoing electrical needs, all electrical work must meet strict
              Australian standards and legal requirements.
            </p>
            <p className="compliance-text">
              NZXTGEN provides licensed electrical services for residential, commercial, and
              construction projects. Our work is delivered with a strong focus on compliance, risk
              management, and practical outcomes that protect property owners, occupants, and
              builders. Every project is approached methodically, with safety and regulations at the
              forefront.
            </p>
          </div>
        </section>

        <section className="compliance-section">
          <div className="compliance-section-inner">
            <h2 className="compliance-section-title">What This Electrical Service Covers</h2>
            <p className="compliance-text">
              Electrical services for new builds, renovations, and ongoing works require planning,
              technical knowledge, and licensed execution. Each stage of work must align with
              Australian Standards, wiring rules, and site-specific safety requirements.
            </p>
            <div className="compliance-card-grid">
              <article className="compliance-card">
                <h3>Licensed Electrical Work for New Builds</h3>
                <p>
                  New construction projects require complete electrical design and installation from
                  the ground up. This includes power distribution, lighting, appliance circuits,
                  safety devices, and compliance documentation.
                </p>
                <p>
                  We work alongside builders and trades to ensure electrical installations are
                  completed at the correct construction stages. All cabling, switchboards, and
                  fixtures are installed to current wiring rules, allowing for future expansion and
                  upgrades without compromising safety.
                </p>
              </article>
              <article className="compliance-card">
                <h3>Renovation & Upgrade Electrical Services</h3>
                <p>
                  Renovations often involve modifying or upgrading existing electrical systems to
                  suit new layouts or increased electrical demand. Older wiring may no longer meet
                  modern safety requirements, making compliance checks essential.
                </p>
                <p>
                  NZXTGEN carries out electrical upgrades that align with current regulations,
                  including circuit protection, earthing, and load management. Power and lighting
                  layouts are updated to suit the renovated space, with careful consideration given
                  to accessibility and future needs.
                </p>
              </article>
              <article className="compliance-card">
                <h3>Ongoing Electrical Services & Maintenance</h3>
                <p>
                  Ongoing electrical support is essential for homes, small businesses, and managed
                  properties. Electrical systems experience wear over time, and faults can pose
                  safety risks if not addressed early.
                </p>
                <p>
                  We provide ongoing electrical services including fault finding, repairs, compliance
                  upgrades, and system modifications. Each task is assessed for safety risks before
                  work begins, ensuring minimal disruption and safe outcomes.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="compliance-section">
          <div className="compliance-section-inner">
            <h2 className="compliance-section-title">Licence, Compliance & Safety Standards</h2>
            <p className="compliance-text">
              All electrical work carried out by NZXTGEN is performed under Electrical Licence No.
              486465C. Licensing is a legal requirement in Australia and ensures that work is
              completed by a qualified professional with verified training and experience.
            </p>

            <h3 className="compliance-subtitle compliance-highlight-title">
              Compliance with Australian Standards
            </h3>
            <p className="compliance-text">
              We comply with all applicable Australian Standards and wiring rules, ensuring
              installations meet legal and safety requirements. This includes correct cable sizing,
              circuit protection, isolation procedures, and installation methods.
            </p>

            <h3 className="compliance-subtitle compliance-highlight-title">
              Safe Work Method Statements (SWMS)
            </h3>
            <p className="compliance-text">
              For applicable jobs, Safe Work Method Statements are prepared and followed. These
              outline the steps required to complete work safely and identify potential hazards before
              work commences.
            </p>
            <p className="compliance-text">Our safety processes include:</p>
            <ul className="compliance-list">
              {safetyProcesses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="compliance-section">
          <div className="compliance-section-inner">
            <h2 className="compliance-section-title">Residential, Commercial & Construction Compliance</h2>
            <p className="compliance-text">
              NZXTGEN ensures electrical compliance across a wide range of property types and project
              scopes. Our services support:
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
        </section>

        <section className="compliance-section">
          <div className="compliance-section-inner">
            <h2 className="compliance-section-title">
              When You Need Licensed & Compliant Electrical Services
            </h2>
            <p className="compliance-text">
              Electrical compliance is critical at multiple stages of a property's lifecycle. You
              may require licensed electrical services when:
            </p>
            <ul className="compliance-list">
              {serviceTriggers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="compliance-text">
              Using a licensed electrician ensures work is completed legally and safely, protecting
              both occupants and property owners.
            </p>
          </div>
        </section>

        <section className="compliance-section">
          <div className="compliance-section-inner">
            <h2 className="compliance-section-title compliance-highlight-title">
              Why Choosing a Licensed Electrician Matters
            </h2>
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
        </section>

        <section className="compliance-section">
          <div className="compliance-section-inner">
            <h2 className="compliance-section-title compliance-highlight-title">
              Why Choose NZXTGEN
            </h2>
            <p className="compliance-text">
              NZXTGEN delivers electrical services with a strong compliance-first approach. Our work
              is structured, transparent, and aligned with Australian regulations.
            </p>
            <p className="compliance-text">Clients choose us because we offer:</p>
            <ul className="compliance-list">
              {reasonsList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="compliance-text">
              We understand the importance of getting electrical work right the first time,
              particularly in construction and renovation environments where compliance is critical.
            </p>
          </div>
        </section>

        <section className="compliance-cta-band">
          <div className="compliance-section-inner compliance-cta-inner">
            <h2>Need compliant electrical work completed correctly?</h2>
            <Link className="compliance-cta" to="/contact-us">
              👉 Contact NZXTGEN today to arrange a licensed electrical service
            </Link>
          </div>
        </section>

        <section className="compliance-section">
          <div className="compliance-section-inner">
            <h2 className="compliance-section-title">Electrical Compliance FAQs</h2>
            <div className="compliance-faq-grid">
              {faqItems.map((item) => (
                <article key={item.question} className="compliance-faq-card">
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
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
