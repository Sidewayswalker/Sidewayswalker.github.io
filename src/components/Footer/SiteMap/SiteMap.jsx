import React from 'react';
import { Link } from 'react-router-dom';
import './SiteMap.css'; 


function SiteMap() {

  return (
    <div className="SiteMap">
        <p className='SiteMapTitle'>SiteMap</p>

        <div className='SiteMapList'>
          <Link className='SiteMapHome' to='/'>
              <div>Home</div>
          </Link>
          <Link className='SiteMapProjects' to='/Projects'>
              <div>Projects</div>
          </Link>
          <Link className='SiteMapContactMe' to='/ContactMe'>
            <div>Contact Me</div>
          </Link>
        </div>


    </div>
  );
}

export default SiteMap;
