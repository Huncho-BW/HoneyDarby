import React from "react";

import previewOne from "../assets/preview1.jpeg";
import previewTwo from "../assets/preview2.jpeg";

export default function Service() {
  return (
    <>
      <section className="section-one">
        <>
          <div>
            <span className="text-[#9a5b32] text-left text-[12px] tracking-[3px] leading-[133%] font-['manrope']  ">
              Services
            </span>
            <h1 className=" text-left font-['Cormorant_Garamond'] text-[#000000] text-[72px] font-[600] leading-[100%] ">
              Catering shaped <br />
              around your occasion.
            </h1>
            <p className=" text-left text-[#6f5b4b] text-[16px]  leading-[200%] font-['manrope']  ">
              Every HoneyDerby service begins with listening: the people, the
              pace, the food you want everyone to remembe
            </p>
          </div>
        </>
      </section>

      <section className="section-two">
        <div className="wedding-service">
          <img src={previewOne} alt="" />
          <div className="section-center">
            <span className="text-[#9a5b32] text-left text-[12px] tracking-[2px] leading-[133%] font-['manrope']  ">
              01
            </span>
            <h1 className=" text-left font-['Cormorant_Garamond'] text-[#000000] text-[48px] font-[600] leading-[100%] ">
              Wedding catering
            </h1>
            <p className="text-[#9a5b32] text-left text-[16px] tracking-[2px] leading-[175%] font-['manrope']  ">
              A composed, generous food experience for your ceremony, reception,
              and every moment in between
            </p>
            <p className="text-[#4a2e22] text-left text-[14px] tracking-[2px] leading-[143%] font-['manrope']  ">
              Inquire about weddings
            </p>
          </div>
        </div>

        <div className="celebration-service">
          <div className="section-center">
            <span className="text-[#9a5b32] text-left text-[12px] tracking-[2px] leading-[133%] font-['manrope']  ">
              02-04
            </span>
            <h1 className=" text-left font-['Cormorant_Garamond'] text-[#000000] text-[48px] font-[600] leading-[100%] ">
              Celebrations, corporate gatherings, private tables
            </h1>
            <p className="text-[#9a5b32] text-left text-[16px]  leading-[175%] font-['manrope']  ">
              Birthday feasts, confident corporate hospitality, and intimate
              events—planned with warm, professional service.
            </p>
            <div className="celeb-service">
              <p className="text-[#4a2e22] text-left text-[14px]  leading-[143%] font-['manrope']  ">
                Birthdays & celebrations
              </p>
              <p className="text-[#4a2e22] text-left text-[14px]  leading-[143%] font-['manrope']  ">
                Corporate & events
              </p>
              <p className="text-[#4a2e22] text-left text-[14px] tracking-[2px] leading-[143%] font-['manrope']  ">
                Private events
              </p>
            </div>
          </div>

          <div className="cel-img">
            <div>
              <span className="text-[#6f5b4b]  text-[12px] tracking-[2px] leading-[133%] font-['manrope']  ">
                Temporary photo placeholder
              </span>

              <img src={previewTwo} alt="" className="celeb-img" />

              <h1 className=" font-['Cormorant_Garamond'] text-[#000000] text-[36px] font-[300] leading-[111%]">
                Your event imagery will live here.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="sect-3-bg">
        <section className="section-three">
          <div>
            <span className="text-[#fff9f0] text-left text-[12px] tracking-[2px] leading-[133%] font-['manrope']  ">
              05-06
            </span>
            <h1 className=" text-left font-['Cormorant_Garamond'] text-[#fff9f0] text-[48px] font-[600] leading-[100%] ">
              Small chops & custom catering
            </h1>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[#fff9f0] text-left text-[16px]  leading-[175%] font-['manrope']  ">
              from polished welcome trays to a menu built from the ground up,
              we’ll shape the food around the way you want guests to feel.
            </p>
            <div className="navbar-border bg-[#000000]">
              <button className="navbar-text text-[#fff9f0]">
                Start an Inquiry
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
