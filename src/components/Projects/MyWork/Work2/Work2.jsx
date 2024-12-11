import React, { useState } from 'react';
import "./Work2.css";
import HCD from './HCD_Pictures/HCD_LOGO.png';
import HCD0 from './HCD_Pictures/HCD_Login.png';
import HCD1 from './HCD_Pictures/1HCD_home.png';
import HCD2 from './HCD_Pictures/2HCD_intake.png';
import HCD3 from './HCD_Pictures/3HCD_Intake_Furnace.png';
import HCD4 from './HCD_Pictures/4HCD_Maintenance_Tracking.png';
import HCD5 from './HCD_Pictures/5HCD_Helpful_Videos.png';
import HCD6 from './HCD_Pictures/6HCD_Devices_List.png';
import HCD7 from './HCD_Pictures/7HCD_MiniMenu_Resources.png';
import HCD8 from './HCD_Pictures/8HCD_Resources.png';
import HCD9 from './HCD_Pictures/9HCD_MiniMenu_About.png';
import HCD10 from './HCD_Pictures/10HCD_About.png';

function Work2() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images to cycle through in fullscreen mode
  const images = [
    HCD0, HCD1, HCD2, HCD3, HCD4, HCD5, HCD6, HCD7, HCD8, HCD9, HCD10
  ];

  // Toggle fullscreen view
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  // Go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="work-container">
      <h2 className="work-title">House Checkup Digital</h2>

      {/* Normal image with click handler */}
      <div className="work-image" onClick={toggleFullscreen}>
        <img src={HCD} alt="House Checkup Digital" className="work-picture" />
      </div>

      {/* Fullscreen view when `isFullscreen` is true */}
      {isFullscreen && (
        <div className="fullscreen">
          <img
            src={images[currentIndex]}
            alt={`Fullscreen View ${currentIndex + 1}`}
            className="work-picture-fullscreen"
          />
          <div className="fullscreen-controls">
            <button className="fullscreen-button" onClick={prevImage}>Back</button>
            <button className="fullscreen-button-close" onClick={toggleFullscreen}>Close</button>
            <button className="fullscreen-button" onClick={nextImage}>Next</button>
          </div>
        </div>
      )}

      <div className="work-details">
        <p className="work-heading">Description:</p>
        <p className="work-text">
          A client-focused application for scheduling and documenting home maintenance. It ensures efficient data handling, seamless server-client communication, and responsive, user-friendly designs.
        </p>

        <p className="work-heading">Technologies:</p>
        <div className="Technologies-List">
          <span className="Technologies-Appearance">JavaScript</span>
          <span className="Technologies-Appearance">React</span>
          <span className="Technologies-Appearance">Redux</span>
          <span className="Technologies-Appearance">Material UI</span>
          <span className="Technologies-Appearance">SASS</span>
          <span className="Technologies-Appearance">Node.js</span>
          <span className="Technologies-Appearance">Express</span>
          <span className="Technologies-Appearance">Passport</span>
          <span className="Technologies-Appearance">Bcrypt.js</span>
          <span className="Technologies-Appearance">PostgreSQL</span>
          <span className="Technologies-Appearance">Axios</span>
          <span className="Technologies-Appearance">Dotenv</span>
          <span className="Technologies-Appearance">Vite</span>
        </div>
      </div>
    </div>
  );
}

export default Work2;
