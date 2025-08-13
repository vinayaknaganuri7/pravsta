import React from "react";
import "./Hero.css";
import videoSrc from "../components/pages/Video/bck.mp4"; // adjust path

const Home = () => {
  return (
    <div className="home-wrapper">
      
      {/* Video Section with Overlay & Text */}
      <section className="video-section">
        <video className="responsive-video" autoPlay loop muted playsInline>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        {/* Dark Overlay */}
        <div className="video-overlay"></div>

        {/* Centered Text */}
        <div className="video-content">
          <h1>PRAVSTA TECHNOLOGY PRIVATE LIMITED</h1>
          <p>Innovating the Future of Automotive, Embedded, IT & AI Solutions</p>
        </div>
      </section>

    </div>
  );
};

export default Home;
