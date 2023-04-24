import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/NavBar/NavBar";

export const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
