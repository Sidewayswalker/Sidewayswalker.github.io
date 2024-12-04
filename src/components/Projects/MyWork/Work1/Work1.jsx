import React from 'react';
import "./Work1.css";
import EventPlanner from './EventPlanning_Pictures/EventPlanner.png';

function Work1() {
  return (
    <div className="work-container">
      <h2 className="work-title">Event Planning App</h2>
      <div className="work-image">
        <img src={EventPlanner} alt="Event Planner App" className="work-picture" />
      </div>

      <div className="work-details">
        <p className="work-heading">Description:</p>
        <p className="work-text">
          A responsive web application for managing events, allowing users to send text invites, track responses, and dynamically adjust guest lists within party size limits.
        </p>

        <p className="work-heading">Technologies:</p>
        <span className='Technologies-List'>
          <p className='Technologies-Appearance'></p>
          <p className='Technologies-Appearance'></p>
          <p className='Technologies-Appearance'></p>
          <p className='Technologies-Appearance'></p>
          <p className='Technologies-Appearance'></p>
          <p className='Technologies-Appearance'></p>
        </span>
      </div>
    </div>
  );
}

export default Work1;
