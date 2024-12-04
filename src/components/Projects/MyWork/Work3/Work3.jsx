import React from 'react';
import "./Work3.css";
import MyWebsite from './MyWebsite_Pictures/MyWebsite.png';

function Work3() {
  return (
    <div className="work-container">
      <h2 className="work-title">My Website</h2>
      <div className="work-image">
        <img src={MyWebsite} alt="My Website" className="work-picture" />
      </div>
      
      <div className="work-details">
        <p className="work-heading">Description:</p>
        <p className="work-text">My portfolio website showcases my skills, experience, and projects, allowing me to demonstrate my technical expertise and share my problem-solving approach with potential employers or clients.</p>

        <p className="work-heading">Technologies:</p>
        <span className="Technologies-List">
          <p className="Technologies-Appearance">JavaScript</p>
          <p className="Technologies-Appearance">React</p>
          <p className="Technologies-Appearance">CSS</p>
          
          <p className="Technologies-Appearance">Redux</p>
          <p className="Technologies-Appearance">Express</p>
          
          <p className="Technologies-Appearance">Vite</p>
          <p className="Technologies-Appearance">Google Analytics</p>
        </span>

      </div>
    </div>
  );
}

export default Work3;
