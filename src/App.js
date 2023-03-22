import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Start from './components/Start';
import { Routes, Route, redirect } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {isObjectEmpty} from './helper/index'
import Analysis from './components/Analysis';

function App() {
  const [user,setUser]=useState({});

  useEffect(()=>{
     //(!isObjectEmpty(user.length()))?redirect('/Start'):redirect('/');
  },[user])

  return (
    <>
      <Header />
      <Routes>
         <Route path ='/' element={<Home />} />
         {/* forward slash in path shows homepage */}
         <Route path ='/login' element={<Login />} />
         <Route path ='/start' element={<Start />} />
         <Route path ='/analysis' element={<Analysis />} />
         {/* <Route path ='/features' element={<Feature />}/> */}
      </Routes>
    </>
  );
}

export default App;
