import React from 'react';
import './ContactMe.css';
import Contact_Overview from './Contact_Overview/Contact_Overview';
import Contact_Services from './Contact_Services/Contact_Services';
import Contact_SocialMedia from './Contact_SocialMedia/Contact_SocialMedia'


function ContactMe() {
  return (
    <div className="container-ContactMe">
      < Contact_Overview />
      < Contact_Services />
      < Contact_SocialMedia />
    </div> 
  );
}

export default ContactMe;
