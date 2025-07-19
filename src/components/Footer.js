import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>About PRAVSTA</h4>
          <ul>
            <li>Our Story</li>
            <li>Vision & Mission</li>
            <li>Leadership</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li>Automotive</li>
            <li>Embedded Systems</li>
            <li>IT & Cloud</li>
            <li>AI & Data Science</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Contact Us</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-icons">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} PRAVSTA TECHNOLOGY PRIVATE LIMITED. All rights reserved.
        <div className="footer-note">Confidential & Proprietary</div>
      </div>
    </footer>
  );
};

export default Footer;
