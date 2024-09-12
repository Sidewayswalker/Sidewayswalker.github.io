import React from 'react';

import './ProjectBoard.css';

function ProjectBoard() {
  return (
    <div className="container">
        <div className='project-board-title'>
          <h2>My Project Board</h2>
          <p></p>
        </div>
        <div className='prime-digital-academy'>
          <h3>Prime Digital Academy</h3>
          <li>
          <b>Solo Project</b> - Event Planning Application w/ Text Message API
          </li>
          <li>
          <b>Group Project</b> - Home Appliance Upkeep Web/Phone App. (Client Project)
          </li>
        </div>
        <div className='Websites-Templates'>
          <h3>Websites</h3>
          <li><b><i>
            My Personal Website (you are here)
            </i></b></li>
          <li>
            "Resturant" Template
          </li>
          <li>
            "Artist/Photography" Template
          </li>
          <li>
            "Home Security" Template
          </li>
        </div>
        <div className='Games'>
          <h3>Games</h3>
          <li>
            Coming Soon - Hobby
          </li>
        </div>
    </div>
  );
}

export default ProjectBoard;