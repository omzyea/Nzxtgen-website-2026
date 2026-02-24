import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const ServiceSidebar = () => {
  const services = [
    { name: "Electrical Services", link: "/services/electrical-services" },
    { name: "Lighting", link: "/lighting-installation" },
    { name: "EV Charger Installation", link: "/services/ev-charger-installation" },
    { name: "Switchboard Upgrades", link: "/switchboard-upgrade" },
    { name: "Power Points & Electrical Upgrades", link: "/services/power-points-electrical-upgrades" },
    { name: "Electrical Fault Finding & Repairs", link: "/services/electrical-fault-finding-repairs" },
    { name: "Smoke Alarms & Safety Checks", link: "/smoke-alarms-electrical-safety-checks" },
    { name: "Emergency Electrician", link: "/services/emergency-electrician" },
    { name: "Security Systems", link: "/services/security-systems" },
    { name: "Data & Networking", link: "/services/data-networking" },
    { name: "Entertainment Technology", link: "/services/entertainment-technology" }
  ];

  return (
    <aside className="es-sidebar">
      <div className="es-sidebar-content">
        <div className="es-sidebar-header">
          <span className="es-sidebar-dot"></span>
          <h3>Our Valuable Services</h3>
        </div>
        <nav className="es-sidebar-nav">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="es-sidebar-link">
              <span>{service.name}</span>
              <FaArrowRight className="es-sidebar-arrow" />
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default ServiceSidebar;
