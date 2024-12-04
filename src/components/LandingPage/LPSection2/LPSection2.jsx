import React from 'react';
import './LPSection2.css'; 
import Now from './Now/Now'
import CareerGoals from './CareerGoals/CareerGoals';
import Services from './Services/Services'

// import ScrollPaper from './ScrollPaper.jpg'


function LPSection2() {

  return (
    <div className="LPcontainer2">
      {/* <img src={ScrollPaper} alt="MY SCROLL" /> */}

      <span className='Three-Box-Display'>
        <Now />
        <CareerGoals />
        <Services />
      </span>

    </div>
  );
}

export default LPSection2;
