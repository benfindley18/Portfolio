import React from 'react';
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
                        <Nav.Link href="#pricing"> Contact </Nav.Link>
                        <NavDropdown title=" Projects " id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1"> Hive </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"> Password Strength </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3"> Plume </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </ Navbar>
        )
    }
}


export default Navigation;