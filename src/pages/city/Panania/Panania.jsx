import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import SEO from "../../../components/SEO";
import LocalBusinessSchema from "../../../components/LocalBusinessSchema";
import WhatsappChat from "../../../components/WhatsappChat";
import MobileCallButton from "../../../components/MobileCallButton";
import "../cityLayout.css";

const Panania = () => {
  const serviceList = [
    { label: "Lighting installation and upgrades for indoor and outdoor areas", to: "/lighting-installation" },
    { label: "Power point installation and relocation", to: "/services/electrical-services" },
    { label: "Switchboard upgrades and safety improvements", to: "/switchboard-upgrade" },
    { label: "Smoke alarm installation and compliance checks", to: "/smoke-alarms-electrical-safety-checks" },
    { label: "Ceiling fan installation for bedrooms and living areas", to: "/services/electrical-services" },
    { label: "Electrical fault finding and repairs", to: "/electrical-fault-finding-repairs" },
    { label: "Smart home and automation solutions", to: "/smart-home/more-info" },
    { label: "Security lighting, alarms, and CCTV systems", to: "/services/security-systems" },
  ];

  const ageingSignsList = [
    { label: "Frequent circuit trips", to: "/electrical-fault-finding-repairs" },
    { label: "Flickering or dimming lights", to: "/electrical-fault-finding-repairs" },
    { label: "Limited power points leading to extension cord use", to: "/services/power-points-electrical-upgrades" },
    { label: "Older switchboards without safety switches", to: "/switchboard-upgrade" },
  ];

  const outdoorList = [
    { label: "Outdoor lighting for gardens and pathways", to: "/lighting-installation" },
    { label: "Weatherproof power points", to: "/services/electrical-services" },
    { label: "Electrical connections for sheds or granny flats", to: "/new-builds-renovations" },
    { label: "Safe wiring for outdoor kitchens and entertainment areas", to: "/services/entertainment-technology" },
  ];

  const smallBusinessList = [
    "Assessing electrical capacity before upgrades",
    "Installing efficient lighting for workspaces",
    "Adding circuits for specialised equipment",
    "Resolving faults quickly and safely",
  ];

  const trustPillars = [
    { title: "Fully Licensed & Insured", description: "Compliant electrical work carried out by qualified professionals." },
    { title: "Clear Explanations of Required and Optional Work", description: "We explain what is needed before starting — no surprises." },
    { title: "Practical Solutions Tailored to the Property", description: "Advice and work suited to how you use your space." },
    { title: "Neat, Organised Installations", description: "Clean workmanship with minimal disruption." },
    { title: "Respect for Occupied Homes and Workplaces", description: "We treat your space with care and professionalism." },
  ];

  const faqItems = [
    {
      question: "Can you upgrade electrical systems in older Panania homes?",
      answer:
        "Yes. We regularly upgrade wiring and switchboards to improve safety and support modern electrical usage.",
    },
    {
      question: "Do you install outdoor power and lighting?",
      answer:
        "Yes. We install weatherproof power points and outdoor lighting suitable for long-term outdoor use.",
    },
    {
      question: "Can you assist small businesses with electrical upgrades?",
      answer:
        "Absolutely. We provide practical electrical solutions that support business operations and meet safety standards.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="PananiaPage" className="canterbury-page">
      <SEO
        title="Electrician in Panania | Local Electrical Services"
        description="Licensed electrician servicing Panania homes and small businesses. Safe, practical electrical solutions by NZXTGEN."
        canonical={typeof window !== "undefined" ? window.location.origin + "/areas-we-service/electrician-panania" : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="canterbury-content">
        <section
          className="canterbury-hero"
          style={{ backgroundImage: `url("/images/cities/nzxtgen-panania-suburb-view.webp")` }}
        >
          <div className="canterbury-hero-overlay">
            <div className="canterbury-hero-inner">
              <p className="canterbury-kicker">Need a trusted local electrician in Panania?</p>
              <h1>NZXTGEN Electrician Services in Panania</h1>
              <p className="canterbury-hero-subtext">
                Licensed electrician servicing Panania homes and small businesses. Safe, practical
                electrical solutions by NZXTGEN.
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
              <h2 className="canterbury-section-title">NZXTGEN Electrician Services in Panania</h2>
              <p className="canterbury-lead">
                Panania is a well-established residential suburb where family homes, small commercial
                premises, and community facilities sit side by side. Many properties in the area were
                built decades ago and have since been upgraded in stages, often resulting in
                electrical systems that no longer match modern usage. From growing families relying
                on multiple appliances to small businesses needing reliable power throughout the day,
                electrical work in Panania requires practical solutions that are safe, compliant, and
                built to last.
              </p>
              <p>
                NZXTGEN provides professional electrical services across Panania, working with
                homeowners and small businesses to resolve everyday electrical issues and deliver
                well-planned upgrades. We also regularly attend jobs in surrounding areas such as
                Milperra and East Hills, where similar property styles and electrical challenges are
                common. This local experience helps us deliver electrical work that suits how
                properties in this area are used.
              </p>
            </div>
            <div className="canterbury-intro-image-card">
              <img src="/images/cities/nzxtgen-panania-local-area.webp" alt="Panania residential streetscape" />
            </div>
          </div>
        </section>

        <section className="canterbury-section canterbury-services-modern">
          <div className="canterbury-section-inner">
            <div className="canterbury-services-container">
              <div className="canterbury-services-context">
                <h2 className="canterbury-services-headline">
                  Electrical Services for Panania Homes and Businesses
                </h2>
                <div className="canterbury-services-intro">
                  <p>
                    Electrical needs in Panania are often shaped by older housing stock combined with
                    modern expectations. Many homes have been renovated over time, with new kitchens, air
                    conditioning, home offices, or outdoor living areas added to original structures.
                    Without careful electrical planning, this can place unnecessary strain on wiring and
                    switchboards.
                  </p>
                  <p>NZXTGEN offers a wide range of electrical services tailored to these conditions, including:</p>
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
                    For small businesses operating from offices, workshops, or retail spaces, we provide
                    electrical services that support daily operations while meeting safety and compliance
                    requirements. This includes installing dedicated circuits, improving lighting
                    layouts, and resolving electrical faults that disrupt productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="canterbury-feature-band"
          style={{ backgroundImage: `url("/images/suburb-images/panania/Webp/nzxtgen-panania-street-feature.webp")` }}
        >
          <div className="canterbury-feature-overlay">
            <div className="canterbury-section-inner">
              <div className="canterbury-section-header light">
                <h2 className="canterbury-section-title">Common Electrical Scenarios in Panania</h2>
                <p>
                  Because Panania features a mix of long-standing homes and gradually updated
                  properties, certain electrical issues arise more frequently. Our experience in the
                  area means we can identify these issues quickly and recommend solutions that are
                  appropriate rather than excessive.
                </p>
              </div>
              <div className="canterbury-feature-grid">
                <article className="canterbury-feature-card">
                  <h3>Ageing Electrical Infrastructure</h3>
                  <p>
                    Many Panania homes were built when electrical demand was far lower than today. As
                    households add modern appliances, entertainment systems, and cooling solutions,
                    older wiring and switchboards may struggle to cope.
                  </p>
                  <p>Common signs include:</p>
                  <ul className="canterbury-list">
                    {ageingSignsList.map((item, index) => (
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
                    Upgrading these systems improves safety, reliability, and overall usability,
                    while also reducing the risk of electrical faults.
                  </p>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Outdoor and Backyard Electrical Work</h3>
                  <p>
                    Panania homes often feature generous backyards and outdoor entertaining areas.
                    Electrical work in these spaces needs to be carefully installed to withstand
                    weather exposure and ongoing use.
                  </p>
                  <p>We regularly assist with:</p>
                  <ul className="canterbury-list">
                    {outdoorList.map((item, index) => (
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
                    All outdoor electrical work is completed to current safety standards, ensuring
                    durability and peace of mind.
                  </p>
                </article>

                <article className="canterbury-feature-card">
                  <h3>Small Business Electrical Requirements</h3>
                  <p>
                    Small businesses in Panania often operate from converted residential properties
                    or compact commercial spaces. Electrical systems in these settings need to be
                    reliable without causing unnecessary downtime.
                  </p>
                  <p>NZXTGEN supports local businesses by:</p>
                  <ul className="canterbury-list">
                    {smallBusinessList.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>
                    Our goal is to ensure electrical systems support business operations rather than
                    hinder them.
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
                <h2 className="canterbury-why-choose-title">Why Choose NZXTGEN in Panania</h2>
                <p className="canterbury-why-choose-text">
                  Choosing an electrician isn't just about getting the job done—it's about ensuring
                  the work is appropriate for the property and safe for long-term use. NZXTGEN takes a
                  straightforward, professional approach to electrical services, focusing on clarity,
                  quality workmanship, and compliance.
                </p>
                <p className="canterbury-why-choose-text">
                  Our familiarity with Panania and nearby suburbs like Milperra and East Hills allows
                  us to anticipate common challenges such as mixed wiring systems, limited switchboard
                  capacity, or previous non-compliant installations. This local knowledge helps reduce
                  delays and ensures work is completed efficiently.
                </p>
                <p className="canterbury-why-choose-text">
                  We also understand that electrical work often needs to fit around family routines or
                  business hours. Wherever possible, we schedule work to minimise disruption and keep
                  the process straightforward.
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
            <h2 className="canterbury-cta-band-title">Ready to book a reliable local electrician?</h2>
            <Link className="canterbury-cta-band-button" to="/free-quote">
              👉 Contact NZXTGEN today for a free, no-obligation quote
            </Link>
          </div>
        </section>

        <section className="canterbury-section canterbury-area-faq">
          <div className="canterbury-section-inner">
            <div className="canterbury-area-faq-grid">
              <div className="canterbury-area-faq-service">
                <h2 className="canterbury-section-title">Service Area</h2>
                <p className="canterbury-area-faq-text">
                  NZXTGEN provides professional electrical services throughout Panania, with regular
                  work also carried out in nearby areas including Milperra and East Hills.
                </p>
                <Link className="canterbury-service-area-cta" to="/free-quote">
                  Request a free quote
                </Link>
              </div>
              <div className="canterbury-area-faq-faq">
                <h2 className="canterbury-section-title">Panania Electrical Services – FAQs</h2>
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

export default Panania;
