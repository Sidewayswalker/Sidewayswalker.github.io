import React, { useState } from 'react';
import "./Work5.css";
import CarMenu from '../Work5/CarRacePics/CarMenu.png' 

function Work5() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="work-container">
      <h2 className="work-title">Car Racing</h2>

      {/* Conditionally render fullscreen view when `isFullscreen` is true */}
      {isFullscreen ? (
        <div className="fullscreen" onClick={toggleFullscreen}>
          <img 
            src={CarMenu} 
            alt="Car Racing Game Menu" 
            className="work-picture-fullscreen" 
          />
        </div>
      ) : (
        <div className="work-image" onClick={toggleFullscreen}>
          <img 
            src={CarMenu} 
            alt="Car Racing Game Menu" 
            className="work-picture" 
          />
        </div>
      )}

      <div className="work-details">
        <p className="work-heading">Description:</p>
        <p className="work-text">
        This project is an interactive car racing game where I designed the car using Blender and am programming its movements and interactivity directly within a browser-based environment.
        </p>

        <p className="work-heading">Technologies:</p>
        <span className="Technologies-List">
          <p className="Technologies-Appearance">JavaScript</p>
          <p className="Technologies-Appearance">React</p>
          <p className="Technologies-Appearance">CSS</p>
          <p className="Technologies-Appearance">Vite</p>
          <p className="Technologies-Appearance">Three.js</p>
          <p className="Technologies-Appearance">React-three/fiber</p>
          <p className="Technologies-Appearance">React-three/drei</p>
          <p className="Technologies-Appearance">GSAP</p>
          <p className="Technologies-Appearance">Blender</p>
        </span>
      </div>
    </div>
  );
}

export default Work5;
