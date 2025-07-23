import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './pages/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navRef = useRef(); // reference to the entire nav

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen(prev => !prev);
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  // 🔒 Auto close menus if click is outside nav
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeMenus();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar" ref={navRef}>
      <div className="navbar-left">
        <Link to="/" className="logo-link" onClick={closeMenus}>
          <img src={logo} alt="Logo" className="logo-image" />
          <span className="company-name">PRAVSTA TECHNOLOGY PRIVATE LIMITED</span>
        </Link>

        <div className="menu-button-wrapper" onClick={toggleMenu}>
          <span className="menu-text">Menu</span>
          <div className="navbar-hamburger">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>

      <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link className="navbar-link" to="/" onClick={closeMenus}>Home</Link></li>
        <li><Link className="navbar-link" to="/about" onClick={closeMenus}>About</Link></li>

     

        <li><Link className="navbar-link" to="/contact" onClick={closeMenus}>Contact</Link></li>

           <li className="dropdown">
          <span className="navbar-link" onClick={toggleServices}>Services</span>
          {isServicesOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/services/automotive" onClick={closeMenus}>Automotive</Link></li>
              <li><Link to="/services/embedded" onClick={closeMenus}>Embedded Systems</Link></li>
              <li><Link to="/services/it" onClick={closeMenus}>IT & Cloud</Link></li>
              <li><Link to="/services/ai" onClick={closeMenus}>AI & Data Science</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
