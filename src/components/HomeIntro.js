import React from 'react';
import { Link } from 'react-router-dom';
import './HomeIntro.css';

const HomeIntro = () => {
  return (
    <div className="home-intro-section">
      <div className="home-intro-overlay"></div>
      <div className="home-intro-container">
        <div className="home-intro-main-box">
          <h1 className="home-intro-title">NZXTGEN Electrical, Smart Home & Security Services</h1>
          <div className="home-intro-content">
            <p>
              NZXTGEN provides professional <Link to="/our-services">electrical, smart home, security, data and entertainment technology services</Link> for homeowners and small businesses who want safe, reliable and future-ready solutions. Based in <Link to="/areas-we-service">Condell Park</Link>, we focus on quality workmanship, clean installations and practical advice — no shortcuts, no overselling.
            </p>
            <p>
              From everyday electrical upgrades to fully integrated smart homes, our work is designed to improve how your space functions, looks and feels. Whether you're upgrading lighting, adding security, improving connectivity or fitting out a new build, we deliver solutions that work properly and last. <Link to="/our-services">Explore our services</Link> or <Link to="/areas-we-service">see the areas we service</Link>.
            </p>
          </div>
        </div>
        <div className="home-intro-cta">
          <p className="cta-text">Need reliable electrical or smart home work?</p>
          <Link to="/free-quote" className="cta-link">
            👉 Request your free quote today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
