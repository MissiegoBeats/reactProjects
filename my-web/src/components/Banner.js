import React from "react";
import { GrContact } from 'react-icons/gr';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function Banner() {

  function handleSubmit(event) {
    event.preventDefault();
    alert("You searched for something!");
  }

  return (
    <div className="banner" class="fixed-top">
      <Navbar bg="dark" expand="lg" data-bs-theme="dark">
        <Navbar.Brand href="#home-div" style={{ marginLeft: "10px" }}>React Bootstrap Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> {/* me-auto = margin-left: auto */}
            <Nav.Link href="#home-div">Home</Nav.Link>
            <Nav.Link href="#contact-div">Contact</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown"> {/* id is required */}
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> {/* href is required */}
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item> {/* href is required */}
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> {/* href is required */}
              <NavDropdown.Divider /> {/* Divider is optional */}
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> {/* href is required */}
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" type="submit">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Banner;