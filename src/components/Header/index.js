import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header({setPage}) {
  return (
    <>
      <Navbar expand="lg">
        <Nav className="about-me ms-auto">
          <Link to="/about">
            <Nav.Link href="/react-portfolio/about" className="navbar-link" onClick={() => { setPage("about"); }}>About Me</Nav.Link>
          </Link>
          <Link to="/portfolio">
            <Nav.Link href="/react-portfolio/portfolio" className="navbar-link" onClick={() => { setPage("portfolio"); }} >Portfolio</Nav.Link>
          </Link>
          <Link to="resume">
            <Nav.Link href="/react-portfolio/resume"  className="navbar-link"  onClick={() => { setPage("resume"); }}>Resume</Nav.Link>
          </Link>
          <Link to="contact">
            <Nav.Link  href="/react-portfolio/contact"  className="navbar-link"  onClick={() => { setPage("contact"); }}>Contact</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;