import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

function BootstrapComponent() {
  return (
    <>
      <h2>Bootstrap Component</h2>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"> {/* me-auto = margin-left: auto */}
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown"> {/* id is required */}
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item> {/* href is required */}
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item> {/* href is required */}
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> {/* href is required */}
              <NavDropdown.Divider /> {/* Divider is optional */}
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> {/* href is required */}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default BootstrapComponent;