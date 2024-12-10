import React, { useState } from 'react';
import "./Work3.css";
import MyWebsite from './MyWebsite_Pictures/MyWebsite.png';
import Duck from './MyWebsite_Pictures/Duck.jpg';

function Work3() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentImage, setCurrentImage] = useState(MyWebsite); // Track the current image

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen); // Toggle fullscreen
    // Change image when toggling to fullscreen
    if (isFullscreen) {
      setCurrentImage(MyWebsite); // When going back to the original, show MyWebsite
    } else {
      setCurrentImage(Duck); // When fullscreen, show Duck image
    }
  };

  return (
    <div className="work-container">
      <h2 className="work-title">My Website</h2>

      {/* Normal image with click handler */}
      <div className="work-image" onClick={toggleFullscreen}>
        <img src={MyWebsite} alt="My Website" className="work-picture" />
      </div>

      {/* Fullscreen view when `isFullscreen` is true */}
      {isFullscreen && (
        <div className="fullscreen" onClick={toggleFullscreen}>
            <p className="fullscreen-text">You're already on my</p>
          <img src={currentImage} alt="Fullscreen View" className="work-picture-fullscreen" />
          {currentImage === Duck && (
            <p className="fullscreen-text">Website</p>
          )}
        </div>
      )}

      <div className="work-details">
        <p className="work-heading">Description:</p>
        <p className="work-text">
          My portfolio website showcases my skills, experience, and projects, allowing me to demonstrate my technical expertise and share my problem-solving approach with potential employers or clients.
        </p>

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
