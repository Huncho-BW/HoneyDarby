import React from "react";
import { motion } from "motion/react";
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
      {/* SECTION 1 */}
      <section className="about-section1 about-padd">
        <motion.div
          className="flex flex-col justify-center item-center gap-[20px]"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
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
        </motion.div>

        <motion.div
          className="about-img"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: "easeOut",
          }}
        >
          <img src={previewOne} alt="HoneyDerby catering" />
        </motion.div>
      </section>

      {/* SECTION 2 */}
      <div className="about-section2-bg">
        <section className="about-padd about-section1">
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            <h1 className="text-[#9a5b32] text-[12px] tracking-[3px] leading-[133%] font-['manrope']">
              The story
            </h1>

            <h2 className="font-['Cormorant_Garamond'] text-[#2d211b] text-[38px] font-[600] leading-[111%]">
              Food, service, and moments worth remembering.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: "easeOut",
            }}
          >
            <p className="text-[#6f5b4b] text-[16px] leading-[200%] font-['manrope']">
              With professional training in catering and experience in event
              planning, HoneyDerby creates delicious food and thoughtfully
              coordinated experiences for every occasion.
            </p>
          </motion.div>
        </section>
      </div>

      {/* SECTION 3 */}
      <section className="about-section3 about-padd">
        <motion.span
          className="divider"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        ></motion.span>

        <div className="about-grid">
          {foodQuilty.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: "easeOut",
              }}
            >
              <span className="text-[#9a5b32] text-[12px] tracking-[2px] leading-[133%] font-['manrope']">
                {item.id}
              </span>

              <h1 className="font-['Cormorant_Garamond'] text-[#2d211b] text-[30px] font-[300] leading-[120%]">
                {item.title}
              </h1>

              <p className="text-[#6f5b4b] text-[14px] leading-[171%] font-['manrope']">
                {item.subText}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
