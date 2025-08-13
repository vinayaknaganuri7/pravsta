import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./Home.css";

// Images & Videos
import iotImage from '../components/pages/images/iot.jpg';
import cockpitVideo from '../components/pages/images/Int.jpg';
import dataToolsImage from '../components/pages/images/datasci.jpeg';
import sapImage from '../components/pages/images/sap.jpg';
import embeddedImage from '../components/pages/images/embedded.jpeg';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Navbar />
      <Hero />

      {/* === Embedded Systems & IoT Solutions === */}
      <section className="embedded-section">
        <div className="embedded-content">
          <div className="embedded-text fade-in">
            <h2>Embedded Systems & IoT Solutions</h2>
            <p>
              <strong>PRAVSTA</strong> is an engineering Solution Provider specializing in
              Automotive Embedded Engineering, IT Solutions, and Product-Based
              Services. With a strong focus on innovation, reliability, and
              customer-centric solutions, we empower our customers to achieve
              technological excellence and business transformation.
              <br /><br />
              We are committed to delivering cutting-edge solutions that empower
              businesses with advanced technology and strategic expertise.
              Our team serves the global Automotive, IT, and Medical Embedded
              industries, collaborating with OEMs, Tier 1 suppliers, and technology
              leaders to drive innovation, efficiency, and engineering excellence.
            </p>
            <ul>
              <li>✔ Real-time embedded software development</li>
              <li>✔ Hardware integration & optimization</li>
              <li>✔ IoT device connectivity & cloud integration</li>
              <li>✔ Safety-critical & secure firmware solutions</li>
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="embedded-image">
            <img src={embeddedImage} alt="Embedded Systems" />
>>>>>>> 04cd09e (video)
          </div>
        </div>
      </section>

      {/* === Core Technology Expertise === */}
      <section className="home-section tech-section">
        <h3 className="home-header fade-in">Our Core Technology Expertise</h3>
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
            <img src={cockpitVideo} alt="SDV & Connected Cockpit" className="tech-img" />
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
