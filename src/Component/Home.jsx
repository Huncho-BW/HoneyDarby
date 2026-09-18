import React from "react";
import HeroSection from "../page/heroSection";

import HomeFooter from "../page/homeFooter";
import HomeClass from "../page/homeClass";
import HomeFood from "../page/homeFood";
import HomeService from "../page/homeService";
import HomeSpecail from "../page/homeSpecail";
export default function Home() {
  return (
    <>
      <div>
        <HomeFood />

        <div className="home-service-bg">
          <HomeService />
        </div>
        <HomeClass />
        <div className="home-specail-bg">
          <HomeSpecail />
        </div>

        <HomeFooter />
      </div>
    </>
  );
}
