import React from 'react'
//import Button from 'react-bootstrap/Button'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// import { NavLink } from 'react-router-dom'
import '../style/start.css'
import { useNavigate } from 'react-router-dom';


const Start = () => {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/analysis`; 
    navigate(path);
  }

  return (
    <div className='start'>
      <div className='box'>
        <img src="https://image.emojipng.com/50/4780050.jpg" alt="Check your thermal here" />
        <div className='btn-group'>
          <Tippy content="Click here to begin your thermal analysis.">
            <button onClick={routeChange}>Check Thermal</button>
            {/* <button onClick={<NavLink to={"/"}></NavLink>}></button> */}
          </Tippy>
        </div>
      </div>
      <div className='box'>
        <img src="https://indatalabs.com/wp-content/uploads/2020/10/human-activity-recognition-fitness-app.jpg" alt="Check your radar here" />
        <div className='btn-group'>
          <Tippy content="Click here to begin your radar analysis.">
            <button onClick={routeChange}>Check Radar</button>
          </Tippy>
          
        </div>
      </div>
      <div className='box'>
        <img src="https://images.squarespace-cdn.com/content/v1/57a958a4f7e0abfd89d44efb/1477505543749-CZK02PYV9ZT5KK6KDSIO/visual_640x320.jpg?format=750w" alt="Check your visual here" />
        <div className='btn-group'>
          <Tippy content="Click here to begin your visual analysis.">
            <button onClick={routeChange}>Check Visual</button>
          </Tippy>
        </div>
      </div>
      <div className='box'>
      <div className='btn-group'>
           <button onClick={routeChange}>Click here to see your analysis report!</button>
          </div>
    </div>
    </div>
  )
}

export default Start