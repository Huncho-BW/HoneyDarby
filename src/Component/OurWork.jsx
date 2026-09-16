import React from "react";
import previewTwo from "../assets/preview2.jpeg";
import previewOne from "../assets/preview1.jpeg";
export default function OurWork() {
  const projects = [
    {
      title: "Small chops",
      image: previewTwo,
      orientation: "portrait",
      name: "Wedding Reception",
      location: "Lagos, Nigeria",
    },
    {
      title: "Delivery ",
      image: previewOne,
      orientation: "landscape",
      name: "Birthday Celebration",
      location: "Lagos, Nigeria",
    },
    {
      image: previewOne,
      orientation: "landscape",
      name: "Private Dinner",
      location: "Lekki, Lagos",
    },
    {
      image: previewTwo,
      orientation: "portrait",
      name: "Wedding Celebration",
      location: "Ikoyi, Lagos",
    },
  ];

  const rows = projects.reduce((acc, item, index) => {
    const rowIndex = Math.floor(index / 2);
    if (!acc[rowIndex]) {
      acc[rowIndex] = [];
    }
    acc[rowIndex].push(item);
    return acc;
  }, []);

  console.log("log out row ", rows);
  return (
    <>
      <section className="ourwork-pad">
        <div>
          <span className="text-[#9a5b32] text-left text-[12px] tracking-[3px] leading-[133%] font-['manrope']  ">
            Our Work
          </span>
          <h1 className=" text-left font-['Cormorant_Garamond'] text-[#000000] text-[72px] font-[600] leading-[100%] ">
            Tables worth remembering.
          </h1>
          <p className=" text-left text-[#6f5b4b] text-[16px]  leading-[200%] font-['manrope']  ">
            A selection of HoneyDerby occasions, from intimate celebrations to
            generous wedding tables. Open any event to experience the full
            gallery
          </p>
        </div>
      </section>
      <section className="ourwork-pad">
        <div className="ourproject-display">
          {rows.map((row, rowIndex) => (
            <div className="project-row" key={rowIndex}>
              {row.map((item) => (
                <div
                  className={
                    item.orientation === "portrait" ? "portiat-sp" : "land-dp"
                  }
                  key={item.name}
                >
                  <div>
                    <img src={item.image} alt="" />
                    <div className="project-image">
                      <h1 className="  font-['Cormorant_Garamond'] text-[#2d211b] text-[30px] font-[300] leading-[120%] ">
                        {item.title}
                      </h1>
                      <h1 className="text-[#6f5b4b]  text-[14px]  leading-[143%] font-['manrope']  ">
                        Location: {item.location}
                      </h1>
                      <h1 className=" mt-2 text-[#9a5b32]  text-[12px] tracking-[2px] leading-[133%] font-['manrope']  ">
                        Event: {item.name}
                      </h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
