import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar/NavBar";


export const Layout = () => {
  return (
    <div className="stilo">
      <Navbar />
      <Outlet />
    </div>
  );
};
