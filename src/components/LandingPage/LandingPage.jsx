import React from 'react';
import LPSection1 from './LPSection1/LPSection1';
import LPSection2 from './LPSection2/LPSection2';
import LPSection3 from './LPSection3/LPSection3';


function LandingPage() {
  return (
    <div className="container">
      <LPSection1 />
      <LPSection2 />
      <LPSection3 />
    </div>
  );
}

export default LandingPage;