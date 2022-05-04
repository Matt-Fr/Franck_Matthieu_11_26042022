import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../logo.svg";
import logoFooter from "../logoFooter.svg";

const SharedLayout = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo" />
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="footer">
        <img className="footer-img" src={logoFooter} alt="logo" />
        <p className="footer-text">© 2020 Kasa. All rights reserved</p>
      </footer>
    </>
  );
};

export default SharedLayout;
