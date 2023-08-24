import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// import Portfolio from './Portfolio';
// import Contact from './Contact';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="./#">Walter's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#Portfolio">Portfolio</Nav.Link> */}
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Explore" id="basic-nav-dropdown">
              <NavDropdown.Item href="./#/Footer">Contact</NavDropdown.Item>
              <NavDropdown.Item href="./#/Resume">Resume</NavDropdown.Item>
              {/* below, portfolio link is working! */}
              <NavDropdown.Item href="./#/Portfolio">Portfolio</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Download Resume
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
