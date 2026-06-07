import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from "react-router-dom";


export const Header=()=>{
  
    return(
        <>
        <Navbar expand="lg" className="black">
      <Container>
        <Navbar.Brand href="#home">MoviesHub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}