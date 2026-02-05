import React, { useState } from "react";
import "./BrandGallery.css";
import brand1 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-01.webp";
import brand2 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-02.webp";
import brand3 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-03.webp";
import brand4 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-04.webp";
import brand5 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-05.webp";
import brand6 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-06.webp";
import brand7 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-07.webp";
import brand8 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-08.webp";
import brand9 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-09.webp";
import brand10 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-10.webp";
import brand11 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-11.webp";
import brand12 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-12.webp";
import brand13 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-13.webp";
import brand14 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-14.webp";
import brand15 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-15.webp";
import brand16 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-16.webp";
import brand17 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-17.webp";
import brand18 from "../assets/brand-partners/nzxtgen-electrical-brand-partner-18.webp";

const BrandGallery = () => {
  const [expanded, setExpanded] = useState(false);

  const brands = [
    brand1, brand2, brand3, brand4, brand5, brand6,
    brand7, brand8, brand9, brand10, brand11, brand12,
    brand13, brand14, brand15, brand16, brand17,brand18,
  ];

  const getVisibleCount = () => {
    const width = window.innerWidth;
    if (width >= 1024) return 12;
    if (width >= 768) return 8;
    return 4;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Update visible count on resize
  React.useEffect(() => {
    const handleResize = () => setVisibleCount(getVisibleCount());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedBrands = expanded ? brands : brands.slice(0, visibleCount);

  return (
    <section className="brand-gallery">
      <div className="gallery-header">
        <h2>
          Incorporating <br />
          Leading Brand Products
        </h2>
      </div>

      <div className="gallery-grid">
        {displayedBrands.map((brand, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={brand} 
              alt={`Leading Electrical and Smart Home Brand Partner ${index + 1} - NZXTGEN`}
              loading={index < visibleCount ? "lazy" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>

      <div className="gallery-footer">
        <button
          className="see-more-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "See Less" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default BrandGallery;
