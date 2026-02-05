import React, { useState, useEffect } from "react";
import "./RecentSwitchboardUpgrade.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

// Old (Upgrade Needed) Images
import old1 from "../assets/switchboard-upgrade-before/nzxtgen-old-switchboard-safety-hazard-01.webp";
import old2 from "../assets/switchboard-upgrade-before/nzxtgen-old-switchboard-non-compliant-02.webp";
import old3 from "../assets/switchboard-upgrade-before/nzxtgen-old-fuse-box-replacement-03.webp";
import old4 from "../assets/switchboard-upgrade-before/nzxtgen-legacy-electrical-panel-04.webp";

// New (Upgraded) Images
import new1 from "../assets/switchboard-upgrade-after/nzxtgen-modern-switchboard-upgrade-01.webp";
import new2 from "../assets/switchboard-upgrade-after/nzxtgen-compliant-switchboard-installation-02.webp";
import new3 from "../assets/switchboard-upgrade-after/nzxtgen-professional-switchboard-upgrade-03.webp";
import new4 from "../assets/switchboard-upgrade-after/nzxtgen-safety-switchboard-installation-04.webp";

const RecentSwitchboardUpgrade = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  const upgradeNeededImages = [
    { src: old1, title: "Old Electrical Switchboard Requiring Upgrade - Safety Hazard" },
    { src: old2, title: "Outdated Switchboard Before Upgrade - Non-Compliant Installation" },
    { src: old3, title: "Old Fuse Box Needing Modern Switchboard Replacement" },
    { src: old4, title: "Legacy Electrical Panel Requiring Safety Upgrade" },
  ];

  const upgradedImages = [
    { src: new1, title: "Modern Upgraded Switchboard Installation by NZXTGEN" },
    { src: new2, title: "New Compliant Electrical Switchboard - Australian Standards" },
    { src: new3, title: "Professional Switchboard Upgrade Completed" },
    { src: new4, title: "Modern Safety Switchboard Installation" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="upgrade-gallery-container">
      {/* Group 1 */}
      <h2 className={`upgrade-gallery-header ${loaded ? "fade-in" : ""}`}>
        UPGRADE NEEDED!
      </h2>
      <Slider {...sliderSettings} className="upgrade-gallery-slider">
        {upgradeNeededImages.map((img, index) => (
          <div key={index} className="upgrade-card">
            <div className="upgrade-card-wrapper">
              <img
                src={img.src}
                alt={img.title}
                className="upgrade-card-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </Slider>

      {/* Group 2 */}
      <h2 className={`upgrade-gallery-header ${loaded ? "fade-in" : ""}`}>
        UPGRADED!
      </h2>
      <Slider {...sliderSettings} className="upgrade-gallery-slider">
        {upgradedImages.map((img, index) => (
          <div key={index} className="upgrade-card">
            <div className="upgrade-card-wrapper">
              <img
                src={img.src}
                alt={img.title}
                className="upgrade-card-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RecentSwitchboardUpgrade;
