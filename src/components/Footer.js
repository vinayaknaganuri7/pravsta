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
            <li><a href="/About">Our Story</a></li>
            <li><a href="/About">Vision & Mission</a></li>
            <li><a href="/About">Leadership</a></li>
            <li><a href="/About">Careers</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Solutions</h4>
          <ul>
            <li><a href="#automotive">Automotive</a></li>
            <li><a href="#embedded-systems">Embedded Systems</a></li>
            <li><a href="#it-cloud">IT & Cloud</a></li>
            <li><a href="#ai-data">AI & Data Science</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="footer-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/pravsta" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>

        <div className="footer-col address-col">
          <h4>📍 Address</h4>
          <p>
             <p><strong>PRAVSTA TECHNOLOGY PRIVATE LIMITED</strong></p>
                <p>
                  4<sup>th</sup> Floor, Balaji Business Center,<br />
                  Pune-Mumbai Highway (NH 4),<br />
                  Next to Hotel Spice Court, Baner,<br />
                  Pune, Maharashtra – 411045
                </p>
          </p>
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
