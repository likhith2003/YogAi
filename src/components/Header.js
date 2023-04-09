import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Header = ({user,setUser}) => {
    const history = useNavigate();  //useNavigate is a react hook.

    const handleClick=()=>{
        console.log("user",user)
        if(user&&user.length!==0)localStorage.removeItem('user');
        setUser("")
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
                    <Navbar.Brand style ={{cursor:"pointer"}}onClick={handleClick}>{!user?"Log In":"Log out"}</Navbar.Brand>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header


