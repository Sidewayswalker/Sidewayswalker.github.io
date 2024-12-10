import React from 'react';
import { Link } from 'react-router-dom';
import "./ConnectProjects.css";

function ConnectProjects() {

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  return (
    <div className="container-ConnectProjects">
      <div className='Container-ConnectProjects-Inner'>
        <div className='ConnectProjects-Text'>
          <div>Looking to Hire?</div>
          <div>Got Questions?</div>
          <div>Wanna Collaborate?</div>
        </div>
        <Link className='LetsTalkButton' to='/ContactMe' onClick={scrollToTop} >Let's Talk!</Link>
      </div>
    </div>
  );
}

export default ConnectProjects;
