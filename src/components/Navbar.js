import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-el">
        Accueil
      </NavLink>
      <NavLink to="about" className="navbar-el">
        À Propos
      </NavLink>
    </nav>
  );
};

export default Navbar;
