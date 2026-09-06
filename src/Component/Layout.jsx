import React from "react";

import Navbar from "./Navbar";

import { Outlet } from "react-router";
export default function Layout() {
  return (
    <div>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
