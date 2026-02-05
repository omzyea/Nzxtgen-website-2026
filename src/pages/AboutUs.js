import React, { useState } from "react";
import { Link } from "react-router-dom";
import WhatsappChat from "../components/WhatsappChat";
import MobileCallButton from "../components/MobileCallButton";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import LocalBusinessSchema from "../components/LocalBusinessSchema";
import aboutHero from "../assets/suburb images/bankstown/webp/bankstown-central-square-centro-inside-2200.WEBP";
import aboutParallax from "../assets/suburb images/canterbury/Webp/canterbury-2193-park-view_065217.WEBP";
import aboutBg1 from "../assets/about/bg1.WEBP";
import electrician2 from "../assets/electricity/electrician-2.WEBP";
import "./AboutUs.css";
import "../pages/city/cityLayout.css";

const AboutUs = () => {
  const faqItems = [
    {
      question: "Are all services performed by licensed technicians?",
      answer: "Yes. All electrical work is completed by licensed professionals in line with Australian Standards.",
    },
    {
      question: "Do you work on both residential and small commercial properties?",
      answer: "Yes. We regularly work with homeowners, landlords and small businesses.",
    },
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <div id="AboutUs" className="about-us-page">
      <SEO
        title="About NZXTGEN | Licensed Electrical & Smart Home Experts"
        description="Learn about NZXTGEN's licensed electricians, hands-on experience and commitment to safe, reliable electrical and smart home solutions."
        canonical={typeof window !== "undefined" ? window.location.origin + "/about-us" : undefined}
      />
      <LocalBusinessSchema />
      <WhatsappChat />
      <MobileCallButton />
      <Navbar />

      <main className="about-us-content">
        {/* Hero – full top, no padding top, parallax */}
        <section
          className="about-us-hero canterbury-hero"
          style={{ backgroundImage: `url(${aboutHero})` }}
        >
          <div className="canterbury-hero-overlay">
            <div className="canterbury-hero-inner">
              <h1>About Us</h1>
              <p className="canterbury-hero-subtext">
                NZXTGEN is built on practical experience, technical knowledge and a strong commitment to doing work properly.
              </p>
              <Link className="canterbury-cta" to="/free-quote">
                Request a free quote
              </Link>
            </div>
          </div>
        </section>

        {/* Section 1: Image left, text right */}
        <section className="canterbury-section about-us-section">
          <div className="canterbury-section-inner about-us-row">
            <div className="about-us-image-wrap">
              <img src={aboutBg1} alt="NZXTGEN licensed electrician at work" className="about-us-image" />
            </div>
            <div className="about-us-text">
              <h2 className="canterbury-section-title">Who We Are</h2>
              <p>
                NZXTGEN is built on practical experience, technical knowledge and a strong commitment to doing work properly. We operate with a clear focus on safety, compliance and long-term performance.
              </p>
              <p>
                All work is carried out by licensed professionals who understand Australian Standards and current regulations. This matters for safety, insurance, resale value and long-term reliability.
              </p>
              <p>
                Our experience covers residential homes, renovations, new builds, strata properties and small commercial spaces. We work on mixed systems where electrical, data, smart controls and security need to function together—so we design cleaner installations and avoid the issues that come from fragmented trades.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Text left, image right */}
        <section className="canterbury-section about-us-section about-us-section-alt">
          <div className="canterbury-section-inner about-us-row about-us-row-reverse">
            <div className="about-us-image-wrap">
              <img src={electrician2} alt="NZXTGEN electrician – reliable local service" className="about-us-image" />
            </div>
            <div className="about-us-text">
              <h2 className="canterbury-section-title">How We Work</h2>
              <p>
                Trust is central. We turn up when scheduled, communicate clearly, and complete work as agreed. You know exactly what's being installed and why.
              </p>
              <p>
                Being locally based, we understand the properties and upgrade needs in the area. From older homes needing rewiring to newer builds with smart controls and structured cabling, our solutions are tailored to local conditions.
              </p>
              <p>
                We emphasise futureproofing: systems that can be expanded or upgraded without unnecessary rewiring. NZXTGEN isn't about volume or rushed jobs—it's about solutions that function properly, look neat, and support how you live and work.
              </p>
            </div>
          </div>
        </section>

        {/* Parallax band */}
        <section
          className="canterbury-feature-band about-us-parallax"
          style={{ backgroundImage: `url(${aboutParallax})` }}
        >
          <div className="canterbury-feature-overlay">
            <div className="canterbury-section-inner">
              <div className="canterbury-section-header light">
                <h2 className="canterbury-section-title">Licensed, Reliable, Local</h2>
                <p>
                  We deliver electrical and smart home solutions that meet Australian Standards and support how you live and work—safely and reliably.
                </p>
                <Link className="canterbury-cta" to="/contact-us">
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="canterbury-section canterbury-area-faq-faq">
          <div className="canterbury-section-inner">
            <h2 className="canterbury-section-title">FAQs</h2>
            <div className="canterbury-faq">
              {faqItems.map((item, index) => (
                <div key={index} className={`canterbury-faq-item ${openFaqIndex === index ? "active" : ""}`}>
                  <button
                    type="button"
                    className="canterbury-faq-question"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaqIndex === index}
                  >
                    <span>{item.question}</span>
                    <span className="canterbury-faq-icon">{openFaqIndex === index ? "−" : "+"}</span>
                  </button>
                  <div className="canterbury-faq-answer">
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

export default AboutUs;
