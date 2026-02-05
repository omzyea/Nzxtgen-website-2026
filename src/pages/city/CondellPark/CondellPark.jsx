import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SEO from "../../../components/SEO";
import LocalBusinessSchema from "../../../components/LocalBusinessSchema";
import WhatsappChat from "../../../components/WhatsappChat";
import MobileCallButton from "../../../components/MobileCallButton";
import "../cityLayout.css";
import condellParkHero from "../../../assets/suburb images/condell-park/Webp/condell-park-shops-2200.WEBP";
import condellParkParallax from "../../../assets/suburb images/condell-park/Webp/simmat-street-condell-park-view-2200.WEBP";

const condellParkThree = require("../../../assets/cities/Condell Park-3.jpg");

const CondellPark = () => {
  const serviceList = [
    { label: "Lighting upgrades for indoor and outdoor areas", to: "/lighting-installation" },
    { label: "Additional power points and circuit improvements", to: "/services/electrical-services" },
    { label: "Ceiling fan installation and ventilation solutions", to: "/services/electrical-services" },
    { label: "Smoke alarm installation and improved coverage", to: "/smoke-alarms-electrical-safety-checks" },
    { label: "Smart lighting control and automation", to: "/services/smart-home" },
    { label: "Outdoor security cameras and CCTV systems", to: "/services/security-systems" },
    { label: "Data connectivity and structured cabling", to: "/services/data-networking" },
    { label: "Fault finding and electrical repairs", to: "/electrical-fault-finding-repairs" },
  ];

  const homeServicesList = [
    { label: "Lighting upgrades to improve visibility and efficiency", to: "/lighting-installation" },
    { label: "Additional power points where needed", to: "/services/electrical-services" },
    { label: "Ceiling fans for comfort and airflow", to: "/services/electrical-services" },
    { label: "Improved smoke alarm coverage for safety", to: "/smoke-alarms-electrical-safety-checks" },
  ];

  const smartTechnologyList = [
    { label: "Smarter lighting control systems", to: "/services/smart-home" },
    { label: "Outdoor security cameras", to: "/services/security-systems" },
    { label: "Better data connectivity for work-from-home setups", to: "/services/data-networking" },
    "Integrated systems that work together",
  ];

  const businessServicesList = [
    { label: "Reliable data cabling for connectivity", to: "/services/data-networking" },
    { label: "Security systems for protection", to: "/services/security-systems" },
    "Clear CCTV coverage",
    "Functional and compliant installations",
  ];

  const trustPillars = [
    { title: "Fully Licensed & Insured", description: "Compliant electrical work carried out by qualified professionals." },
    { title: "Practical Solutions", description: "Clean installations designed for real-world use, not unnecessary complexity." },
    { title: "Straightforward Controls", description: "Systems that are easy to maintain and operate." },
    { title: "Minimal Disruption", description: "Work completed efficiently with respect for your home and schedule." },
    { title: "Local Knowledge", description: "Familiar with Condell Park housing layouts and renovation patterns." },
  ];

  const faqItems = [
    {
      question: "Do you work on older homes common in Condell Park?",
      answer:
        "Yes. We regularly upgrade and rework electrical systems in older properties to meet modern safety standards.",
    },
    {
      question: "Can smart home systems be added without major renovations?",
      answer:
        "In many cases, yes. We design solutions that work with existing wiring where possible.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="CondellParkPage" className="canterbury-page">
      <SEO
        title="Electrician & Smart Home Services in Condell Park | NZXTGEN"
        description="NZXTGEN provides electrical, smart home, security and data services for homes and businesses in Condell Park, NSW. Licensed and reliable."
        canonical={typeof window !== "undefined" ? window.location.origin + "/electrician-condell-park" : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="canterbury-content">
        <section
          className="canterbury-hero"
          style={{ backgroundImage: `url(${condellParkHero})` }}
        >
          <div className="canterbury-hero-overlay">
            <div className="canterbury-hero-inner">
              <p className="canterbury-kicker">Need reliable electrical and smart home services in Condell Park?</p>
              <h1>Electrician & Smart Home Services in Condell Park – NZXTGEN</h1>
              <p className="canterbury-hero-subtext">
                NZXTGEN provides electrical, smart home, security and data services for homes and businesses in Condell Park, NSW. Licensed and reliable.
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
                Electrician & Smart Home Services in Condell Park <span className="canterbury-highlight">– NZXTGEN</span>
              </h2>
              <p className="canterbury-lead">
                Condell Park is known for its quieter streets, family-friendly homes, and a mix of older properties and modern upgrades. Electrical and technology needs here often involve improving safety, updating ageing systems, and integrating modern features without disrupting the character of the home.
              </p>
              <p>
                We regularly work in Condell Park homes that require lighting upgrades, additional power points, ceiling fans, and improved smoke alarm coverage. Many properties also benefit from smarter lighting control, outdoor security cameras, and better data connectivity to support work-from-home setups.
              </p>
              <p>
                Local households often look for practical solutions rather than overly complex systems. Our approach suits this well — clean installations, straightforward controls and systems that are easy to maintain.
              </p>
            </div>
            <div className="canterbury-intro-image-card">
              <img src={condellParkThree} alt="Condell Park residential streetscape" />
            </div>
          </div>
        </section>

        <section className="canterbury-section canterbury-services-modern">
          <div className="canterbury-section-inner">
            <div className="canterbury-services-container">
              <div className="canterbury-services-context">
                <h2 className="canterbury-services-headline">
                  Electrical & Technology Services for Condell Park Homes
                </h2>
                <div className="canterbury-services-intro">
                  <p>
                    Small businesses and home-based operators in the area commonly need reliable data cabling, security systems, and clear CCTV coverage. We design installations that are functional, compliant, and discreet.
                  </p>
                  <p>We provide a wide range of services for Condell Park properties, including:</p>
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
                    Because Condell Park sits close to major connecting roads and nearby commercial hubs, reliability and security are key concerns for many property owners. Our integrated approach allows electrical, data, and security systems to work together without unnecessary duplication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="canterbury-feature-band"
          style={{ backgroundImage: `url(${condellParkParallax})` }}
        >
          <div className="canterbury-feature-overlay">
            <div className="canterbury-section-inner">
              <div className="canterbury-section-header light">
                <h2 className="canterbury-section-title">Common Electrical & Technology Needs in Condell Park</h2>
                <p>
                  Being familiar with local housing layouts and renovation patterns helps us plan work efficiently, avoid common issues, and complete projects with minimal disruption.
                </p>
              </div>
              <div className="canterbury-feature-grid">
                <article className="canterbury-feature-card">
                  <h3>Home Electrical Improvements</h3>
                  <p>
                    We regularly work in Condell Park homes that require practical electrical upgrades to improve safety, functionality, and modern living standards.
                  </p>
                  <p>Common home improvements include:</p>
                  <ul className="canterbury-list">
                    {homeServicesList.map((item, index) => (
                      <li key={index}>
                        {typeof item === 'object' && item.to ? (
                          <Link to={item.to} className="canterbury-text-link">{item.label}</Link>
                        ) : (
                          item.label || item
                        )}
                      </li>
                    ))}
                  </ul>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Smart Technology Integration</h3>
                  <p>
                    Many properties benefit from modern technology that enhances convenience and security without disrupting the character of the home.
                  </p>
                  <p>We help integrate:</p>
                  <ul className="canterbury-list">
                    {smartTechnologyList.map((item, index) => (
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
                    Local households often look for practical solutions rather than overly complex systems. Our approach suits this well — clean installations, straightforward controls and systems that are easy to maintain.
                  </p>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Small Business & Home-Based Services</h3>
                  <p>
                    Small businesses and home-based operators in the area commonly need reliable infrastructure to support their operations.
                  </p>
                  <p>We provide:</p>
                  <ul className="canterbury-list">
                    {businessServicesList.map((item, index) => (
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
                    We design installations that are functional, compliant, and discreet, ensuring they support business operations without unnecessary complexity.
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
                <h2 className="canterbury-why-choose-title">Why Choose NZXTGEN in Condell Park</h2>
                <p className="canterbury-why-choose-text">
                  Our approach focuses on practical solutions that improve safety, functionality, and modern living standards without disrupting the character of your home. We understand that Condell Park residents value clean installations, straightforward controls, and systems that are easy to maintain.
                </p>
                <p className="canterbury-why-choose-text">
                  Because Condell Park sits close to major connecting roads and nearby commercial hubs, reliability and security are key concerns for many property owners. Our integrated approach allows electrical, data, and security systems to work together without unnecessary duplication.
                </p>
                <p className="canterbury-why-choose-text">
                  Being familiar with local housing layouts and renovation patterns helps us plan work efficiently, avoid common issues, and complete projects with minimal disruption.
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
            <h2 className="canterbury-cta-band-title">Ready to improve your electrical and smart home systems?</h2>
            <Link className="canterbury-cta-band-button" to="/free-quote">
              👉 Contact NZXTGEN today for a free quote
            </Link>
          </div>
        </section>

        <section className="canterbury-section canterbury-area-faq">
          <div className="canterbury-section-inner">
            <div className="canterbury-area-faq-grid">
              <div className="canterbury-area-faq-service">
                <h2 className="canterbury-section-title">Service Area</h2>
                <p className="canterbury-area-faq-text">
                  NZXTGEN provides electrical, smart home, security and data services for homes and businesses in Condell Park, NSW.
                </p>
                <Link className="canterbury-service-area-cta" to="/free-quote">
                  Request a free quote
                </Link>
              </div>
              <div className="canterbury-area-faq-faq">
                <h2 className="canterbury-section-title">Condell Park Electrical Services – FAQs</h2>
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

export default CondellPark;
