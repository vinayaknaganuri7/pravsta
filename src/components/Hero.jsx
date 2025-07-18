import React from 'react';
import './Hero.css'; // Custom CSS for styling

const Hero = () => {
  return (
    <section className="hero-section" role="banner" aria-label="Hero section with introduction">
      {/* Dark overlay */}
      <div className="overlay" aria-hidden="true" />

      {/* Hero content */}
      <div className="hero-content">
        <h1>
          Transform your ideas<br />
          into <span className="highlight">digital success</span><br />
          with us!
        </h1>
        <p>
          Your partner in Automotive, IT, and Data Science solutions.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" aria-label="Learn more about our services">
            Our Services
          </button>
          <button className="btn-outline" aria-label="See our past projects">
            View Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
