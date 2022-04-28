import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-el">
        Accueil
      </Link>
      <Link to="about" className="navbar-el">
        À Propos
      </Link>
    </nav>
  );
};

export default Navbar;
