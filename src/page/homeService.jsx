import React from "react";

export default function HomeService() {
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
          <button className="text-[#4a2e22] text-[14px] font-[300]  leading-[143%] font-['manrope']">
            See all Services
          </button>
        </div>
      </div>

      <div>
        <div className="pt-[20px]">
          <h1 className="text-[#2d211b] text-[24px] font-[300]  leading-[133%] font-['Cormorant_Garamond']">
            Weddings
          </h1>
          <p className="text-[#6f5b4b] text-[14px] leading-[143%] font-['manrope']">
            A generous feast for your most important yes.
          </p>
        </div>
      </div>
    </div>
  );
}
