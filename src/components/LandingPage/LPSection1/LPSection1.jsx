import React from 'react';
import './LPSection1.css'; 
import ProfilePic from './ProfilePic/ProfilePic';
import ProfileText from './ProfileText/ProfileText';


function LPSection1() {

  return (
    <div className="LPcontainer1">
        <div className='LPC1Photo'>
          <ProfilePic />
        </div>

        <div className='LPC1Text'>
          <ProfileText />
        </div>
    </div>
  );
}

export default LPSection1;
