import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Portfolio from './Portfolio';
import Footer from './Footer';

function Navigation() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#App">Walter's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#Portfolio">Portfolio</Nav.Link> */}
            {/* <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Explore" id="basic-nav-dropdown">
              <NavDropdown.Item href="#Footer">Contact</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="Portfolio">Portfolio</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
    // <div>
    //   <nav className="container">
    //     <ul className="container">
    //       <li>
    //         <a href="#About"> About</a>
    //       </li>
    //       <li>
    //         <a href="#portfolio"> Portfolio</a>
    //       </li>
    //       <li>
    //         <a href="#Resume"> Resume</a>
    //       </li>
    //       <li>
    //       <a href="#Contact"> Contact</a>
    //       </li>
    //     </ul>
    //   </nav>
    // </div>
