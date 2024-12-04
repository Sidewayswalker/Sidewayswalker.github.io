import React from 'react';
import './Footer.css';
import SiteMap from './SiteMap/SiteMap';
import SocialMedia from './SocialMedia/SocialMedia';
import CompanyQuote from './CompanyQuote/CompanyQuote';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <footer> 
      <span className='Footer-Main'>
        <SiteMap />
        <SocialMedia />
        <CompanyQuote />
      </span>

      <div>
        @2024 Steven Karl
      </div>

    </footer>
  )
}

export default Footer;