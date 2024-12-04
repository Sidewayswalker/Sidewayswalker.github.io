import React from 'react';
import { Link } from 'react-router-dom';
import './SocialMedia.css'; 


function SocialMedia() {

  return (
    <div className="SocialMedia">
        <p className='SocialMediaTitle'>Media</p>


        <div className='SocialMediaList'>
          <a 
            className='SocialMediaGithub'
            href="https://github.com/Sidewayswalker" 
            target='_blank' 
            rel="noopener noreferrer">Github</a>
          <a 
            className='SocialMediaLinkedIn'
            href="https://www.linkedin.com/in/steven-karl/" 
            target='_blank' 
            rel="noopener noreferrer">LinkedIn</a>

          <a 
            className='SocialMediaInstagram'
            href="https://www.instagram.com/" 
            target='_blank' 
            rel="noopener noreferrer">Instagram</a>
          <a 
            className='SocialMediaEmail'
            href="mailto:SAKarl09@outlook.com" 
            target='_blank' 
            rel="noopener noreferrer">Email</a>
        </div>

    </div>
  );
}

export default SocialMedia;
