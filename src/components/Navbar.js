import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './pages/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleServicesMobile = () => {
    if (window.innerWidth <= 768) {
      setIsServicesOpen(!isServicesOpen);
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-top">
        <Link to="/" className="logo-link" onClick={handleLinkClick}>
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="company-name">PRAVSTA TECHNOLOGY PRIVATE LIMITED</span>
        </Link>

        <div className="navbar-hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" className="navbar-link" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/about" className="navbar-link" onClick={handleLinkClick}>About Us</Link></li>
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
              <li><Link to="/services/automotive" onClick={handleLinkClick}>Automotive Services</Link></li>
              <li><Link to="/services/ai-data" onClick={handleLinkClick}>AI & Data Services</Link></li>
              <li><Link to="/services/sap" onClick={handleLinkClick}>SAP Services</Link></li>
              <li><Link to="/services/web-mobile" onClick={handleLinkClick}>Web & Mobile Development</Link></li>
            </ul>
          )}
        </li>
        <li><Link to="/contact" className="navbar-link" onClick={handleLinkClick}>Contact</Link></li>
        <li><button className="cta-button" onClick={handleLinkClick}>Get in Touch</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
