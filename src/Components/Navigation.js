import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
// react bootstrap used for nav

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* components dynamically render within the body after pressing nav links! */}
        <Navbar.Brand href="/react-portfolio/">
          Walter's Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* the 'explore' element expands and shows other sections of the portfolio */}
            <NavDropdown title="Explore" id="basic-nav-dropdown">
              {/* contact link */}
              <NavDropdown.Item href="/react-portfolio/#/Footer">
                Contact
              </NavDropdown.Item>
              <NavDropdown.Item href="/react-portfolio/#/Resume">
                Resume
              </NavDropdown.Item>
              {/* portfolio link */}
              <NavDropdown.Item href="/react-portfolio/#/Portfolio">
                Portfolio
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
