import React from 'react';
import "./Work2.css";
import HCD from './HCD_Pictures/HCD_Login_Big.png';

function Work2() {
  return (
    <div className="work-container">
      <h2 className="work-title">House Checkup Digital</h2>
      <div className="work-image">
        <img src={HCD} alt="House Checkup Digital Home" className="work-picture" />
      </div>
      <div className="work-details">
        <p className="work-heading">Description:</p>
        <p className="work-text">
          A client-focused application for scheduling and documenting home maintenance. It ensures efficient data handling, seamless server-client communication, and responsive, user-friendly designs.
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

export default Work2;
