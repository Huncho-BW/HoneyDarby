import React from "react";
import previewOne from "../assets/preview1.jpeg";
export default function About() {
  return (
    <>
      <section className="about-section1 about-padd">
        <div className="flex flex-col justify-center item-center gap-[20px]">
          <span className="text-[#9a5b32] text-[12px] tracking-[3px] leading-[133%] font-['manrope']  ">
            {" "}
            About HoneyDerby
          </span>
          <h1 className="  font-['Cormorant_Garamond'] text-[#000000] text-[72px] font-[600] leading-[100%] ">
            Good food is how we hold people close.
          </h1>
          <p className="  text-[#6f5b4b] text-[16px]  leading-[200%] font-['manrope']  ">
            HoneyDerby is built around the care that goes into feeding people
            well—thoughtfully, beautifully, and with an understanding of what an
            occasion means
          </p>
        </div>

        <div>
          <img src={previewOne} alt="" />
          <p>Temporary founder photography placeholder</p>
        </div>
      </section>

      <div className="about-section2-bg">
        <section className="about-padd about-section1 ">
          <div>
            <h1 className="text-[#9a5b32]  text-[12px] tracking-[3px] leading-[133%] font-['manrope']  ">
              The story
            </h1>
            <h2 className="  font-['Cormorant_Garamond'] text-[#2d211b] text-[38px] font-[600] leading-[111%] ">
              A story waiting for its true voice.
            </h2>
          </div>
          <div>
            <p className="text-[#6f5b4b]  text-[16px]  leading-[200%] font-['manrope']  ">
              Founder story, professional background, experience milestones,
              awards, and certifications have not yet been provided. This
              section is intentionally designed as a warm, honest placeholder
              for HoneyDerby’s real story
            </p>
          </div>
        </section>
      </div>

      <section className="about-section3 about-padd">
        <span className="divider"></span>
        <div className="about-grid">
          <div className="about-grid">
            <div>
              <span className="text-[#9a5b32]  text-[12px] tracking-[2px] leading-[133%] font-['manrope']  ">
                01
              </span>
              <h1 className="  font-['Cormorant_Garamond'] text-[#2d211b] text-[30px] font-[300] leading-[120%] ">
                Food quality
              </h1>
              <p className="text-[#6f5b4b]  text-[14px]  leading-[171%] font-['manrope']  ">
                Food quality
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
