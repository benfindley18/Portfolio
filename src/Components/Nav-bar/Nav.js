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
                        <Nav.Link href="#features"> Home </Nav.Link>
                        <Nav.Link href="#pricing"> Skills </Nav.Link>
                        <Nav.Link href="#pricing"> Projects </Nav.Link>
                        <NavDropdown title=" More " id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"> About </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"> Resume </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"> Contact </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </ Navbar>
        )
    }
}


export default withRouter(Navigation);