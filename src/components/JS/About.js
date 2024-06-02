import React, { useState } from "react";
import "../CSS/About.css";
import Skills from "./Skills";
import Education from "./Education";
import kushalCv from "../../Images/kushal-kumar-Resume.pdf";
import kushalImage from "../../Images/Kushal_kumar.png";
import StyleSwitcher from "../Themes/StyleSwitcher";
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { NavLink } from "react-router-dom";

const About = () => {
    const [activeTab, setActiveTab] = useState("skills");

    return (
        <div className="pt-20 p-0 min-h-[100vh]">
            <StyleSwitcher />
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="section-title">
                        <p>Main Info</p>
                        <h2>About Me</h2>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="about-img">
                        <div className="img-box inner-shadow">
                            <img
                                src={kushalImage}
                                alt=""
                                className="my-image outer-shadow"
                            />
                        </div>

                        <div className="social-links">
                            <a
                                href="https://www.linkedin.com/in/kushal-kumar-5957b4277/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="outer-shadow hover-in-shadow">
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://github.com/kushalkumar1362"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="outer-shadow hover-in-shadow">
                                <FaGithub />
                            </a>
                            <a
                                href="https://leetcode.com/KKumarMay2003/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="outer-shadow hover-in-shadow">
                                <SiLeetcode />
                            </a>
                            <a
                                href="https://www.instagram.com/just_._kushal/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="outer-shadow hover-in-shadow">
                                <FaInstagram />
                            </a>
                            <a
                                href="https://twitter.com/Kushalkumar1362"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="outer-shadow hover-in-shadow">
                                <FaXTwitter />
                            </a>
                        </div>
                    </div>

                    <div className="about-info">
                        <p>
                            I am <span>Kushal Kumar</span>, a passionate and
                            dedicated web developer with a keen interest in
                            front-end technologies. Currently looking for a{" "}
                            <span>Front-end Developer Job</span>, I have gained
                            substantial knowledge and experience in web
                            development through internships and personal
                            projects.{" "}
                        </p>
                        <p>
                            {" "}
                            In addition to my practical skills, I have completed
                            courses on Data Structures and Algorithms a
                            comprehensive six-month course from{" "}
                            <span>August 2023 to January 2024</span>, covering
                            various algorithms and data structures.
                        </p>
                        <p>
                            I am continually looking for opportunities to expand
                            my expertise and contribute to innovative projects.
                        </p>
                        <p>
                            <span>Email</span> :{" "}
                            <a href="mailto:kushalkumar1362@gmail.com">
                                kushalkumar1362@gmail.com
                            </a>
                        </p>

                        <div>
                            <a
                                href={kushalCv}
                                className="btn-1 outer-shadow hover-in-shadow mt-10"
                                target="blank">
                                Download CV
                            </a>

                            <NavLink to={"/contact"}>
                                <div
                                    className="btn-1 outer-shadow
                                hover-in-shadow ml-5">
                                    Hire Me
                                </div>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap">
                    <div className="about-tabs">
                        <div
                            onClick={() => setActiveTab("skills")}
                            className={`nav-link tab-item outer-shadow ${
                                activeTab === "skills" ? "active" : "opacity-60"
                            }`}>
                            Skills
                        </div>
                        <div
                            onClick={() => setActiveTab("education")}
                            className={`nav-link tab-item outer-shadow ${
                                activeTab === "education" ? "active" : "opacity-60"
                            }`}>
                            Education
                        </div>
                    </div>
                </div>

                <div className="tab-content">
                    {activeTab === "skills" && <Skills />}
                    {activeTab === "education" && <Education />}
                </div>
            </div>
        </div>
    );
};

export default About;
