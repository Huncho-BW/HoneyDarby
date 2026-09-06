import React from "react";
import { NavLink } from "react-router";
export default function Navbar() {
  return (
    <div>
      <div>
        <h1>HoneyDerby</h1>
      </div>

      <div>
        <NavLink to={"service"}>
          <button>Service</button>
        </NavLink>
        <NavLink to={"menu"}>
          <button>Menu</button>
        </NavLink>
        <NavLink to={"OurWork"}>
          <button>Our Work</button>
        </NavLink>
        <NavLink to={"About"}>
          <button>About</button>
        </NavLink>
        <NavLink to={"contact"}>
          <button>Contact</button>
        </NavLink>
      </div>

      <div>
        <NavLink to={"makeIq"}>
          <div>
            <button>Make an Inquiry</button>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
