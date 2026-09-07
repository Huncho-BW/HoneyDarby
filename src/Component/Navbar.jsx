import React from "react";
import { NavLink } from "react-router";
export default function Navbar() {
  return (
    <div className="navbar">
      <NavLink to={"home"}>
        <div>
          <h1 className="navbar-homePage">HoneyDerby</h1>
        </div>
      </NavLink>

      <div className="flex gap-[24px]">
        <NavLink to={"service"}>
          <button className="navbar-text">Service</button>
        </NavLink>
        <NavLink to={"menu"}>
          <button className="navbar-text">Menu</button>
        </NavLink>
        <NavLink to={"OurWork"}>
          <button className="navbar-text">Our Work</button>
        </NavLink>
        <NavLink to={"About"}>
          <button className="navbar-text">About</button>
        </NavLink>
        <NavLink to={"contact"}>
          <button className="navbar-text">Contact</button>
        </NavLink>
      </div>

      <div>
        <NavLink to={"makeIq"}>
          <div className="navbar-border">
            <button>Make an Inquiry</button>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
