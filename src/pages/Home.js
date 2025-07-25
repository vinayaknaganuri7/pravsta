import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import './Home.css';
import introImage from '../components/pages/images/Intr.jpg';
import visionImage from '../components/pages/images/car.jpg';

// Updated image icons
import iotImage from '../components/pages/images/Intr.jpg';
import cockpitImage from '../components/pages/images/Intr.jpg';
import dataToolsImage from '../components/pages/images/Intr.jpg';
import sapImage from '../components/pages/images/Intr.jpg';

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
                PRAVSTA is a forward-thinking engineering and IT services provider, delivering tailored solutions across
                automotive, embedded systems, cloud, and enterprise platforms. We focus on enabling technological growth
                through deep domain expertise and a passion for innovation.
              </p>
              <p>
                Our client-first approach and global delivery model help organizations enhance performance,
                accelerate product development, and scale efficiently in a digital world.
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
                To be a global technology leader, transforming industries through smart engineering and intelligent digital
                solutions. We aim to drive innovation in every line of code, every embedded system, and every connected vehicle.
              </p>
              <p>
                With a strong foundation in integrity and engineering excellence, we help businesses embrace the future with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === Core Technology Expertise Section === */}
      <section className="home-section fade-in">
        <h3 className="home-header">Our Core Technology Expertise</h3>
        <div className="tech-grid">

          {/* === IoT & Connectivity === */}
          <div className="tech-card">
            <img src={iotImage} alt="IoT & Connectivity" />
            <h4>IoT & Connectivity Testing</h4>
            <ul>
              <li>Bluetooth Functional & Interoperability Testing</li>
              <li>Wi-Fi, 4G, 5G Protocol Validation</li>
              <li>Android Auto & Apple CarPlay Certification</li>
              <li>Device Integration Testing (Smartphones, Wearables)</li>
              <li>End-to-End IoT Ecosystem Testing</li>
            </ul>
          </div>

          {/* === SDV & Cockpit === */}
          <div className="tech-card">
            <img src={cockpitImage} alt="SDV Cockpit" />
            <h4>SDV & Connected Cockpit</h4>
            <ul>
              <li>Digital Instrument Cluster Development</li>
              <li>IVI (In-Vehicle Infotainment) Systems</li>
              <li>Telematics & Connectivity Modules</li>
              <li>Over-the-Air (FOTA/SOTA) Solutions</li>
              <li>ECU Software Development & Validation</li>
            </ul>
          </div>

          {/* === Data Science & Tools === */}
          <div className="tech-card">
            <img src={dataToolsImage} alt="Data Science Tools" />
            <h4>Data Science & Engineering</h4>
            <ul>
              <li>Data Pipeline & Visualization Solutions</li>
              <li>AI/ML Model Development & Training</li>
              <li>Cloud-native Web & Mobile Apps</li>
              <li>DevOps, CI/CD Implementation</li>
              <li>Custom Dashboards & Analytics</li>
            </ul>
          </div>

          {/* === SAP Services === */}
          <div className="tech-card">
            <img src={sapImage} alt="SAP Enterprise" />
            <h4>SAP & Enterprise Solutions</h4>
            <ul>
              <li>Real Estate Data Migration (RE-FX, FI)</li>
              <li>Custom ABAP/OO Programming</li>
              <li>SAP Basis Administration</li>
              <li>Functional Support (FI, SD, MM)</li>
              <li>SAP BTP & Integration Scenarios</li>
            </ul>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
