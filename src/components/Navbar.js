import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './pages/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServicesMobile = () => {
    if (window.innerWidth <= 768) {
      setIsServicesOpen(!isServicesOpen);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Company Logo" className="logo-image" />
          <span className="company-name">PRAVSTA TECHNOLOGY PRIVATE LIMITED</span>
        </Link>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/about" className="navbar-link">About Us</Link></li>

        <li 
          className="dropdown"
          onMouseEnter={() => window.innerWidth > 768 && setIsServicesOpen(true)}
          onMouseLeave={() => window.innerWidth > 768 && setIsServicesOpen(false)}
        >
          <span className="navbar-link" onClick={toggleServicesMobile}>
            Services ▾
          </span>
          {isServicesOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/services/automotive">Automotive Services</Link></li>
              <li><Link to="/services/ai-data">AI & Data Services</Link></li>
              <li><Link to="/services/sap">SAP Services</Link></li>
              <li><Link to="/services/web-mobile">Web & Mobile Development Services</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
      </ul>

      <button className="cta-button">Get in Touch</button>

      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
