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

  const LogOut = () => {
    let path =`/`;
    navigate(path);
  };

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
          <img src={require("../assets/analyzethermal.png")} alt="Analyze your visual here" />
          <div className='btn-group1'>
            <Tippy content="Click here to see your thermal analysis.">
              <button onClick={() => getTherm()}>Analyze Thermal</button>
            </Tippy>
          </div>
          <p></p>
          <div className='infor1'>
            <li>Heart rate during yoga</li>
             <li>Thermal responses to yoga</li> 
          </div>
        </div>

        <div className='box'>
          <img src={require("../assets/analyzeradar.jpg")} alt="Analyze your radar here" />
          <div className='btn-group2'>
            <Tippy content="Click here to see your radar analysis.">
              <button onClick={()=> getRad()}>Analyze Radar</button>
            </Tippy>
          </div>
          <p></p>
          <div className='infor2'>
            <li>Sensors or vision-based techniques</li>
            <li>Identification of movements</li>
          </div>
        </div>

        <div className='box'>
          <img src={require("../assets/analyzeposture.jpg")} alt="Analyze your thermal here" />
          <div className='btn-group3'>
            <Tippy content="Click here to see your posture analysis.">
              <button onClick={() => getPos()}>Analyze Posture</button>
            </Tippy>
          </div>
          <p></p>
          <div className='infor3'>
            <li>Posture recognition, evaluation</li>
            <li>Camera-based method</li>
          </div>
        </div>

        <div className='box'>
          <img src={require("../assets/analyzepressure.jpg")} alt="Check your pressure mat here" />
          <div className='btn-group4'>
            <Tippy content="Click here to see your pressure mat analysis.">
              <button onClick={() => getPressMat()}>Analyze Pressure Mat</button>
            </Tippy>
          </div>
          <p></p>
          <div className='infor4'>
            <li>Yoga posture database capture</li>
            <li>Bluetooth-based data transfer</li>
          </div>
        </div>
      </div>

      <div style={{display:'flex',justifyContent:"space-evenly",height:'25vh',alignItems:'flex-start'}}>
        <div className='box'>
            <div className='btn-group5'>
              <button className='button' onClick={routeChange}>Return to Start section</button>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Analysis