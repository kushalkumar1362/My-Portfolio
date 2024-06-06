import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Home.css";
import kushalImage from "../../Images/Kushal_kumar.png";
import StyleSwitcher from "../Themes/StyleSwitcher";

const Home = () => {
    const [isOpen, setOpen] = useState(false);
    function clickHandler() {
        window.scrollTo(0, 0);
        setOpen(false);
    }
    return (
        <div className="min-h-[100vh] relative md:pt-20 fadeInTopAnimation">
            <div className="effect-wrap">
                <div className="effect effect-1"></div>
                <div className="effect effect-2">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="effect effect-3"></div>
                <div className="effect effect-4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="container">
                <div className="flex flex-wrap justify-center full-screen items-center py-[50px]">
                    <div className="home-text">
                        <p>Hello</p>
                        <h2>I'm Kushal Kumar </h2>
                        <h1>Developer & DSA Learner</h1>
                        <NavLink
                            to="/about"
                            className={"btn-1 outer-shadow hover-in-shadow"}
                            onClick={clickHandler}>
                            More About Me
                        </NavLink>{" "}
                        &nbsp;
                        <NavLink
                            to="/portfolio"
                            className={"btn-1 outer-shadow hover-in-shadow"}
                            onClick={clickHandler}>
                            Portfolio
                        </NavLink>{" "}
                        &nbsp;
                        <NavLink
                            to="/contact"
                            className={"btn-1 outer-shadow hover-in-shadow"}
                            onClick={clickHandler}>
                            Contact
                        </NavLink>{" "}
                        &nbsp;
                    </div>
                    <div className=".home-image">
                        <div className="img-box inner-shadow">
                            <img
                                src={kushalImage}
                                alt=""
                                className="my-image outer-shadow"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <StyleSwitcher></StyleSwitcher>
        </div>
    );
};

export default Home;
