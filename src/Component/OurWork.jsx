import React from "react";
import { motion } from "motion/react";

import previewTwo from "../assets/preview2.jpeg";
import previewOne from "../assets/preview1.jpeg";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import image6 from "../assets/image6.jpeg";
import image7 from "../assets/image7.jpeg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpeg";
import image10 from "../assets/image10.jpeg";
import image11 from "../assets/image11.jpeg";
import image12 from "../assets/image12.jpeg";
import image13 from "../assets/image13.jpeg";
import image17 from "../assets/image17.jpeg";
import image20 from "../assets/image20.jpeg";

export default function OurWork() {
  const projects = [
    {
      title: "Wedding Event plan",
      image: image1,
      orientation: "portrait",
      name: "Wedding Reception",
      location: "Lagos, Nigeria",
    },
    {
      title: "Delivery Package",
      image: image12,
      orientation: "landscape",
      name: "Birthday Celebration",
      location: "Lagos, Nigeria",
    },
    {
      title: "Delivery Package",
      image: image10,
      orientation: "landscape",
      name: "Private Dinner",
      location: "Lekki, Lagos",
    },
    {
      title: "Delivery Package  ",
      image: image8,
      orientation: "portrait",
      name: "Wedding Celebration",
      location: "Ikoyi, Lagos",
    },
    {
      title: "Delivery Package  ",
      image: image3,
      orientation: "portrait",
      name: "Wedding Celebration",
      location: "Ikoyi, Lagos",
    },
    {
      title: "Delivery Package",
      image: image17,
      orientation: "landscape",
      name: "Private Dinner",
      location: "Lekki, Lagos",
    },
    {
      title: "Delivery Package",
      image: image11,
      orientation: "landscape",
      name: "Private Dinner",
      location: "Lekki, Lagos",
    },
    {
      title: "Delivery Package  ",
      image: image9,
      orientation: "portrait",
      name: "Wedding Celebration",
      location: "Ikoyi, Lagos",
    },
    {
      title: "Delivery Package  ",
      image: image13,
      orientation: "portrait",
      name: "Wedding Celebration",
      location: "Ikoyi, Lagos",
    },
    {
      title: "Delivery Package",
      image: image20,
      orientation: "landscape",
      name: "Private Dinner",
      location: "Lekki, Lagos",
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

  return (
    <>
      <section className="ourwork-pad">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <span className="text-[#9a5b32] text-left text-[12px] tracking-[3px] leading-[133%] font-['manrope']">
            Our Work
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="text-left font-['Cormorant_Garamond'] text-[#000000] text-[72px] font-[600] leading-[100%]"
          >
            Tables worth remembering.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="text-left text-[#6f5b4b] text-[16px] leading-[200%] font-['manrope']"
          >
            A selection of HoneyDerby occasions, from intimate celebrations to
            generous wedding tables. Open any event to experience the full
            gallery
          </motion.p>
        </motion.div>
      </section>

      <section className="ourwork-pad">
        <div className="ourproject-display">
          {rows.map((row, rowIndex) => (
            <motion.div
              className="project-row"
              key={rowIndex}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
                delay: rowIndex * 0.1,
                ease: "easeOut",
              }}
            >
              {row.map((item, itemIndex) => (
                <motion.div
                  className={
                    item.orientation === "portrait" ? "portiat-sp" : "land-dp"
                  }
                  key={item.name}
                  initial={{
                    opacity: 0,
                    y: 40,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: itemIndex * 0.15,
                    ease: "easeOut",
                  }}
                >
                  <div>
                    <motion.img
                      src={item.image}
                      alt=""
                      initial={{
                        scale: 1.08,
                      }}
                      whileInView={{
                        scale: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeOut",
                      }}
                    />

                    <motion.div
                      className="project-image"
                      initial={{
                        opacity: 0,
                        y: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.6,
                        delay: 0.2,
                        ease: "easeOut",
                      }}
                    >
                      <h1 className="font-['Cormorant_Garamond'] text-[#2d211b] text-[30px] font-[300] leading-[120%]">
                        {item.title}
                      </h1>

                      <h1 className="text-[#6f5b4b] text-[14px] leading-[143%] font-['manrope']">
                        Location: {item.location}
                      </h1>

                      <h1 className="mt-2 text-[#9a5b32] text-[12px] tracking-[2px] leading-[133%] font-['manrope']">
                        Event: {item.name}
                      </h1>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
