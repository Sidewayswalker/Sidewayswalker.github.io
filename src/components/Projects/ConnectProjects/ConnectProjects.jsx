import React from 'react';
import { Link } from 'react-router-dom';
import "./ConnectProjects.css"

function ConnectProjects() {
  return (
    <div className="container-ConnectProjects">
      <div className='Container-ConnectProjects-Inner'>
        <div className='ConnectProjects-Text'>
          <div>Looking to Hire?</div>
          <div>Got Questions?</div>
          <div>Wanna Collaborate?</div>
        </div>

        <div className='ConnectProjects-Button'>
          <Link className='LetsTalkButton' to='/ContactMe'>Let's Talk!</Link>
        </div>
      </div>
    </div>
  );
}

export default ConnectProjects;
