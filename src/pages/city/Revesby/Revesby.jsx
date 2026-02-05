import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SEO from "../../../components/SEO";
import LocalBusinessSchema from "../../../components/LocalBusinessSchema";
import WhatsappChat from "../../../components/WhatsappChat";
import MobileCallButton from "../../../components/MobileCallButton";
import "../cityLayout.css";

const Revesby = () => {
  const serviceList = [
    { label: "Power point installations and reconfiguration", to: "/services/electrical-services" },
    { label: "Lighting upgrades for indoor and outdoor areas", to: "/lighting-installation" },
    { label: "Switchboard inspections and modernisation", to: "/switchboard-upgrade" },
    { label: "Smoke alarm installation and compliance checks", to: "/smoke-alarms-electrical-safety-checks" },
    { label: "Ceiling fan installation and ventilation solutions", to: "/services/electrical-services" },
    { label: "Fault finding and electrical repairs", to: "/electrical-fault-finding-repairs" },
    { label: "Smart home installations and automation", to: "/services/smart-home" },
    { label: "Security systems including alarms and CCTV", to: "/services/security-systems" },
  ];

  const safetyList = [
    { label: "Switchboard assessments and upgrades", to: "/switchboard-upgrade" },
    { label: "Safety switch installation and testing", to: "/switchboard-upgrade" },
    "Repairs to ageing wiring and fittings",
    { label: "Investigation of recurring electrical faults", to: "/electrical-fault-finding-repairs" },
  ];

  const renovationsList = [
    { label: "Appliance circuit planning and installation", to: "/new-builds-renovations" },
    { label: "Bathroom electrical compliance during wet works", to: "/compliance-licensing" },
    { label: "Lighting layout changes and switching upgrades", to: "/lighting-installation" },
    { label: "Wall chasing and concealed cabling", to: "/new-builds-renovations" },
    "Coordination with builders and other trades",
  ];

  const lifestyleList = [
    { label: "Additional power points for workspaces", to: "/services/electrical-services" },
    { label: "Improved lighting for productivity and comfort", to: "/lighting-installation" },
    { label: "Smart switches and lighting controls", to: "/services/smart-home" },
    "Data and power planning for home offices",
  ];

  const trustPillars = [
    { title: "Fully Licensed & Insured", description: "Compliant electrical work carried out by qualified professionals." },
    { title: "Clear Explanations Before Work", description: "We explain what is needed before starting — no surprises." },
    { title: "Practical Advice Based on Real Usage Needs", description: "Recommendations tailored to how you use your space." },
    { title: "Neat, Organised Installations", description: "Clean workmanship with minimal disruption." },
    { title: "Respect for Homes and Workspaces", description: "We treat your property with care and professionalism." },
  ];

  const faqItems = [
    {
      question: "Do you work on both older and newly built homes in Revesby?",
      answer:
        "Yes. We regularly work on established homes, renovated properties, and new builds, adapting our approach to suit each system.",
    },
    {
      question: "Can electrical upgrades be completed while we're living in the home?",
      answer:
        "In most cases, yes. We plan work carefully to minimise disruption and keep essential services running where possible.",
    },
    {
      question: "Do you provide electrical services for small local businesses?",
      answer:
        "Yes. We support offices, retail spaces, and small commercial premises with compliant and reliable electrical solutions.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="RevesbyPage" className="canterbury-page">
      <SEO
        title="Electrician in Revesby | Local Electrical Services NZXTGEN"
        description="Licensed electricians servicing Revesby homes and small businesses. Electrical, safety, smart home and security services by NZXTGEN."
        canonical={typeof window !== "undefined" ? window.location.origin + "/electrician-revesby" : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="canterbury-content">
        <section
          className="canterbury-hero"
          style={{ backgroundImage: `url("/images/suburb images/revesby/Webp/revesby-drone-shot-2212_064430.WEBP")` }}
        >
          <div className="canterbury-hero-overlay">
            <div className="canterbury-hero-inner">
              <p className="canterbury-kicker">Looking for a reliable local electrician in Revesby?</p>
              <h1>Electrician in Revesby – NZXTGEN</h1>
              <p className="canterbury-hero-subtext">
                Licensed electricians servicing Revesby homes and small businesses. Electrical,
                safety, smart home and security services by NZXTGEN.
              </p>
              <Link className="canterbury-cta" to="/free-quote">
                👉 Request a free quote from NZXTGEN today
              </Link>
            </div>
          </div>
        </section>

        <section className="canterbury-section">
          <div className="canterbury-section-inner canterbury-intro-grid">
            <div className="canterbury-intro-copy">
              <h2 className="canterbury-section-title">
                Electrician in Revesby <span className="canterbury-highlight">– NZXTGEN</span>
              </h2>
              <p className="canterbury-lead">
                Revesby is a well-established suburb with a strong mix of long-standing family homes,
                modern duplex developments, and small commercial premises. Over time, the electrical
                demands of properties in the area have changed significantly. Where homes once ran a
                handful of appliances, they now support air conditioning, upgraded kitchens, home
                offices, security systems, and smart technology. This shift means electrical systems
                need to be reliable, compliant, and designed for modern use.
              </p>
              <p>
                NZXTGEN provides professional electrical services throughout Revesby, working closely
                with homeowners and small businesses who want practical solutions delivered properly.
                We also regularly service surrounding areas such as Condell Park and Georges Hall,
                which share similar housing styles and infrastructure challenges. Our focus is on
                safe installations, clear communication, and electrical work that stands up over
                time.
              </p>
            </div>
            <div className="canterbury-intro-image-card">
              <img src="/images/cities/ravesby-3.jpeg" alt="Revesby residential streetscape" />
            </div>
          </div>
        </section>

        <section className="canterbury-section canterbury-services-modern">
          <div className="canterbury-section-inner">
            <div className="canterbury-services-container">
              <div className="canterbury-services-context">
                <h2 className="canterbury-services-headline">
                  Electrical Services for Revesby Homes and Businesses
                </h2>
                <div className="canterbury-services-intro">
                  <p>
                    Electrical work in Revesby often involves upgrading or adapting existing systems
                    rather than starting from scratch. Many properties have undergone renovations or
                    extensions, which can place additional load on older wiring or switchboards if
                    upgrades were not planned correctly.
                  </p>
                  <p>We commonly assist Revesby clients with:</p>
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
                            item.label || item
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="canterbury-services-divider"></div>
                <div className="canterbury-services-business">
                  <p className="canterbury-services-business-text">
                    For small businesses operating from shopfronts, offices, or mixed-use buildings,
                    reliable electrical infrastructure is essential. We provide electrical support that
                    balances functionality, compliance, and minimal disruption to daily operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="canterbury-feature-band"
          style={{ backgroundImage: `url("/images/cities/ravesby-2.jpeg")` }}
        >
          <div className="canterbury-feature-overlay">
            <div className="canterbury-section-inner">
              <div className="canterbury-section-header light">
                <h2 className="canterbury-section-title">Common Electrical Needs in the Revesby Area</h2>
                <p>
                  Revesby's blend of older homes and newer developments creates a range of electrical
                  requirements. Our work in the area is often driven by safety upgrades, lifestyle
                  changes, and renovation projects.
                </p>
              </div>
              <div className="canterbury-feature-grid">
                <article className="canterbury-feature-card">
                  <h3>Older Homes and Electrical Safety</h3>
                  <p>
                    Many established homes in Revesby were built before modern safety standards were
                    introduced. While these properties may still function, they often lack adequate
                    safety switch protection or sufficient circuit capacity.
                  </p>
                  <p>We regularly carry out:</p>
                  <ul className="canterbury-list">
                    {safetyList.map((item, index) => (
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
                    Addressing these issues early helps reduce fire risk, prevent nuisance tripping,
                    and ensure the home can safely support additional appliances.
                  </p>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Renovations and Extensions</h3>
                  <p>
                    Home renovations are common across Revesby, particularly kitchen and bathroom
                    upgrades or second-storey additions. Electrical work during renovations needs to
                    be planned carefully to avoid surface cabling or future limitations.
                  </p>
                  <p>Our renovation-related services include:</p>
                  <ul className="canterbury-list">
                    {renovationsList.map((item, index) => (
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
                    By working alongside renovation teams, we help ensure electrical systems are
                    installed at the right stages and finished cleanly.
                  </p>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Work-From-Home and Lifestyle Changes</h3>
                  <p>
                    Like many suburbs, Revesby has seen an increase in home-based work and flexible
                    living arrangements. This often highlights weaknesses in existing electrical
                    layouts, such as limited power points or poor lighting in study areas.
                  </p>
                  <p>We provide practical upgrades such as:</p>
                  <ul className="canterbury-list">
                    {lifestyleList.map((item, index) => (
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
                    These changes improve day-to-day usability without overcomplicating the
                    electrical system.
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
                <h2 className="canterbury-why-choose-title">Why Choose NZXTGEN in Revesby</h2>
                <p className="canterbury-why-choose-text">
                  Choosing an electrician is about more than availability. It's about trust,
                  workmanship, and understanding how the property is used. NZXTGEN takes a practical
                  approach to electrical work, focusing on long-term reliability rather than quick
                  fixes.
                </p>
                <p className="canterbury-why-choose-text">
                  Our familiarity with properties in Revesby, Condell Park, and Georges Hall allows us
                  to anticipate common issues such as limited roof access, older switchboards, or mixed
                  wiring systems. This experience helps projects run more smoothly and reduces
                  unexpected delays.
                </p>
                <p className="canterbury-why-choose-text">
                  We also understand that electrical work often needs to fit around busy households or
                  business hours. Reliable scheduling and open communication are central to how we
                  operate.
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
            <h2 className="canterbury-cta-band-title">Need dependable electrical work completed properly?</h2>
            <Link className="canterbury-cta-band-button" to="/free-quote">
              👉 Contact NZXTGEN today to arrange a free quote
            </Link>
          </div>
        </section>

        <section className="canterbury-section canterbury-area-faq">
          <div className="canterbury-section-inner">
            <div className="canterbury-area-faq-grid">
              <div className="canterbury-area-faq-service">
                <h2 className="canterbury-section-title">Service Area</h2>
                <p className="canterbury-area-faq-text">
                  NZXTGEN provides electrical services throughout Revesby, with regular work completed
                  in surrounding areas including Condell Park and Georges Hall.
                </p>
                <Link className="canterbury-service-area-cta" to="/free-quote">
                  Request a free quote
                </Link>
              </div>
              <div className="canterbury-area-faq-faq">
                <h2 className="canterbury-section-title">Revesby Electrical Services – FAQs</h2>
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

export default Revesby;
