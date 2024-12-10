import React from 'react';
import { Link } from 'react-router-dom';
import './MiniNavMenu.css';

function MiniNavMenu({ isOpen, ChangePageHome, ChangePageProjects, ChangePageContact, ToggleMiniMenu }) {
  return (
    <div className={`DropDownMenu ${isOpen ? 'show' : ''}`}>
      <Link 
        className="Mini-Home" 
        to="/" 
        onClick={() => { 
          ChangePageHome(); 
          ToggleMiniMenu(); 
        }}
      >
        Home
      </Link>

      <Link 
        className="Mini-Projects" 
        to="/Projects" 
        onClick={() => { 
          ChangePageProjects(); 
          ToggleMiniMenu(); 
        }}
      >
        Projects
      </Link>

      <Link 
        className="Mini-Contact" 
        to="/ContactMe" 
        onClick={() => { 
          ChangePageContact(); 
          ToggleMiniMenu(); 
        }}
      >
        Contact Info
      </Link>
    </div>
  );
}

export default MiniNavMenu;
