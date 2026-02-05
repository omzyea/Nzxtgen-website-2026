import React, { useState } from 'react';
import { 
  FaTv, 
  FaPlug, 
  FaVolumeUp, 
  FaMusic,
  FaLightbulb,
  FaCheckCircle
} from 'react-icons/fa';
import ServiceSidebar from './ServiceSidebar';
import './ElectricServiceContent.css';

const EntertainmentServiceContent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqItems = [
    {
      question: "Can existing TVs and speakers be reused in a new setup?",
      answer: "Yes. We can integrate existing equipment where it is compatible and in good condition."
    },
    {
      question: "Is wall mounting safe for large TVs?",
      answer: "Yes. We use appropriate brackets and fixings based on wall type and screen size."
    },
    {
      question: "Can cabling be hidden in existing rooms?",
      answer: "In many cases, yes. We assess access points to minimise visible wiring."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const entertainmentServices = [
    { 
      icon: <FaTv />, 
      title: "TV Wall Mounting",
      text: "TV wall mounting improves viewing comfort, frees up floor space, and creates a streamlined look. We assess wall construction, screen size, and viewing angles before installation. TVs are mounted securely and aligned precisely to suit the room layout."
    },
    { 
      icon: <FaPlug />, 
      title: "Home Theatre Wiring",
      text: "Reliable wiring is the foundation of any home theatre system. We plan wiring routes carefully to keep cables concealed and protected. All cabling is labelled and installed in a structured way, making future upgrades or troubleshooting far easier."
    },
    { 
      icon: <FaVolumeUp />, 
      title: "Audio & AV Setup",
      text: "Audio and AV systems can include wired, wireless, and Bluetooth components depending on the application. Each setup is configured to balance performance, reliability, and ease of use. We ensure all components communicate correctly and perform as intended."
    },
    { 
      icon: <FaMusic />, 
      title: "Wall & Ceiling Speakers",
      text: "Wall and ceiling speakers provide immersive sound without taking up floor space. We install speakers securely and discreetly, ensuring wiring is hidden and sound distribution is even. This creates a clean finish while delivering consistent audio performance."
    },
    { 
      icon: <FaPlug />, 
      title: "Hidden & Organised Cable Management",
      text: "Cable management is one of the most important aspects of entertainment installations. We route and secure cables neatly behind walls, ceilings, or cabinetry where possible. All connections are organised logically, reducing visual clutter."
    },
    { 
      icon: <FaLightbulb />, 
      title: "Media Wall & TV Integrated LED Strip Lighting",
      text: "Media wall lighting using LED strip systems enhances the look of TVs, feature walls and built-in joinery. LED strips can be recessed, edge-lit or concealed within cabinetry to create a clean, modern finish. Lighting can be dimmed or integrated into smart home systems."
    }
  ];

  const whenYouNeedEntertainment = [
    "A TV is mounted too high, low, or insecurely",
    "Cables are visible, tangled, or difficult to access",
    "Sound quality is uneven or unclear",
    "Devices frequently disconnect or fail to sync",
    "The system is difficult to operate or maintain"
  ];

  const whyChooseUs = [
    "Assessing room layout and viewing angles",
    "Planning speaker placement and wiring paths",
    "Installing equipment securely and neatly",
    "Configuring systems for stable performance",
    "Testing all connections before completion"
  ];

  return (
    <div className="es-two-column-layout">
      {/* Left Sidebar */}
      <ServiceSidebar />

      {/* Right Content */}
      <main className="es-main-content">
        {/* Intro Section */}
        <section className="es-content-section">
          <p className="es-intro-text">
            A well-designed entertainment or home theatre setup should enhance how you enjoy movies, television, music, and presentations without clutter, visible wiring, or technical frustration. Whether it's a family living room, a dedicated media space, or a small commercial environment, proper installation makes a significant difference to both performance and appearance.
          </p>
          <p className="es-intro-text">
            NZXTGEN provides professional entertainment and home theatre installation services that focus on clean presentation, correct positioning, and reliable performance. We work with homeowners and small businesses to install systems that suit the space, usage requirements, and future expansion needs. Our approach is practical and measured, ensuring systems are easy to use and built to last.
          </p>
        </section>

        {/* What Entertainment & Home Theatre Installation Involves */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            What Entertainment & Home Theatre Installation <span className="es-highlight">Involves</span>
          </h2>
          <p className="es-intro-text">
            Entertainment and home theatre installation involves more than mounting a screen or connecting speakers. It requires careful planning of equipment placement, cabling routes, signal flow, and user access to controls.
          </p>
        </section>

        {/* Entertainment Services Grid */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Our Entertainment & Home Theatre <span className="es-highlight">Services</span>
          </h2>
          <div className="es-services-grid">
            {entertainmentServices.map((service, index) => (
              <div key={index} className="es-service-card">
                <div className="es-service-icon">{service.icon}</div>
                <div className="es-service-content">
                  <h3 className="es-service-title">{service.title}</h3>
                  <p className="es-service-text">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TV Wall Mounting Details */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            TV Wall <span className="es-highlight">Mounting</span>
          </h2>
          <p className="es-intro-text">
            TV wall mounting improves viewing comfort, frees up floor space, and creates a streamlined look. Correct mounting height, bracket selection, and wall support are essential to ensure safety and long-term stability.
          </p>
          <p className="es-intro-text">
            We assess wall construction, screen size, and viewing angles before installation. TVs are mounted securely and aligned precisely to suit the room layout. Where required, we also allow for future access to ports and connections without removing the screen.
          </p>
        </section>

        {/* Home Theatre Wiring Details */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Home Theatre <span className="es-highlight">Wiring</span>
          </h2>
          <p className="es-intro-text">
            Reliable wiring is the foundation of any home theatre system. This includes cabling for displays, audio equipment, streaming devices, gaming consoles, and control systems. Proper wiring ensures consistent signal quality and reduces interference or dropouts.
          </p>
          <p className="es-intro-text">
            We plan wiring routes carefully to keep cables concealed and protected. All cabling is labelled and installed in a structured way, making future upgrades or troubleshooting far easier. This approach avoids the clutter and confusion often caused by ad-hoc installations.
          </p>
        </section>

        {/* Audio & AV Setup Details */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Audio & AV <span className="es-highlight">Setup</span>
          </h2>
          <p className="es-intro-text">
            Audio and AV systems can include wired, wireless, and Bluetooth components depending on the application. Each setup is configured to balance performance, reliability, and ease of use.
          </p>
          <p className="es-intro-text">
            Long-range cabling is used where stable, high-quality signal transmission is required. Wireless and Bluetooth connections are configured carefully to avoid interference and ensure devices connect reliably. We ensure all components communicate correctly and perform as intended.
          </p>
        </section>

        {/* Wall & Ceiling Speakers Details */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Wall & Ceiling <span className="es-highlight">Speakers</span>
          </h2>
          <p className="es-intro-text">
            Wall and ceiling speakers provide immersive sound without taking up floor space. Placement is critical to achieve balanced audio coverage and clarity. Speakers must be positioned to suit room size, layout, and intended listening areas.
          </p>
          <p className="es-intro-text">
            We install speakers securely and discreetly, ensuring wiring is hidden and sound distribution is even. This creates a clean finish while delivering consistent audio performance throughout the space.
          </p>
        </section>

        {/* Hidden & Organised Cable Management Details */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Hidden & Organised Cable <span className="es-highlight">Management</span>
          </h2>
          <p className="es-intro-text">
            Cable management is one of the most important aspects of entertainment installations. Visible or tangled cables detract from the appearance of the space and make maintenance difficult.
          </p>
          <p className="es-intro-text">
            We route and secure cables neatly behind walls, ceilings, or cabinetry where possible. All connections are organised logically, reducing visual clutter and making future access straightforward.
          </p>
        </section>

        {/* Media Wall & TV Integrated LED Strip Lighting Details */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Media Wall & TV Integrated LED Strip <span className="es-highlight">Lighting</span>
          </h2>
          <p className="es-intro-text">
            Media wall lighting using LED strip systems enhances the look of TVs, feature walls and built-in joinery. LED strips can be recessed, edge-lit or concealed within cabinetry to create a clean, modern finish. Lighting can be dimmed or integrated into smart home systems to suit different viewing modes and room ambience.
          </p>
          <p className="es-intro-text">
            LED strip lighting can be integrated behind TVs and media walls to sync with on-screen content or provide complementary backlighting, enhancing the overall entertainment setup.
          </p>
        </section>

        {/* When You Need Entertainment & Home Theatre Installation */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            When You Need Entertainment & Home Theatre <span className="es-highlight">Installation</span>
          </h2>
          <p className="es-intro-text">
            Many installations occur during renovations, new builds, or when upgrading existing equipment. However, there are also clear signs that professional installation would improve performance or usability.
          </p>
          <p className="es-intro-text">You may benefit from professional entertainment and home theatre services if:</p>
          <ul className="es-checklist">
            {whenYouNeedEntertainment.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="es-intro-text">
            Homeowners often request upgrades when transitioning to larger screens, surround sound, or multi-room audio. A professional setup ensures new equipment integrates smoothly with existing systems.
          </p>
          <p className="es-intro-text">
            Small businesses such as offices, meeting rooms, and hospitality spaces also require reliable audio-visual setups. Clear displays, stable audio, and tidy installations contribute to a professional environment and reduce downtime during use.
          </p>
          <p className="es-intro-text">
            Entertainment systems are also commonly installed alongside smart home or data upgrades. Integrating AV systems with existing infrastructure improves control and reduces duplication of cabling.
          </p>
        </section>

        {/* Why Choose NZXTGEN */}
        <section className="es-content-section es-why-choose-section">
          <h2 className="es-section-heading">
            Why Choose <span className="es-highlight">NZXTGEN</span>
          </h2>
          <p className="es-intro-text es-white-text">
            NZXTGEN approaches entertainment and home theatre installation with a focus on precision, reliability, and usability. We take the time to understand how the space will be used and design systems accordingly.
          </p>
          <p className="es-intro-text es-white-text es-approach-intro">Our process includes:</p>
          <ul className="es-checklist es-white-checklist">
            {whyChooseUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="es-intro-text es-white-text">
            We prioritise clean workmanship. Installations are completed with minimal disruption, and work areas are left tidy once the job is done. Attention to detail ensures systems look as good as they perform.
          </p>
          <p className="es-intro-text es-white-text">
            Because we also specialise in electrical and data services, we understand how entertainment systems interact with broader infrastructure. This allows us to avoid common issues such as overloaded circuits, signal interference, or poor cable routing.
          </p>
          <p className="es-intro-text es-white-text">
            We also focus on long-term usability. Systems are configured so that everyday operation is straightforward, without unnecessary complexity. Where future upgrades are likely, we plan installations to accommodate expansion without major rework.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="es-content-section es-faq-section">
          <h2 className="es-section-heading">
            Frequently Asked <span className="es-highlight">Questions</span>
          </h2>
          <div className="es-faq-list">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`es-faq-item ${openFaqIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="es-faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="es-faq-number">{index + 1}.</span>
                  <span className="es-faq-question-text">{item.question}</span>
                  <span className="es-faq-icon">
                    {openFaqIndex === index ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M8 12h8"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 8v8M8 12h8"/>
                      </svg>
                    )}
                  </span>
                </button>
                <div className="es-faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default EntertainmentServiceContent;
