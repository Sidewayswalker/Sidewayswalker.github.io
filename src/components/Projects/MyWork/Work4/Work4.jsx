import React, { useState } from 'react';
import "./Work4.css";
import SpacePic from '../Work4/SpaceWebPictures/SpaceWebPic.png';
import SpaceVideo from '../Work4/SpaceWebPictures/SpaceWebVideo.mov';

function Work4() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="work-container">
      <h2 className="work-title">3D Space Web-Background</h2>

      {/* Conditionally render fullscreen view when `isFullscreen` is true */}
      {isFullscreen ? (
        <div className="fullscreen" onClick={toggleFullscreen}>
          <video 
            src={SpaceVideo} 
            autoPlay 
            loop 
            controls 
            className="work-video-fullscreen" 
          />
        </div>
      ) : (
        <div className="work-image" onClick={toggleFullscreen}>
          <img src={SpacePic} alt="3D Space Website" className="work-picture" />
        </div>
      )}

      <div className="work-details">
        <p className="work-heading">Description:</p>
        <p className="work-text">
        This was my first experience with Three.js, creating 3D content directly in the browser. The project features a dynamic, scrolling space background that immerses the viewer in a three-dimensional scene. I explored essential elements like materials, lighting, camera movements, orbital controls, and texture mapping, gaining valuable experience while laying the groundwork for future 3D web development.
        </p>

        <p className="work-heading">Technologies:</p>
        <span className="Technologies-List">
          <p className="Technologies-Appearance">JavaScript</p>
          <p className="Technologies-Appearance">React</p>
          <p className="Technologies-Appearance">Vite</p>
          <p className="Technologies-Appearance">Three.js</p>
        </span>
      </div>
    </div>
  );
}

export default Work4;
