import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () => {
    return (
        <div style={{height:'5vh'}}>
            <Navbar bg="dark" variant="dark">
                <Container>
                     <div className="me-auto">
                    <Navbar.Brand>Welcome to AiYogi</Navbar.Brand>
                    </div>
                    <div className="ms-auto">
                    <Navbar.Brand href="/">Log out</Navbar.Brand>
                    </div>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header

