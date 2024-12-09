import React from 'react';
import { Link } from 'react-router-dom';
import './SiteMap.css'; 


function SiteMap() {

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="SiteMap">
        <p className='SiteMapTitle'>SiteMap</p>

        <div className='SiteMapList'>
          <Link className='SiteMapHome' to='/' onClick={scrollToTop}>
              <div>Home</div>
          </Link>
          <Link className='SiteMapProjects' to='/Projects' onClick={scrollToTop}>
              <div>Projects</div>
          </Link>
          <Link className='SiteMapContactMe' to='/ContactMe' onClick={scrollToTop}>
            <div>Contact Me</div>
          </Link>
        </div>


    </div>
  );
}

export default SiteMap;
