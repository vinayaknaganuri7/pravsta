import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
      <div className="navbar-logo">
        <Link to="/" className="logo-link">PRAVSTA</Link>
      </div>
      
      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" className="navbar-link">Home</Link></li>
        <li><Link to="/about" className="navbar-link">About Us</Link></li>
        <li><Link to="/services" className="navbar-link">Services</Link></li>
        <li><Link to="/projects" className="navbar-link">Projects</Link></li>
        <li><Link to="/contact" className="navbar-link">Contact</Link></li>
      </ul>

      <button className="cta-button">Get in Touch</button>

      {/* Mobile Hamburger Menu */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
