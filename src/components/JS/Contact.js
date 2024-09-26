import React from "react";
import "../CSS/Contact.css";
import StyleSwitcher from "../Themes/StyleSwitcher";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

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
          <div className="contact-item">
            <div className="contact-item-inner outer-shadow">
              <a href="tel:9588720362">
                <FaPhone className="fa-icon" />
                <span>Talk to me</span>
                <p>
                  Call 9588720362
                </p>
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-inner outer-shadow">
              <a href="mailto:kushalkumar1362@gmail.com">
                <FaEnvelope className="fa-icon" />
                <p>
                  <span>Email</span>{" "}
                  kushalkumar1362@gmail.com
                </p>
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-item-inner outer-shadow">
              <FaLocationDot className="fa-icon" />
              <p>
                <span>Address</span>{" "}
                <p>Zirakpur, Punjab</p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
