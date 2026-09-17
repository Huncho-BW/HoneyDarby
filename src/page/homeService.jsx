import React from "react";
import { NavLink, useLocation } from "react-router";
export default function HomeService() {
  const homeService = [
    {
      title: "Weddings",
      name: "Elegant feasts for your most memorable day.",
    },
    {
      title: "Birthday & Celebration",
      name: "Delicious menus made for joyful moments.",
    },
    {
      title: "Corporate Event",
      name: "Professional catering for memorable gatherings.",
    },
    {
      title: "Private Event",
      name: "Thoughtful menus and service for intimate occasions.",
    },
    {
      title: "Small Chop",
      name: "Beautiful bites crafted for every occasion.",
    },
    {
      title: "Custom Catering",
      name: "A tailored menu designed around your occasion.",
    },
  ];
  return (
    <div className="home-service-header">
      <div className="home-service">
        <div>
          <p className="text-[#9a5b32] text-[12px] tracking-[3px] leading-[133%] font-['manrope']">
            What we cater
          </p>
          <h1 className="text-[#000000] text-[48px] font-[600]  leading-[100%] font-['Cormorant_Garamond']">
            Every kind of gathering.
          </h1>
        </div>
        <div>
          <NavLink
            to={"service"}
            className="text-[#4a2e22] cursor-pointer hover:underline text-[14px] font-[300]  leading-[143%] font-['manrope']"
          >
            See all Services
          </NavLink>
        </div>
      </div>

      <div>
        <div className="home-service-grid">
          {homeService.map((item) => (
            <div>
              <h1 className="text-[#2d211b] text-[24px] font-[300]  leading-[133%] font-['Cormorant_Garamond']">
                {item.title}
              </h1>
              <p className="text-[#6f5b4b] text-[14px] leading-[143%] font-['manrope']">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
