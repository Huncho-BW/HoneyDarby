import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { motion } from "motion/react";
export default function HeroSection() {
  const location = useLocation();

  const isHome = location.pathname === "/";

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/service");
  };
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="hero-header"
    >
      <div>
        <span className="text-[#fff9f0] text-[12px] tracking-[4px] leading-[133%] font-['manrope']  ">
          Nigerian event catering
        </span>
      </div>
      <div>
        <h1 className="font-['Cormorant_Garamond'] text-[#fff9f0] text-[96px] max-[767px]:text-[76px]  font-[600] leading-[100%] ">
          Made for the moments everyone remembers
        </h1>
      </div>
      <div>
        <span className="text-[#fff9f0] text-[16px] leading-[175%] font-['manrope']  ">
          Thoughtful food, seamless service, and beautifully generous tables for
          the occasions that matter most.
        </span>
      </div>

      <div className=" max-[798px]:flex-col  flex  gap-[16px] items-center mt-[20px] pb-[50px]">
        <NavLink className="navbar-border" to={"/makeIq"}>
          {({ isActive }) => (
            <div
              className={`navbar-border  cursor-pointer bg-[#fff9f0]  ${isActive ? "bg-[#E6D5BE]" : "bg-[#000000] hover:bg-[#E6D5BE]"}`}
            >
              <button
                className={`navbar-text cursor-pointer ${
                  isActive
                    ? "text-[#000000]"
                    : isHome
                      ? "text-[#2d211b] hover:text-[#000000]"
                      : "text-[#fff9f0] hover:text-[#000000]"
                }`}
              >
                Make an Inquiry
              </button>
            </div>
          )}
        </NavLink>

        <div className="navbar-b-transparent hover:bg-[#E6D5BE] cursor-pointer hover:text-[#000000] ">
          <button
            onClick={handleClick}
            className="leading-[143%] cursor-pointer text-[#fff9f0]  hover:text-[#000000]"
          >
            Explore Our Services
          </button>
        </div>
      </div>
    </motion.div>
  );
}
