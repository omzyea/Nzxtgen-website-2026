import React, { useState } from 'react';
import { 
  FaCheckCircle,
  FaShieldAlt,
  FaPlug,
  FaTools,
  FaExclamationTriangle
} from 'react-icons/fa';
import ServiceSidebar from './ServiceSidebar';
import './SmokeAlarmContent.css';

const SmokeAlarmContent = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqItems = [
    {
      question: "How often should smoke alarms be tested?",
      answer: "Smoke alarms should be tested regularly and professionally checked during safety inspections or when issues are suspected."
    },
    {
      question: "Do smoke alarms really need replacing after ten years?",
      answer: "Yes. Even if they still sound, the sensors degrade over time and may not detect smoke effectively."
    },
    {
      question: "What happens if safety issues are found during a check?",
      answer: "We explain the issue clearly and outline practical options for repair or upgrade so you can make an informed decision."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  const coreServices = [
    {
      id: "smoke-alarm-compliance",
      icon: <FaShieldAlt />,
      title: "Smoke Alarm Testing & Compliance",
      text: "Smoke alarm compliance is more than just having a device on the ceiling. Regulations in NSW specify where smoke alarms must be installed, how they must operate, and when they must be replaced. Our smoke alarm inspections ensure alarms are installed in required locations, securely mounted and unobstructed, operating correctly, powered appropriately, and compliant with current NSW requirements."
    },
    {
      id: "smoke-alarm-installation",
      icon: <FaTools />,
      title: "Smoke Alarm Installation, Upgrades & Replacement",
      text: "Smoke alarms do not last forever. Most units need replacing every ten years, even if they appear to be working. Sensors degrade over time and may not detect smoke effectively. Our services include testing existing smoke alarms, replacing faulty or expired units, installing new alarms where required, upgrading to interconnected alarm systems, and installing or upgrading hard-wired smoke alarms."
    },
    {
      id: "electrical-safety-checks",
      icon: <FaPlug />,
      title: "Electrical Safety Checks",
      text: "Electrical faults remain one of the leading causes of house fires. Many electrical issues develop gradually and remain hidden behind walls, ceilings, or fittings until they become dangerous. An electrical safety check helps identify problems early, allowing corrective work before faults escalate into serious hazards."
    },
    {
      id: "safety-check-coverage",
      icon: <FaExclamationTriangle />,
      title: "What an Electrical Safety Check Covers",
      text: "NZXTGEN carries out structured electrical safety inspections designed to assess both visible and concealed risks. Each check is practical and focused on real-world safety concerns. We inspect switchboard condition and safety switch protection, power points and switches, signs of overheating or loose connections, earthing and bonding integrity, smoke alarm power supply for hard-wired systems, and general electrical hazards."
    }
  ];

  const whenYouNeedUs = [
    "You are unsure when smoke alarms were last replaced",
    "Alarms activate intermittently or fail to respond",
    "You have recently renovated or upgraded appliances",
    "The switchboard appears outdated or unlabelled",
    "Power points feel warm or emit unusual smells",
    "You are preparing a property for sale, lease, or inspection"
  ];

  const whyChooseUs = [
    "Licensed electrical services carried out to Australian standards",
    "Clear explanations of risks and required actions",
    "Focused inspections without upselling",
    "Clean, respectful work practices",
    "Reliable documentation where required"
  ];

  return (
    <div className="sa-two-column-layout">
      {/* Left Sidebar */}
      <ServiceSidebar />

      {/* Right Content */}
      <main className="sa-main-content">
        {/* Top CTA Section */}
        <section className="sa-content-section sa-top-cta">
          <p>
            Worried about electrical safety or smoke alarm compliance?
          </p>
          <a href="/free-quote" className="sa-top-cta-button">
            👉 Book a professional safety check with NZXTGEN today
          </a>
        </section>

        {/* Intro Section */}
        <section className="sa-content-section">
          <p className="sa-intro-text">
            Electrical safety is not something most people think about day to day — until something goes wrong. 
            Smoke alarms and electrical systems are designed to protect lives and property, but only when they 
            are installed correctly, maintained properly, and tested regularly.
          </p>
          <p className="sa-intro-text">
            NZXTGEN provides professional smoke alarm services and electrical safety checks for homes and small 
            businesses. Our work focuses on compliance, early risk detection, and practical improvements that 
            reduce the likelihood of electrical faults and fire hazards. Every inspection is carried out by a 
            licensed electrician, with safety and clarity as the priority.
          </p>
        </section>

        {/* Smoke Alarm Testing & Compliance */}
        <section className="sa-content-section">
          <h2 className="sa-section-heading">
            Smoke Alarm Testing & <span className="sa-highlight">Compliance</span>
          </h2>
          <p className="sa-intro-text">
            Smoke alarms save lives — but only if they work when they are needed. Alarms that are incorrectly 
            installed, expired, or poorly maintained may fail to activate during a fire, placing occupants at 
            serious risk.
          </p>
          <p className="sa-intro-text">
            We assess whether alarms are suitable for the property layout and usage, including bedrooms, 
            hallways, and living areas.
          </p>
        </section>

        {/* Core Services Grid */}
        <section className="sa-content-section">
          <h2 className="sa-section-heading">
            Our Smoke Alarm & Safety <span className="sa-highlight">Services</span>
          </h2>
          <div className="sa-services-grid">
            {coreServices.map((service, index) => (
              <div key={index} id={service.id} className="sa-service-card">
                <div className="sa-service-icon">{service.icon}</div>
                <div className="sa-service-content">
                  <h3 className="sa-service-title">{service.title}</h3>
                  <p className="sa-service-text">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Interconnected Alarms */}
        <section className="sa-content-section">
          <h2 className="sa-section-heading">
            Interconnected Smoke <span className="sa-highlight">Alarms</span>
          </h2>
          <p className="sa-intro-text">
            Interconnected smoke alarms are particularly effective in larger homes and multi-level properties, 
            as they activate simultaneously when smoke is detected in any area. This provides earlier warning 
            and better protection for all occupants.
          </p>
        </section>

        {/* Electrical Safety Checks Section */}
        <section className="sa-content-section">
          <h2 className="sa-section-heading">
            Electrical Safety <span className="sa-highlight">Checks</span>
          </h2>
          <p className="sa-intro-text">
            Where issues are identified, we clearly explain the risk and outline practical options for 
            rectification.
          </p>
        </section>

        {/* Why Safety Checks Matter */}
        <section className="sa-content-section">
          <h2 className="sa-section-heading">
            Why Safety Checks <span className="sa-highlight">Matter</span>
          </h2>
          <p className="sa-intro-text">
            Electrical systems age, loads increase, and standards change. A property that was safe ten years 
            ago may no longer meet current expectations or usage demands.
          </p>
          <p className="sa-intro-text">Safety checks are particularly important for:</p>
          <ul className="sa-checklist">
            <li>
              <FaCheckCircle className="sa-check-icon" />
              <span>Older homes with original wiring</span>
            </li>
            <li>
              <FaCheckCircle className="sa-check-icon" />
              <span>Properties with frequent circuit tripping</span>
            </li>
            <li>
              <FaCheckCircle className="sa-check-icon" />
              <span>Homes using multiple appliances or EV chargers</span>
            </li>
            <li>
              <FaCheckCircle className="sa-check-icon" />
              <span>Rental properties requiring safety compliance</span>
            </li>
            <li>
              <FaCheckCircle className="sa-check-icon" />
              <span>Businesses with extended operating hours</span>
            </li>
          </ul>
          <p className="sa-intro-text">
            Regular inspections help reduce fire risk, prevent unexpected outages, and support insurance and 
            compliance requirements.
          </p>
        </section>

        {/* When You Need Services */}
        <section className="sa-content-section">
          <h2 className="sa-section-heading">
            When You Need Smoke Alarm or Electrical Safety <span className="sa-highlight">Services</span>
          </h2>
          <p className="sa-intro-text">
            Many property owners only arrange safety checks after a problem occurs. Preventative inspections 
            are far more effective and cost-efficient.
          </p>
          <p className="sa-intro-text">You should consider smoke alarm testing or an electrical safety check if:</p>
          <ul className="sa-checklist">
            {whenYouNeedUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="sa-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="sa-intro-text">
            Early identification of issues allows corrective work to be planned safely, without urgency or 
            disruption.
          </p>
        </section>

        {/* Why Choose NZXTGEN */}
        <section className="sa-content-section sa-why-choose-section">
          <h2 className="sa-section-heading">
            Why Choose <span className="sa-highlight">NZXTGEN</span>
          </h2>
          <p className="sa-intro-text sa-white-text">
            NZXTGEN approaches safety services with a compliance-first mindset. Our goal is to provide clear, 
            honest assessments and practical solutions that improve safety without unnecessary complexity.
          </p>
          <p className="sa-intro-text sa-white-text sa-approach-intro">Clients choose NZXTGEN because we offer:</p>
          <ul className="sa-checklist sa-white-checklist">
            {whyChooseUs.map((item, index) => (
              <li key={index}>
                <FaCheckCircle className="sa-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="sa-intro-text sa-white-text">
            We understand that safety checks can feel technical or unclear. Our role is to make the process 
            straightforward and reassuring.
          </p>
        </section>

        {/* FAQ Section */}
        <section className="sa-content-section sa-faq-section">
          <h2 className="sa-section-heading">
            Smoke Alarm & Electrical Safety <span className="sa-highlight">FAQs</span>
          </h2>
          <div className="sa-faq-list">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`sa-faq-item ${openFaqIndex === index ? 'active' : ''}`}
              >
                <button 
                  className="sa-faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="sa-faq-number">{index + 1}.</span>
                  <span className="sa-faq-question-text">{item.question}</span>
                  <span className="sa-faq-icon">
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
                <div className="sa-faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="sa-content-section sa-final-cta-section">
          <h2>Don't leave safety to chance</h2>
          <a href="/free-quote" className="sa-final-cta-button">
            Book your smoke alarm inspection or electrical safety check with NZXTGEN
          </a>
        </section>
      </main>
    </div>
  );
};

export default SmokeAlarmContent;
