import React from "react";
import { motion } from "motion/react";
export default function HomeFood() {
  return (
    <div className="home-food-header">
      <motion.div
        initial={{ x: 30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{ duration: 2, delay: 1 }}
      >
        <span className="text-[#9a5b32] text-[12px] tracking-[3px] leading-[133%] font-['manrope']">
          A table with feeling
        </span>
        <div>
          <p className="text-[#000000] text-[48px] font-[600]  leading-[100%] font-['Cormorant_Garamond']">
            Food at the heart of every celebration
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: -30, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        transition={{ duration: 2 }}
      >
        <p
          className="text-[#
6f5b4b] text-[16px]  leading-[200%] font-['manrope']"
        >
          HoneyDaby Catering Service brings Nigerian flavour, considered
          presentation, and calm professional care to weddings, intimate
          gatherings, corporate events, and custom occasions
        </p>
      </motion.div>
    </div>
  );
}
