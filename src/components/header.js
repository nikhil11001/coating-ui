import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import "../css/home.css";
import logo from "../images/large.png";

export const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand>
          <Image src={logo} className="siya-logo" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            <Link to="/home">HOME</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/product">SERVICES</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/about">ABOUT US</Link>
          </Nav.Link>

          <Nav.Link>
            <Link to="/contact">CONTACT</Link>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
