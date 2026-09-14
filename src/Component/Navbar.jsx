import React from "react";
import { NavLink, useLocation } from "react-router";
export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  console.log("Log location", isHome);
  return (
    <div className="navbar">
      <NavLink to={"/"}>
        <div>
          <h1
            className={`navbar-homePage ${isHome ? "text-[#fff9f0]" : "text-[#000000]"}`}
          >
            HoneyDerby
          </h1>
        </div>
      </NavLink>

      <div className="flex gap-[24px]">
        <NavLink to={"service"}>
          <button
            className={`navbar-text ${isHome ? "text-[#fff9f0]" : "text-[#000000]"}`}
          >
            Service
          </button>
        </NavLink>
        <NavLink to={"menu"}>
          <button
            className={`navbar-text ${isHome ? "text-[#fff9f0]" : "text-[#000000]"}`}
          >
            Menu
          </button>
        </NavLink>
        <NavLink to={"OurWork"}>
          <button
            className={`navbar-text ${isHome ? "text-[#fff9f0]" : "text-[#000000]"}`}
          >
            Our Work
          </button>
        </NavLink>
        <NavLink to={"About"}>
          <button
            className={`navbar-text ${isHome ? "text-[#fff9f0]" : "text-[#000000]"}`}
          >
            About
          </button>
        </NavLink>
        <NavLink to={"contact"}>
          <button
            className={`navbar-text ${isHome ? "text-[#fff9f0]" : "text-[#000000]"}`}
          >
            Contact
          </button>
        </NavLink>
      </div>

      <div>
        <NavLink to={"makeIq"}>
          <div
            utton
            className={`navbar-border ${isHome ? "bg-[#fff9f0]" : "bg-[#000000]"}`}
          >
            <button
              className={`navbar-text ${isHome ? "text-[##2d211b]" : "text-[#fff9f0]"}`}
            >
              Make an Inquiry
            </button>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
