import React from 'react';
import './TechnicalSkills.css';

function TechnicalSkills() {
  return (
    <div className="container">
      <h2 className='technical-skills-title'>Technical Skills</h2>
        <table className='technical-skills-table'>
          <tr className='technical-skills-column-title'>
            <th className='technology'>Technology</th>
            <th className='definition'>Definition</th>
            <th className='application'>Application</th>
            <th>
              <p className='expertise'>Expertise</p>
                <span className="color-spectrum">
                  <div className="small-box-red"></div>
                  <div className="small-box-yellow"></div>
                  <div className="small-box-green"></div>
                </span>
            </th>
          </tr>
          <tr>
            <td>Javascript</td>
            <td>Object-oriented programming langauge</td>
            <td>Front-End <br /> Back-End</td>
            <td className='center-content'>
              <div className="small-box-green"></div>
            </td>
          </tr>
          <tr>
            <td>HTML</td>
            <td>A markup language that defines structure & meaning of web content</td>
            <td>Front-End</td>
            <td className='center-content'>
              <div className="small-box-green"></div>
            </td>
          </tr>
          <tr>
            <td>CSS</td>
            <td>A computer language for laying out and structuring web pages</td>
            <td>Front-End</td>
            <td className='center-content'>
              <div className="small-box-green"></div>
            </td>
          </tr>
          <tr>
            <td>React</td>
            <td>A javascript library for building sophisticated user interfaces</td>
            <td>Front-End<br /> Back-End</td>
            <td className='center-content'><next className="js"></next>
              <div className="small-box-green"></div>
            </td>
          </tr>
          <tr>
            <td>Redux</td>
            <td>A javascript library that helps manage an application's state</td>
            <td>Front-End<br /> Back-End</td>
            <td className='center-content'>
              <div className="small-box-green"></div>
            </td>
          </tr>
          <tr>
            <td>Node.js</td>
            <td>open-source, cross-platform javascript runtime environment</td>
            <td>Front-End<br /> Back-End</td>
            <td className='center-content'>
              <div className="small-box-green"></div>
            </td>
          </tr>
          <tr>
            <td>Express.js</td>
            <td>A framework build on top of Node.js to structure and simplify development</td>
            <td>Back-End</td>
            <td className='center-content'>
              <div className="small-box-green"></div>
            </td>
          </tr>
          <tr>
            <td>C#</td>
            <td>Object-oriented programming langauge</td>
            <td>Front-End<br /> Back-End</td>
            <td className='center-content'>
              <div className="small-box-yellow"></div>
            </td>
          </tr>
          <tr>
            <td>.NET</td>
            <td>A versatile software framework that supports the creation of applicaitons across different platforms</td>
            <td>Front-End<br /> Back-End</td>
            <td className='center-content'>
              <div className="small-box-yellow"></div>
            </td>
          </tr>
          <tr>
            <td>SQL</td>
            <td>A programming language for storing and processing information in a relational database</td>
            <td>Back-End</td>
            <td className='center-content'>
              <div className="small-box-green"></div>
            </td>
          </tr>
          <tr>
            <td>Git</td>
            <td>A version control system that helps developers collaborate on projects</td>
            <td>Collaboration</td>
            <td className='center-content'>
              <div className="small-box-green"></div>
            </td>
          </tr>
          <tr>
            <td>RESTful API</td>
            <td>An architectural style for an API that uses HTTP requests to access/use data</td>
            <td>Front-End<br /> Back-End</td>
            <td className='center-content'>
              <div className="small-box-green"></div>
            </td>
          </tr>
        </table>

      <div className='more-coming-soon'>
        <p>MORE COMING SOON!</p>
      </div>
    </div>
  );
}

export default TechnicalSkills;
