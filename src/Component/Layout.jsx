import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "./Navbar";
import Home from "./Home";
import bgpreview from "../assets/bg-preview.jpeg";
import previewTwo from "../assets/preview2.jpeg";
import previewOne from "../assets/preview1.jpeg";
import HeroSection from "../page/heroSection";
export default function Layout() {
  const location = useLocation();

  if (location.pathname === "/") {
    return (
      <>
        <div
          className="bg-preview"
          style={{ backgroundImage: `url(${bgpreview})` }}
        >
          <Navbar />
          <div className="hero-main">
            <HeroSection />
          </div>
        </div>

        <Home />
      </>
    );
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
}
