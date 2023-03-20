import React from 'react'
import '../style/Analysis.css'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const getTherm=()=>{
  fetch("/displaytherm")
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}

const getRad=()=>{
  fetch("/displayrad")
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}

const getPos=()=>{
  fetch("/displaypos")
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err))
}

const Analysis = () => {
  return (
    <div className='start'>
      <div className='box'>
        <img src="https://iiif.wellcomecollection.org/image/N0037647/full/300,/0/default.jpg" alt="Check your visual here" />
        <div className='btn-group'>
          <Tippy content="Click here to see your thermal analysis.">
            <button onClick={()=>getTherm()}>Analyze thermal</button>
          </Tippy>
        </div>
      </div>
      <div className='box'>
        <img src="https://cdn.dribbble.com/users/143127/screenshots/2971522/media/210351018fc8837fce622ec4112ad9c8.jpg?compress=1&resize=400x300" alt="Check your radar here" />
        <div className='btn-group'>
          <Tippy content="Click here to see your radar analysis.">
            <button onClick={()=>getRad()}>Analyze radar</button>
          </Tippy>
        </div>
      </div>
      <div className='box'>
        <img src="https://i0.wp.com/www.yogabasics.com/yogabasics2017/wp-content/uploads/2020/01/Yoga-Poses-for-Beginners.jpg" alt="Analyze your thermal here" />
        <div className='btn-group'>
          <Tippy content="Click here to see your posture analysis.">
            <button onClick={()=>getPos()}>Analyze posture</button>
          </Tippy>
        </div>
      </div>
    </div>
  )
}

export default Analysis