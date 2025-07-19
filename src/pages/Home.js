import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer'; // ✅ Footer added
import './Home.css';
import introImage from '../components/pages/images/Intr.jpg';
import visionImage from '../components/pages/images/car.jpg';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <Hero />

      {/* Introduction Section */}
      <section className="home-section fade-in">
        <div className="intro-row">
          <div className="intro-image-wrapper">
            <img src={introImage} alt="Introduction" className="intro-sub-image" />
          </div>
          <div className="intro-text">
            <h2 className="home-header">Introduction</h2>
            <p className="home-description">
              <strong>PRAVSTA</strong> is an engineering solution provider specializing in Automotive Embedded Engineering, IT Solutions, and Product-Based Services. We focus on innovation, reliability, and customer-centric solutions to empower businesses toward technological excellence.
            </p>
            <p className="home-description">
              Founded in 2025, PRAVSTA delivers advanced technology solutions backed by strategic expertise for business transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="home-section fade-in">
        <div className="intro-row reverse">
          <div className="intro-text">
            <h2 className="home-header">Vision</h2>
            <p className="home-description">
              To be a trusted global partner driving digital transformation and innovation across the automotive, IT, and embedded systems landscape.
            </p>
            <p className="home-description">
              We collaborate with OEMs, Tier 1 suppliers, and tech leaders in global Automotive, IT, and Medical Embedded industries to deliver innovation and engineering excellence.
            </p>
            <p className="home-description">
              Our customer-centric approach emphasizes quality, reliability, and agile execution—enabling scalable solutions for modern business challenges.
            </p>
          </div>
          <div className="intro-image-wrapper">
            <img src={visionImage} alt="Vision" className="intro-sub-image" />
          </div>
        </div>
      </section>

      {/* Our Value Proposition Section */}
      <section className="home-section fade-in value-proposition-section">
        <h2 className="home-header center-text">Our Value Proposition</h2>

        <div className="value-row">
          <div className="value-col">
            <h3>Innovation Programs</h3>
            <p>
              We support and invest in key areas with offerings, ecosystems, and expertise—developing proof of concepts and joint innovation ideas.
            </p>
          </div>
          <div className="value-col">
            <h3>Work Package</h3>
            <p>
              We take full ownership of projects in a <strong>work package</strong> mode with defined <strong>KPIs</strong> and <strong>SLAs</strong> to ensure high performance.
            </p>
          </div>
          <div className="value-col">
            <h3>Managed Services</h3>
            <p>
              We deliver scalable solutions under a <strong>managed service model</strong>, typically on a <strong>Time and Material</strong> basis.
            </p>
          </div>
          <div className="value-col">
            <h3>Resource Augmentation</h3>
            <p>
              We provide experienced engineers or hire-train-deploy talent based on a flexible <strong>rate card</strong> model tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
