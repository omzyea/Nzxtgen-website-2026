import React, { useState, useEffect } from "react";
import "./Welcome.css";
import welcomeVideo from "../assets/video/nzxtgen-electrical-services-hero-video.mp4";
import welcomeVideoMobile from "../assets/video/nzxtgen-mobile-hero-video.mp4";

const Welcome = () => {
  const isMobile = window.innerWidth <= 480;

  const slides = [
    /* {
      id: 1,
      type: "image",
      src: "/images/nzxtgen-electrical-services-hero.jpg",
      title: "Start Living In The Future",
      slogan: "With next-gen electrical technology",
      buttonText: "EXPLORE",
    },
    {
      id: 2,
      type: "image",
      src: "/images/nzxtgen-smart-home-solutions.jpg",
      title: "Start Living In The Future",
      slogan: "With next-gen electrical technology",
      buttonText: "EXPLORE",
    }, */
    {
      id: 3,
      type: "video",
      src: isMobile ? welcomeVideoMobile : welcomeVideo,
      title: "Start Living In The Future",
      slogan: "With next-gen electrical technology",
      buttonText: "EXPLORE",
      buttonLink: "/our-signature-services",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="welcome-section">
      <div className="slider">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            {slide.type === "image" ? (
              <img
                src={slide.src}
                alt="NZXTGEN Electrical and Smart Home Services - Modern Technology Solutions"
                className="slide-media"
                loading="eager"
                fetchPriority="high"
              />
            ) : (
              <video autoPlay loop muted playsInline className="slide-media" preload="metadata">
                <source src={slide.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="slider-overlay"></div>

            <div className="slide-content">
              <h2 className="welcome-header">{slide.title}</h2>
              <p className="welcome-slogan">{slide.slogan}</p>
              {slide.buttonLink ? (
                <a href={slide.buttonLink} className="welcome-button">
                  {slide.buttonText}
                </a>
              ) : (
                <button className="welcome-button">{slide.buttonText}</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Welcome;
