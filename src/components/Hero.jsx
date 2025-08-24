import React, { useState, useEffect } from "react";
import "./Hero.css";

import video1 from "../components/pages/Video/bck.mp4";
import video2 from "../components/pages/Video/back2.mp4";
import video3 from "../components/pages/Video/back2.mp4";

const slides = [
  {
    id: 1,
    video: video1,
    title: "Advanced On-device AI",
    subtitle: "RUBIK Pi 3, a lightweight development board based on Qualcomm AI.",
    button: "Learn More",
  },
  {
    id: 2,
    video: video2,
    title: "Trusted Software, Global Mobility",
    subtitle: "IAA Mobility 2025 | Munich, Germany",
    button: "Learn More",
  },
  {
    id: 3,
    video: video3,
    title: "Innovating the Future",
    subtitle: "Smart, scalable, impactful solutions for Automotive & AI.",
    button: "Discover More",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  // Auto switch every 8s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === current ? "active" : ""}`}
        >
          {/* Background Video */}
          <video
            className="background-video"
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay */}
          <div className="overlay"></div>

          {/* Content */}
          <div className="content">
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
            <button className="btn">{slide.button} →</button>
          </div>
        </div>
      ))}

      {/* Dots Navigation */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;
