import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ServicesData.css";
import ServiceFAQ from "./services/ServiceFAQ";
// Using same images as nextgen about us page
import img1 from "../assets/about/electrical.WEBP";
import img2 from "../assets/about/smarthome.WEBP";
import img3 from "../assets/about/security.WEBP";
import img4 from "../assets/about/entertainment.WEBP";

const data = [
  {
    id: 1,
    title: "Electrical Services",
    description:
      "We provide reliable electrical services covering new installations, upgrades and ongoing maintenance for residential and small commercial properties. This includes lighting, power points, switches, ceiling fans, smoke alarms and appliance connections, all completed to current Australian Standards. We also handle fault finding and preventative maintenance to ensure your electrical systems remain safe, efficient, and compliant.",
    image: img1,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    link: "/our-services",
    linkText: "View Electrical Services",
  },
  {
    id: 2,
    title: "Smart Home Solutions",
    description:
      "Our smart home solutions are designed to improve convenience, control and energy efficiency without adding unnecessary complexity. We install smart lighting, switches, sensors, voice control systems, and central touch panels that allow you to manage your home from a smartphone or tablet. Each system is tailored to suit your lifestyle, with intuitive controls that are easy to use and expand over time.",
    image: img2,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    link: "/services/smart-home",
    linkText: "View Smart Home Services",
  },
  {
    id: 3,
    title: "Security Systems",
    description:
      "We design and install integrated security systems that help protect your property and provide peace of mind. Our services include CCTV cameras, alarms, intercoms, smart door locks and smoke detectors, all configured to work together through a single platform where possible. Remote access and monitoring allow you to stay connected to your home or business whether you're onsite or away.",
    image: img3,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    link: "/services/security-systems",
    linkText: "View Security Services",
  },
  {
    id: 4,
    title: "Data & Networking",
    description:
      "Reliable connectivity is essential for modern homes and workplaces, and our data and networking services are built with performance and stability in mind. We install data points, structured cabling, patch panels, and server racks to support fast, organized, and scalable networks. All installations are NBN-ready and designed to reduce signal issues, clutter and future upgrade costs.",
    image: img1, // Reusing electrical image for data & networking
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    link: "/services/data-networking",
    linkText: "View Data Services",
  },
  {
    id: 5,
    title: "Entertainment Technology",
    description:
      "We deliver professional entertainment technology installations that enhance both functionality and appearance. Our services include TV wall mounting, home theatre systems, speaker installations, and organized cable management for a clean, streamlined finish. Every setup is carefully positioned for optimal viewing, sound quality, and long-term reliability.",
    image: img4,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    link: "/services/entertainment-technology",
    linkText: "View Entertainment Services",
  },
];

const ServicesData = ({ isExiting }) => {
  const [inView, setInView] = useState([]);

  const handleScroll = () => {
    const visibleRows = data.map((_, index) => {
      const row = document.getElementById(`services-row-${index}`);
      if (!row) return false;
      const rect = row.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
    });

    setInView(visibleRows);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isMobile = window.innerWidth < 480;

  return (
    <div className={`services-data ${isExiting ? "exiting" : ""}`}>
      <div className="fadeColorBg">
        <div className="services-header">
          <h1>Services</h1>
        </div>

        {/* Intro Description */}
        <div className="services-intro">
          <p>
            NZXTGEN offers a complete range of electrical and technology services designed to work together smoothly. Below is an overview of what we provide. Each service is delivered with a focus on safety, usability, and clean installation.
          </p>
        </div>

        {/* Main Services Title */}
        {/* <div className="services-main-title">
          <h2>Our Main Services</h2>
        </div> */}

        {/* Content Section */}
        {!isMobile ? (
          <div className="services-content">
            {data.map((item, index) => (
              <div
                key={item.id}
                id={`services-row-${index}`}
                className={`services-row ${
                  index % 2 === 0 ? "normal" : "reversed"
                } ${inView[index] ? "in-view" : ""}`}
                style={{ backgroundColor: item.backgroundColor }}
              >
                <div className="services-text">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <Link to={item.link} className="services-link">
                    {item.linkText} →
                  </Link>
                </div>
                <div className="services-image">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="services-content">
            {data.map((item, index) => (
              <div
                key={item.id}
                id={`services-row-${index}`}
                className="services-row normal in-view"
                style={{ backgroundColor: item.backgroundColor }}
              >
                <div className="services-text">
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <Link to={item.link} className="services-link">
                    {item.linkText} →
                  </Link>
                </div>
                <div className="services-image">
                  <img src={item.image} alt={item.title} />
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="servicesDes">
          <p>
            Each service can be delivered individually or combined into a single, coordinated project to reduce downtime and improve overall system performance.
          </p>
        </div>

        <ServiceFAQ />
      </div>
    </div>
  );
};

export default ServicesData;
