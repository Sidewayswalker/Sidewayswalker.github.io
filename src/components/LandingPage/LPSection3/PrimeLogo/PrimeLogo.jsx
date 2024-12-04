import React from 'react';
import './PrimeLogo.css';
import PrimeLogoPic from '../PrimeLogo/PrimeLogoPic.png'

function PrimeLogo() {
  return (
    <div>
      <img className="PrimeLogo" src={PrimeLogoPic} alt="PrimeLogo" /> 
    </div>
  );
}

export default PrimeLogo;
