import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './pages/images/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const menuRef = useRef(null);
  const servicesRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        servicesRef.current &&
        !servicesRef.current.contains(e.target)
      ) {
        closeMenus();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      {/* === Left side logo + company === */}
      <div className="navbar-left">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Company Logo" className="logo-image" />
          <span className="company-name">
            PRAVSTA TECHNOLOGY PRIVATE LIMITED
          </span>
        </Link>
      </div>

      {/* === Hamburger for mobile === */}
      <div className="menu-button-wrapper" onClick={toggleMenu}>
        <span className="menu-icon">&#9776;</span>
      </div>

      {/* === Nav Links === */}
      <ul
        className={`navbar-links ${isMenuOpen ? 'active' : ''}`}
        ref={menuRef}
      >
        <li><Link to="/" onClick={closeMenus}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenus}>About</Link></li>

        {/* Dropdown */}
        <li className="services-dropdown" ref={servicesRef}>
          <span className="dropdown-toggle" onClick={toggleServices}>
            Industries
          </span>
          {isServicesOpen && (
            <ul className="dropdown-menu">
              <li><Link to="/services/automotive" onClick={closeMenus}>Automotive</Link></li>
              <li><Link to="/services/embedded" onClick={closeMenus}>Medical</Link></li>
              <li><Link to="/services/it" onClick={closeMenus}>Industrial Machine</Link></li>
              <li><Link to="/services/ai" onClick={closeMenus}>IT</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/contact" onClick={closeMenus}>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
