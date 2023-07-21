import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

const NavBar = () => {
  return (
    <Navbar className="my-2" color="secondary" dark>
      <NavbarBrand href="/">Quickreader</NavbarBrand>
    </Navbar>
  );
};

export default NavBar;
