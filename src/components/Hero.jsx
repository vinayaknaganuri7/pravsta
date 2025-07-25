import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" role="banner" aria-label="Hero section with introduction">
      <div className="overlay" aria-hidden="true" />

      <div className="hero-content">
        <h1>
          Committed to<br />
          <span className="highlight">Exceptional Embedded Solutions</span><br />
          for IT, Automotive Innovation,<br />
          & Data Science
        </h1>
        <p>
          Your trusted partner in driving digital transformation through cutting-edge technologies.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Our Services</button>
          <button className="btn-outline">View Projects</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
