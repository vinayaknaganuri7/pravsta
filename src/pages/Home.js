import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import './Home.css';

// Images
import introImage from '../components/pages/images/Intr.jpg';
import visionImage from '../components/pages/images/car.jpg';
import iotImage from '../components/pages/images/iot.jpg';
import cockpitImage from '../components/pages/images/sdv.jpg';
import dataToolsImage from '../components/pages/images/data.jpg';
import sapImage from '../components/pages/images/sap.jpg';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <Hero />

      {/* === Introduction, Vision & Commitment Section === */}
      <section className="home-section fade-in">
        <h3 className="home-header">Introduction </h3>
        <div className="tech-grid three-col">
          {/* Introduction Card */}
          <div className="tech-card animate-3d">
            <img src={introImage} alt="Who We Are" className="tech-img" />
            <h4>Introduction</h4>
            <p className="justified">
              At <strong>PRAVSTA</strong>, we deliver cutting-edge engineering and IT solutions tailored to meet the evolving needs of modern enterprises.
              Our core expertise includes <strong>automotive systems</strong>, <strong>embedded technologies</strong>, <strong>cloud computing</strong>, and <strong>enterprise platforms</strong>.
            {/* </p>
            <p className="justified"> */}
              We combine technical excellence with a client-first approach, driving innovation, accelerating digital transformation, and delivering measurable business outcomes.
            </p>
          </div>

          {/* Vision Card */}
          <div className="tech-card animate-3d">
            <img src={visionImage} alt="Vision" className="tech-img" />
            <h4>Our Vision</h4>
            <p className="justified">
              To become a globally trusted technology leader, driving industry transformation through intelligent engineering and next-generation digital solutions.
            </p>
            <p className="justified">
              Guided by integrity and a commitment to excellence, we empower organizations to innovate boldly and thrive in a rapidly evolving digital world.
            </p>
          </div>

          {/* Commitment Card */}
          <div className="tech-card animate-3d">
            <img src={visionImage} alt="Commitment" className="tech-img" />
            <h4>Our Commitment</h4>
            <p className="justified">
              We are dedicated to delivering measurable value through cutting-edge innovation, uncompromising quality, and trusted partnerships — accelerating digital transformation and driving engineering excellence across every project.
            </p>
          </div>
        </div>
      </section>

      {/* === Core Technology Expertise Section === */}
      <section className="home-section fade-in">
        <h3 className="home-header">Our Core Technology Expertise</h3>
        <div className="tech-grid">
          <div className="tech-card animate-3d">
            <img src={iotImage} alt="IoT & Connectivity" className="tech-img" />
            <h4>IoT & Connectivity Testing</h4>
            <ul>
              <li>Bluetooth Functional & Interoperability Testing</li>
              <li>Wi-Fi, 4G, 5G Protocol Validation</li>
              <li>Android Auto & Apple CarPlay Certification</li>
              <li>Device Integration Testing (Smartphones, Wearables)</li>
              <li>End-to-End IoT Ecosystem Testing</li>
            </ul>
          </div>

          <div className="tech-card animate-3d">
            <img src={cockpitImage} alt="SDV Cockpit" className="tech-img" />
            <h4>SDV & Connected Cockpit</h4>
            <ul>
              <li>Digital Instrument Cluster Development</li>
              <li>IVI (In-Vehicle Infotainment) Systems</li>
              <li>Telematics & Connectivity Modules</li>
              <li>Over-the-Air (FOTA/SOTA) Solutions</li>
              <li>ECU Software Development & Validation</li>
            </ul>
          </div>

          <div className="tech-card animate-3d">
            <img src={dataToolsImage} alt="Data Science Tools" className="tech-img" />
            <h4>Data Science & Engineering</h4>
            <ul>
              <li>Data Pipeline & Visualization Solutions</li>
              <li>AI/ML Model Development & Training</li>
              <li>Cloud-native Web & Mobile Apps</li>
              <li>DevOps, CI/CD Implementation</li>
              <li>Custom Dashboards & Analytics</li>
            </ul>
          </div>

          <div className="tech-card animate-3d">
            <img src={sapImage} alt="SAP Solutions" className="tech-img" />
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

