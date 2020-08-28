import React from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import './Nav.scss'

class Navigation extends React.Component {
    state = {}


    render() {

        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="navbar">
                    <Nav className="links">
                        <Link
                            className='navLink'
                            activeClass="active"
                            to="skills"
                            spy={true}
                            smooth={true}
                            duration={400}
                        > Skills </Link>

                        <Link
                            className='navLink'
                            activeClass="active"
                            to="projects"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={400}
                        > Projects </Link>

                        <a className='navLink' href='https://drive.google.com/file/d/1jTzRNcQx0tDZeS_HcD3gKZCUq8e9nWeJ/view?usp=sharing'> Resume </a>

                    </Nav>
                </Navbar.Collapse>
            </ Navbar >
        )
    }
}


export default withRouter(Navigation);