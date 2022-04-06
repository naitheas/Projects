import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../stylesheets/NavBar.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" className="NavBar">
      <Container className="NavContainer">
        <Nav>
          <NavLink exact to="/" className="NavLink">
            Home
          </NavLink>
          <NavLink exact to="/cheetos" className="NavLink">
            Cheetos
          </NavLink>
          <NavLink exact to="/flaminHotCheetos" className="NavLink">
            Flamin' Hot Cheetos
          </NavLink>
          <NavLink exact to="/hersheys" className="NavLink">
            Hershey's Bar
          </NavLink>
          <NavLink exact to="/oreos" className="NavLink">
            Oreos
          </NavLink>
          <NavLink exact to="/chocOreos" className="NavLink">
            Chocolate Oreos
          </NavLink>
          <NavLink exact to="/jellyBeans" className="NavLink">
            Jelly Beans
          </NavLink>
          <NavLink exact to="/reesesMix" className="NavLink">
            Reese's Mix
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;