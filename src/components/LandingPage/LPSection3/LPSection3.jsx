import React from 'react';
import './LPSection3.css'; 
import PrimeLogo from './PrimeLogo/PrimeLogo';
import PrimeText from './PrimeText/PrimeText';


function LPSection3() {

  return (
    <div className="LPcontainer3">
      <div className='LPC3Text'>
        <PrimeText />
      </div>

      <div className='LPC3Photo'>
        <PrimeLogo />
      </div>
    </div>
  );
}

export default LPSection3;
