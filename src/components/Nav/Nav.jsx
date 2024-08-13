import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <div className="menu-bar">
        <Link to="/home">
          <div className='title_profession_box'>
            <h2 className="nav-title">Steven Karl</h2>
            <h2 className="nav-profession">Software Engineer</h2>
          </div>
        </Link>
        
        {/*
        <div>
          {!user.id ? (
            <Link className="navLink" to="/login_register">
              Login / Register
            </Link>
          ) : (
            <>
              <Link className="navLink" to="/user">
                Home
              </Link>
              <Link className="navLink" to="/info">
                Info Page
              </Link>
              <LogOutButton className="navLink" />
            </>
          )}
        </div>
        */}

        <div className="menu">
          <ul>
            <li>
              <Link className="navLink" to="/">
                <i className="bx bx-home icon"></i>
                <span className="text nav-text">Home</span>
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/ProjectBoard">
                <i className="bx bx-clipboard icon"></i>
                <span className="text nav-text">Project Board</span>
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/LearningGrowth">
                <i className="bx bx-trending-up icon"></i>
                <span className="text nav-text">Learning & Growth</span>
              </Link>
            </li>
            <li>
              <Link className="navLink" to="/TechnicalSkills">
                <i className="bx bx-data icon"></i>
                <span className="text nav-text">Technical Skills</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
