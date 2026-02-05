import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhatsappChat from "../../components/WhatsappChat";
import MobileCallButton from "../../components/MobileCallButton";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";
// Import new images from assets/electricity
import "./NewBuildsRenovations.css";

const NewBuildsRenovations = () => {
  const services = [
    {
      title: "Bathroom Electrical",
      description:
        "Bathrooms present unique electrical challenges due to moisture and strict safety requirements. Electrical components must be correctly rated and positioned to ensure compliance and long-term reliability.",
      details:
        "We install exhaust fans, heat lamps, and combination 3-in-1 IXL units designed for wet areas. LED strip lighting can also be integrated into vanities, mirrors and feature areas using IP-rated fittings, adding both functional and ambient lighting. Power point placement is carefully planned to meet safety standards, and all work is coordinated with waterproofing and tiling stages to avoid rework and ensure compliance throughout wet works.",
      image: "/images/electricity/bathroom-electrical.WEBP",
    },
    {
      title: "Kitchen Electrical",
      description:
        "Kitchens are one of the most power-intensive areas in any property. Proper planning is essential to support modern appliances and future upgrades without overloading circuits.",
      details:
        "Our kitchen electrical services include appliance-specific circuits for cooktops, ovens, and integrated equipment. Power layouts are designed around cabinetry and workflow, ensuring outlets are accessible but discreet. LED strip lighting is commonly installed under cabinets, overhead joinery or in ceiling features, providing effective task lighting and a clean, modern finish. We also allow for future appliance upgrades, ensuring your electrical system remains flexible as technology changes.",
      image: "/images/electricity/kitchen-electric.WEBP",
    },
    {
      title: "Appliance Connections",
      description:
        "Correct appliance connection is critical for performance, safety, and warranty compliance. Many appliances require dedicated circuits and load assessments to operate correctly.",
      details:
        "We connect ovens, cooktops, hot water units, and other fixed appliances using compliant cabling and protection devices. Load checks are carried out to ensure the existing electrical system can support new equipment without risk. All connections are tested thoroughly before handover.",
      image: "/images/servicePage/nzxtgen-speaker-mounting-installation.webp",
    },
    {
      title: "Lighting Upgrades",
      description:
        "Lighting has a significant impact on both functionality and atmosphere. Upgrading lighting during renovations or as a standalone project can improve energy efficiency and usability.",
      details:
        "We install downlights, feature lighting, and task lighting suited to each space. Switching layouts can be adjusted for better control, including dimmers and smart lighting options. Energy-efficient solutions are recommended to reduce running costs while maintaining appropriate light levels.",
      image: "/images/servicePage/nzxtgen-downlight-installation.webp",
    },
    {
      title: "Wall Chasing & Concealed Cabling",
      description:
        "Concealed cabling creates a clean, modern finish and protects wiring from damage. Wall chasing must be done carefully, particularly in masonry and brick structures.",
      details:
        "We carry out wall chasing for flush-mounted conduits, ensuring neat results that integrate seamlessly with plastering and tiling. Coordination with other trades is prioritised so cabling is installed at the correct stage, reducing delays and rework.",
      image: "/images/electricity/Wall Chasing & Concealed Cabling_050132.WEBP",
    },
    {
      title: "Gate, Garage & Motor Wiring",
      description:
        "Automated gates and garage doors require reliable power and control wiring to operate safely. Incorrect installation can lead to faults, safety issues, or premature motor failure.",
      details:
        "We provide wiring for roller doors, sliding gates, and associated motor controls. Safety isolators are installed to allow safe maintenance, and all wiring is protected and compliant with current standards.",
      image: "/images/electricity/Gate, Garage & Motor Wiring.WEBP",
    },
    {
      title: "Water Heating & Cabling Connections",
      description:
        "Electric hot water and heat pump systems require appropriate cabling and circuit protection to operate efficiently.",
      details:
        "We install power and control cabling for electric hot water systems, heat pumps, and off-peak setups. Circuits are designed to handle load requirements and protect equipment, ensuring reliable operation and compliance.",
      image: "/images/electricity/Water Heating & Cabling Connections.WEBP",
    },
    {
      title: "Air Conditioning Power & Cabling",
      description:
        "Air conditioning systems require dedicated power supplies and isolation points to meet safety and installation requirements.",
      details:
        "We provide power and cabling for split systems and multi-head air conditioning units. Isolation switches are installed in accessible locations, and all cabling is completed in accordance with regulations to support long-term system performance.",
      image: "/images/electricity/Air Conditioning Power & Cabling.WEBP",
    },
  ];

  const serviceTriggers = [
    "Building a new home or commercial space",
    "Renovating kitchens, bathrooms, or living areas",
    "Installing new appliances or systems",
    "Upgrading lighting or power layouts",
    "Addressing compliance or safety concerns",
    "Maintaining electrical systems in active properties",
  ];

  const keyReasons = [
    {
      title: "Clear Communication",
      description: "We communicate clearly with clients and other trades throughout the project.",
    },
    {
      title: "Careful Planning",
      description: "Thoughtful planning to avoid future limitations and costly rework.",
    },
    {
      title: "Neat Workmanship",
      description: "Clean installations with organised cabling and professional finish.",
    },
    {
      title: "Compliance with Standards",
      description: "All work meets Australian Standards and regulatory requirements.",
    },
    {
      title: "Practical Solutions",
      description: "Electrical systems tailored to real-world use and long-term value.",
    },
  ];

  const faqItems = [
    {
      question: "Can electrical layouts be changed during a renovation?",
      answer:
        "Yes. We regularly redesign power and lighting layouts to suit updated floor plans.",
    },
    {
      question: "Do new appliances always need dedicated circuits?",
      answer: "Many modern appliances do. We assess load requirements before installation.",
    },
    {
      question: "Is wall chasing possible in existing brick homes?",
      answer: "In most cases, yes. We assess wall structure before proceeding.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="NewBuildsRenovations" className="newbuild-page">
      <SEO
        title="New Build & Renovation Electrical Services | NZXTGEN"
        description="Electrical services for new builds, renovations and ongoing works. Safe, compliant installations for homes and small businesses by NZXTGEN."
        canonical={
          typeof window !== "undefined"
            ? window.location.origin + "/new-builds-renovations"
            : undefined
        }
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="newbuild-content">
        <section
          className="newbuild-hero"
          style={{ backgroundImage: `url("/images/services/nzxtgen-new-build-electrical-hero.webp")` }}
        >
          <div className="newbuild-hero-overlay">
            <div className="newbuild-hero-inner">
              <p className="newbuild-kicker">Planning a new build or upgrading an existing space?</p>
              <h1>New Build, Renovation & Ongoing Electrical Services – NZXTGEN</h1>
              <p className="newbuild-hero-subtext">
                Electrical services for new builds, renovations and ongoing works. Safe, compliant
                installations for homes and small businesses by NZXTGEN.
              </p>
              <Link className="newbuild-cta" to="/free-quote">
                👉 Contact NZXTGEN today for a tailored electrical solution
              </Link>
            </div>
          </div>
        </section>

        <section className="newbuild-section newbuild-intro-section">
          <div className="newbuild-section-inner">
            <div className="newbuild-intro-content">
              <p className="newbuild-intro-text">
                Electrical work plays a critical role in how a property functions, both now and into
                the future. Whether you are constructing a new home, renovating an existing space, or
                maintaining a commercial property, electrical systems must be planned carefully and
                installed correctly. Poor decisions at early stages can lead to limitations, safety
                concerns, or costly rework later.
              </p>
              <p className="newbuild-intro-text">
                NZXTGEN provides professional electrical services for new builds, renovations, and
                ongoing works. We work closely with homeowners, builders, trades, and small businesses
                to deliver safe, compliant, and practical electrical solutions. Our focus is on
                thoughtful planning, clean installation, and long-term reliability rather than quick
                fixes.
              </p>
            </div>
          </div>
        </section>

        <section className="newbuild-section">
          <div className="newbuild-section-inner">
            <h2 className="newbuild-section-title">
              What New Build, Renovation & Ongoing Electrical Services Involve
            </h2>
            <p className="newbuild-text">
              Electrical work for construction and renovation projects requires coordination,
              experience, and a clear understanding of compliance requirements. Each stage of work
              must align with the overall build schedule and future usage of the space.
            </p>
            <div className="newbuild-services-grid">
              {services.map((service, index) => (
                <div key={index} className="newbuild-service-card">
                  <div className="newbuild-service-card-image">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <div className="newbuild-service-card-content">
                    <h3 className="newbuild-service-card-title">{service.title}</h3>
                    <p className="newbuild-service-card-description">{service.description}</p>
                    <p className="newbuild-service-card-details">{service.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="newbuild-section">
          <div className="newbuild-section-inner">
            <h2 className="newbuild-section-title">When You Need These Electrical Services</h2>
            <p className="newbuild-text">
              Electrical services are required at various stages of a property's lifecycle. New
              builds require full electrical design and installation, while renovations often involve
              upgrading or reconfiguring existing systems.
            </p>
            <p className="newbuild-text">You may need these services when:</p>
            <ul className="newbuild-list">
              {serviceTriggers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="newbuild-text">
              Ongoing electrical support is also essential for small businesses that rely on
              consistent power and safe infrastructure. Regular upgrades and maintenance help prevent
              downtime and unexpected faults.
            </p>
          </div>
        </section>

        <section
          className="newbuild-section newbuild-why-choose"
          style={{ backgroundImage: `url("/images/services/nzxtgen-why-choose-electrical-service.webp")` }}
        >
          <div className="newbuild-why-choose-overlay">
            <div className="newbuild-section-inner">
              <h2 className="newbuild-section-title newbuild-title-light">Why Choose NZXTGEN</h2>
              <p className="newbuild-text newbuild-text-light">
                NZXTGEN delivers electrical services with a focus on planning, compliance, and clean
                execution. We understand that electrical work is not just about installing components,
                but about how those systems will be used over time.
              </p>
              <div className="newbuild-key-reasons">
                <div className="newbuild-key-reasons-grid">
                  {keyReasons.map((reason, index) => (
                    <div key={index} className="newbuild-key-reason-card">
                      <div className="newbuild-key-reason-icon">
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
                      <h3 className="newbuild-key-reason-title">{reason.title}</h3>
                      <p className="newbuild-key-reason-description">{reason.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="newbuild-text newbuild-text-light">
                We work efficiently while respecting the build or renovation timeline. Whether it's a
                single upgrade or a full electrical fit-out, our goal is to deliver work that supports
                the long-term value and safety of the property.
              </p>
            </div>
          </div>
        </section>

        <section className="newbuild-cta-band">
          <div className="newbuild-cta-band-inner">
            <h2 className="newbuild-cta-band-title">Ready to move forward with your electrical project?</h2>
            <Link className="newbuild-cta-band-button" to="/free-quote">
              👉 Get in touch with NZXTGEN for a free quote
            </Link>
          </div>
        </section>

        <section className="newbuild-section newbuild-faq-section">
          <div className="newbuild-section-inner">
            <h2 className="newbuild-section-title">Electrical Services FAQs</h2>
            <div className="newbuild-faq">
              {faqItems.map((item, index) => (
                <div
                  key={item.question}
                  className={`newbuild-faq-item ${openIndexes.includes(index) ? "active" : ""}`}
                >
                  <button
                    className="newbuild-faq-question"
                    type="button"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>
                    <span className="newbuild-faq-icon">
                      {openIndexes.includes(index) ? "–" : "+"}
                    </span>
                  </button>
                  <div className="newbuild-faq-answer">
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

export default NewBuildsRenovations;
