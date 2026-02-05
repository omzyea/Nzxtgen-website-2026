import React, { useState } from 'react';
import './ServiceFAQ.css';

const ServiceFAQ = () => {
  const faqItems = [
    {
      question: "Can multiple services be completed during one visit?",
      answer: "Yes. Many clients combine electrical, data, and smart home work into one streamlined job."
    },
    {
      question: "Do you supply equipment as well as installation?",
      answer: "Yes. We can supply, install and configure compatible products or work with client-supplied equipment where appropriate."
    }
  ];

  const [openIndexes, setOpenIndexes] = useState(() =>
    faqItems.map((_, index) => index)
  );

  const toggleFAQ = (index) => {
    setOpenIndexes((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((item) => item !== index)
        : [...prevIndexes, index]
    );
  };

  return (
    <section className="service-faq-section">
      <div className="service-faq-container">
        <div className="service-faq-header">
          <div className="service-faq-header-left">
            <span className="service-faq-label">
              <span className="faq-dot"></span>
              FREQUENTLY ASKED QUESTION
            </span>
            <h2 className="service-faq-title">
              Common questions about our <span className="highlight">services</span>
            </h2>
          </div>
          <div className="service-faq-header-right">
            <p className="service-faq-description">
              The feedback from our clients speaks volumes about the quality of our services. Read how we've helped them with reliable solutions.
            </p>
          </div>
        </div>

        <div className="service-faq-content">
          <div className="service-faq-image">
            <img src="/images/services/nzxtgen-compliance-electrical-service.webp" alt="Professional electrician at work" />
          </div>
          <div className="service-faq-list">
            {faqItems.map((item, index) => (
              <div 
                key={index} 
                className={`service-faq-item ${openIndexes.includes(index) ? 'active' : ''}`}
              >
                <button 
                  className="service-faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="faq-number">{index + 1}.</span>
                  <span className="faq-question-text">{item.question}</span>
                  <span className="faq-icon">
                    {openIndexes.includes(index) ? (
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
                <div className="service-faq-answer">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFAQ;
