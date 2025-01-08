import React, { useState } from 'react';
import "./Work1.css";
import EventPlanner from './EventPlanning_Pictures/EventPlanner.png';
import EventPlan1 from './EventPlanning_Pictures/EventPlan1.png';
import EventPlan2 from './EventPlanning_Pictures/EventPlan2.png';
import EventPlan3 from './EventPlanning_Pictures/EventPlan3.png';
import EventPlan4 from './EventPlanning_Pictures/EventPlan4.png';
import EventPlan5 from './EventPlanning_Pictures/EventPlan5.png';

function Work1() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images to cycle through in fullscreen mode
  const images = [
    EventPlan1, EventPlan2, EventPlan3, EventPlan4, EventPlan5
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
      <h2 className="work-title">Event Planning App</h2>

      {/* Normal image with click handler */}
      <div className="work-image" onClick={toggleFullscreen}>
        <img src={EventPlanner} alt="Event Planner App" className="work-picture" />
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
          A responsive web application for managing events, allowing users to send text invites, track responses, and dynamically adjust guest lists within party size limits.
        </p>

        <p className="work-heading">Technologies:</p>
        <div className="Technologies-List">
          <span className="Technologies-Appearance">JavaScript</span>
          <span className="Technologies-Appearance">React</span>
          <span className="Technologies-Appearance">Redux</span>
          <span className="Technologies-Appearance">React-UUID</span>
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

export default Work1;
