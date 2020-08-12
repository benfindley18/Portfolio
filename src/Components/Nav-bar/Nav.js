import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nav.scss'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

class Navigation extends React.Component {
    state = {}


    render() {

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="navbar">
                    <Nav className="dropdown">
                        <Nav.Link href="#home"> Home </Nav.Link>
                        <Nav.Link href="#skills"> Skills </Nav.Link>
                        <Nav.Link href="#project"> Projects </Nav.Link>
                        <Nav.Link href="#resume"> Resume </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </ Navbar>
        )
    }
}


export default withRouter(Navigation);