import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import logo from "../logo.svg";

const SharedLayout = () => {
  return (
    <>
      <header>
        <img src={logo} alt="Logo" />
        <Navbar></Navbar>
      </header>
      <Outlet></Outlet>
      <footer></footer>
    </>
  );
};

export default SharedLayout;
