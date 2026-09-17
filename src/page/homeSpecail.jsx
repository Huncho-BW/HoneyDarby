import React from "react";
import { NavLink, useLocation } from "react-router";
export default function HomeSpecail() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="home-specail-header">
      <div>
        <span className="text-[#fff9f0] text-[12px] tracking-[4px] leading-[133%] font-['manrope'] ">
          Planning something special?
        </span>
      </div>
      <div>
        <h1 className="font-['Cormorant_Garamond'] text-[#fff9f0] text-[60px] font-[600] leading-[100%]">
          Let’s make it delicious.
        </h1>
      </div>
      <NavLink className="navbar-border" to={"makeIq"}>
        {({ isActive }) => (
          <div
            className={`navbar-border cursor-pointer bg-[#fff9f0]  ${isActive ? "bg-[#E6D5BE]" : "bg-[#000000] hover:bg-[#E6D5BE]"}`}
          >
            <button
              className={`navbar-text cursor-pointer ${
                isActive
                  ? "text-[#000000]"
                  : isHome
                    ? "text-[#2d211b] hover:text-[#000000]"
                    : "text-[#fff9f0] hover:text-[#000000]"
              }`}
            >
              Make an Inquiry
            </button>
          </div>
        )}
      </NavLink>
    </div>
  );
}
