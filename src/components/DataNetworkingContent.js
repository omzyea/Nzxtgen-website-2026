import React, { useState } from 'react';
import { 
  FaNetworkWired, 
  FaPlug, 
  FaServer, 
  FaWifi,
  FaCheckCircle
} from 'react-icons/fa';
import ServiceSidebar from './ServiceSidebar';
import './ElectricServiceContent.css';

const DataNetworkingContent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqItems = [
    {
      question: "Can data points be added without major wall damage?",
      answer: "In many cases, yes. We assess access paths and existing cavities before installation to minimise disruption."
    },
    {
      question: "Do you support NBN-ready installations?",
      answer: "Yes. All cabling and data points are installed to support NBN connections and modern networking equipment."
    },
    {
      question: "What is the difference between Cat6 and Cat6A cabling?",
      answer: "Cat6A supports higher bandwidth and longer cable runs than Cat6. We advise on the best option based on your specific usage requirements."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const networkingServices = [
    { 
      icon: <FaNetworkWired />, 
      title: "Cat6 and Cat6A Data Cabling",
      text: "High-quality structured cabling systems that support current needs and future expansion. Proper cable management ensures clean installations and easy maintenance."
    },
    { 
      icon: <FaPlug />, 
      title: "Home and Office Data Points",
      text: "Strategic data point installation throughout your property to ensure reliable connectivity where you need it. Each point is properly terminated and tested for optimal performance."
    },
    { 
      icon: <FaServer />, 
      title: "Network Cabinets and Racks",
      text: "Professional network infrastructure with organised cabinets and racks. Centralised network management for easy access and maintenance."
    },
    { 
      icon: <FaWifi />, 
      title: "Patch Panels and Network Switches",
      text: "Centralised network connections through patch panels and switches. Organised infrastructure that simplifies network management and troubleshooting."
    },
    { 
      icon: <FaNetworkWired />, 
      title: "NBN-Ready Cabling and Connection Support",
      text: "All installations are NBN-ready and designed to support modern networking equipment. Future-proof infrastructure for reliable connectivity."
    }
  ];

  const whenYouNeedNetworking = [
    "Slow or inconsistent internet speeds across rooms",
    "Frequent Wi-Fi dropouts or buffering",
    "Poor signal in home offices or workspaces",
    "Network congestion with multiple users or devices",
    "Messy, unlabelled or outdated cabling"
  ];

  const additionalNeeds = [
    "CCTV and security systems",
    "Smart lighting and automation",
    "Intercoms and access control",
    "Home theatre and audio systems"
  ];

  const whyChooseUs = [
    "Assessing current and future connectivity needs",
    "Advising on Cat6 or Cat6A cabling based on usage",
    "Planning data point locations for real-world use",
    "Installing patch panels and network switches to centralise connections",
    "Testing and labelling every cable for clarity and reliability"
  ];

  return (
    <div className="es-two-column-layout">
      {/* Left Sidebar */}
      <ServiceSidebar />

      {/* Right Content */}
      <main className="es-main-content">
        {/* Intro Section */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            What This Service <span className="es-highlight">Is</span>
          </h2>
          <p className="es-intro-text">
            Data and networking infrastructure is the foundation of how modern homes and workplaces operate. From internet access and work-from-home setups to smart technology, security systems and entertainment, reliable cabling and network design are essential for consistent performance.
          </p>
          <p className="es-intro-text">
            NZXTGEN provides professional data and networking services that focus on stability, organisation and long-term reliability. We design and install structured cabling systems that allow devices to communicate efficiently without relying solely on wireless connections, which can be affected by distance, interference and network congestion.
          </p>
        </section>

        {/* Networking Services Grid */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Our Services <span className="es-highlight">Include</span>
          </h2>
          <div className="es-services-grid">
            {networkingServices.map((service, index) => (
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

        {/* Structured Cabling Details */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            Structured <span className="es-highlight">Cabling</span>
          </h2>
          <p className="es-intro-text">
            Structured cabling creates a centralised network where all data points run back to one location, typically a network cabinet or patch panel. This setup allows internet, internal networks, security systems and smart technology to operate from a single, organised hub. It also makes fault finding, upgrades and future expansion significantly easier.
          </p>
          <p className="es-intro-text">
            All cabling is installed neatly, securely and labelled clearly. This ensures every connection is identifiable, tested and documented, avoiding confusion or unnecessary work later. Whether the system supports internet access, internal networking, CCTV, audio-visual equipment or smart home systems, the goal is clean infrastructure that performs reliably under everyday use.
          </p>
          <p className="es-intro-text">
            Rather than temporary fixes such as Wi-Fi extenders or exposed cabling, we install permanent solutions designed to support how properties are used.
          </p>
        </section>

        {/* When You Need Data & Networking Services */}
        <section className="es-content-section">
          <h2 className="es-section-heading">
            When You Need Data & Networking <span className="es-highlight">Services</span>
          </h2>
          <p className="es-intro-text">
            Many properties in Condell Park were built before modern connectivity demands existed. As internet usage, remote work and smart technology become more common, existing networks often struggle to keep up.
          </p>
          <p className="es-intro-text">You may need data and networking services if you experience:</p>
          <ul className="es-checklist">
            {whenYouNeedNetworking.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="es-intro-text">
            Home offices are one of the most common reasons for data upgrades. Video calls, cloud-based software and file sharing require stable connections that Wi-Fi alone may not consistently provide. Installing fixed data points ensures reliable performance and reduces interruptions during work hours.
          </p>
          <p className="es-intro-text">
            Small businesses and home-based operators also benefit from structured cabling. Shared printers, servers, security systems and point-of-sale equipment all depend on a stable internal network. Centralising data points through patch panels and network switches improves performance and simplifies maintenance.
          </p>
          <p className="es-intro-text">
            New builds and renovations are ideal times to plan data cabling properly. Installing Cat6 or Cat6A cabling during construction avoids surface-mounted solutions later and allows networks to be designed around the layout of the space. This future-proofs the property as connectivity requirements continue to grow.
          </p>
          <p className="es-intro-text">Data and networking services are also essential when installing:</p>
          <ul className="es-checklist">
            {additionalNeeds.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="es-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="es-intro-text">
            These systems rely on reliable network connections to function correctly. Poor cabling often leads to ongoing performance issues and unnecessary troubleshooting.
          </p>
        </section>

        {/* Why Choose NZXTGEN */}
        <section className="es-content-section es-why-choose-section">
          <h2 className="es-section-heading">
            Why Choose <span className="es-highlight">NZXTGEN</span>
          </h2>
          <p className="es-intro-text es-white-text">
            NZXTGEN approaches data and networking with a practical mindset. We focus on performance, organisation and flexibility rather than overcomplicated systems that are difficult to manage.
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
            We take the time to understand how many devices will be connected, where they are used and how the network needs to perform. This ensures systems are designed correctly from the start, reducing future limitations.
          </p>
          <p className="es-intro-text es-white-text">
            Attention to detail is a key part of our work. Cables are routed neatly, secured properly and concealed where possible. Network cabinets and racks are organised logically, allowing easy access without clutter.
          </p>
          <p className="es-intro-text es-white-text">
            We also prioritise flexibility. As technology changes, a structured network allows additional data points, devices or services to be added without major disruption or rework.
          </p>
          <p className="es-intro-text es-white-text">
            Clear communication is maintained throughout the project. We explain what is being installed, how it works and how it can be expanded or maintained. Clients are left with a network they understand and can rely on.
          </p>
          <p className="es-intro-text es-white-text">
            NZXTGEN provides data and networking services throughout Condell Park and the surrounding south-west Sydney region.
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

export default DataNetworkingContent;
