import React from 'react';
import './About.css';
import Hero from '../components/Navbar';
import Footer from '../components/Footer';

const AboutContent = () => {
  return (
    <>
      <Hero title="About PRAVSTA" subtitle="Engineering the Future of Technology" />

      <div className="about-wrapper">
        <div className="about-grid">

          <section className="about-card" id="our-story">
            <h2>📖 Our Story</h2>
            <p>
              PRAVSTA began with a bold vision — to reimagine how technology can
              create meaningful, scalable, and positive impact. Founded by engineers
              and tech enthusiasts, we’ve grown from a niche startup into a trusted
              partner for enterprise innovation. Our journey is fueled by precision,
              creativity, and a passion to solve real-world challenges.
            </p>
          </section>

          <section className="about-card" id="vision-mission">
            <h2>🎯 Vision & Mission</h2>
            <p>
              <strong>Vision:</strong> To be a global leader in transformative technologies,
              enabling industries and communities to thrive in a digital-first world.
            </p>
            <p>
              <strong>Mission:</strong> To architect and deliver intelligent, secure, and
              high-performance technology solutions by leveraging deep domain
              expertise, agile methodologies, and a commitment to client success.
            </p>
            <ul>
              <li>Empower innovation through collaboration</li>
              <li>Drive operational excellence and quality</li>
              <li>Foster talent, ethics, and sustainability</li>
            </ul>
          </section>

          <section className="about-card" id="leadership">
            <h2>👨‍💼 Leadership</h2>
            <p>
              Our leadership team brings decades of experience from Fortune 500
              companies, cutting-edge startups, and R&D powerhouses. We believe in
              a culture of mentorship, flat hierarchy, and agility where ideas
              thrive and ownership drives progress.
            </p>
          </section>

          <section className="about-card" id="careers">
            <h2>💼 Careers</h2>
            <p>
              Join us in shaping the next generation of technology. At PRAVSTA,
              we empower curious minds and passionate builders. We’re always on
              the lookout for innovators, engineers, and dreamers who believe in
              technology with purpose. Build with us. Grow with us.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutContent;
