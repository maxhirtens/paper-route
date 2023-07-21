import React, { useContext } from "react";
// import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
// import UserContext from "../auth/UserContext";

const NavBar = ({ logout }) => {
  //   const { currentUser } = useContext(UserContext);

  return (
    <div>
      <nav className="navbar navbar-brand">
        <Link className="navbar-brand" to="/">
          Quickreader
        </Link>
        <Link className="navbar" to="/nyt">
          New York Times
        </Link>
        <ul className="navbar-nav ml-auto">
          <li>
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
