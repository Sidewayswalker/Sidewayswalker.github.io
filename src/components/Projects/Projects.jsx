import React from 'react';
import "./Projects.css"
import MyWork from './MyWork/MyWork';
import ConnectProjects from './ConnectProjects/ConnectProjects';

function Projects() {
  return (
    <div className="container-projects">
      <MyWork />
      <ConnectProjects />
    </div>
  );
}

export default Projects;