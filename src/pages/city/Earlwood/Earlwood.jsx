import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SEO from "../../../components/SEO";
import LocalBusinessSchema from "../../../components/LocalBusinessSchema";
import WhatsappChat from "../../../components/WhatsappChat";
import MobileCallButton from "../../../components/MobileCallButton";
import "../cityLayout.css";

const Earlwood = () => {
  const serviceList = [
    { label: "Power point upgrades and additional outlets", to: "/services/electrical-services" },
    { label: "Lighting installations and replacements", to: "/lighting-installation" },
    { label: "Switchboard inspections and safety improvements", to: "/switchboard-upgrade" },
    { label: "Smoke alarm installation and testing", to: "/smoke-alarms-electrical-safety-checks" },
    { label: "Ceiling fans and ventilation solutions", to: "/services/electrical-services" },
    { label: "Fault finding and electrical repairs", to: "/electrical-fault-finding-repairs" },
    { label: "Smart home and automation installations", to: "/smart-home/more-info" },
    { label: "Security systems including alarms and CCTV", to: "/services/security-systems" },
  ];

  const renovationsList = [
    { label: "Appliance circuit planning and installation", to: "/new-builds-renovations" },
    { label: "Bathroom electrical compliance and IP-rated fittings", to: "/new-builds-renovations" },
    { label: "Lighting layout adjustments and switching changes", to: "/lighting-installation" },
    { label: "Wall chasing and concealed cabling", to: "/new-builds-renovations" },
    { label: "Coordination with builders and other trades", to: "/new-builds-renovations" },
  ];

  const safetyList = [
    { label: "Assessing switchboard condition and capacity", to: "/switchboard-upgrade" },
    { label: "Improving safety switch coverage", to: "/switchboard-upgrade" },
    { label: "Replacing worn or damaged components", to: "/electrical-fault-finding-repairs" },
    { label: "Addressing recurring faults or tripping circuits", to: "/electrical-fault-finding-repairs" },
  ];

  const lifestyleList = [
    { label: "Additional power points in study areas", to: "/services/electrical-services" },
    { label: "Improved lighting for home offices", to: "/lighting-installation" },
    { label: "Smart lighting and switching for flexibility", to: "/smart-home/more-info" },
    { label: "Structured cabling where required", to: "/services/data-networking" },
  ];

  const trustPillars = [
    { title: "Fully Licensed & Insured", description: "Compliant electrical work carried out by qualified professionals." },
    { title: "Clear Explanations Before Work", description: "We explain what is needed before starting — no surprises." },
    { title: "Practical Recommendations Based on Real Usage", description: "Advice tailored to how you actually use your space." },
    { title: "Neat, Organised Workmanship", description: "Clean installations with minimal disruption." },
    { title: "Reliable Scheduling and Communication", description: "We show up when we say we will and keep you informed." },
  ];

  const faqItems = [
    {
      question: "Do you work on older homes in Earlwood?",
      answer:
        "Yes. We regularly upgrade and repair electrical systems in older properties while preserving the integrity of the home.",
    },
    {
      question: "Can electrical work be completed during renovations?",
      answer:
        "Yes. We coordinate with builders and trades to ensure electrical work is completed at the correct stages.",
    },
    {
      question: "Do you provide electrical services for small local businesses?",
      answer:
        "Yes. We support offices, studios, and small commercial spaces with compliant and reliable electrical solutions.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="EarlwoodPage" className="canterbury-page">
      <SEO
        title="Electrician in Earlwood | Trusted Local Electrical Services"
        description="Licensed electricians servicing Earlwood homes and businesses. Electrical, safety, smart home and security work by NZXTGEN."
        canonical={typeof window !== "undefined" ? window.location.origin + "/areas-we-service/electrician-earlwood" : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="canterbury-content">
        <section
          className="canterbury-hero"
          style={{ backgroundImage: `url("/images/suburb-images/earlwood/Webp/nzxtgen-earlwood-shops-river-view.webp")` }}
        >
          <div className="canterbury-hero-overlay">
            <div className="canterbury-hero-inner">
              <p className="canterbury-kicker">Need a dependable local electrician you can trust?</p>
              <h1>Electrician in Earlwood – NZXTGEN</h1>
              <p className="canterbury-hero-subtext">
                Licensed electricians servicing Earlwood homes and businesses. Electrical, safety,
                smart home and security work by NZXTGEN.
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
                Electrician in Earlwood <span className="canterbury-highlight">– NZXTGEN</span>
              </h2>
              <p className="canterbury-lead">
                Earlwood is known for its established residential streets, family homes, and steady
                renovation activity. With many properties sitting between older electrical systems
                and modern living expectations, electrical work in this area often requires careful
                planning rather than quick fixes. From classic brick homes near the Cooks River to
                updated townhouses and small commercial spaces, each property brings its own
                electrical challenges.
              </p>
              <p>
                NZXTGEN provides licensed electrical services throughout Earlwood, supporting
                homeowners and small businesses who want safe, compliant, and practical solutions. We
                also regularly work in nearby areas such as Marrickville and Bexley, which share
                similar building styles and infrastructure considerations. Our work focuses on
                improving safety, functionality, and long-term reliability without unnecessary
                complexity.
              </p>
            </div>
            <div className="canterbury-intro-image-card">
              <img src="/images/suburb-images/earlwood/Webp/nzxtgen-earlwood-lake-river-view.webp" alt="Earlwood residential streetscape" />
            </div>
          </div>
        </section>

        <section className="canterbury-section canterbury-services-modern">
          <div className="canterbury-section-inner">
            <div className="canterbury-services-container">
              <div className="canterbury-services-context">
                <h2 className="canterbury-services-headline">
                  Electrical Services Suited to Earlwood Properties
                </h2>
                <div className="canterbury-services-intro">
                  <p>
                    Many Earlwood homes were built at a time when electrical demand was far lower than it
                    is today. As families add air conditioning, modern kitchens, home offices, and smart
                    technology, older electrical systems can struggle to keep up. This often leads to
                    overloaded circuits, limited power access, or outdated safety protection.
                  </p>
                  <p>We commonly assist Earlwood clients with:</p>
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
                    For small businesses operating from shopfronts, studios, or mixed-use buildings,
                    electrical systems must support daily operations while meeting compliance and safety
                    requirements. We provide electrical support that prioritises reliability, clear
                    access, and tidy installations suited to professional environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="canterbury-feature-band"
          style={{ backgroundImage: `url("/images/suburb-images/earlwood/Webp/nzxtgen-earlwood-street-feature.webp")` }}
        >
          <div className="canterbury-feature-overlay">
            <div className="canterbury-section-inner">
              <div className="canterbury-section-header light">
                <h2 className="canterbury-section-title">
                  Common Electrical Work in Earlwood Homes & Businesses
                </h2>
                <p>
                  Electrical work in Earlwood often reflects how the suburb is evolving. Renovations,
                  extensions, and upgrades are common, but many properties still retain parts of
                  their original wiring. This mix requires an electrician who understands how to
                  integrate new systems without creating future issues.
                </p>
              </div>
              <div className="canterbury-feature-grid">
                <article className="canterbury-feature-card">
                  <h3>Renovations and Home Improvements</h3>
                  <p>
                    Kitchen and bathroom renovations are particularly common in Earlwood. These
                    spaces require careful electrical planning due to higher power demands and strict
                    safety requirements.
                  </p>
                  <p>Our renovation-related work includes:</p>
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
                    By planning electrical work early in the renovation process, homeowners can
                    avoid surface-mounted cabling and reduce the need for later modifications.
                  </p>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Safety and Compliance Upgrades</h3>
                  <p>
                    Older switchboards, limited safety switches, and ageing wiring are frequent
                    findings in Earlwood homes. These issues are not always visible but can pose
                    serious safety risks if left unaddressed.
                  </p>
                  <p>We help homeowners improve safety by:</p>
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
                    These upgrades not only improve safety but also help properties meet current
                    Australian standards.
                  </p>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Work-From-Home and Lifestyle Changes</h3>
                  <p>
                    With more residents working remotely, demand for reliable power, lighting, and
                    data access has increased. Many Earlwood homes were not designed with dedicated
                    workspaces in mind.
                  </p>
                  <p>We design practical solutions such as:</p>
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
                    These upgrades support productivity without disrupting the overall layout of the
                    home.
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
                <h2 className="canterbury-why-choose-title">Why Choose NZXTGEN in Earlwood</h2>
                <p className="canterbury-why-choose-text">
                  Electrical work should be completed with care, transparency, and respect for the
                  property. NZXTGEN focuses on doing the job properly, rather than rushing through
                  tasks or offering unnecessary upgrades.
                </p>
                <p className="canterbury-why-choose-text">
                  We understand the building styles common in Earlwood and surrounding suburbs like
                  Marrickville and Bexley. That familiarity allows us to anticipate access challenges,
                  plan efficient cable routes, and avoid unnecessary disruption during installations.
                </p>
                <p className="canterbury-why-choose-text">
                  Our approach suits homeowners who want long-term reliability and small businesses
                  that depend on consistent electrical performance.
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
            <h2 className="canterbury-cta-band-title">Ready to improve the safety and functionality of your electrical system?</h2>
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
                  NZXTGEN provides electrical services across Earlwood, with regular work completed in
                  nearby areas including Marrickville and Bexley.
                </p>
                <Link className="canterbury-service-area-cta" to="/free-quote">
                  Request a free quote
                </Link>
              </div>
              <div className="canterbury-area-faq-faq">
                <h2 className="canterbury-section-title">Earlwood Electrical Services – FAQs</h2>
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

export default Earlwood;
