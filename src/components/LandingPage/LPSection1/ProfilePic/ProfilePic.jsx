import React from 'react';
import './ProfilePic.css';
import ProfilePhoto from '../ProfilePic/ProfilePhoto.jpg'; // Import the image correctly

function ProfilePic() {
  return (
    <div>
      <img className="ProfilePic" src={ProfilePhoto} alt="Profile Photo" /> {/* Use the imported image */}
    </div>
  );
}

export default ProfilePic;
