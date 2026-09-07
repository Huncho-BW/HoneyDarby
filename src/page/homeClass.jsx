import React from "react";
import bgpreview from "../assets/bg-preview.jpeg";
export default function HomeClass() {
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
        <div>
          <button>Explore Our Menu</button>
        </div>
      </div>
    </div>
  );
}
