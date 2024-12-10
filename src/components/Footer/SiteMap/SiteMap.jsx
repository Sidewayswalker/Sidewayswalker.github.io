import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './SiteMap.css';

function SiteMap() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

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
