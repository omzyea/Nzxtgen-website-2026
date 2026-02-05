import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhatsappChat from "../../components/WhatsappChat";
import MobileCallButton from "../../components/MobileCallButton";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
import residentialHero from "../../assets/services/nzxtgen-residential-electrical-service.webp";
import circuitImage from "../../assets/electricity/circuit-1.WEBP";
import electricianWorking from "../../assets/services/nzxtgen-compliance-electrical-service.webp";
import whyChooseBg from "../../assets/contact-page/electric-support-contact.jpg";
import "./ResidentialElectrical.css";

const ResidentialElectrical = () => {
  const commonNeeds = [
    "Lighting installations and upgrades, both internal and external",
    "Power points, including additional outlets and USB power points",
    "Switches, dimmers, and control upgrades",
    "Ceiling fans and ventilation solutions",
    "Smoke alarms and safety devices",
    "Appliance connections for kitchens, laundries, and utility areas",
  ];

  const warningSigns = [
    "Frequently tripping circuit breakers",
    "Flickering or dimming lights",
    "Limited power points requiring extension leads",
    "Warm switches or outlets",
    "Older switchboards without modern safety protection",
  ];

  const keyReasons = [
    {
      title: "Licensed & Compliant Workmanship",
      description: "All electrical work meets Australian Standards and is tested before completion.",
    },
    {
      title: "Clear Communication",
      description: "We explain what work is required and why, so you can make informed decisions.",
    },
    {
      title: "Neat, Well-Finished Installations",
      description: "Electrical work completed cleanly to suit your home environment.",
    },
    {
      title: "Thorough Testing & Safety Checks",
      description: "Complete system testing before handover to ensure everything operates correctly.",
    },
    {
      title: "Practical Solutions",
      description: "Electrical systems designed for everyday use and adaptable over time.",
    },
  ];

  const faqItems = [
    {
      question: "Can electrical work be done while the home is occupied?",
      answer:
        "Yes. Most residential electrical work can be completed safely while the home is occupied, and we plan tasks to minimise inconvenience.",
    },
    {
      question: "Do you assist with renovation electrical planning?",
      answer:
        "Yes. We coordinate electrical layouts during renovations to ensure compliance, functionality, and efficient placement of outlets and lighting.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="ResidentialElectrical" className="residential-page">
      <SEO
        title="Residential Electrician in NSW | NZXTGEN"
        description="Licensed residential electrician for safe electrical installations, upgrades and repairs. Trusted solutions for homes by NZXTGEN."
        canonical={
          typeof window !== "undefined"
            ? window.location.origin + "/residential-electrical"
            : undefined
        }
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="residential-content">
        <section
          className="residential-hero"
          style={{ backgroundImage: `url(${residentialHero})` }}
        >
          <div className="residential-hero-overlay">
            <div className="residential-hero-inner">
              <p className="residential-kicker">Need electrical work done safely at home?</p>
              <h1>Residential Electrician in Condell Park – NZXTGEN</h1>
              <p className="residential-hero-subtext">
                Licensed residential electrician for safe electrical installations, upgrades and
                repairs. Trusted solutions for homes by NZXTGEN.
              </p>
              <Link className="residential-cta" to="/free-quote">
                👉 Request a free quote
              </Link>
            </div>
          </div>
        </section>

        <section className="residential-section">
          <div className="residential-section-inner residential-intro-grid">
            <div className="residential-intro-copy">
              <h2 className="residential-section-title">What This Service Is</h2>
              <p className="residential-lead">
                Our residential electrical services are designed to support homeowners with safe,
                compliant, and well-planned electrical solutions that suit everyday living.
              </p>
              <p className="residential-text">
                We work across all areas of the home, providing electrical installations, upgrades,
                repairs, and maintenance that improve safety, functionality, and long-term reliability.
                We handle a wide range of common residential electrical needs, including:
              </p>
              <ul className="residential-list">
                {commonNeeds.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="residential-text">
                Beyond standard installations, we also assist with more involved electrical work such
                as partial or full rewiring, switchboard upgrades, and electrical planning for
                renovations or new builds. These services are particularly important in homes with
                ageing electrical infrastructure or increased power demands due to modern appliances
                and technology.
              </p>
            </div>
            <div className="residential-intro-image-card">
              <img src={circuitImage} alt="Professional residential electrical installation" />
            </div>
          </div>
        </section>

        <section className="residential-section residential-feature-band">
          <div className="residential-section-inner">
            <div className="residential-feature-content">
              <div className="residential-feature-image">
                <img src={electricianWorking} alt="Residential electrician working in home" />
              </div>
              <div className="residential-feature-text">
                <p className="residential-text">
                  Every residential job is completed with a strong focus on safety and compliance.
                  Electrical work in the home must meet Australian Standards not only to function
                  correctly, but also to protect occupants from risks such as electrical fires,
                  shocks, and system failures. We ensure all work is tested, labelled where required,
                  and installed neatly to suit the home environment.
                </p>
                <p className="residential-text">
                  Our approach is straightforward and transparent. We take the time to explain what
                  work is required, what options are available, and why certain recommendations are
                  made. This allows homeowners to make informed decisions without confusion or
                  unnecessary complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="residential-section">
          <div className="residential-section-inner">
            <h2 className="residential-section-title">When You Need a Residential Electrician</h2>
            <p className="residential-text">
              Homeowners engage residential electricians for a wide range of reasons, from small
              improvements to major upgrades. One of the most common reasons is improving usability
              within the home, such as adding power points in convenient locations, upgrading
              lighting for better visibility, or installing ceiling fans to improve comfort.
            </p>
            <p className="residential-text">
              Renovations and extensions almost always require professional electrical planning and
              installation. Kitchen and bathroom upgrades involve specific safety requirements,
              zoning rules, and load considerations. Having a licensed electrician involved early
              ensures the electrical layout supports the finished space without last-minute changes
              or compliance issues.
            </p>
            <p className="residential-text">
              Older homes often require electrical attention due to outdated wiring, overloaded
              circuits, or insufficient power capacity. Warning signs may include:
            </p>
            <ul className="residential-list">
              {warningSigns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="residential-text">
              Addressing these issues early reduces safety risks and helps bring the home up to
              current standards. Electrical upgrades can also improve energy efficiency and
              accommodate modern appliances, home offices, and smart technology.
            </p>
            <p className="residential-text">
              Electrical services are also important when preparing a property for sale or rental.
              Compliance with safety requirements, particularly smoke alarms and electrical
              condition, is often necessary. Proactive upgrades can help avoid delays and ensure the
              property is ready for occupancy.
            </p>
          </div>
        </section>

        <section
          className="residential-section residential-why-choose"
          style={{ backgroundImage: `url(${whyChooseBg})` }}
        >
          <div className="residential-why-choose-overlay">
            <div className="residential-section-inner">
              <h2 className="residential-section-title residential-title-light">Why Choose NZXTGEN</h2>
              <p className="residential-text residential-text-light">
                NZXTGEN understands that residential electrical work is carried out in lived-in
                spaces. We work respectfully within occupied homes, taking care to minimise
                disruption, protect surfaces, and maintain a clean and organised work area
                throughout the job.
              </p>
              <p className="residential-text residential-text-light">
                We provide practical advice based on how households use their space. Rather than
                offering generic solutions, we consider furniture layouts, appliance usage, future
                needs, and safety requirements when planning installations. This results in electrical
                systems that are both functional and adaptable over time.
              </p>
              <div className="residential-key-reasons">
                <div className="residential-key-reasons-grid">
                  {keyReasons.map((reason, index) => (
                    <div key={index} className="residential-key-reason-card">
                      <div className="residential-key-reason-icon">
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
                      <h3 className="residential-key-reason-title">{reason.title}</h3>
                      <p className="residential-key-reason-description">{reason.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="residential-text residential-text-light">
                Our experience spans a wide range of residential properties, from older homes with
                original wiring to newer builds with modern electrical layouts. This allows us to
                adapt our approach to suit different construction styles, access limitations, and
                upgrade requirements.
              </p>
              <p className="residential-text residential-text-light">
                All work is tested thoroughly before handover to ensure everything operates as
                intended. We take the time to confirm functionality and address any questions before
                the job is considered complete.
              </p>
              <p className="residential-text residential-text-light">
                We provide residential electrical services throughout Condell Park and the
                surrounding south-west Sydney region.
              </p>
            </div>
          </div>
        </section>

        <section className="residential-cta-band">
          <div className="residential-cta-band-inner">
            <h2 className="residential-cta-band-title">Upgrade your home's electrical safely</h2>
            <Link className="residential-cta-band-button" to="/free-quote">
              👉 Get your free quote today
            </Link>
          </div>
        </section>

        <section className="residential-section residential-faq-section">
          <div className="residential-section-inner">
            <h2 className="residential-section-title">Residential Electrical - FAQs</h2>
            <div className="residential-faq">
              {faqItems.map((item, index) => (
                <div
                  key={item.question}
                  className={`residential-faq-item ${openIndexes.includes(index) ? "active" : ""}`}
                >
                  <button
                    className="residential-faq-question"
                    type="button"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>
                    <span className="residential-faq-icon">
                      {openIndexes.includes(index) ? "–" : "+"}
                    </span>
                  </button>
                  <div className="residential-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ResidentialElectrical;
