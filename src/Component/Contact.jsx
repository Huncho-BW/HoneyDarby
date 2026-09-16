import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { href } from "react-router";
export default function Contact() {
  const contact = [
    {
      logo: <FaWhatsapp />,
      name: "Whatapp",
      subtext: "Contact handle to be confirmed",
      link: "",
    },
    {
      logo: <FiPhone />,
      name: "Phone",
      subtext: "Number to be confirmed",
      link: "",
    },
    {
      logo: <FaTiktok />,
      name: "Tiktok",
      subtext: "Handle to be comfired",
      link: "",
    },
  ];
  return (
    <div className=" contact-padd">
      <section>
        <span className="text-[#9a5b32] text-[12px] tracking-[3px] leading-[133%] font-['manrope']  ">
          Contact & inquiry
        </span>
        <h1 className="  font-['Cormorant_Garamond'] text-[#000000] text-[60px] font-[600] leading-[100%] ">
          Tell us what you’re planning.
        </h1>
        <p className="text-[#6f5b4b]  text-[16px]  leading-[175%] font-['manrope']  ">
          This is a front-end inquiry concept. Submit behavior can later route
          to WhatsApp, phone, or HoneyDerby’s chosen channel.
        </p>

        <div className="contact-grid">
          {contact.map((item) => (
            <a href={item.link}>
              <div className="contact-border">
                <span className="text-[#4a2e22]">{item.logo}</span>
                <h1 className="text-[#2d211b]  text-[16px]  leading-[150%] font-['manrope']  ">
                  {item.name}
                </h1>
                <p className="text-[#6f5b4b]  text-[14px]  leading-[143%] font-['manrope']  ">
                  {item.subtext}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="contact-2">
        <form action="" className="flex flex-col gap-[20px]">
          <div className="contact-2-grid">
            <div className="contact-space">
              <label htmlFor="">Name</label>
              <div className="inputBorder">
                <input type="text " placeholder="Full name" name="" id="" />
              </div>
            </div>
            <div className="contact-space">
              <label htmlFor="">Phone Number</label>
              <div className="inputBorder">
                <input
                  type="text "
                  placeholder=" Your preferred number"
                  name=""
                  id=""
                />
              </div>
            </div>
          </div>
          <div className="contact-2-grid">
            <div className="contact-space">
              <label htmlFor="">Event type</label>
              <div className="inputBorder">
                <select name="" id="">
                  <option value="choose an event"></option>
                </select>
              </div>
            </div>

            <div className="contact-space">
              <label htmlFor="">Event Date</label>

              <div className="inputBorder">
                <input type="date" name="" id="" />
              </div>
            </div>
          </div>
          <div className="contact-2-grid">
            <div className="contact-space">
              <label htmlFor="">Number of Guest </label>
              <div className="inputBorder">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Estimated guest number"
                />
              </div>
            </div>
            <div className="contact-space">
              <label htmlFor="">Event Location </label>
              <div className="inputBorder">
                <input type="text" name="" id="" placeholder="City or venue" />
              </div>
            </div>
          </div>

          <div className="contact-space">
            <label htmlFor="">service needed</label>
            <div className="inputBorder">
              <input
                type="text"
                placeholder="· Catering, small chop"
                name=""
                id=""
              />
            </div>
          </div>

          <div className="contact-space">
            <label htmlFor="Additional Message"></label>
            <div className="textAreaborder">
              <textarea name="" id=""></textarea>
            </div>
          </div>

          <div className="contact-button-border">
            <button>Make inQuiry</button>
          </div>
        </form>
      </section>
    </div>
  );
}
