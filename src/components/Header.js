import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { Link } from "@reach/router";

const Header = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand>
      <img
        src="/wufoo-logo.svg"
        width="100"
        height="40"
        className="d-inline-block align-top"
        alt="Wufoo logo"
      />
    </Navbar.Brand>
    <Nav>
      <Link to="/" className="nav-link">
        Forms
      </Link>
    </Nav>
  </Navbar>
);

export default Header;
