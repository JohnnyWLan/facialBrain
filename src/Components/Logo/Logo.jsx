import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = ()=>{
    return(
<div className='ma4 mt0'>
  <Tilt
    tiltMaxAngleX={25}
    tiltMaxAngleY={25}
    perspective={1000}
    scale={1.1}
    transitionSpeed={250}
    gyroscope={true}
    style={{ height: 150, width: 150 }}
  >
    <div className="Tilt" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}> 
      <img style={{paddingTop: '5px'}} alt='brain logo' src={brain}/>
    </div>
  </Tilt>
</div>

        
    )
}


export default Logo;