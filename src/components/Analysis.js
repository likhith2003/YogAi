import React from 'react'
import '../style/Analysis.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useNavigate } from 'react-router-dom';


const Analysis = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/start`;
    navigate(path);
  }

  const getTherm = () => {
    fetch("/displaytherm")
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const getRad = () => {
    fetch("/displayrad")
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const getPos = () => {
    fetch("/displaypos")
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  const getPressMat = () => {
    fetch("/displaypressure")
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
    <div className='analysis'>
      <div className='analysis_start'>

        <div className='box'>
          <img src="https://iiif.wellcomecollection.org/image/N0037647/full/300,/0/default.jpg" alt="Analyze your visual here" />
          <div className='btn-group'>
            <Tippy content="Click here to see your thermal analysis.">
              <button onClick={() => getTherm()}>Analyze Thermal</button>
            </Tippy>
          </div>
        </div>

        <div className='box'>
          <img src="https://cdn.dribbble.com/users/143127/screenshots/2971522/media/210351018fc8837fce622ec4112ad9c8.jpg?compress=1&resize=400x300" alt="Analyze your radar here" />
          <div className='btn-group'>
            <Tippy content="Click here to see your radar analysis.">
              <button onClick={() => getRad()}>Analyze Radar</button>
            </Tippy>
          </div>
        </div>

        <div className='box'>
          <img src="https://i0.wp.com/www.yogabasics.com/yogabasics2017/wp-content/uploads/2020/01/Yoga-Poses-for-Beginners.jpg" alt="Analyze your thermal here" />
          <div className='btn-group'>
            <Tippy content="Click here to see your posture analysis.">
              <button onClick={() => getPos()}>Analyze Posture</button>
            </Tippy>
          </div>
        </div>

        <div className='box'>
          <img src="https://media.istockphoto.com/id/1225266726/vector/yoga-studios-streaming-online-classes-girl-watching-online-sport-tutorials-on-a-laptop-and.jpg?s=612x612&w=is&k=20&c=Yh7G7kNvQ2wEOjdzN0CXE2-cUb0LECl_ognQ367qiII=" alt="Check your pressure mat here" />
          <div className='btn-group'>
            <Tippy content="Click here to see your pressure mat analysis.">
              <button onClick={() => getPressMat()}>Analyze Pressure Mat</button>
            </Tippy>
          </div>
        </div>
      </div>
      <div style={{display:'flex',justifyContent:"space-evenly",height:'25vh',alignItems:'flex-start'}}>
        <div className='box'>
            <div className='btn-group'>
              <button className='button' onClick={routeChange}>Return to Start Page</button>
            </div>
          </div>
          <div className='box'>
            <div className='btn-group'>
              <button className='button'>Exit</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Analysis