import React from 'react';
import './About.css';
import Hero from '../components/Navbar';
import Footer from '../components/Footer';

import storyImg from '../components/pages/images/Intr.jpg';
import visionImg from '../components/pages/images/Intr.jpg';
import leadershipImg from '../components/pages/images/Intr.jpg';
import careersImg from '../components/pages/images/Intr.jpg';

const AboutContent = () => {
  return (
    <>
      <Hero title="About PRAVSTA" subtitle="Engineering the Future of Technology" />

    

      <div className="about-wrapper">
        <div className="about-grid">

          <section className="about-card" id="our-story">
            <div className="about-image-heading">
              <img src={storyImg} alt="Our Story" className="about-icon" />
              <h2>Our Story</h2>
            </div>
            <div className="about-content">
              <p>
                PRAVSTA began with a bold vision — to reimagine how technology can
                create meaningful, scalable, and positive impact. Founded by engineers
                and tech enthusiasts, we’ve grown from a niche startup into a trusted
                partner for enterprise innovation.
              </p>
            </div>
          </section>

          <section className="about-card" id="vision-mission">
            <div className="about-image-heading">
              <img src={visionImg} alt="Vision and Mission" className="about-icon" />
              <h2>Vision & Mission</h2>
            </div>
            <div className="about-content">
              <p><strong>Vision:</strong> To be a global leader in transformative technologies.</p>
              <p><strong>Mission:</strong> To architect and deliver intelligent, secure, and high-performance solutions.</p>
              <ul>
                <li>Empower innovation through collaboration</li>
                <li>Drive operational excellence</li>
                <li>Foster talent and sustainability</li>
              </ul>
            </div>
          </section>

          <section className="about-card" id="leadership">
            <div className="about-image-heading">
              <img src={leadershipImg} alt="Leadership" className="about-icon" />
              <h2>Leadership</h2>
            </div>
            <div className="about-content">
              <p>
                Our leadership team brings decades of experience from Fortune 500
                companies and R&D hubs. We believe in flat hierarchy and innovation.
              </p>
            </div>
          </section>

          <section className="about-card" id="careers">
            <div className="about-image-heading">
              <img src={careersImg} alt="Careers" className="about-icon" />
              <h2>Careers</h2>
            </div>
            <div className="about-content">
              <p>
                Join PRAVSTA and shape the future. We seek builders, dreamers, and doers.
              </p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutContent;
