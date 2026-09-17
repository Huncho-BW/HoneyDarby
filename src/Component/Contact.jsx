import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guests: "",
    location: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const events = [
    "Wedding",
    "Birthday",
    "Corporate Event",
    "Burial",
    "Naming Ceremony",
    "Graduation",
    "House Party",
    "Introduction",
    "Other",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove the error for the field once the user starts correcting it
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Remove previous submission messages when the user edits the form
    if (submitStatus) {
      setSubmitStatus("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter your phone number";
    }

    if (!formData.eventType) {
      newErrors.eventType = "Please select an event type";
    }

    if (!formData.eventDate) {
      newErrors.eventDate = "Please select an event date";
    }

    if (!formData.guests.trim()) {
      newErrors.guests = "Please enter the estimated number of guests";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Please enter the event location";
    }

    if (!formData.service.trim()) {
      newErrors.service = "Please enter the service you need";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      await emailjs.send("honeyderby_gmail", "template_h6buzn5", formData, {
        publicKey: "oPGUkVQ4Lhn57aQ-o",
      });

      setSubmitStatus("success");

      setFormData({
        name: "",
        phone: "",
        eventType: "",
        eventDate: "",
        guests: "",
        location: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contact = [
    {
      logo: <FaWhatsapp />,
      name: "Whatapp",
      subtext: "Contact handle to be confirmed",
      link: "https://wa.me/2348026684176",
    },
    {
      logo: <FiPhone />,
      name: "Phone",
      subtext: "Number to be confirmed",
      link: "tel:+2348026684176",
    },
    {
      logo: <FaTiktok />,
      name: "Tiktok",
      subtext: "Handle to be comfired",
      link: "",
    },
  ];

  return (
    <div className="contact-padd">
      <section className="contact-1">
        <span className="text-[#9a5b32] text-[12px] tracking-[3px] leading-[133%] font-['manrope']">
          Contact & inquiry
        </span>

        <h1 className="font-['Cormorant_Garamond'] text-[#000000] text-[60px] font-[600] leading-[100%]">
          Tell us what you’re planning.
        </h1>

        <p className="text-[#6f5b4b] text-[16px] leading-[175%] font-['manrope']">
          This is a front-end inquiry concept. Submit behavior can later route
          to WhatsApp, phone, or HoneyDerby’s chosen channel.
        </p>

        <div className="contact-grid">
          {contact.map((item) => (
            <a href={item.link} key={item.name}>
              <div className="contact-border">
                <span className="text-[#4a2e22]">{item.logo}</span>

                <h1 className="text-[#2d211b] text-[16px] leading-[150%] font-['manrope']">
                  {item.name}
                </h1>

                <p className="text-[#6f5b4b] text-[14px] leading-[143%] font-['manrope']">
                  {item.subtext}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          <div className="contact-2-grid">
            <div className="contact-space">
              <label className="font-['manrope']" htmlFor="name">
                Name
              </label>

              <div className="inputBorder">
                <input
                  type="text"
                  placeholder="Full name"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {errors.name && (
                <p className="text-red-600 font-['manrope'] text-[12px] mt-[5px]">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="contact-space">
              <label className="font-['manrope']" htmlFor="phone">
                Phone Number
              </label>

              <div className="inputBorder">
                <input
                  type="text"
                  placeholder="Your preferred number"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {errors.phone && (
                <p className="text-red-600  font-['manrope'] text-[12px] mt-[5px]">
                  {errors.phone}
                </p>
              )}
            </div>
          </div>

          <div className="contact-2-grid">
            <div className="contact-space">
              <label className="font-['manrope']" htmlFor="eventType">
                Event type
              </label>

              <div className="inputBorder">
                <select
                  name="eventType"
                  id="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                >
                  <option className="font-['manrope']" value="">
                    Choose an event
                  </option>

                  {events.map((event) => (
                    <option
                      className="font-['manrope']"
                      value={event}
                      key={event}
                    >
                      {event}
                    </option>
                  ))}
                </select>
              </div>

              {errors.eventType && (
                <p className="text-red-600 font-['manrope'] text-[12px] mt-[5px]">
                  {errors.eventType}
                </p>
              )}
            </div>

            <div className="contact-space">
              <label className="font-['manrope']" htmlFor="eventDate">
                Event Date
              </label>

              <div className="inputBorder">
                <input
                  type="date"
                  name="eventDate"
                  id="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                />
              </div>

              {errors.eventDate && (
                <p className="text-red-600 font-['manrope'] text-[12px] mt-[5px]">
                  {errors.eventDate}
                </p>
              )}
            </div>
          </div>

          <div className="contact-2-grid">
            <div className="contact-space">
              <label className="font-['manrope']" htmlFor="guests">
                Number of Guest
              </label>

              <div className="inputBorder">
                <input
                  type="text"
                  name="guests"
                  id="guests"
                  placeholder="Estimated guest number"
                  value={formData.guests}
                  onChange={handleChange}
                />
              </div>

              {errors.guests && (
                <p className="text-red-600 font-['manrope'] text-[12px] mt-[5px]">
                  {errors.guests}
                </p>
              )}
            </div>

            <div className="contact-space">
              <label className="font-['manrope']" htmlFor="location">
                Event Location
              </label>

              <div className="inputBorder">
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="City or venue"
                  value={formData.location}
                  onChange={handleChange}
                />
              </div>

              {errors.location && (
                <p className="text-red-600 font-['manrope'] text-[12px] mt-[5px]">
                  {errors.location}
                </p>
              )}
            </div>
          </div>

          <div className="contact-space">
            <label className="font-['manrope']" htmlFor="service">
              Service needed
            </label>

            <div className="inputBorder">
              <input
                type="text"
                placeholder="· Catering, small chop"
                name="service"
                id="service"
                value={formData.service}
                onChange={handleChange}
              />
            </div>

            {errors.service && (
              <p className="text-red-600 font-['manrope'] text-[12px] mt-[5px]">
                {errors.service}
              </p>
            )}
          </div>

          <div className="contact-space">
            <label className="font-['manrope']" htmlFor="message">
              Additional Message
            </label>

            <div className="textAreaborder">
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {submitStatus === "success" && (
            <p className="text-green-700 font-['manrope'] text-[13px]">
              Your inquiry has been sent successfully.
            </p>
          )}

          {submitStatus === "error" && (
            <p className="text-red font-['manrope']-600 text-[13px]">
              Something went wrong. Please try again.
            </p>
          )}

          <div className="contact-button-border">
            <button
              className="navbar-text"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Make InQuiry"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
