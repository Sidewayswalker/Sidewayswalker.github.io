import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {

  return (
    <nav className='sidebar close'>
      <header>
          <div className='image-text'>
            <span className='image'>
              <img src='./SK_logo.jpg' alt='logo' />
            </span>

            <div className='header-text'>
              <span className='name'>Steven Karl</span>
              <span className='profession'>Software Engineer</span>
            </div>
          </div>

        <i className='bx bx-chevron-right toggle' onClick={'nav-bar-change'}
        ></i>
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