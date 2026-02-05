import React, { useState } from "react";
import "./BrandGallery.css";

const BrandGallery = () => {
  const [expanded, setExpanded] = useState(false);

  const brands = [
    brand1, "/images/brand-partners/nzxtgen-electrical-brand-partner-02.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-03.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-04.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-05.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-06.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-07.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-08.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-09.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-10.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-11.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-12.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-13.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-14.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-15.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-16.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-17.webp", "/images/brand-partners/nzxtgen-electrical-brand-partner-18.webp",
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
