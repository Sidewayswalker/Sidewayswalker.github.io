import React from 'react';
import './ProfileText.css'; 



function ProfileText() {

  return (
    <div className='Profile-Text'>
      <div className='Large-Profile-Text'>
        <div className='GreetingText'>
          Hello, I’m Steven Karl, a passionate software developer 
          dedicated to building impactful and user-friendly applications. 
          With a background in marketing, sales, and logistics, I bring 
          a unique perspective to problem-solving and collaboration. 
          My main technologies include JavaScript, React, and Redux, 
          which I leverage to craft efficient, intuitive solutions.
        </div>

        <div className='PassionText'>
          I’m passionate about transforming innovative ideas into 
          polished, practical applications. Beyond coding, I’m 
          committed to continuous learning and driven by a desire to 
          develop solutions that truly make a difference.
        </div>
      </div>


      <div className='Small-Profile-Text'>
        <div className='Small-GreetingText'>
            Hello, I’m Steven Karl, a passionate software developer 
            dedicated to building impactful and user-friendly applications. 
            With a background in marketing, sales, and logistics, I bring 
            a unique perspective to problem-solving and collaboration. 
            My main technologies include JavaScript, React, and Redux, 
            which I leverage to craft efficient, intuitive solutions.
          </div>

          <div className='Small-PassionText'>
            I’m passionate about transforming innovative ideas into 
            polished, practical applications. Beyond coding, I’m 
            committed to continuous learning and driven by a desire to 
            develop solutions that truly make a difference.
          </div>
      </div>





    </div>
  );
}

export default ProfileText;
