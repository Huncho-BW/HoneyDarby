import React from "react";
import previewOne from "../assets/sweet.jpg";

export default function About() {
  const foodQuilty = [
    {
      id: "01",
      title: "Food quality",
      subText: "Fresh ingredients and thoughtful menus for every guest.",
    },
    {
      id: "02",
      title: "Professional service",
      subText: "A warm, composed approach from planning to the table.",
    },
    {
      id: "03",
      title: "Event preparation",
      subText: "Careful coordination to bring every occasion together.",
    },
  ];

  return (
    <>
      <section className="about-section1 about-padd">
        <div className="flex flex-col justify-center item-center gap-[20px]">
          <span className="text-[#9a5b32] text-[12px] tracking-[3px] leading-[133%] font-['manrope']">
            About HoneyDaby
          </span>

          <h1 className="font-['Cormorant_Garamond'] text-[#000000] text-[72px] font-[600] leading-[100%]">
            Good food is how we hold people close.
          </h1>

          <p className="text-[#6f5b4b] text-[16px] leading-[200%] font-['manrope']">
            HoneyDaby brings together thoughtful catering, beautiful
            presentation, and warm service to make every occasion special.
          </p>
        </div>

        <div className="about-img">
          <img src={previewOne} alt="HoneyDerby catering" />
        </div>
      </section>

      <div className="about-section2-bg">
        <section className="about-padd about-section1">
          <div>
            <h1 className="text-[#9a5b32] text-[12px] tracking-[3px] leading-[133%] font-['manrope']">
              The story
            </h1>

            <h2 className="font-['Cormorant_Garamond'] text-[#2d211b] text-[38px] font-[600] leading-[111%]">
              Food, service, and moments worth remembering.
            </h2>
          </div>

          <div>
            <p className="text-[#6f5b4b] text-[16px] leading-[200%] font-['manrope']">
              With professional training in catering and experience in event
              planning, HoneyDerby creates delicious food and thoughtfully
              coordinated experiences for every occasion.
            </p>
          </div>
        </section>
      </div>

      <section className="about-section3 about-padd">
        <span className="divider"></span>

        <div className="about-grid">
          {foodQuilty.map((item) => (
            <div key={item.id}>
              <span className="text-[#9a5b32] text-[12px] tracking-[2px] leading-[133%] font-['manrope']">
                {item.id}
              </span>

              <h1 className="font-['Cormorant_Garamond'] text-[#2d211b] text-[30px] font-[300] leading-[120%]">
                {item.title}
              </h1>

              <p className="text-[#6f5b4b] text-[14px] leading-[171%] font-['manrope']">
                {item.subText}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
