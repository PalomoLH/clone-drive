import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand as={Link} to="/">
        Palomo Drive
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/profile">Profile</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavbarComponent;
