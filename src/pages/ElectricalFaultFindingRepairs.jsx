import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhatsappChat from "../components/WhatsappChat";
import MobileCallButton from "../components/MobileCallButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import "./ElectricalFaultFindingRepairs.css";

const ElectricalFaultFindingRepairs = () => {
  const commonSigns = [
    "Circuit breakers or safety switches tripping repeatedly",
    "Flickering or dimming lights without clear cause",
    "Intermittent power loss to certain areas or outlets",
    "Power points or switches that feel warm or stop working",
    "Appliances that malfunction or fail without explanation",
  ];

  const keyAspects = [
    {
      title: "Systematic Testing",
      description: "Methodical approach to isolate faults and identify root causes accurately.",
    },
    {
      title: "Clear Identification",
      description: "We pinpoint affected circuits or components before proposing solutions.",
    },
    {
      title: "Practical Repair Options",
      description: "We explain repair options in plain language before work begins.",
    },
    {
      title: "Minimal Disruption",
      description: "Most investigations can be completed without opening walls or causing damage.",
    },
    {
      title: "Thorough Testing",
      description: "Complete system testing after repairs to ensure safe, reliable operation.",
    },
  ];

  const faqItems = [
    {
      question: "Can faults exist without obvious symptoms?",
      answer:
        "Yes. Some electrical faults develop slowly and may not show visible signs until they worsen or cause system failure.",
    },
    {
      question: "Is fault finding messy or invasive?",
      answer:
        "In most cases, no. We use targeted testing methods to minimize disruption and avoid unnecessary access work.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="ElectricalFaultFindingRepairs" className="fault-page">
      <SEO
        title="Electrical Fault Finding & Repairs | NZXTGEN"
        description="Accurate electrical fault finding and repairs for homes and businesses. Identify issues safely and restore reliability with NZXTGEN."
        canonical={
          typeof window !== "undefined"
            ? window.location.origin + "/electrical-fault-finding-repairs"
            : undefined
        }
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="fault-content">
        <section
          className="fault-hero"
          style={{ backgroundImage: `url("/images/services/nzxtgen-fault-hero.webp")` }}
        >
          <div className="fault-hero-overlay">
            <div className="fault-hero-inner">
              <p className="fault-kicker">Electrical problems that won't go away?</p>
              <h1>FAULT FINDING & ELECTRICAL REPAIRS</h1>
              <p className="fault-hero-subtext">
                Accurate electrical fault finding and repairs for homes and businesses. Identify issues
                safely and restore reliability with NZXTGEN.
              </p>
              <Link className="fault-cta" to="/free-quote">
                👉 Request a free quote
              </Link>
            </div>
          </div>
        </section>

        <section className="fault-section">
          <div className="fault-section-inner fault-intro-grid">
            <div className="fault-intro-copy">
              <h2 className="fault-section-title">What This Service Is</h2>
              <p className="fault-lead">
                Electrical fault finding is the process of accurately identifying the underlying cause
                of electrical problems rather than simply addressing surface symptoms.
              </p>
              <p className="fault-text">
                Many electrical issues appear minor at first but can indicate deeper faults within
                wiring, circuits, switchboards or connected equipment. Our fault-finding service is
                designed to locate these issues safely, efficiently and with minimal disruption.
              </p>
              <p className="fault-text">
                We use a structured diagnostic approach that includes visual inspection, circuit
                testing and targeted investigation. This allows us to pinpoint faults such as damaged
                wiring, loose connections, overloaded circuits, insulation breakdown or failing
                electrical components. Rather than replacing parts unnecessarily, we focus on
                identifying the exact source of the problem.
              </p>
            </div>
            <div className="fault-intro-image-card">
              <img src="/images/services/nzxtgen-fault-what-service.webp" alt="Professional electrical circuit inspection and testing" />
            </div>
          </div>
        </section>

        <section className="fault-section fault-feature-band">
          <div className="fault-section-inner">
            <div className="fault-feature-content">
              <div className="fault-feature-image">
                <img src="/images/services/nzxtgen-fault-third.webp" alt="Electrician performing fault finding and diagnostics" />
              </div>
              <div className="fault-feature-text">
                <p className="fault-text">
                  Once a fault is clearly identified, repairs are carried out to restore safe and
                  reliable operation. This may involve repairing or replacing damaged cabling, correcting
                  circuit imbalances, upgrading protective devices or resolving switchboard issues. All
                  repair work is completed in line with Australian Standards and tested thoroughly
                  before the system is returned to service.
                </p>
                <p className="fault-text">
                  Fault finding and repairs are often interconnected. Effective diagnostics ensure
                  repairs are precise and durable, reducing the likelihood of recurring issues. This
                  approach saves time, limits unnecessary disruption and improves the overall
                  reliability of the electrical system.
                </p>
                <p className="fault-text">
                  Our service applies to both residential and small commercial environments, where
                  electrical reliability and safety are essential for everyday use and compliance.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="fault-section">
          <div className="fault-section-inner">
            <h2 className="fault-section-title">When You Need Fault Finding</h2>
            <p className="fault-text">
              Fault finding is required when electrical issues persist, recur or behave
              unpredictably. While some electrical problems are obvious, others develop gradually
              and may go unnoticed until they cause disruption or safety concerns.
            </p>
            <p className="fault-text">Common signs that fault finding is needed include:</p>
            <ul className="fault-list">
              {commonSigns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="fault-text">
              These symptoms often indicate underlying issues such as deteriorating wiring, loose
              connections, moisture ingress or overloaded circuits. Ignoring these signs can
              increase the risk of electrical failure, fire hazards or damage to connected
              appliances.
            </p>
            <p className="fault-text">
              Fault finding is also valuable in situations where changes are planned, or risks need
              to be assessed. This includes purchasing older properties, preparing for renovations
              or addressing unexplained electrical behaviour. Identifying faults early allows issues
              to be resolved before new loads or upgrades are introduced.
            </p>
            <p className="fault-text">
              In commercial or rental properties, fault finding may be required to maintain safety,
              meet compliance obligations or ensure uninterrupted operation. Even minor electrical
              irregularities can have broader impacts on equipment, lighting or safety systems.
              Early investigation reduces the likelihood of emergency repairs and helps extend the
              life of existing electrical infrastructure.
            </p>
          </div>
        </section>

        <section
          className="fault-section fault-why-choose"
          style={{ backgroundImage: `url("/images/services/nzxtgen-why-choose-electrical-service.webp")` }}
        >
          <div className="fault-why-choose-overlay">
            <div className="fault-section-inner">
              <h2 className="fault-section-title fault-title-light">Why Choose NZXTGEN</h2>
              <p className="fault-text fault-text-light">
                NZXTGEN takes a methodical and transparent approach to electrical diagnostics and
                repairs. We do not guess or apply temporary fixes without understanding the cause of
                the problem. Every fault is investigated carefully to ensure the correct solution is
                applied the first time.
              </p>
              <p className="fault-text fault-text-light">
                We communicate findings in plain language, so clients understand what has gone wrong
                and why specific repairs are necessary. This allows informed decision-making without
                confusion or pressure.
              </p>
              <div className="fault-key-aspects">
                <div className="fault-key-aspects-grid">
                  {keyAspects.map((aspect, index) => (
                    <div key={index} className="fault-key-aspect-card">
                      <div className="fault-key-aspect-icon">
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
                      <h3 className="fault-key-aspect-title">{aspect.title}</h3>
                      <p className="fault-key-aspect-description">{aspect.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="fault-text fault-text-light">
                We also focus on minimising disruption during fault finding. In most cases,
                investigations can be completed without opening walls or causing unnecessary damage.
                When access is required, it is discussed in advance and carried out with care.
              </p>
              <p className="fault-text fault-text-light">
                Our experience across a wide range of electrical systems allows us to work effectively
                in both modern and older properties. Whether dealing with legacy wiring or newer
                installations, we adapt our approach to suit the system in place.
              </p>
              <p className="fault-text fault-text-light">
                We carry out fault finding and electrical repairs across Condell Park and nearby
                south-west Sydney areas, supporting homeowners and small businesses with dependable
                electrical solutions.
              </p>
            </div>
          </div>
        </section>

        <section className="fault-cta-band">
          <div className="fault-cta-band-inner">
            <h2 className="fault-cta-band-title">Resolve electrical issues properly</h2>
            <Link className="fault-cta-band-button" to="/free-quote">
              👉 Get your free quote today
            </Link>
          </div>
        </section>

        <section className="fault-section fault-faq-section">
          <div className="fault-section-inner">
            <h2 className="fault-section-title">Fault Finding & Electrical Repairs - FAQs</h2>
            <div className="fault-faq">
              {faqItems.map((item, index) => (
                <div
                  key={item.question}
                  className={`fault-faq-item ${openIndexes.includes(index) ? "active" : ""}`}
                >
                  <button
                    className="fault-faq-question"
                    type="button"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>
                    <span className="fault-faq-icon">
                      {openIndexes.includes(index) ? "–" : "+"}
                    </span>
                  </button>
                  <div className="fault-faq-answer">
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

export default ElectricalFaultFindingRepairs;
