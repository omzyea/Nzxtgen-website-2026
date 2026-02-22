import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SEO from "../../../components/SEO";
import LocalBusinessSchema from "../../../components/LocalBusinessSchema";
import WhatsappChat from "../../../components/WhatsappChat";
import MobileCallButton from "../../../components/MobileCallButton";
import "../cityLayout.css";

const Padstow = () => {
  const serviceList = [
    { label: "Power point installation and relocation", to: "/services/electrical-services" },
    { label: "Lighting upgrades for indoor, outdoor, and security use", to: "/lighting-installation" },
    { label: "Switchboard upgrades and safety switch installation", to: "/switchboard-upgrade" },
    { label: "Smoke alarm installation and compliance checks", to: "/smoke-alarms-electrical-safety-checks" },
    { label: "Ceiling fan installation for improved airflow", to: "/services/electrical-services" },
    { label: "Fault finding and electrical repairs", to: "/electrical-fault-finding-repairs" },
    { label: "Smart home wiring and automation", to: "/smart-home/more-info" },
    { label: "Electrical work for small commercial premises", to: "/commercial-industrial-electrical" },
  ];

  const warningSignsList = [
    "Power circuits tripping when multiple appliances are used",
    "Limited power points leading to power board overuse",
    "Flickering lights or buzzing switches",
    "Switchboards without modern safety switches",
  ];

  const renovationsList = [
    { label: "Designing practical power and lighting layouts", to: "/lighting-installation" },
    { label: "Installing dedicated circuits for new appliances", to: "/new-builds-renovations" },
    { label: "Ensuring electrical work complies with current standards", to: "/compliance-licensing" },
    { label: "Coordinating electrical stages with renovation timelines", to: "/new-builds-renovations" },
  ];

  const businessSupportList = [
    { label: "Electrical upgrades to support equipment loads", to: "/services/power-points-electrical-upgrades" },
    { label: "Improved lighting for work and customer areas", to: "/lighting-installation" },
    { label: "Electrical safety inspections", to: "/compliance-licence" },
    { label: "Timely fault diagnosis and repairs", to: "/electrical-fault-finding-repairs" },
  ];

  const trustPillars = [
    { title: "Fully licensed and insured electrical services", description: "Compliant electrical work carried out by qualified professionals." },
    { title: "Honest, straightforward recommendations", description: "We explain what is needed before starting — no surprises." },
    { title: "High-quality workmanship with clean finishes", description: "Recommendations based on how you actually use your space." },
    { title: "Respect for occupied homes and active businesses", description: "Clean workmanship with minimal disruption." },
    { title: "Clear communication from start to finish", description: "We treat your property with care and professionalism." },
  ];

  const faqItems = [
    {
      question: "Can you upgrade electrical systems in older Padstow homes?",
      answer: "Yes. We regularly upgrade wiring and switchboards to improve safety and support modern electrical demands.",
    },
    {
      question: "Do you handle electrical work during renovations?",
      answer: "Yes. We work alongside renovation projects to install compliant, well-planned electrical systems.",
    },
    {
      question: "Can you assist small businesses with electrical issues?",
      answer: "Absolutely. We provide reliable electrical services tailored to the needs of small commercial premises.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="PadstowPage" className="canterbury-page">
      <SEO
        title="Electrician in Padstow | Local Electrical Services"
        description="Licensed electrician servicing Padstow homes and small businesses. Safe, practical electrical work by NZXTGEN."
        canonical={typeof window !== "undefined" ? window.location.origin + "/areas-we-service/electrician-padstow" : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="canterbury-content">
        <section
          className="canterbury-hero"
          style={{ backgroundImage: `url("/images/suburb-images/padstow/Webp/nzxtgen-padstow-aerial-overview.webp")` }}
        >
          <div className="canterbury-hero-overlay">
            <div className="canterbury-hero-inner">
              <p className="canterbury-kicker">Need a reliable local electrician in Padstow?</p>
              <h1>Electrician in Padstow – NZXTGEN</h1>
              <p className="canterbury-hero-subtext">
                Licensed electrician servicing Padstow homes and small businesses. Safe, practical
                electrical work by NZXTGEN.
              </p>
              <Link className="canterbury-cta" to="/free-quote">
                Contact NZXTGEN today for a free, no-obligation quote
              </Link>
            </div>
          </div>
        </section>

        <section className="canterbury-section">
          <div className="canterbury-section-inner canterbury-intro-grid">
            <div className="canterbury-intro-copy">
              <h2 className="canterbury-section-title">
                NZXTGEN Electrician Services in Padstow
              </h2>
              <p className="canterbury-lead">
                Padstow is a suburb where established family homes, light industrial spaces, and small
                businesses exist side by side. Many properties have been standing for decades, with
                renovations and extensions carried out gradually over time. This layered approach to
                development often leaves electrical systems working harder than they were originally
                designed to, especially as modern households rely on more appliances, technology, and
                climate control than ever before.
              </p>
              <p>
                NZXTGEN provides professional electrical services throughout Padstow, supporting
                homeowners and small business operators with practical, compliant electrical solutions.
                We are also regularly engaged for work in surrounding areas such as Riverwood and
                Peakhurst, where similar property layouts and electrical challenges are common. Our local
                experience allows us to approach each job with a clear understanding of the area's building
                styles and electrical requirements.
              </p>
            </div>
            <div className="canterbury-intro-image-card">
              <img src="/images/suburb-images/padstow/Webp/nzxtgen-padstow-shops-street.webp" alt="Padstow residential area" />
            </div>
          </div>
        </section>

        <section className="canterbury-section canterbury-services-modern">
          <div className="canterbury-section-inner">
            <div className="canterbury-services-container">
              <div className="canterbury-services-context">
                <h2 className="canterbury-services-headline">
                  Electrical Services for Padstow Homes and Businesses
                </h2>
                <div className="canterbury-services-intro">
                  <p>
                    Electrical work in Padstow often involves a mix of maintenance, upgrades, and safety
                    improvements. Many homes were built with basic electrical layouts that no longer meet
                    current needs, while commercial spaces frequently require reliable power to support daily
                    operations.
                  </p>
                  <p>
                    NZXTGEN delivers electrical services designed to improve safety, functionality, and long-term
                    reliability, including:
                  </p>
                </div>
              </div>
              <div className="canterbury-services-content">
                <div className="canterbury-services-group">
                  <div className="canterbury-services-items">
                    {serviceList.map((item, index) => (
                      <div key={index} className="canterbury-service-item">
                        <div className="canterbury-service-indicator"></div>
                        <span className="canterbury-service-text">
                          {item.to ? (
                            <Link to={item.to} className="canterbury-text-link">{item.label}</Link>
                          ) : (
                            item.label
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="canterbury-services-divider"></div>
                <div className="canterbury-services-business">
                  <p className="canterbury-services-business-text">
                    We take a considered approach to every job, assessing the existing electrical setup and
                    recommending solutions that suit how the space is used. This ensures work is neither
                    underdone nor excessive.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="canterbury-feature-band"
          style={{ backgroundImage: `url("/images/suburb-images/padstow/Webp/nzxtgen-padstow-stockland-shopping.webp")` }}
        >
          <div className="canterbury-feature-overlay">
            <div className="canterbury-section-inner">
              <div className="canterbury-section-header light">
                <h2 className="canterbury-section-title">Common Electrical Scenarios in Padstow</h2>
                <p>
                  Padstow properties often present electrical challenges linked to age, gradual renovations,
                  and increased power demand. Our experience working across the area means we are
                  familiar with these situations and can address them efficiently.
                </p>
              </div>
              <div className="canterbury-feature-grid">
                <article className="canterbury-feature-card">
                  <h3><Link to="/switchboard-upgrade" className="canterbury-text-link">Older Wiring and Switchboards</Link></h3>
                  <p>
                    Many Padstow homes still operate with wiring and switchboards installed decades ago.
                    While these systems may have functioned adequately in the past, they are often not suited
                    to today's electrical loads.
                  </p>
                  <p>Warning signs commonly include:</p>
                  <ul className="canterbury-list">
                    {warningSignsList.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                  <p>
                    Upgrading these systems improves electrical safety and helps prevent avoidable faults or
                    downtime.
                  </p>
                </article>

                <article className="canterbury-feature-card">
                  <h3><Link to="/new-builds-renovations" className="canterbury-text-link">Renovations and Home Improvements</Link></h3>
                  <p>
                    Home improvements are common in Padstow, from updated kitchens and bathrooms to
                    added living areas or home offices. Electrical work during these projects needs to be
                    planned carefully to ensure compliance and long-term usability.
                  </p>
                  <p>NZXTGEN assists homeowners by:</p>
                  <ul className="canterbury-list">
                    {renovationsList.map((item, index) => (
                      <li key={index}>
                        {typeof item === "object" && item.to ? (
                          <Link to={item.to} className="canterbury-text-link">{item.label}</Link>
                        ) : (
                          item.label || item
                        )}
                      </li>
                    ))}
                  </ul>
                  <p>
                    Proper planning during renovations helps avoid costly rework later.
                  </p>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Small Business Electrical Needs</h3>
                  <p>
                    Padstow is home to a range of small businesses operating from workshops, offices, and
                    mixed-use buildings. Electrical reliability is essential in these environments, where
                    interruptions can affect productivity or customer experience.
                  </p>
                  <p>We support local businesses by providing:</p>
                  <ul className="canterbury-list">
                    {businessSupportList.map((item, index) => (
                      <li key={index}>
                        {typeof item === 'object' && item.to ? (
                          <Link to={item.to} className="canterbury-text-link">{item.label}</Link>
                        ) : (
                          item.label || item
                        )}
                      </li>
                    ))}
                  </ul>
                  <p>
                    Our aim is to ensure electrical systems support daily operations without unnecessary
                    complexity.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="canterbury-section canterbury-why-choose">
          <div className="canterbury-section-inner">
            <div className="canterbury-why-choose-container">
              <div className="canterbury-why-choose-content">
                <h2 className="canterbury-why-choose-title">Why Choose NZXTGEN in Padstow</h2>
                <p className="canterbury-why-choose-text">
                  Choosing an electrician should be about trust, workmanship, and practical advice.
                  NZXTGEN focuses on delivering electrical services that are clear, compliant, and suited to
                  the property rather than offering one-size-fits-all solutions.
                </p>
                <p className="canterbury-why-choose-text">
                  Clients in Padstow choose NZXTGEN because we provide:
                </p>
                <p className="canterbury-why-choose-text">
                  Our familiarity with Padstow and nearby areas such as Riverwood and Peakhurst allows us
                  to recognise common electrical issues early and recommend solutions that make sense for
                  the property. This reduces delays, avoids unnecessary costs, and ensures work is
                  completed efficiently.
                </p>
                <p className="canterbury-why-choose-text">
                  We also understand that electrical work often needs to fit around family routines or business
                  hours. Wherever possible, we schedule work to minimise disruption and keep the process
                  smooth.
                </p>
              </div>
              <div className="canterbury-trust-pillars">
                <div className="canterbury-trust-pillars-grid">
                  {trustPillars.map((pillar, index) => (
                    <div key={index} className="canterbury-trust-pillar">
                      <div className="canterbury-trust-pillar-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <circle cx="10" cy="10" r="8" stroke="#365996" strokeWidth="2" fill="none" />
                          <path
                            d="M6 10L9 13L14 7"
                            stroke="#365996"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="canterbury-trust-pillar-content">
                        <h3 className="canterbury-trust-pillar-title">{pillar.title}</h3>
                        <p className="canterbury-trust-pillar-description">{pillar.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="canterbury-cta-band">
          <div className="canterbury-cta-band-inner">
            <h2 className="canterbury-cta-band-title">Looking for a dependable local electrician in Padstow?</h2>
            <Link className="canterbury-cta-band-button" to="/free-quote">
              Contact NZXTGEN today for a free, no-obligation quote
            </Link>
          </div>
        </section>

        <section className="canterbury-section canterbury-area-faq">
          <div className="canterbury-section-inner">
            <div className="canterbury-area-faq-grid">
              <div className="canterbury-area-faq-service">
                <h2 className="canterbury-section-title">Service Area</h2>
                <p className="canterbury-area-faq-text">
                  NZXTGEN provides electrical services throughout Padstow, with regular work completed
                  in surrounding areas including Riverwood and Peakhurst.
                </p>
                <Link className="canterbury-service-area-cta" to="/free-quote">
                  Request a free quote
                </Link>
              </div>
              <div className="canterbury-area-faq-faq">
                <h2 className="canterbury-section-title">Padstow Electrical Services – FAQs</h2>
                <div className="canterbury-faq">
                  {faqItems.map((item, index) => (
                    <div
                      key={item.question}
                      className={`canterbury-faq-item ${openIndexes.includes(index) ? "active" : ""}`}
                    >
                      <button
                        className="canterbury-faq-question"
                        type="button"
                        onClick={() => toggleFAQ(index)}
                      >
                        <span>{item.question}</span>
                        <span className="canterbury-faq-icon">
                          {openIndexes.includes(index) ? "–" : "+"}
                        </span>
                      </button>
                      <div className="canterbury-faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Padstow;
