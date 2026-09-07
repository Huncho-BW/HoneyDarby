import React from "react";

export default function HeroSection() {
  return (
    <div className="hero-header">
      <div>
        <span className="text-[#fff9f0] text-[12px] tracking-[4px] leading-[133%] font-['manrope']  ">
          Nigerian event catering
        </span>
      </div>
      <div>
        <h1 className="font-['Cormorant_Garamond'] text-[#fff9f0] text-[96px] font-[600] leading-[100%] ">
          Made for the moments everyone remembers
        </h1>
      </div>
      <div>
        <span className="text-[#fff9f0] text-[16px] leading-[175%] font-['manrope']  ">
          Thoughtful food, seamless service, and beautifully generous tables for
          the occasions that matter most.
        </span>
      </div>

      <div className="flex gap-[16px] items-center mt-[20px]">
        <div className="navbar-border leading-[143%] ">
          <button>Make an Inquiry</button>
        </div>
        <div className="navbar-b-transparent">
          <button className="leading-[143%] ">Explore Our Services</button>
        </div>
      </div>
    </div>
  );
}
