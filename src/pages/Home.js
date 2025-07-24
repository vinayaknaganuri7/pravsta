import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import './Home.css';
import introImage from '../components/pages/images/Intr.jpg';
import visionImage from '../components/pages/images/car.jpg';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <Hero />

      {/* === Introduction Section === */}
      <section className="home-section fade-in">
       
        <div className="intro-row">
          <div className="intro-image-wrapper">
            <img src={introImage} alt="Introduction" className="intro-sub-image" />
          </div>
          <div className="card-grid">
            <div className="info-card">
              <h3>Introduction</h3>
              <p>
                PRAVSTA is an engineering solution provider specializing in Automotive Embedded Engineering, IT Solutions,
                and Product-Based Services. With a strong focus on innovation, reliability, and customer-centric solutions,
                we empower our customers to achieve technological excellence and business transformation.
              </p>
              <p>
                PRAVSTA is committed to delivering cutting-edge solutions that empower businesses with advanced technology
                and strategic expertise. We cater to the global Automotive, IT, and Medical Embedded industries,
                collaborating with OEMs, Tier 1 suppliers, and technology leaders to drive innovation, efficiency,
                and engineering excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Vision Section === */}
      <section className="home-section fade-in">
       
        <div className="intro-row">
          <div className="intro-image-wrapper">
            <img src={visionImage} alt="Vision" className="intro-sub-image" />
          </div>
          <div className="card-grid">
            <div className="info-card">
              <h3>Our Vision</h3>
              <p>
                Our vision is to be a trusted global partner, driving digital transformation and innovation across the automotive,
                IT, and embedded systems. We are committed to a customer-centric approach, ensuring quality, reliability, and excellence
                in execution, while leveraging our expertise to deliver innovative solutions that empower businesses worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
