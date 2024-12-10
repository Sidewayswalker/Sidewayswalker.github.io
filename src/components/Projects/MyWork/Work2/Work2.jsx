import React, { useState } from 'react';
import "./Work2.css";
import HCD from './HCD_Pictures/HCD_Login_Big.png';

function Work2() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="work-container">
      <h2 className="work-title">House Checkup Digital</h2>
      
      {/* Conditionally render fullscreen view when `isFullscreen` is true */}
      {isFullscreen ? (
        <div className="fullscreen" onClick={toggleFullscreen}>
          <img src={HCD} alt="House Checkup Digital Home" className="work-picture-fullscreen" />
        </div>
      ) : (
        <div className="work-image" onClick={toggleFullscreen}>
          <img src={HCD} alt="House Checkup Digital Home" className="work-picture" />
        </div>
      )}

      <div className="work-details">
        <p className="work-heading">Description:</p>
        <p className="work-text">
          A client-focused application for scheduling and documenting home maintenance. It ensures efficient data handling, seamless server-client communication, and responsive, user-friendly designs.
        </p>

        <p className="work-heading">Technologies:</p>
        <span className="Technologies-List">
          <p className="Technologies-Appearance">JavaScript</p>
          <p className="Technologies-Appearance">React</p>
          <p className="Technologies-Appearance">Redux</p>
          <p className="Technologies-Appearance">Material UI</p>
          <p className="Technologies-Appearance">SASS</p>
          <p className="Technologies-Appearance">Node.js</p>
          <p className="Technologies-Appearance">Express</p>
          <p className="Technologies-Appearance">Passport</p>
          <p className="Technologies-Appearance">Bcrypt.js</p>
          <p className="Technologies-Appearance">PostgreSQL</p>
          <p className="Technologies-Appearance">Axios</p>
          <p className="Technologies-Appearance">Dotenv</p>
          <p className="Technologies-Appearance">Vite</p>
        </span>
      </div>
    </div>
  );
}

export default Work2;
