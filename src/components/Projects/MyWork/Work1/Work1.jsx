import React, { useState } from 'react';
import "./Work1.css";
import EventPlanner from './EventPlanning_Pictures/EventPlanner.png';

function Work1() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="work-container">
      <h2 className="work-title">Event Planning App</h2>
      
      {/* Conditionally render fullscreen view when `isFullscreen` is true */}
      {isFullscreen ? (
        <div className="fullscreen" onClick={toggleFullscreen}>
          <img src={EventPlanner} alt="Event Planner App" className="work-picture-fullscreen" />
        </div>
      ) : (
        <div className="work-image" onClick={toggleFullscreen}>
          <img src={EventPlanner} alt="Event Planner App" className="work-picture" />
        </div>
      )}

      <div className="work-details">
        <p className="work-heading">Description:</p>
        <p className="work-text">
          A responsive web application for managing events, allowing users to send text invites, track responses, and dynamically adjust guest lists within party size limits.
        </p>

        <p className="work-heading">Technologies:</p>
        <span className="Technologies-List">
          <p className="Technologies-Appearance">JavaScript</p>
          <p className="Technologies-Appearance">React</p>
          <p className="Technologies-Appearance">Redux</p>
          <p className="Technologies-Appearance">React-UUID</p>
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

export default Work1;
