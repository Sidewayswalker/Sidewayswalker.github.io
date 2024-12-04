import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Nav.css';
import sklogo from '../../../sklogo.jpg';
import MiniNavMenu from './MiniNavMenu/MiniNavMenu';


function Nav() {
  const [CurrentPage, setCurrentPage] = useState(0);
  const [MiniMenuStatus, setMiniMenuStatus] = useState(false);


  //* Home is '0'
  function ChangePageHome() {
    if (CurrentPage === '0') {  // Use === for comparison
      console.log('Already 0');
      return;
    } else {
      setCurrentPage('0');  // Corrected assignment
      console.log('0');
      return;
    }
  }
  
  //* Projects is '1'
  function ChangePageProjects() {
    if (CurrentPage === '1') {  // Use === for comparison
      console.log('Already 1');
      return;
    } else {
      setCurrentPage('1');  // Corrected assignment
      console.log('1');
      return;
    }
  }
  
  //* Contact is '2'
  function ChangePageContact() {
    if (CurrentPage === '2') {  // Use === for comparison
      console.log('Already 2');
      return;
    } else {
      setCurrentPage('2');  // Corrected assignment
      console.log('2');
      return;
    }
  }
  
  //* MiniMenu Open/Close
  function ToggleMiniMenu() {
    setMiniMenuStatus(prevStatus => !prevStatus);
    console.log(MiniMenuStatus); 
  }





  return (
    <div >
      
      <div className='Nav-Body'>
        <Link className='Nav-Logo-Link' to='/' onClick={ChangePageHome} >
          <img src={sklogo} alt="Logo" className="Nav-Logo" />
        </Link>

        <div className='Nav-Name-Title'>
          <Link className='Name-Title-Link' to='/' onClick={ChangePageHome}>
          <h1>Steven Karl</h1>
          <h2>Software Engineer</h2>
          </Link>
        </div>

        <div className='Responsive-Links'>
          <div className='Big-Links'>
            {/* Make sure these Links correctly reference the routes */}
            <Link className='Big-Link' to='/Projects' onClick={ChangePageProjects}>
              <div className='Nav-Projects'>Projects</div>
            </Link>
            <Link className='Big-Link' to='/ContactMe' onClick={ChangePageContact}>
            <div className='Nav-ContactMe'>Contact Me</div>
            </Link>
          </div>

          <div className={`Small-Links Highlighted-Background ${ MiniMenuStatus ? 'Rotated' : ''}`} onClick={ToggleMiniMenu} >
            <i className="bx bx-menu"></i>
          </div>

        </div>
      </div>


      <div>
      {/* {MiniMenuStatus && <MiniNavMenu />} */}
      <MiniNavMenu 
        className={MiniMenuStatus ? 'SlideDown' : 'SlideUp'} 
        ChangePageHome={ChangePageHome} 
        ChangePageProjects={ChangePageProjects} 
        ChangePageContact={ChangePageContact} 
        ToggleMiniMenu={ToggleMiniMenu} 
      />

      </div>


    </div>
  );
}

export default Nav;
