import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import '../style/start.css'
import { useNavigate } from 'react-router-dom';


const Start = () => {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/analysis`;
    navigate(path);
  }

  const LogOut = () => {
    let path =`/`;
    navigate(path);
  };

  const getThermal = () => {
    fetch("/checkthermal")
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const getRadar = () => {
    fetch("/checkradar")
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const getVisual = () => {
    fetch("/checkvisual")
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const getPressure = () => {
    fetch("/checkpressure")
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const getStart = () => {
    fetch("/startsession")
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  
  return (
    <div className='start'>
      <div className='start_functionbox'>
        <div className='box'>
          <img src="https://image.emojipng.com/50/4780050.jpg" alt="Check your thermal here" />
          <div className='start_btn-group'>
            <Tippy content="Click here to begin your thermal analysis. Allow Thermal Imaging to recognize and categorize your posture as right or fallace.Happy Yoga time">
              <button onClick={() => getThermal()}>Check Thermal</button>
              {/* we can also use this: <button onClick={<NavLink to={"/"}></NavLink>}></button> */}
            </Tippy>
          </div>
        </div>

        <div className='box'>
          <img src="https://indatalabs.com/wp-content/uploads/2020/10/human-activity-recognition-fitness-app.jpg" alt="Check your radar here" />
          <div className='start_btn-group'>
            <Tippy content="Click here to begin your radar analysis.Detect postural changes to help predict and prevent fallacious yoga postures.Happy Yoga time">
              <button onClick={() => getRadar()}>Check Radar</button>
            </Tippy>
          </div>
        </div>


        <div className='box'>
          <img src="https://images.squarespace-cdn.com/content/v1/57a958a4f7e0abfd89d44efb/1477505543749-CZK02PYV9ZT5KK6KDSIO/visual_640x320.jpg?format=750w" alt="Check your visual here" />
          <div className='start_btn-group'>
            <Tippy content="Click here to begin your visual analysis.Start the camera and capture your yoga posture.Happy Yoga time.">
              <button onClick={() => getVisual()}>Check Visual</button>
            </Tippy>
          </div>
        </div>

        <div className='box'>
          <img src="https://img.freepik.com/premium-vector/cute-little-boy-doing-gymnastic-fitness-exercises-practicing-yoga-pose-mat-indoor-home_535862-120.jpg?w=2000" alt="Check your visual here" />
          <div className='start_btn-group'>
            <Tippy content="Click here to begin your pressure mat analysis..Happy Yoga time.">
              <button onClick={() => getPressure()}>Check Pressure Mat</button>
            </Tippy>
          </div>
        </div>
      </div>
      <div style={{display:'flex',flexDirection:'row',alignItems:'flex-start',justifyContent:'space-evenly'}}>
        <div className='box'>
          <div className='start_btn-group'>
            <button className='button' onClick={routeChange}>Move to Analysis section</button>
          </div>
        </div>

        <div className='box'>
          <div className='start_btn-group'>
            <button className='button' onClick={()=>getStart()}>Start the session</button>
          </div>
        </div>

        <div className='box'>
          <div className='start_btn-group'>
            <button className='button' onClick={()=>LogOut()}>Log Out</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Start