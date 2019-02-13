import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './CustomNavBar.css';

class CustomNavBar extends Component {
    render() {
        return (
        <Navbar expand="lg">
            <Navbar.Brand href="/">Tosche Station</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
               <Nav>  
                    <Nav.Link href="/">Main</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>   
                    <Nav.Link href="/products">Products</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default CustomNavBar;