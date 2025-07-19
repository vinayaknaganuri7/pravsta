import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './pages/images/logo.png'; // adjust the path if needed

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Company Logo" className="logo-image" />
          <span className="company-name">PRAVSTA TECHNOLOGY PRIVATE LIMITED</span>
        </Link>
      </div>

      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" className="navbar-link">Home</Link></li> 
        <li><Link to="/about" className="navbar-link">About Us</Link></li>
        <li><Link to="/services" className="navbar-link">Services</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
      </div>

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
