import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import WhatsappChat from "../components/WhatsappChat";
import MobileCallButton from "../components/MobileCallButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import "./EVChargerInstallation.css";

const EVChargerInstallation = () => {
  const installTypes = [
    "Home EV chargers",
    "Tesla Wall Connectors",
    "Smart chargers (Solar Integration)",
    "Commercial EV charging stations",
  ];

  const serviceCoverageItems = [
    "Load assessment & switchboard capacity check",
    "Dedicated circuit installation",
    "RCBO / RCD protection",
    "Surge protection if required",
    "Cable sizing & voltage drop calculations",
    "Three-phase upgrades (if needed)",
    "Metering solutions",
    "Smart charger configuration",
    "Wall mounting & secure bracket fixing",
    "Testing, commissioning & certification",
  ];

  const installationSteps = [
    {
      title: "Site Inspection & Load Calculation",
      description: "We assess your switchboard, phase capacity, and maximum demand.",
    },
    {
      title: "Charger Selection Support",
      description: "We help you choose the right charger (Tesla, OCPP, 7kW, 22kW).",
    },
    {
      title: "Dedicated Circuit Installation",
      description: "We run appropriately sized cabling with protection devices.",
    },
    {
      title: "Testing & Commissioning",
      description: "We test earthing, RCD trip times, and charging functionality.",
    },
    {
      title: "Compliance Certificate Issued",
      description: "You receive official certification for insurance and safety.",
    },
  ];

  const homeChargingBenefits = [
    "Faster charging compared to power outlets",
    "Improved safety",
    "Reduced risk of overheating",
    "Smart energy scheduling",
    "Solar integration compatibility",
  ];

  const installLocations = [
    "Garages",
    "Carports",
    "Driveways",
    "Apartment car spaces",
    "Strata complexes",
  ];

  const complianceStandards = [
    "AS/NZS 3000 Wiring Rules",
    "AS/NZS 3008 cable sizing",
    "Service & Installation Rules NSW",
    "RCD / RCBO protection requirements",
    "Proper earthing & MEN system integration",
  ];

  const improperInstallRisks = [
    "Overload switchboards",
    "Cause nuisance tripping",
    "Void insurance",
    "Create fire risk",
  ];

  const whyChooseItems = [
    "Licensed & insured NSW electricians",
    "Experienced in residential & commercial systems",
    "Clean, professional installations",
    "Accurate load calculations",
    "Switchboard upgrade capability",
    "Fast turnaround",
    "Local Condell Park service coverage",
  ];

  const faqItems = [
    {
      question: "How much does EV charger installation cost in Sydney?",
      answer:
        "Costs vary depending on cable length, switchboard capacity, and phase availability. Basic installations typically range from $900\u2013$2,500, while three-phase or commercial systems may cost more.",
    },
    {
      question: "Do I need a switchboard upgrade for an EV charger?",
      answer:
        "If your switchboard lacks capacity or RCD protection, an upgrade may be required. We assess this during inspection.",
    },
    {
      question: "Can I install a Tesla Wall Connector?",
      answer:
        "Yes. We install Tesla Wall Connectors and ensure correct load balancing and circuit protection.",
    },
    {
      question: "Is a 10A power point enough for EV charging?",
      answer:
        "No. Standard power outlets are not designed for sustained high current EV charging and may overheat.",
    },
    {
      question: "Do EV chargers require RCD protection?",
      answer:
        "Yes. Australian standards require appropriate RCD or RCBO protection depending on charger type.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="EVChargerInstallation" className="ev-charger-page">
      <SEO
        title="EV Charger Installation in Condell Park & South-West Sydney | NZXTGEN"
        description="Licensed EV charger electricians for homes and businesses in Condell Park and South-West Sydney. Safe, compliant, and future-ready charging solutions. Tesla Wall Connectors, 7kW and 22kW installations."
        keywords="EV charger installation, electric vehicle charger, EV charging station, Tesla Wall Connector, home EV charger, Condell Park electrician, South-West Sydney electrician, EV charger compliance, AS/NZS 3000"
        canonical={
          typeof window !== "undefined"
            ? window.location.origin + "/services/ev-charger-installation"
            : undefined
        }
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "EV Charger Installation",
            provider: {
              "@type": "LocalBusiness",
              name: "NZXTGEN",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Condell Park",
                addressRegion: "NSW",
                postalCode: "2200",
                addressCountry: "AU",
              },
              telephone: "+61437885910",
            },
            areaServed: {
              "@type": "Place",
              name: "South-West Sydney",
            },
            description:
              "Licensed EV charger installation for homes and businesses. Tesla Wall Connectors, single-phase and three-phase systems.",
            serviceType: "EV Charger Installation",
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqItems.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          })}
        </script>
      </Helmet>
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="ev-charger-content">
        {/* Hero Section */}
        <section className="ev-charger-hero">
          <img
            className="ev-charger-hero-bg ev-charger-hero-bg-desktop"
            src="/images/services/nzxtgen-ev-charger-hero-desktop.webp"
            alt=""
            aria-hidden="true"
          />
          <img
            className="ev-charger-hero-bg ev-charger-hero-bg-mobile"
            src="/images/services/nzxtgen-ev-charger-hero-mobile.webp"
            alt=""
            aria-hidden="true"
          />
          <div className="ev-charger-hero-overlay">
            <div className="ev-charger-hero-inner">
              <p className="ev-charger-kicker">Licensed EV Charger Electricians for Homes & Businesses</p>
              <h1>EV Charger Installation in Condell Park & South-West Sydney</h1>
              <p className="ev-charger-hero-subtext">
                Safe, Compliant & Future-Ready Charging Solutions
              </p>
              <Link className="ev-charger-cta" to="/free-quote">
                Request a Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Section 1 - Introduction */}
        <section className="ev-charger-section">
          <div className="ev-charger-section-inner ev-charger-intro-grid">
            <div className="ev-charger-intro-copy">
              <h2 className="ev-charger-section-title">Professional EV Charger Installation for Homes & Businesses</h2>
              <p className="ev-charger-lead">
                Electric vehicles are becoming standard across Sydney. Whether you're installing a Tesla Wall Connector, a 7kW single-phase charger, or a 22kW three-phase commercial system, NZXTGEN provides compliant, high-performance EV charging installations tailored to your property.
              </p>
              <p className="ev-charger-text">We install:</p>
              <ul className="ev-charger-list">
                {installTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="ev-charger-text">
                All installations are performed by licensed electricians in accordance with AS/NZS 3000 and NSW Service & Installation Rules.
              </p>
            </div>
            <div className="ev-charger-intro-image-card">
              <img
                src="/images/services/nzxtgen-ev-charger-introduction.webp"
                alt="Professional EV charger installation by NZXTGEN electrician in Condell Park"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Section 2 - What Our Service Covers */}
        <section className="ev-charger-section ev-charger-coverage-section">
          <div className="ev-charger-section-inner">
            <h2 className="ev-charger-section-title">What Our EV Charger Installation Service Covers</h2>
            <p className="ev-charger-lead">
              We handle the entire process from inspection to certification.
            </p>
            <ul className="ev-charger-checklist">
              {serviceCoverageItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="ev-charger-text">
              We ensure your electrical system is safe, compliant, and capable of supporting long-term EV charging loads.
            </p>
          </div>
        </section>

        {/* Section 3 - Installation Process */}
        <section className="ev-charger-section ev-charger-process-section">
          <div className="ev-charger-section-inner">
            <h2 className="ev-charger-section-title">Our EV Charger Installation Process</h2>
            <div className="ev-charger-process-layout">
              <div className="ev-charger-process-image-card">
                <img
                  src="/images/services/nzxtgen-ev-charger-installation-process.webp"
                  alt="EV charger installation process diagram showing the 5 steps"
                  loading="lazy"
                />
              </div>
              <div className="ev-charger-process-steps">
                {installationSteps.map((step, index) => (
                  <div key={index} className="ev-charger-process-card">
                    <div className="ev-charger-process-number">{index + 1}</div>
                    <div className="ev-charger-process-text">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Home EV Charger Installation */}
        <section className="ev-charger-section">
          <div className="ev-charger-section-inner ev-charger-home-grid">
            <div className="ev-charger-home-image-card">
              <img
                src="/images/services/nzxtgen-ev-charger-home-installation.webp"
                alt="Home EV charger installation in garage by NZXTGEN"
                loading="lazy"
              />
            </div>
            <div className="ev-charger-home-copy">
              <h2 className="ev-charger-section-title">Home EV Charger Installation</h2>
              <p className="ev-charger-text">Installing a dedicated EV charger at home provides:</p>
              <ul className="ev-charger-list">
                {homeChargingBenefits.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="ev-charger-text">We install chargers in:</p>
              <ul className="ev-charger-list">
                {installLocations.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="ev-charger-text">
                Whether single-phase or three-phase, we ensure safe integration with your home's electrical system.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 - Compliance & Standards */}
        <section
          className="ev-charger-section ev-charger-compliance"
          style={{ backgroundImage: `url("/images/services/nzxtgen-ev-charger-compliance-standards.webp")` }}
        >
          <div className="ev-charger-compliance-overlay">
            <div className="ev-charger-section-inner">
              <h2 className="ev-charger-section-title ev-charger-title-light">EV Charger Compliance & Safety Standards</h2>
              <p className="ev-charger-text ev-charger-text-light">
                EV chargers are classified as high continuous loads and must comply with:
              </p>
              <ul className="ev-charger-list-light">
                {complianceStandards.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="ev-charger-text ev-charger-text-light">Improper installation can:</p>
              <ul className="ev-charger-list-light ev-charger-risk-list">
                {improperInstallRisks.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="ev-charger-text ev-charger-text-light">
                NZXTGEN ensures full compliance and safe integration.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 - Why Choose NZXTGEN */}
        <section className="ev-charger-section ev-charger-why-section">
          <div className="ev-charger-section-inner">
            <h2 className="ev-charger-section-title">Why Choose NZXTGEN for EV Charger Installation</h2>
            <div className="ev-charger-why-grid">
              {whyChooseItems.map((item, index) => (
                <div key={index} className="ev-charger-why-card">
                  <div className="ev-charger-why-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="#365996" strokeWidth="2" fill="none" />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="#365996"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <p className="ev-charger-text" style={{ marginTop: "1.5rem" }}>
              We don't just mount chargers — we engineer safe long-term solutions.
            </p>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="ev-charger-cta-band">
          <div className="ev-charger-cta-band-inner">
            <h2 className="ev-charger-cta-band-title">Ready to Install Your EV Charger?</h2>
            <p className="ev-charger-cta-band-text">
              Future-proof your home or business with a compliant EV charging solution.
            </p>
            <Link className="ev-charger-cta-band-button" to="/free-quote">
              Request a Free Quote Today
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="ev-charger-section ev-charger-faq-section">
          <div className="ev-charger-section-inner">
            <h2 className="ev-charger-section-title">EV Charger Installation FAQs</h2>
            <div className="ev-charger-faq">
              {faqItems.map((item, index) => (
                <div
                  key={item.question}
                  className={`ev-charger-faq-item ${openIndexes.includes(index) ? "active" : ""}`}
                >
                  <button
                    className="ev-charger-faq-question"
                    type="button"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>
                    <span className="ev-charger-faq-icon">
                      {openIndexes.includes(index) ? "\u2212" : "+"}
                    </span>
                  </button>
                  <div className="ev-charger-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="ev-charger-section ev-charger-contact-section">
          <div className="ev-charger-section-inner">
            <div className="ev-charger-contact-grid">
              <div className="ev-charger-contact-info">
                <h2 className="ev-charger-section-title">Get in Touch</h2>
                <p className="ev-charger-text">
                  Ready to discuss your EV charger installation? Contact our team for a free assessment and quote.
                </p>
                <div className="ev-charger-contact-methods">
                  <a href="tel:+61437885910" className="ev-charger-contact-method">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                    <span>0437 885 910</span>
                  </a>
                  <a href="mailto:Admin@nzxtgen.com.au" className="ev-charger-contact-method">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <span>Admin@nzxtgen.com.au</span>
                  </a>
                </div>
              </div>
              <div className="ev-charger-contact-form-cta">
                <h3>Request a Quote</h3>
                <p>Submit your EV charger installation details and receive a free, no-obligation quote.</p>
                <Link to="/free-quote" className="ev-charger-contact-button">
                  Get Your Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EVChargerInstallation;
