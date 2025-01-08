import React from 'react';
import "./MyWork.css"
import Work1 from './Work1/Work1'
import Work2 from './Work2/Work2'
import Work3 from './Work3/Work3'
import Work4 from './Work4/Work4'
import Work5 from './Work5/Work5'

function MyWork() {
  return (
    <div className='MyWork-All'>

      <div className='Hosting-Format'>
        <div className='Hosting-Message'>Hosting Status:</div>
        <div className='Hosting-On'>On</div>
        <div className='Hosting-Off'>Off</div>
      </div>

      <div className="container-MyWork">
          <Work1 />
          <Work2 />
          <Work3 />
          <Work4 />
          <Work5/>
      </div>
    </div>
  );
}

export default MyWork;

