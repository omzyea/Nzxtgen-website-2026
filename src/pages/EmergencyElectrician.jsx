import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhatsappChat from "../components/WhatsappChat";
import MobileCallButton from "../components/MobileCallButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import "./EmergencyElectrician.css";

const EmergencyElectrician = () => {
  const emergencyScenarios = [
    "Sudden power outages affecting part or all a property",
    "Burning smells, overheating outlets, or visible smoke",
    "Sparking power points, switches, or exposed wiring",
    "Repeatedly tripping circuit breakers or safety switches",
    "Electrical faults caused by water ingress or storm damage",
    "Equipment or appliance failures that affect electrical safety",
  ];

  const urgentSituations = [
    "Loss of power that cannot be restored by resetting a breaker",
    "Electrical smells, buzzing sounds, or visible arcing",
    "Exposed or damaged wiring within reach of occupants",
    "Water contact with electrical systems, outlets, or switchboards",
    "Electrical faults affecting safety systems such as alarms or lighting",
  ];

  const keyAspects = [
    {
      title: "Rapid Assessment",
      description: "Quick identification of safety risks and immediate action to secure the situation.",
    },
    {
      title: "Clear Communication",
      description: "We explain the issue and actions taken so you understand what's happening.",
    },
    {
      title: "Practical Solutions",
      description: "Recommendations for permanent repairs that address root causes, not just symptoms.",
    },
    {
      title: "Respectful Service",
      description: "We treat your home or workplace with care, even during urgent situations.",
    },
    {
      title: "Thorough Testing",
      description: "Complete system testing before restoring power to ensure safety.",
    },
  ];

  const faqItems = [
    {
      question: "What should I do before the electrician arrives?",
      answer:
        "If it is safe to do so, switch off power at the main switchboard and keep clear of the affected area.",
    },
    {
      question: "Will emergency work require follow-up repairs?",
      answer:
        "Sometimes. Once the immediate risk is addressed, we explain whether permanent repairs or upgrades are recommended.",
    },
  ];

  const [openIndexes, setOpenIndexes] = useState([0]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  return (
    <div id="EmergencyElectrician" className="emergency-page">
      <SEO
        title="Emergency Electrician in NSW | NZXTGEN"
        description="Emergency electrician for urgent electrical faults, outages and safety issues. Prompt, professional response by NZXTGEN."
        canonical={
          typeof window !== "undefined"
            ? window.location.origin + "/services/emergency-electrician"
            : undefined
        }
      />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="emergency-content">
        <section
          className="emergency-hero"
          style={{ backgroundImage: `url("/images/services/nzxtgen-emergency-hero.webp")` }}
        >
          <div className="emergency-hero-overlay">
            <div className="emergency-hero-inner">
              <p className="emergency-kicker">Electrical issue that can't wait?</p>
              <h1>Emergency Electrician in Condell Park – NZXTGEN</h1>
              <p className="emergency-hero-subtext">
                Prompt, professional response to urgent electrical faults, outages, and safety issues.
                We make the situation safe first, then provide clear next steps.
              </p>
              <Link className="emergency-cta" to="/free-quote">
                👉 Request urgent assistance
              </Link>
            </div>
          </div>
        </section>

        <section className="emergency-section">
          <div className="emergency-section-inner emergency-intro-grid">
            <div className="emergency-intro-copy">
              <h2 className="emergency-section-title">What This Service Is</h2>
              <p className="emergency-lead">
                Our emergency electrician service is designed to respond quickly to urgent electrical
                issues that present immediate safety risks or cause significant disruption to homes
                and small businesses.
              </p>
              <p className="emergency-text">
                Electrical emergencies require prompt and controlled action, and our priority is always
                to make the situation safe before any permanent repair decisions are made. We attend to
                a wide range of emergency scenarios, including:
              </p>
              <ul className="emergency-list">
                {emergencyScenarios.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="emergency-text">
                Emergency electrical work focuses first on fault isolation and risk reduction. This
                may involve disconnecting unsafe circuits, securing damaged components, or temporarily
                restoring power to essential systems while preventing further hazards.
              </p>
            </div>
            <div className="emergency-intro-image-card">
              <img src="/images/services/nzxtgen-emergency-what-service.webp" alt="Professional electrical circuit inspection" />
            </div>
          </div>
        </section>

        <section className="emergency-section emergency-feature-band">
          <div className="emergency-section-inner">
            <div className="emergency-feature-content">
              <div className="emergency-feature-image">
                <img src="/images/services/nzxtgen-emergency-third.webp" alt="Emergency electrician working on electrical system" />
              </div>
              <div className="emergency-feature-text">
                <p className="emergency-text">
                  Once the immediate risk is controlled, we assess the underlying cause of the issue.
                  Not all emergency situations require full repairs on the spot. In some cases,
                  temporary measures are necessary to stabilise the system, followed by scheduled
                  repairs or upgrades.
                </p>
                <p className="emergency-text">
                  We provide clear explanations of what has occurred, what has been done, and what
                  steps are recommended next, allowing property owners to make informed decisions under
                  pressure.
                </p>
                <p className="emergency-text">
                  Our approach during emergencies is calm, methodical, and safety driven. Electrical
                  incidents can be stressful, and our role is to bring control and clarity to the
                  situation while ensuring the safety of occupants and property.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="emergency-section">
          <div className="emergency-section-inner">
            <h2 className="emergency-section-title">When You Need an Emergency Electrician</h2>
            <p className="emergency-text">
              Emergency electrical services are required when an issue presents an immediate risk to
              people, property, or essential operations. These situations should not be delayed, as
              electrical faults can escalate quickly if left unaddressed.
            </p>
            <p className="emergency-text">You should seek urgent electrical assistance when experiencing:</p>
            <ul className="emergency-list">
              {urgentSituations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="emergency-scenarios-grid">
              <div className="emergency-scenario-card">
                <h3>Homes</h3>
                <p>
                  Homes may require emergency support when faults occur outside normal hours or when
                  safety is compromised. Issues such as water leaks near power points, storm-related
                  damage, or sudden switchboard failures should always be treated as urgent.
                </p>
              </div>
              <div className="emergency-scenario-card">
                <h3>Small Businesses</h3>
                <p>
                  Small businesses may also require emergency electrical assistance when outages disrupt
                  operations, compromise safety systems, or impact compliance obligations. Electrical
                  faults in commercial settings can affect staff safety, customer access, and
                  operational continuity, making fast response essential.
                </p>
              </div>
            </div>
            <p className="emergency-text">
              In many cases, emergency issues are linked to underlying problems such as ageing wiring,
              overloaded circuits, or poorly maintained electrical infrastructure. While the immediate
              issue is addressed first, identifying and resolving the root cause is critical to
              preventing repeat incidents.
            </p>
          </div>
        </section>

        <section
          className="emergency-section emergency-why-choose"
          style={{ backgroundImage: `url("/images/services/nzxtgen-commercial-electrical-service.webp")` }}
        >
          <div className="emergency-why-choose-overlay">
            <div className="emergency-section-inner">
              <h2 className="emergency-section-title emergency-title-light">Why Choose NZXTGEN</h2>
              <p className="emergency-text emergency-text-light">
                NZXTGEN understands that emergency electrical situations require more than just
                technical knowledge. They require clear communication, controlled decision-making, and
                a strong focus on safety. We respond calmly and methodically, even in high-pressure
                situations, ensuring risks are managed effectively.
              </p>
              <p className="emergency-text emergency-text-light">
                Our experience across residential and small commercial electrical systems allows us to
                diagnose issues efficiently and take appropriate action without unnecessary delays. We
                are familiar with a wide range of switchboards, wiring systems, and fault scenarios,
                enabling us to adapt quickly on site.
              </p>
              <div className="emergency-key-aspects">
                <div className="emergency-key-aspects-grid">
                  {keyAspects.map((aspect, index) => (
                    <div key={index} className="emergency-key-aspect-card">
                      <div className="emergency-key-aspect-icon">
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
                      <h3 className="emergency-key-aspect-title">{aspect.title}</h3>
                      <p className="emergency-key-aspect-description">{aspect.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <p className="emergency-text emergency-text-light">
                We do not rush temporary fixes without explaining limitations or risks. If follow-up
                work is required, we outline the next steps clearly so there are no surprises once the
                immediate situation is stabilised.
              </p>
              <p className="emergency-text emergency-text-light">
                Being locally based also allows us to respond efficiently and understand the types of
                properties and electrical systems common in the area. We service Condell Park and
                surrounding south-west Sydney locations.
              </p>
            </div>
          </div>
        </section>

        <section className="emergency-cta-band">
          <div className="emergency-cta-band-inner">
            <h2 className="emergency-cta-band-title">Don't delay electrical safety</h2>
            <Link className="emergency-cta-band-button" to="/free-quote">
              👉 Request emergency support
            </Link>
          </div>
        </section>

        <section className="emergency-section emergency-faq-section">
          <div className="emergency-section-inner">
            <h2 className="emergency-section-title">Emergency Electrician - FAQs</h2>
            <div className="emergency-faq">
              {faqItems.map((item, index) => (
                <div
                  key={item.question}
                  className={`emergency-faq-item ${openIndexes.includes(index) ? "active" : ""}`}
                >
                  <button
                    className="emergency-faq-question"
                    type="button"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{item.question}</span>
                    <span className="emergency-faq-icon">
                      {openIndexes.includes(index) ? "–" : "+"}
                    </span>
                  </button>
                  <div className="emergency-faq-answer">
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

export default EmergencyElectrician;
