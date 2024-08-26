import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import logo from '../../../sklogo.jpg';

function Nav() {
  // State to manage whether the sidebar is closed or not
  const [isClosed, setIsClosed] = useState(false);

  // Function to toggle the sidebar's closed state
  const handleToggleClick = () => {
    setIsClosed((prevState) => !prevState);
  };

  return (
    // Dynamically set the class name based on the isClosed state
    <nav className={`sidebar ${isClosed ? 'close' : ''}`}>
      <header>
        <div className='image-text'>
          <span className='image'>
            <img src={logo} alt='logo' />
          </span>

          <div className='header-text'>
            <span className='name'>Steven Karl</span>
            <span className='profession'>Software Engineer</span>
          </div>
        </div>

        {/* Correctly assign the onClick handler without quotes */}
        <i className='bx bx-chevron-left toggle' onClick={handleToggleClick}></i>
      </header>

      <div className='menu-bar'>
        <div className='menu'>
          <ul className='group-nav-link'>
            <li>
              <Link className='navLink' to='/'>
                <i className='bx bx-home icon'></i>
                <span className='text nav-text'>Home</span>
              </Link>
            </li>
            <li>
              <Link className='navLink' to='/ProjectBoard'>
                <i className='bx bx-clipboard icon'></i>
                <span className='text nav-text'>Project Board</span>
              </Link>
            </li>
            <li>
              <Link className='navLink' to='/LearningGrowth'>
                <i className='bx bx-trending-up icon'></i>
                <span className='text nav-text'>Learning & Growth</span>
              </Link>
            </li>
            <li>
              <Link className='navLink' to='/TechnicalSkills'>
                <i className='bx bx-data icon'></i>
                <span className='text nav-text'>Technical Skills</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
