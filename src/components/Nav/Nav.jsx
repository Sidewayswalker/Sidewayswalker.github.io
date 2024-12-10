import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import sklogo from '../../../sklogo.jpg';
import MiniNavMenu from './MiniNavMenu/MiniNavMenu';

function Nav() {
  const [isMiniMenuOpen, setMiniMenuStatus] = useState(false);

  // Toggle the mini menu visibility
  const toggleMiniMenu = () => {
    setMiniMenuStatus((prevStatus) => !prevStatus);
  };

  // Scroll to the top smoothly when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Navigation Bar */}
      <div className="Nav-Body">
        {/* Logo */}
        <Link className="Nav-Logo-Link" to="/" onClick={scrollToTop}>
          <img src={sklogo} alt="Logo" className="Nav-Logo" />
        </Link>

        {/* Name and Title */}
        <div className="Nav-Name-Title">
          <Link className="Name-Title-Link" to="/" onClick={scrollToTop}>
            <h1>Steven Karl</h1>
            <h2>Software Engineer</h2>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="Responsive-Links">
          {/* Small Screen Menu Icon */}
          <div
            className="Small-Links Highlighted-Background"
            onClick={toggleMiniMenu}
          >
            <i className="bx bx-menu"></i>
          </div>

          {/* Big Screen Links */}
          <Link className="Big-Links" to="/Projects" onClick={scrollToTop}>
            <div className="Nav-Projects">Projects</div>
          </Link>
          <Link className="Big-Links" to="/ContactMe" onClick={scrollToTop}>
            <div className="Nav-ContactMe">Contact Me</div>
          </Link>
        </div>
      </div>

      {/* Mini Navigation Menu */}
      <MiniNavMenu
        isOpen={isMiniMenuOpen}
        ChangePageHome={scrollToTop}
        ChangePageProjects={scrollToTop}
        ChangePageContact={scrollToTop}
        ToggleMiniMenu={toggleMiniMenu}
      />
    </div>
  );
}

export default Nav;
