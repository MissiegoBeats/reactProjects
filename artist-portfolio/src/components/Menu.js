import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logoMenu from '../images/logo-menu.png';

function Menu() {
  return (
    <Navbar className="navbar fixed-top border-bottom border-light" bg="dark" expand="lg" data-bs-theme="dark">
      <Navbar.Brand href="#home" style={{ marginLeft: "10px" }}><img src={logoMenu} height={40} width={40}></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> {/* me-auto = margin-left: auto */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown"> {/* id is required */}
              <NavDropdown.Item href="#discography">Discography</NavDropdown.Item> {/* href is required */}
              <NavDropdown.Item href="#single">Latest Single</NavDropdown.Item> {/* href is required */}
              <NavDropdown.Item href="#concerts">Concerts</NavDropdown.Item> {/* href is required */}
              <NavDropdown.Divider /> {/* Divider is optional */}
              <NavDropdown.Item href="#social-media">Social Media</NavDropdown.Item> {/* href is required */}
            </NavDropdown>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;