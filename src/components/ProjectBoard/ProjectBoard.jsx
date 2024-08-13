import React from 'react';

import './ProjectBoard.css';

function ProjectBoard() {
  return (
    <div className="container">
        <div className='project-board-title'>
          <h2>My Project Board</h2>
        </div>
        <div className='prime-digital-academy'>
          <h3>Prime Digital Academy</h3>
          <li>
            Solo Project
          </li>
          <li>
            Group Project
          </li>
        </div>
        <div className='individual-work'>
          <h3>Individual Work</h3>
          <li>
            My Personal Website (you are here)
          </li>
        </div>
    </div>
  );
}

export default ProjectBoard;