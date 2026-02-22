import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isBuildersDropdownOpen, setIsBuildersDropdownOpen] = useState(false);

  const [isSmartHomeDropdownOpen, setIsSmartHomeDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setIsAboutDropdownOpen(false);
        setIsDropdownOpen(false);
        setIsBuildersDropdownOpen(false);
        setIsSmartHomeDropdownOpen(false);
        setIsContactDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-logo">
          <a href="/">
            <img src="/images/site-logo.png" alt="NZXTGEN Electrical and Smart Home Services Logo" className="sitelogo" loading="eager" fetchPriority="high" />
          </a>
        </div>

        <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <a href="/">HOME</a>
          </li>
          <li className="dropdown about-dropdown">
            <a
              href="/about-us"
              className="about-link"
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
              onFocus={() => setIsAboutDropdownOpen(true)}
              aria-haspopup="true"
              aria-expanded={isAboutDropdownOpen}
            >
              ABOUT US
            </a>
            <ul
              className={`dropdown-menu about-dropdown-menu ${isAboutDropdownOpen ? "show" : ""}`}
              onMouseEnter={() => setIsAboutDropdownOpen(true)}
              onMouseLeave={() => setIsAboutDropdownOpen(false)}
              onFocus={() => setIsAboutDropdownOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setIsAboutDropdownOpen(false);
                }
              }}
            >
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/areas-we-service/electrician-condell-park">Our Location (Condell Park)</a>
              </li>
              <li>
                <a href="/areas-we-service">Areas We Service</a>
              </li>
            </ul>
          </li>
          <li className="dropdown services-dropdown">
            <a 
              href="/services" 
              className="services-link"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              onFocus={() => setIsDropdownOpen(true)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
            >
              SERVICES
            </a>
            <ul 
              className={`dropdown-menu services-dropdown-menu ${isDropdownOpen ? "show" : ""}`}
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
              onFocus={() => setIsDropdownOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setIsDropdownOpen(false);
                }
              }}
            >
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/our-signature-services">Our Signature Services</a>
              </li>
              <li>
                <a href="/services/electrical-services">Electrical Services</a>
              </li>
              <li>
                <a href="/services/security-systems">Security Systems</a>
              </li>
              <li>
                <a href="/services/data-networking">Data & Networking</a>
              </li>
              <li>
                <a href="/services/entertainment-technology">Entertainment Technology</a>
              </li>
            </ul>
          </li>
          <li className="dropdown builders-dropdown">
            <a
              href="/builders-contracting"
              className="builders-link"
              onMouseEnter={() => setIsBuildersDropdownOpen(true)}
              onMouseLeave={() => setIsBuildersDropdownOpen(false)}
              onFocus={() => setIsBuildersDropdownOpen(true)}
              aria-haspopup="true"
              aria-expanded={isBuildersDropdownOpen}
            >
              BUILDERS & CONTRACTING
            </a>
            <ul 
              className={`dropdown-menu builders-dropdown-menu ${isBuildersDropdownOpen ? "show" : ""}`}
              onMouseEnter={() => setIsBuildersDropdownOpen(true)}
              onMouseLeave={() => setIsBuildersDropdownOpen(false)}
              onFocus={() => setIsBuildersDropdownOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setIsBuildersDropdownOpen(false);
                }
              }}
            >
              <li>
                <a href="/builders-contracting">Builders & Contracting</a>
              </li>
              <li>
                <a href="/residential-electrical">Residential Electrical</a>
              </li>
              <li>
                <a href="/commercial-industrial-electrical">Commercial & Industrial Electrical</a>
              </li>
              <li>
                <a href="/new-builds-renovations">New Builds, Renovations & Ongoing Works</a>
              </li>
              <li>
                <a href="/compliance-licensing">Compliance & Licensing</a>
              </li>
            </ul>
          </li>
          <li className="dropdown smarthome-dropdown">
            <a
              href="/smart-home"
              className="smarthome-link"
              onMouseEnter={() => setIsSmartHomeDropdownOpen(true)}
              onMouseLeave={() => setIsSmartHomeDropdownOpen(false)}
              onFocus={() => setIsSmartHomeDropdownOpen(true)}
              aria-haspopup="true"
              aria-expanded={isSmartHomeDropdownOpen}
            >
              SMART HOME
            </a>
            <ul
              className={`dropdown-menu smarthome-dropdown-menu ${isSmartHomeDropdownOpen ? "show" : ""}`}
              onMouseEnter={() => setIsSmartHomeDropdownOpen(true)}
              onMouseLeave={() => setIsSmartHomeDropdownOpen(false)}
              onFocus={() => setIsSmartHomeDropdownOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setIsSmartHomeDropdownOpen(false);
                }
              }}
            >
              <li>
                <a href="/smart-home">Smart Home</a>
              </li>
              <li>
                <a href="/smart-home/more-info">More Info</a>
              </li>
            </ul>
          </li>

          <li className="dropdown contact-dropdown">
            <a 
              href="/contact-us" 
              className="contact-link"
              onMouseEnter={() => setIsContactDropdownOpen(true)}
              onMouseLeave={() => setIsContactDropdownOpen(false)}
              onFocus={() => setIsContactDropdownOpen(true)}
              aria-haspopup="true"
              aria-expanded={isContactDropdownOpen}
            >
              CONTACT
            </a>
            <ul 
              className={`dropdown-menu contact-dropdown-menu ${isContactDropdownOpen ? "show" : ""}`}
              onMouseEnter={() => setIsContactDropdownOpen(true)}
              onMouseLeave={() => setIsContactDropdownOpen(false)}
              onFocus={() => setIsContactDropdownOpen(true)}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) {
                  setIsContactDropdownOpen(false);
                }
              }}
            >
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
              <li>
                <a href="/free-quote">Free Online Quote</a>
              </li>
            </ul>
          </li>
        </ul>

        <button className="book-btn">
          <a className="book-btn-link" href="/free-quote">
            ONLINE QUOTE
          </a>
        </button>

        <div className="hamburger-menu" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
