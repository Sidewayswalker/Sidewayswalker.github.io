import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState(`Steven Karl's Personal Website`);
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  //! Handle Wireframe expand

    const [isFullScreen, setIsFullScreen] = useState(false);
  
    const handleWireframeClick = () => {
      setIsFullScreen(!isFullScreen);
    }

  return (
    <div className="container">
      <h2 className='LandingPageTitle'>Steven Karl's<br></br>Personal Website</h2>
      <center>
      <img className='MyPhotograph'
          src="https://media.licdn.com/dms/image/C4D03AQEbf0I3eYRYDw/profile-displayphoto-shrink_800_800/0/1531499635747?e=1727913600&v=beta&t=jJ64YrqrhLCZp8Xjd4acNOK9GTgWo9GXbvMaRsw8two" 
          alt="Steven's Picture" 
      />
      </center>


      <div className='wireframe'>
        <h3>Wireframe</h3>
         
          {/* Small Image */}
        <img 
        src="Personal_Website_Wireframe.png" 
        alt="Wireframe" 
        className='thumbnail'
        onClick={handleWireframeClick}
        />
        <p>Susceptible to Change</p>


          {/* Large Image */}
        {isFullScreen && (
          <div 
            className='fullscreen-overlay'
            onClick={handleWireframeClick}
          >
            <img 
              src="Personal_Website_Wireframe.png" 
              alt="Wireframe Fullscreen" 
              className='fullscreen-image'
            />
          </div>
        )}
      </div>




    
      <div className="grid">
        <div className="grid-col grid-col_12">
          <h3>About Me</h3>
          <p>
          After a successful career in marketing, sales, and the transportation industry, I have embarked 
          on an exciting journey into software development. As a recent graduate of Prime Digital Academy, 
          I am dedicated to becoming a versatile entrepreneur and a one-man "business" army. Currently, 
          I am actively working on personal projects, taking online courses to deepen my understanding of 
          the tech industry, and applying for new opportunities. I am thrilled about this career transition, 
          as I believe my acquired skills and continuous learning will unlock endless possibilities. Learning 
          is a lifelong journey, and I am eager to see where this path will take me.
          </p>
          <h3>Personal Mission</h3>
          <p>
            I strive to develop cutting-edge software solutions that surpass customer expectations. 
            My objective is to achieve impactful results, boost customer satisfaction, and support the success of my organization through ongoing learning and a dedication to excellence.
          </p>
          <h3>Contact Info</h3>
          <p className='contact-info-paragraph'>
          Please don't hesitate to contact me if you are interested in collaboration or potential employment opportunities. You can reach out to me through LinkedIn or via email.
          </p>
          <p className='contact-info-list'>
            <ul className='contact-info-li'>
              <li><a href="https://www.linkedin.com/in/steven-karl-857b34126/">LinkedIn</a></li>
              <li><a href="mailto: SAKarl09@outlook.com">Email</a></li>
              <li><a href="https://github.com/Sidewayswalker">GitHub</a></li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
