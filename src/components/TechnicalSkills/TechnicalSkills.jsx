import React from 'react';

import './TechnicalSkills.css';

function TechnicalSkills() {
  return (
    <div className="container">
      <h2 className='technical-skills-title'>Technical Skills</h2>
      <p className='technical-skills-description'>Below is a list of my skills and my comfotability with them.</p>
          <p>
              <ul>Javascript</ul>
              <ul>React</ul>
              <ul>Redux</ul>
              <ul>Node.js</ul>
              <ul>Express.js</ul>
              <ul>HTML</ul>
              <ul>CSS</ul>
              <ul>SQL</ul>
              <ul>C#</ul>
              <ul>.NET</ul>
              <ul>Git/version control</ul>
              <ul>RESTful API</ul>
          </p>
          <div className='more-coming-soon'>
            <p>MORE COMING SOON!</p>
          </div>
    </div>
  );
}

export default TechnicalSkills;