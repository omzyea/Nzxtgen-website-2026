import "./AboutSection.css";
import aboutVideo from "../assets/nzxtgen-why-choose-nzxtgen-video.mp4";
import aboutVideoDesktop from "../assets/nzxtgen-electrical-expertise-desktop-video.mp4";

const AboutSection = () => {
  const isMobile = window.innerWidth <= 480;
  return (
    <section
      className="about-section"
      style={{ backgroundImage: `url("/images/nzxtgen-about-section-background.WEBP")` }}
    >
      <div className="about-card">
        {/* Left: Video */}
        <div className="about-video-container">
          <video
            src={isMobile ? aboutVideo : aboutVideoDesktop}
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

        {/* Right: Text */}
        <div className="about-content">
          <h2 className="about-heading">Why Choose NZXTGEN</h2>
          <p className="about-description">
            We are fully licensed and experienced, with hands-on knowledge across electrical, smart technology and low-voltage systems. This means fewer trades, better integration, and a smoother experience from start to finish.
          </p>
          <p className="about-description">
            Our approach is practical and transparent. We explain what's required, what your options are, and what makes sense for your space and budget. You get solutions that work — not unnecessary extras.
          </p>
          <p className="about-description">
            We respect your home or workplace. Jobs are completed cleanly, safely, and with minimal disruption, and we don't leave until everything is tested and working correctly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
