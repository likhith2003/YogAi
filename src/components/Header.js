import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () => {

    const history = useNavigate();  //useNavigate is a react hook.

    const {user,setUser}=useState();

    function getUserFromLocal(){
        return JSON.parse(localStorage.getItem("user"));
    }
    useEffect(()=>{
        const getUsers = async () => {
            const userData = await getUserFromLocal();
            setUser(userData);
          };    
        },[])
    const handleClick=()=>{
        if(user&&user.length!=0)localStorage.removeItem("user");
        history("/login");
    }
    return (
        <div style={{height:'5vh'}}>
            <Navbar bg="dark" variant="dark">
                <Container>
                     <div className="me-auto">
                    <Navbar.Brand>Welcome to AiYogi</Navbar.Brand>
                    </div>
                    <div className="ms-auto">
                    <Navbar.Brand onClick={handleClick}>{!user?"Log In":"Log out"}</Navbar.Brand>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header


