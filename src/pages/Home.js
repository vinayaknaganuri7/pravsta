import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./Home.css";

// Images
import embeddedImage from "../components/pages/images/embedded.jpeg";
import iotImage from "../components/pages/images/iot.jpg";
import dataToolsImage from "../components/pages/images/datasci.jpeg";

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* === Navbar + Hero === */}
      <Navbar />
      <Hero />

      {/* === Company Intro + Stats Section === */}
      <section className="company-section">
        <div className="company-left">
          <h2>
            PRAVSTA – World Leading OS and Intelligent Device
            Products and Technology Provider
          </h2>
          <hr />
          <p>
            Since our inception, <strong>PRAVSTA</strong> has consistently
            focused on creating innovative technology solutions across
            automotive, embedded systems, cloud, and AI. Our mission is to
            deliver smart, scalable, and impactful solutions for a connected
            future.
          </p>
        </div>

        <div className="company-right">
          <div className="stats-box">
            <div className="stat">
              <h3>50M+</h3>
              <p>Smart Vehicles</p>
            </div>
            <div className="stat">
              <h3>900M+</h3>
              <p>Smartphones</p>
            </div>
            <div className="stat">
              <h3>60M+</h3>
              <p>IoT Devices</p>
            </div>
          </div>
          <p className="powered">
            Powered by PRAVSTA Technologies and Products
          </p>
        </div>
      </section>

      {/* === Image Section === */}
      <section className="company-images">
        <img src={embeddedImage} alt="Embedded Systems" />
        <img src={iotImage} alt="IoT Solutions" />
        <img src={dataToolsImage} alt="Data Tools" />
      </section>

      {/* === Footer === */}
      <Footer />
    </div>
  );
};

export default Home;
