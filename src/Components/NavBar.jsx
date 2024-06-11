import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import "../css/Navbar.css";
import {Link,NavLink} from 'react-router-dom'
import Business from './Business/Business';
import Game  from "./Game/Game";
import World from "./World/World";
import General from "./Thought/General";
import Entertainment from "./Entertainment/Entertainment";
function MyNavbar() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="custom-navbar">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="flex">
          <Nav className="me-auto my-2 my-lg-0 flex" navbarScroll>
            <NavLink to="/" className="nav-link">Home</NavLink> 
            <NavLink to="/Game" className="nav-link" >Game</NavLink> 
            <NavLink to="/Entertainment" className="nav-link">Entertainment</NavLink> 
            <NavLink to="/Business" className="nav-link">Business</NavLink> 
            <NavLink to="/General" className="nav-link">Thought</NavLink> 
            <NavLink to="/World" className="nav-link">World</NavLink> 
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-warning">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
