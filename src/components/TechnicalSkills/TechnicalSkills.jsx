import React from 'react';
import './TechnicalSkills.css';

function TechnicalSkills() {
  return (
    <div className="container">
      <h2 className='technical-skills-title'>Technical Skills</h2>
      <p className='technical-skills-description'>Below is a list of my skills and my comfortability with them.</p>
      <div className='tech-skills'>
        <h3>Languages</h3>
        <p>Javascript</p>

        <div className='front-back-container'>
          <div className='front-back-column'>
            <h3>Front End</h3>
            <p>HTML</p>
            <p>CSS</p>
            <p>React</p>
            <p>Redux</p>
          </div>
          <div className='front-back-column'>
            <h3>Back End</h3>
            <p>Node.js</p>
            <p>Express.js</p>
            <p>C#</p>
            <p>.NET</p>
          </div>
        </div>

        <h3>Database Management</h3>
        <p>SQL</p>
        <h3>Version Control</h3>
        <p>Git</p>
        <h3>RESTful API</h3>
      </div>
      <div className='more-coming-soon'>
        <p>MORE COMING SOON!</p>
      </div>
    </div>
  );
}

export default TechnicalSkills;
