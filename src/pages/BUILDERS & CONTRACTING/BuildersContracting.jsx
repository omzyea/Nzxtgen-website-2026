import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhatsappChat from "../../components/WhatsappChat";
import MobileCallButton from "../../components/MobileCallButton";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import "./BuildersContracting.css";

const BuildersContracting = () => {
  const clientTypes = [
    "Residential builders and home renovators",
    "Commercial contractors and project managers",
    "New home construction projects",
    "Renovations, extensions and fit-outs",
    "Property developers and investors",
  ];

  const newBuildServices = [
    "Full electrical fit-outs for new constructions",
    "Power circuit installations and distribution",
    "Switchboard installation and safety compliance",
    "Temporary power for construction sites",
  ];

  const renovationServices = [
    "Complete rewiring for older properties",
    "LED lighting upgrades and powerpoint additions",
    "Electrical upgrades to meet current standards",
    "Kitchen and bathroom electrical fit-outs",
  ];

  const smartHomeServices = [
    "Smart lighting and automation integration",
    "Security systems including CCTV and smart locks",
    "Structured cabling and data networks",
    "Home entertainment system wiring",
  ];

  const complianceServices = [
    "Certificate-ready electrical work",
    "Compliance testing and reporting",
    "Council handover documentation",
    "Electrical safety inspections",
  ];

  const keyReasons = [
    {
      title: "Fully Licensed & Insured",
      description: "All work completed by licensed electricians with comprehensive insurance coverage.",
    },
    {
      title: "Builder Timeline Experience",
      description: "We understand construction schedules and deliver to meet your project milestones.",
    },
    {
      title: "Trade Coordination",
      description: "Seamless coordination with other trades on site to avoid delays and conflicts.",
    },
    {
      title: "Safety & Compliance Focus",
      description: "All installations meet Australian Standards with proper documentation.",
    },
    {
      title: "Scalable Capacity",
      description: "Resources to handle projects of all sizes, from single homes to multi-unit developments.",
    },
  ];

  const faqItems = [
    {
      question: "Do you work with builder packages?",
      answer:
        "Yes, we offer competitive builder packages tailored to your project requirements. We can provide fixed pricing for standard electrical fit-outs or customised quotes for complex builds.",
    },
    {
      question: "How do you coordinate timelines on site?",
      answer:
        "We work closely with site supervisors and project managers to schedule our work around other trades. We're flexible with our timing and can adjust to site conditions and schedule changes.",
    },
    {
      question: "Can you provide compliance docs for council handovers?",
      answer:
        "Absolutely. We provide all required certificates of compliance, test reports, and documentation needed for council approvals and final inspections.",
    },
    {
      question: "What areas do you service for builder projects?",
      answer:
        "We service Condell Park and surrounding areas across Sydney's south-west, including Bankstown, Canterbury, Revesby, Padstow, and the greater Sydney region for larger commercial projects.",
    },
    {
      question: "Do you handle both residential and commercial electrical work?",
      answer:
        "Yes, our team is experienced in both residential and commercial electrical installations. We have the capability to work on single homes, multi-unit developments, and commercial fit-outs.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="BuildersContracting" className="builders-page">
      <SEO
        title="Builders & Contractors Electrical Services | NZXTGEN Condell Park"
        description="Professional electrical and smart technology services for builders, developers and contractors in Sydney's south-west. New builds, renovations, compliance and more."
        canonical={
          typeof window !== "undefined"
            ? window.location.origin + "/builders-contracting"
            : undefined
        }
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="builders-content">
        {/* Hero Section */}
        <section
          className="builders-hero"
          style={{ backgroundImage: `url("/images/services/nzxtgen-builders-hero.webp")` }}
        >
          <div className="builders-hero-overlay">
            <div className="builders-hero-inner">
              <p className="builders-kicker">Electrical & Smart Technology for Your Projects</p>
              <h1>Builders, Developers & Contractors</h1>
              <p className="builders-hero-subtext">
                Professional electrical services for new builds, renovation fit-outs, smart home integrations, and site compliance across Sydney's south-west.
              </p>
              <Link className="builders-cta" to="/free-quote">
                Request a Builder Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Who We Work With Section */}
        <section className="builders-section">
          <div className="builders-section-inner builders-intro-grid">
            <div className="builders-intro-copy">
              <h2 className="builders-section-title">Who We Work With</h2>
              <p className="builders-lead">
                NZXTGEN partners with builders, developers and contractors throughout Condell Park and Sydney's south-west region to deliver reliable electrical solutions for construction projects.
              </p>
              <p className="builders-text">
                We understand that building projects require electricians who can work within tight schedules, coordinate with other trades, and deliver compliant installations that pass inspection the first time. Our typical clients include:
              </p>
              <ul className="builders-list">
                {clientTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="builders-text">
                Whether you're building a single home, managing a renovation, or overseeing a multi-unit development, we provide the electrical expertise and reliability your project demands.
              </p>
            </div>
            <div className="builders-intro-image-card">
              <img
                src="/images/services/nzxtgen-builders-second.webp"
                alt="NZXTGEN electrician working with builders on construction site in Condell Park"
              />
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="builders-section builders-services-section">
          <div className="builders-section-inner">
            <h2 className="builders-section-title">Services for Builders & Contractors</h2>
            <p className="builders-lead">
              Tailored electrical services designed specifically for construction and building projects.
            </p>

            <div className="builders-services-grid">
              {/* New Builds Card */}
              <div className="builders-service-card">
                <div className="builders-service-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 21h18M9 8h1M9 12h1M9 16h1M14 8h1M14 12h1M14 16h1M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/>
                  </svg>
                </div>
                <h3>New Builds & Construction</h3>
                <ul>
                  {newBuildServices.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="/builders-contracting/new-builds-renovations" className="builders-service-link">
                  Learn more
                </Link>
              </div>

              {/* Renovations Card */}
              <div className="builders-service-card">
                <div className="builders-service-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"/>
                  </svg>
                </div>
                <h3>Renovations & Extensions</h3>
                <ul>
                  {renovationServices.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="/builders-contracting/residential-electrical" className="builders-service-link">
                  Learn more
                </Link>
              </div>

              {/* Smart Home Card */}
              <div className="builders-service-card">
                <div className="builders-service-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
                </div>
                <h3>Smart Home & Technology</h3>
                <ul>
                  {smartHomeServices.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="/smart-home" className="builders-service-link">
                  Learn more
                </Link>
              </div>

              {/* Compliance Card */}
              <div className="builders-service-card">
                <div className="builders-service-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 11l3 3L22 4"/>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                  </svg>
                </div>
                <h3>Compliance & Licensing</h3>
                <ul>
                  {complianceServices.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link to="/builders-contracting/compliance-licence" className="builders-service-link">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section
          className="builders-section builders-why-choose"
          style={{ backgroundImage: `url("/images/services/nzxtgen-builders-third.webp")` }}
        >
          <div className="builders-why-choose-overlay">
            <div className="builders-section-inner">
              <h2 className="builders-section-title builders-title-light">Why Builders Choose NZXTGEN</h2>
              <p className="builders-text builders-text-light">
                Building projects require electricians who understand the unique demands of construction environments. We've built our reputation on reliability, quality workmanship, and seamless integration with building schedules.
              </p>
              <div className="builders-key-reasons">
                <div className="builders-key-reasons-grid">
                  {keyReasons.map((reason, index) => (
                    <div key={index} className="builders-key-reason-card">
                      <div className="builders-key-reason-icon">
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
                      <h3 className="builders-key-reason-title">{reason.title}</h3>
                      <p className="builders-key-reason-description">{reason.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="builders-text builders-text-light">
                Our experience spans residential homes, multi-unit developments, commercial fit-outs, and industrial projects. We adapt our approach to suit different project scales and requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Compliance Information Section */}
        <section className="builders-section builders-compliance-section">
          <div className="builders-section-inner">
            <h2 className="builders-section-title">Contracting & Compliance in NSW</h2>
            <div className="builders-compliance-grid">
              <div className="builders-compliance-content">
                <p className="builders-text">
                  Electrical work in NSW must comply with strict regulations to ensure safety and legal requirements are met. As a builder or contractor, understanding these obligations is essential for project success.
                </p>
                <p className="builders-text">
                  <strong>Key compliance requirements include:</strong>
                </p>
                <ul className="builders-list">
                  <li>Written contracts are required for residential building work over $5,000</li>
                  <li>All electrical work must be performed by licensed electricians</li>
                  <li>Certificates of compliance must be issued for electrical installations</li>
                  <li>Smoke alarm requirements must be met for all residential properties</li>
                  <li>Switchboard installations must meet current Australian Standards</li>
                </ul>
                <p className="builders-text">
                  NZXTGEN provides all required documentation for council handovers and final inspections. We ensure your project meets all electrical compliance requirements, avoiding costly delays and rework.
                </p>
              </div>
              <div className="builders-compliance-cta">
                <h3>Need Compliance Documentation?</h3>
                <p>We provide certificates, test reports, and all documentation required for council approvals.</p>
                <Link to="/builders-contracting/compliance-licence" className="builders-compliance-button">
                  View Compliance Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="builders-cta-band">
          <div className="builders-cta-band-inner">
            <h2 className="builders-cta-band-title">Partner with NZXTGEN for your next project</h2>
            <p className="builders-cta-band-text">
              Get a competitive quote for your building project. We offer builder packages and flexible scheduling.
            </p>
            <Link className="builders-cta-band-button" to="/free-quote">
              Request a Builder Quote
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="builders-section builders-faq-section">
          <div className="builders-section-inner">
            <h2 className="builders-section-title">Builders & Contractors - FAQs</h2>
            <div className="builders-faq">
              {faqItems.map((item, index) => (
                <div
                  key={item.question}
                  className={`builders-faq-item ${openIndexes.includes(index) ? "active" : ""}`}
                >
                  <button
                    className="builders-faq-question"
                    type="button"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>
                    <span className="builders-faq-icon">
                      {openIndexes.includes(index) ? "−" : "+"}
                    </span>
                  </button>
                  <div className="builders-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="builders-section builders-contact-section">
          <div className="builders-section-inner">
            <div className="builders-contact-grid">
              <div className="builders-contact-info">
                <h2 className="builders-section-title">Get in Touch</h2>
                <p className="builders-text">
                  Ready to discuss your project requirements? Contact our commercial team for builder quotes and project consultations.
                </p>
                <div className="builders-contact-methods">
                  <a href="tel:+61437885910" className="builders-contact-method">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                    <span>0437 885 910</span>
                  </a>
                  <a href="mailto:Admin@nzxtgen.com.au" className="builders-contact-method">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    <span>Admin@nzxtgen.com.au</span>
                  </a>
                </div>
              </div>
              <div className="builders-contact-form-cta">
                <h3>Request a Quote</h3>
                <p>Submit your project details and receive a competitive builder quote.</p>
                <Link to="/free-quote" className="builders-contact-button">
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

export default BuildersContracting;
