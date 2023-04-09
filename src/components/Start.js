import React, { useEffect, useState } from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import '../style/start.css'
import { useNavigate } from 'react-router-dom';
import { baseUrl } from '../assets/BaseUrl';

const Start = () => {
  const [loggInStatus,setLogginStatus]=useState();
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  

  let navigate = useNavigate();
  
  const routeChange = () => {
    let path = `/analysis`;
    navigate(path);
  }

  const LogOut = () => {
    let path = `/`;
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

  async function checkUser(token){
    try{
        myHeaders.append("Authorization", token);
        const res=await fetch(baseUrl+"/start", {
          method: 'POST',
          headers: myHeaders,
          body: {},
          redirect: 'follow'
        })
      loggInStatus=res;
      setLogginStatus(loggInStatus)
    }
    catch(err){
      console.log(err)
    }
  }
  async function getUserFromLocal(){
    return await JSON.parse(localStorage.getItem("user"));
  }
  useEffect(()=>{
    (async () => {
      const userData = await getUserFromLocal();
      console.log(userData);
      if(!userData || userData.length==0) 
        navigate("/login");
      else{
        await checkUser(userData?.token);
        if(!loggInStatus)
          navigate("/login");}
    })(); 
  },[])
  //empty depen only called once the page renders in this case.
  
  return (
    <div className='start'>
      <div className='boxes'>
        <div className='start_btn-group5'>
          <button className='button' onClick={() => getStart()}>Start the session</button>
        </div>
      </div>

      <div className='start_functionbox'>
        <div className='boxes'>
          <img src={require("../assets/checkthermal.jpg")} alt="Check your thermal here" />
          <div className='start_btn-group1'>
            <Tippy content="Begin your thermal analysis. Happy Yoga time.">
              <button onClick={() => getThermal()}>Check Thermal</button>
            </Tippy>
          </div>
          <p></p>
          <div className='info1'>
            <li>Thermography</li>
            <li>Thermal Infrared</li>
            <li>Thermal energy from skin surface</li>
          </div>
        </div>

        <div className='boxes'>
          <img src={require("../assets/checkradar.jpg")} alt="Check your radar here" />
          <div className='start_btn-group2'>
            <Tippy content="Begin your radar analysis. Happy Yoga time.">
              <button onClick={() => getRadar()}>Check Radar</button>
            </Tippy>
          </div>
          <p></p>
          <div className='info2'>
            <li>Object Position</li>
            <li>Motion characteristics</li>
            <li>Motion Trajectory</li>
          </div>
        </div>


        <div className='boxes'>
          <img src={require("../assets/checkvisual.jpg")} alt="Check your visual here" />
          <div className='start_btn-group3'>
            <Tippy content="Begin your visual analysis. Happy Yoga time.">
              <button onClick={() => getVisual()}>Check Visual</button>
            </Tippy>
          </div>
          <p></p>
          <div className='info3'>
            <li>Visual structure and elements</li>
            <li>Explanation and decription</li>
            <li>Color,line,texture,and scale</li>
          </div>
        </div>

        <div className='boxes'>
          <img src={require("../assets/checkpressure.jpeg")} alt="Check your visual here" />
          <div className='start_btn-group4'>
            <Tippy content="Begin your pressure mat analysis. Happy Yoga time.">
              <button onClick={() => getPressure()}>Check Pressure Mat</button>
            </Tippy>
          </div>
          <p></p>
          <div className='info4'>
            <li>Postural stability</li>
            <li>Pressure offloading</li>
            <li>Quantifiable pressure data</li>
          </div>
        </div>
      </div>

      <div style={{display:'flex',justifyContent:"space-evenly",height:'25vh',alignItems:'flex-start'}}>
        <div className='boxes'>
          <div className='start_btn-group5'>
            <button className='button' onClick={routeChange}>Move to Analysis section</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start