import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SEO from "../../../components/SEO";
import LocalBusinessSchema from "../../../components/LocalBusinessSchema";
import WhatsappChat from "../../../components/WhatsappChat";
import MobileCallButton from "../../../components/MobileCallButton";
import "../cityLayout.css";

const Canterbury = () => {
  const serviceList = [
    { label: "Lighting installations and upgrades for indoor and outdoor areas", to: "/lighting-installation" },
    { label: "Power point additions and layout improvements", to: "/services/electrical-services" },
    { label: "Switchboard inspections and safety upgrades", to: "/switchboard-upgrade" },
    { label: "Smoke alarm installation and compliance checks", to: "/smoke-alarms-electrical-safety-checks" },
    { label: "Ceiling fan installation for comfort and airflow", to: "/services/electrical-services" },
    { label: "Fault finding and electrical repairs", to: "/electrical-fault-finding-repairs" },
    { label: "Smart home and automation systems", to: "/services/smart-home" },
    { label: "Security solutions such as CCTV and alarms", to: "/services/security-systems" },
  ];

  const olderHomesList = [
    { label: "Replacing outdated switchboards with modern safety protection", to: "/switchboard-upgrade" },
    { label: "Installing additional circuits to handle increased load", to: "/services/electrical-services" },
    { label: "Upgrading lighting to improve efficiency and visibility", to: "/lighting-installation" },
    "Resolving recurring tripping or power fluctuations",
  ];

  const renovationsList = [
    { label: "Planning electrical layouts alongside builders and designers", to: "/new-builds-renovations" },
    { label: "Installing concealed cabling before walls are closed", to: "/new-builds-renovations" },
    { label: "Ensuring bathroom and kitchen electrical compliance", to: "/compliance-licensing" },
    "Coordinating lighting, switching, and appliance connections",
  ];

  const technologyList = [
    "Adding power and data points where they’re needed",
    "Improving lighting for work and study areas",
    "Installing smart switches and controls",
    "Supporting security and monitoring systems",
  ];

  const trustPillars = [
    {
      title: "Fully Licensed & Insured",
      description: "Compliant electrical work carried out by qualified professionals.",
    },
    {
      title: "Clear, Upfront Communication",
      description: "We explain the work before starting — no surprises.",
    },
    {
      title: "Practical, Usage-Based Advice",
      description: "Recommendations based on how you actually use your space.",
    },
    {
      title: "Clean, Organised Installations",
      description: "Work completed neatly with minimal disruption.",
    },
    {
      title: "Respect for Homes & Workspaces",
      description: "We treat occupied spaces with care and professionalism.",
    },
  ];

  const faqItems = [
    {
      question: "Do you work on apartments and townhouses as well as houses?",
      answer:
        "Yes. We regularly work on apartments, townhouses, and standalone homes, adapting our approach to suit each type of property.",
    },
    {
      question: "Can you upgrade electrical systems during a renovation?",
      answer:
        "Absolutely. We often coordinate with builders and renovators to ensure electrical work is completed at the correct stages.",
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
    <div id="CanterburyPage" className="canterbury-page">
      <SEO
        title="Electrician in Canterbury | Local Electrical Services NZXTGEN"
        description="Licensed electricians servicing Canterbury homes and small businesses. Reliable electrical, safety and smart solutions by NZXTGEN."
        canonical={typeof window !== "undefined" ? window.location.origin + "/electrician-canterbury" : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="canterbury-content">
        <section
          className="canterbury-hero"
          style={{ backgroundImage: `url("/images/suburb images/canterbury/Webp/canterbury-2193-city-night-ligts-overview-drone-shot_065219.WEBP")` }}
        >
          <div className="canterbury-hero-overlay">
            <div className="canterbury-hero-inner">
              <p className="canterbury-kicker">Need a trusted local electrician in Canterbury?</p>
              <h1>Electrician in Canterbury – NZXTGEN</h1>
              <p className="canterbury-hero-subtext">
                Licensed electricians servicing Canterbury homes and small businesses. Reliable
                electrical, safety and smart solutions by NZXTGEN.
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
                Electrician in Canterbury <span className="canterbury-highlight">– NZXTGEN</span>
              </h2>
              <p className="canterbury-lead">
                Canterbury is a suburb that continues to evolve. With its mix of established family
                homes, medium-density developments, and local businesses operating along key
                corridors, electrical needs in the area are diverse and often complex.
              </p>
              <p>
                Many properties were built decades ago and are now being upgraded to support modern
                living, while newer developments require carefully planned electrical systems from
                the outset.
              </p>
              <p>
                NZXTGEN provides professional electrical services throughout Canterbury, supporting
                homeowners and small businesses with safe, compliant, and practical solutions. We
                also regularly work in nearby areas such as Croydon Park and Hurlstone Park, where
                similar property styles and renovation trends create familiar electrical challenges.
                Our approach is grounded in understanding how people use their spaces and delivering
                electrical work that supports that use reliably.
              </p>
            </div>
            <div className="canterbury-intro-image-card">
              <img src="/images/suburb images/canterbury/Webp/canterbury-2193-park-view-lake-night-lights_065217.WEBP" alt="Canterbury residential streetscape" />
            </div>
          </div>
        </section>

        <section className="canterbury-section canterbury-services-modern">
          <div className="canterbury-section-inner">
            <div className="canterbury-services-container">
              <div className="canterbury-services-context">
                <h2 className="canterbury-services-headline">
                  Electrical Services Suited to Canterbury Properties
                </h2>
                <div className="canterbury-services-intro">
                  <p>
                    Electrical work in Canterbury often involves upgrading existing systems rather than
                    installing brand-new infrastructure. Older wiring, limited power capacity, and
                    outdated switchboards are common issues, particularly in homes that have been
                    renovated in stages over time.
                  </p>
                  <p>
                    We assist Canterbury clients with a wide range of services, including:
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
                    For small businesses operating from offices, shopfronts, or mixed-use buildings,
                    reliable electrical systems are essential for daily operations. We provide electrical
                    support that balances performance, safety, and minimal disruption, allowing businesses
                    to function without unnecessary downtime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="canterbury-feature-band"
          style={{ backgroundImage: `url("/images/suburb images/canterbury/Webp/canterbury-2193-city-night-street-lights_065210.WEBP")` }}
        >
          <div className="canterbury-feature-overlay">
            <div className="canterbury-section-inner">
              <div className="canterbury-section-header light">
                <h2 className="canterbury-section-title">Common Electrical Scenarios in Canterbury</h2>
                <p>
                  Because Canterbury sits between major transport routes and neighbouring suburbs like
                  Croydon Park and Hurlstone Park, properties in the area often experience a blend of
                  residential and commercial electrical demands. Our experience working locally means we
                  frequently encounter similar patterns and requirements.
                </p>
              </div>
              <div className="canterbury-feature-grid">
                <article className="canterbury-feature-card">
                  <h3>Older Homes and Electrical Upgrades</h3>
                  <p>
                    Many homes in Canterbury were built at a time when electrical demand was far lower.
                    As households add air conditioning, modern kitchens, entertainment systems, and
                    work-from-home setups, existing electrical systems can become strained.
                  </p>
                  <p>Common upgrade needs include:</p>
                  <ul className="canterbury-list">
                    {olderHomesList.map((item, index) => (
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
                    Addressing these issues proactively improves safety and helps prevent inconvenient or
                    hazardous electrical faults.
                  </p>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Renovations and Medium-Density Living</h3>
                  <p>
                    Renovations are common across Canterbury, particularly where older homes are being
                    modernised or subdivided. Electrical planning during renovations is critical to avoid
                    surface cabling, limited power access, or non-compliant installations.
                  </p>
                  <p>We regularly support renovation projects by:</p>
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
                    In newer townhouse and apartment-style developments, electrical systems must be
                    designed to meet current standards while remaining practical for everyday use.
                  </p>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Changing Lifestyles and Technology</h3>
                  <p>
                    Like many inner and middle-ring suburbs, Canterbury has seen an increase in remote
                    work, smart technology, and energy-conscious upgrades. These changes often highlight
                    limitations in older electrical layouts.
                  </p>
                  <p>We help clients adapt their homes and workplaces by:</p>
                  <ul className="canterbury-list">
                    {technologyList.map((item, index) => (
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
                    These upgrades are designed to integrate smoothly with existing systems rather than
                    overcomplicate them.
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
                <h2 className="canterbury-why-choose-title">Why Choose NZXTGEN in Canterbury</h2>
                <p className="canterbury-why-choose-text">
                  Choosing an electrician is about confidence in both workmanship and communication.
                  NZXTGEN focuses on delivering electrical services that are technically sound, clearly
                  explained, and suited to the property and its occupants.
                </p>
                <p className="canterbury-why-choose-text">
                  Our familiarity with the housing styles and electrical infrastructure common in
                  Canterbury, Croydon Park, and Hurlstone Park allows us to anticipate issues such as
                  limited access, mixed wiring systems, or previous non-compliant work. This experience
                  helps projects run more smoothly and reduces the risk of unexpected complications.
                </p>
                <p className="canterbury-why-choose-text">
                  We also understand the importance of scheduling and reliability. Electrical work often
                  needs to fit around family routines or business hours, and we plan accordingly to
                  minimise disruption.
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
            <h2 className="canterbury-cta-band-title">Looking for dependable electrical work done properly?</h2>
            <Link className="canterbury-cta-band-button" to="/free-quote">
              👉 Contact NZXTGEN today to arrange your free quote
            </Link>
          </div>
        </section>

        <section className="canterbury-section canterbury-area-faq">
          <div className="canterbury-section-inner">
            <div className="canterbury-area-faq-grid">
              <div className="canterbury-area-faq-service">
                <h2 className="canterbury-section-title">Service Area</h2>
                <p className="canterbury-area-faq-text">
                  NZXTGEN provides electrical services throughout Canterbury, with regular work completed
                  in surrounding areas including Croydon Park and Hurlstone Park.
                </p>
                <Link className="canterbury-service-area-cta" to="/free-quote">
                  Request a free quote
                </Link>
              </div>
              <div className="canterbury-area-faq-faq">
                <h2 className="canterbury-section-title">Canterbury Electrical Services – FAQs</h2>
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

export default Canterbury;
