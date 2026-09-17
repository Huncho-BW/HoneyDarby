import React from "react";
import bgpreview from "../assets/download1.jpeg";
import { NavLink, useLocation } from "react-router";
export default function HomeClass() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="home-class-header">
      <div className="class-bg">
        <img src={bgpreview} alt="" />
      </div>

      <div className=" class-col">
        <div>
          <span className="text-[#9a5b32] text-[12px] tracking-[3px] leading-[133%] font-['manrope']">
            The menu
          </span>
        </div>
        <div className="text-[#000000] text-[48px] font-[600]  leading-[100%] font-['Cormorant_Garamond']">
          <h1>Nigerian classics, beautifully catered.</h1>
        </div>
        <div>
          <p
            className="text-[#
6f5b4b] text-[16px]  leading-[200%] font-['manrope']"
          >
            From party jollof and rich soups to proteins, small chops, and a
            familiar continental selection—every menu is made to suit the table
            in front of it.
          </p>
        </div>
        <NavLink className="navbar-border" to={"menu"}>
          {({ isActive }) => (
            <div
              className={`navbar-border bg-[#fff9f0] cursor-pointer ${isActive ? "bg-[#E6D5BE]" : "bg-[#000000] hover:bg-[#E6D5BE]"}`}
            >
              <button
                className={`navbar-text  cursor-pointer ${
                  isActive
                    ? "text-[#000000]"
                    : isHome
                      ? "text-[#2d211b] hover:text-[#000000]"
                      : "text-[#fff9f0] hover:text-[#000000]"
                }`}
              >
                Explore Our Menu
              </button>
            </div>
          )}
        </NavLink>
      </div>
    </div>
  );
}
