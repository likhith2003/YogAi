import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
// import NavLink from 'react-router-dom'

const Header = () => {
    return (
        <div style={{height:'5vh'}}>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">User Registration</Navbar.Brand>
                    <Nav className="me-auto">
                    {/* <Navbar.Brand href="/features">Features</Navbar.Brand> */}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
