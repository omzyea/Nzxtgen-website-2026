import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SEO from "../../../components/SEO";
import LocalBusinessSchema from "../../../components/LocalBusinessSchema";
import WhatsappChat from "../../../components/WhatsappChat";
import MobileCallButton from "../../../components/MobileCallButton";
import strathfieldHero from "../../../assets/suburb images/strathfield/Webp/strathfield-library-2135-065716.WEBP";
import strathfieldParallax from "../../../assets/cities/Strathfield-2.jpg";
import strathfieldThree from "../../../assets/suburb images/strathfield/Webp/strathfield-festival-2135-065730(1).WEBP";
import "../cityLayout.css";

const Strathfield = () => {
  const serviceList = [
    { label: "Lighting installation and upgrades for living spaces, gardens, and driveways", to: "/lighting-installation" },
    { label: "Power point installation to improve accessibility and convenience", to: "/services/electrical-services" },
    { label: "Switchboard upgrades to meet current safety standards", to: "/switchboard-upgrade" },
    { label: "Smoke alarm installation and testing for compliance", to: "/smoke-alarms-electrical-safety-checks" },
    { label: "Ceiling fan installation for improved airflow and comfort", to: "/lighting-installation" },
    { label: "Electrical fault finding and repairs", to: "/electrical-fault-finding-repairs" },
    { label: "Smart home solutions and automation", to: "/services/smart-home" },
    { label: "Security systems including CCTV and alarms", to: "/services/security-systems" },
  ];

  const capacityIssuesList = [
    "Overloaded circuits causing frequent power trips",
    { label: "Outdated switchboards lacking modern safety protection", to: "/switchboard-upgrade" },
    { label: "Limited power points leading to unsafe extension use", to: "/services/electrical-services" },
    { label: "Inconsistent lighting performance", to: "/lighting-installation" },
  ];

  const renovationsList = [
    { label: "Electrical planning before construction begins", to: "/new-builds-renovations" },
    { label: "Installing new circuits for kitchens, bathrooms, and extensions", to: "/new-builds-renovations" },
    { label: "Upgrading lighting layouts to suit renovated spaces", to: "/lighting-installation" },
    { label: "Ensuring all work meets current Australian Standards", to: "/compliance-licensing" },
  ];

  const apartmentsList = [
    "Coordinating with building managers where required",
    "Ensuring electrical upgrades comply with strata regulations",
    "Minimising disruption to neighbours",
    "Providing clear documentation for completed work",
  ];

  const trustPillars = [
    { title: "Fully Licensed & Insured", description: "Compliant electrical work carried out by qualified professionals." },
    { title: "Clear Explanations of Recommended Work", description: "We explain what is needed before starting — no surprises." },
    { title: "Practical Solutions Rather Than Unnecessary Upgrades", description: "Recommendations tailored to your property and usage." },
    { title: "Neat, Organised Workmanship", description: "Clean installations with minimal disruption." },
    { title: "Respect for Occupied Homes and Business Environments", description: "We treat your space with care and professionalism." },
  ];

  const faqItems = [
    {
      question: "Can you upgrade switchboards in older Strathfield homes?",
      answer:
        "Yes. We regularly upgrade older switchboards to improve safety and support increased electrical demand.",
    },
    {
      question: "Do you work with strata-managed apartments?",
      answer:
        "Yes. We are experienced in working within strata requirements and coordinating access when needed.",
    },
    {
      question: "Can you help plan electrical work for renovations or extensions?",
      answer:
        "Absolutely. Early planning helps ensure the electrical layout suits the finished space and avoids rework.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="StrathfieldPage" className="canterbury-page">
      <SEO
        title="Electrician in Strathfield | Trusted Electrical Services"
        description="Professional electrician servicing Strathfield homes and small businesses. Safe, reliable electrical solutions by NZXTGEN."
        canonical={typeof window !== "undefined" ? window.location.origin + "/electrician-strathfield" : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="canterbury-content">
        <section
          className="canterbury-hero"
          style={{ backgroundImage: `url(${strathfieldHero})` }}
        >
          <div className="canterbury-hero-overlay">
            <div className="canterbury-hero-inner">
              <p className="canterbury-kicker">Looking for a reliable electrician in Strathfield?</p>
              <h1>Electrician Services in Strathfield - NZXTGEN</h1>
              <p className="canterbury-hero-subtext">
                Professional electrician servicing Strathfield homes and small businesses. Safe,
                reliable electrical solutions by NZXTGEN.
              </p>
              <Link className="canterbury-cta" to="/free-quote">
                👉 Contact NZXTGEN today for a free, no-obligation quote
              </Link>
            </div>
          </div>
        </section>

        <section className="canterbury-section">
          <div className="canterbury-section-inner canterbury-intro-grid">
            <div className="canterbury-intro-copy">
              <h2 className="canterbury-section-title">Electrician Services in Strathfield - NZXTGEN</h2>
              <p className="canterbury-lead">
                Strathfield is a well-established suburb known for its mix of large family homes,
                modern apartments, schools, and local businesses. Properties in the area range from
                older brick homes with ageing electrical systems to newly built residences requiring
                carefully planned electrical layouts. This variety means electrical work in
                Strathfield often requires a considered, property-specific approach rather than
                one-size-fits-all solutions.
              </p>
              <p>
                NZXTGEN provides professional electrical services across Strathfield, supporting
                homeowners and small businesses with safe, compliant, and practical electrical work.
                We regularly attend jobs in neighbouring areas such as Burwood and Concord, where
                property styles and electrical demands closely mirror those found in Strathfield. Our
                local experience allows us to anticipate common issues and deliver solutions that
                suit how people live and work in the area.
              </p>
            </div>
            <div className="canterbury-intro-image-card">
              <img src={strathfieldThree} alt="Strathfield residential streetscape" />
            </div>
          </div>
        </section>

        <section className="canterbury-section canterbury-services-modern">
          <div className="canterbury-section-inner">
            <div className="canterbury-services-container">
              <div className="canterbury-services-context">
                <h2 className="canterbury-services-headline">
                  Electrical Services for Strathfield Homes and Businesses
                </h2>
                <div className="canterbury-services-intro">
                  <p>
                    Electrical needs in Strathfield often reflect the suburb's balance of older
                    residences and modern developments. Many homes have undergone renovations over time,
                    resulting in a mix of original and updated wiring. Without proper assessment, this
                    can lead to safety risks, capacity issues, or inefficient layouts.
                  </p>
                  <p>NZXTGEN offers a broad range of electrical services tailored to Strathfield properties, including:</p>
                </div>
              </div>
              <div className="canterbury-services-content">
                <div className="canterbury-services-group">
                  <div className="canterbury-services-items">
                    {serviceList.map((item) => (
                      <div key={item.label} className="canterbury-service-item">
                        <div className="canterbury-service-indicator"></div>
                        <span className="canterbury-service-text">
                          <Link to={item.to} className="canterbury-text-link">{item.label}</Link>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="canterbury-services-divider"></div>
                <div className="canterbury-services-business">
                  <p className="canterbury-services-business-text">
                    For small businesses operating in offices, clinics, or retail spaces, electrical
                    reliability is essential. We provide electrical services that support daily
                    operations while minimising disruption, whether that involves upgrading lighting,
                    adding dedicated circuits, or resolving ongoing electrical faults.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="canterbury-feature-band"
          style={{ backgroundImage: `url(${strathfieldParallax})` }}
        >
          <div className="canterbury-feature-overlay">
            <div className="canterbury-section-inner">
              <div className="canterbury-section-header light">
                <h2 className="canterbury-section-title">Common Electrical Work in Strathfield</h2>
                <p>
                  Strathfield's location and development history create several recurring electrical
                  scenarios. Our experience working locally, including nearby Burwood and Concord,
                  means we are familiar with the challenges these properties often present.
                </p>
              </div>
              <div className="canterbury-feature-grid">
                <article className="canterbury-feature-card">
                  <h3>Older Homes and Electrical Capacity</h3>
                  <p>
                    Many family homes in Strathfield were built when electrical demand was far lower
                    than it is today. As households add air conditioning, modern kitchens, home
                    offices, and entertainment systems, existing wiring and switchboards can struggle
                    to cope.
                  </p>
                  <p>Typical issues we address include:</p>
                  <ul className="canterbury-list">
                    {capacityIssuesList.map((item, index) => (
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
                    Upgrading these systems improves safety and ensures the home can support modern
                    living without ongoing electrical issues.
                  </p>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Renovations and Extensions</h3>
                  <p>
                    Renovations are common in Strathfield, particularly extensions to accommodate
                    growing families or upgrades to improve functionality. Electrical work during
                    renovations needs to be carefully planned to avoid costly changes later.
                  </p>
                  <p>We regularly assist with:</p>
                  <ul className="canterbury-list">
                    {renovationsList.map((item) => (
                      <li key={item.label}>
                        <Link to={item.to} className="canterbury-text-link">{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Early involvement helps ensure the finished space functions as intended and
                    remains compliant.
                  </p>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Apartments and Medium-Density Buildings</h3>
                  <p>
                    Strathfield has seen an increase in apartment living, bringing different
                    electrical considerations compared to standalone homes. Shared infrastructure,
                    limited access, and strata requirements all need to be managed correctly.
                  </p>
                  <p>NZXTGEN works within these constraints by:</p>
                  <ul className="canterbury-list">
                    {apartmentsList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="canterbury-section canterbury-why-choose">
          <div className="canterbury-section-inner">
            <div className="canterbury-why-choose-container">
              <div className="canterbury-why-choose-content">
                <h2 className="canterbury-why-choose-title">Why Choose NZXTGEN in Strathfield</h2>
                <p className="canterbury-why-choose-text">
                  Electrical work is not just about installation; it's about trust, clarity, and
                  long-term reliability. NZXTGEN focuses on delivering electrical services that are
                  technically sound and appropriate for the specific property and its occupants.
                </p>
                <p className="canterbury-why-choose-text">
                  Our familiarity with the housing stock and infrastructure in Strathfield, as well as
                  surrounding areas like Burwood and Concord, allows us to quickly identify common
                  issues such as mixed wiring systems, limited switchboard capacity, or previous
                  non-compliant work. This experience helps projects progress smoothly and reduces
                  unexpected delays.
                </p>
                <p className="canterbury-why-choose-text">
                  We also understand that electrical work often needs to fit around busy schedules.
                  Whether working in a family home or a small business, we aim to complete work
                  efficiently while maintaining high standards of safety and quality.
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
            <h2 className="canterbury-cta-band-title">Need professional electrical work you can rely on?</h2>
            <Link className="canterbury-cta-band-button" to="/free-quote">
              👉 Get in touch with NZXTGEN today to book your free quote
            </Link>
          </div>
        </section>

        <section className="canterbury-section canterbury-area-faq">
          <div className="canterbury-section-inner">
            <div className="canterbury-area-faq-grid">
              <div className="canterbury-area-faq-service">
                <h2 className="canterbury-section-title">Service Area</h2>
                <p className="canterbury-area-faq-text">
                  NZXTGEN provides professional electrical services throughout Strathfield, with regular
                  work carried out in nearby suburbs including Burwood and Concord.
                </p>
                <Link className="canterbury-service-area-cta" to="/free-quote">
                  Request a free quote
                </Link>
              </div>
              <div className="canterbury-area-faq-faq">
                <h2 className="canterbury-section-title">Strathfield Electrical Services – FAQs</h2>
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

export default Strathfield;
