import React from "react";
import previewOne from "../assets/preview1.jpeg";
export default function Menu() {
  const soups = [
    "Efo Riro Soup",
    "Oha Soup",
    "Bitter Leaf Soup",
    "Fish Soup",
    "Banga Soup",
    "Egusi Soup",
    "Ewedu & Gbegiri",
    "Ogbono Soup",
  ];

  const proteins = ["Beef", "Cow Leg", "Turkey", "Chicken", "Fish"];

  const mainDishes = [
    "White Rice",
    "Jollof Rice",
    "Fried Rice",
    "Ofada Rice",
    "Asaro",
    "Beans & Plantain",
    "Smokey Jollof Rice",
    "Asun Jollof Rice",
    "Coconut Rice",
  ];

  const continentalDishes = [
    "Rice",
    "Pasta",
    "Spaghetti",
    "Macaroni",
    "Potatoes",
    "French Fries",
    "Mashed Potatoes",
    "Bread",
    "Beans",
    "Vegetables",
    "Salad",
    "Chicken",
    "Fish",
    "Beef",
    "Eggs",
  ];
  return (
    <>
      <section className=" menu-section1 section-menu-padd">
        <div className="flex flex-col gap-[20px]">
          <span className="text-[#9a5b32] text-left text-[12px] tracking-[3px] leading-[133%] font-['manrope']  ">
            Our Menu
          </span>
          <h1 className=" text-left font-['Cormorant_Garamond'] text-[#000000] text-[72px] font-[600] leading-[100%] ">
            {" "}
            A menu made for gathering.
          </h1>
          <p className=" text-left text-[#6f5b4b] text-[16px]  leading-[200%] font-['manrope']  ">
            A starting point for event planning—not an online order list. Final
            dishes and quantities are shaped around your occasion
          </p>
        </div>

        <img src={previewOne} alt="" />
      </section>

      <div className="menu-food-bg">
        <section className="menu-section2 section-menu-padd">
          <h1 className="text-[#9a5b32] text-left text-[12px] tracking-[3px] leading-[133%] font-['manrope']  ">
            Nigerian / African cuisine
          </h1>

          <div className="menu-grid">
            <div>
              <h1 className=" text-left font-['Cormorant_Garamond'] text-[#2d211b] text-[24px] font-[300] leading-[133%] ">
                Rice & main dishes
              </h1>
              <div>
                {mainDishes.map((item) => (
                  <>
                    <h1 className="text-[#2d211b]  text-[14px]  leading-[143%] font-['manrope']  ">
                      {item}
                    </h1>
                    <span className="divider"></span>
                  </>
                ))}
              </div>
            </div>
            <div>
              <h1 className=" text-left font-['Cormorant_Garamond'] text-[#2d211b] text-[24px] font-[300] leading-[133%] ">
                Soups & sides
              </h1>
              <div>
                {soups.map((item) => (
                  <>
                    <h1 className="text-[#2d211b]  text-[14px]  leading-[143%] font-['manrope']  ">
                      {item}
                    </h1>
                    <span className="divider"></span>
                  </>
                ))}
              </div>
            </div>
            <div>
              <h1 className=" text-left font-['Cormorant_Garamond'] text-[#2d211b] text-[24px] font-[300] leading-[133%] ">
                Proteins & bites
              </h1>
              <div>
                {proteins.map((item) => (
                  <>
                    <h1 className="text-[#2d211b]  text-[14px]  leading-[143%] font-['manrope']  ">
                      {item}
                    </h1>
                    <span className="divider"></span>
                  </>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="menu-section3 section-menu-padd ">
        <span className="text-[#9a5b32] text-left text-[12px] tracking-[3px] leading-[133%] font-['manrope']  ">
          International / Continental
        </span>
        <h1 className=" text-left font-['Cormorant_Garamond'] text-[#000000] text-[48px] font-[600] leading-[100%] ">
          Familiar favourites, thoughtfully served
        </h1>

        <div className="menu-grid">
          {continentalDishes.map((item) => (
            <div>
              <h1 className="text-[#2d211b]  text-[16px]  leading-[143%] font-['manrope']  ">
                {item}
              </h1>
            </div>
          ))}
        </div>
      </section>

      <div className="menu-plan-bg">
        <section className="menu-section4 section-menu-padd">
          <div className="">
            <h1 className=" text-left font-['Cormorant_Garamond'] text-[#fff9f0] text-[48px] font-[600] leading-[100%] ">
              Planning an event?
            </h1>
            <p className="text-[#fff9f0] text-left text-[16px]  leading-[150%] font-['manrope']  ">
              Tell us about your occasion and we’ll help shape the menu
            </p>
            <div className="navbar-border bg-[#000000]">
              <button className="navbar-text text-[#fff9f0]">
                make an Inquiry
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
