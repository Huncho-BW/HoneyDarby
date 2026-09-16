import React from "react";
import previewOne from "../assets/preview1.jpeg";
export default function About() {
  const foodQuilty = [
    {
      id: "01",
      title: "  Food quality",
      subText: "  Ingredients and menus chosen with real guests in mind.",
    },
    {
      id: "02",
      title: "Professional service",
      subText: "A prepared, composed approach from planning to the table",
    },
    {
      id: "03",
      title: "Event preparation",
      subText: "Thoughtful coordination for the occasion you are creatings",
    },
  ];
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
          {foodQuilty.map((item) => (
            <div>
              <span className="text-[#9a5b32]  text-[12px] tracking-[2px] leading-[133%] font-['manrope']  ">
                {item.id}
              </span>
              <h1 className="  font-['Cormorant_Garamond'] text-[#2d211b] text-[30px] font-[300] leading-[120%] ">
                {item.title}
              </h1>
              <p className="text-[#6f5b4b]  text-[14px]  leading-[171%] font-['manrope']  ">
                {item.subText}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
