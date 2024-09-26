import React from "react";
import "../CSS/Contact.css";
import StyleSwitcher from "../Themes/StyleSwitcher";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const contactData = [
  {
    icon: <FaPhone className="fa-icon" />,
    title: "Talk to me",
    text: "Call 9588720362",
    link: "tel:9588720362",
  },
  {
    icon: <FaEnvelope className="fa-icon" />,
    title: "Email",
    text: "kushalkumar1362@gmail.com",
    link: "mailto:kushalkumar1362@gmail.com",
  },
  {
    icon: <FaLocationDot className="fa-icon" />,
    title: "Address",
    text: "Ambala , Haryana",
    link: "",
  },
];

const Contact = () => {
  return (
    <div className="py-[80px]  min-h[100vh] fadeInTopAnimation">
      <StyleSwitcher />
      <div className="container">
        <div className="flex flex-wrap">
          <div className="section-title">
            <p>Contact</p>
            <h2>Get In Touch</h2>
          </div>
        </div>

        <div className="flex flex-wrap">
          {contactData.map((item, index) => (
            <div className="contact-item" key={index}>
              <div className="contact-item-inner outer-shadow">
                <a href={item.link}>
                  {item.icon}
                  <span>{item.title}</span>
                  <p>{item.text}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;

