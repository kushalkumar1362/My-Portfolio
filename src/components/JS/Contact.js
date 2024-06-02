import React from "react";
import "../CSS/Contact.css";
import StyleSwitcher from "../Themes/StyleSwitcher";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
    return (
        <div className="py-[80px]  min-h[100vh]">
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
                            <FaPhone className="fa-icon" />
                            <span>Talk to me</span>
                            <p>
                                <a href="tel:9588720362">Call 9588720362</a>
                            </p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-item-inner outer-shadow">
                            <FaEnvelope className="fa-icon" />
                            <p>
                                <span>Email</span>{" "}
                                <a href="mailto:kushalkumar1362@gmail.com">
                                    kushalkumar1362@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-item-inner outer-shadow">
                            <FaLocationDot className="fa-icon" />
                            <p>
                                <span>Address</span>{" "}
                                <p>Ambala , Haryana</p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
