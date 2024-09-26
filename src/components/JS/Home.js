import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Home.css";
import kushalImage from "../../Images/Kushal_kumar.png";
import StyleSwitcher from "../Themes/StyleSwitcher";

const Home = () => {
  const [isOpen, setOpen] = useState(false);

  const navigationItems = [
    {
      link: "/about",
      label: "More About Me"
    },
    {
      link: "/portfolio",
      label: "Portfolio"
    },
    {
      link: "/contact",
      label: "Contact"
    },
  ]
  function clickHandler() {
    window.scrollTo(0, 0);
    setOpen(false);
    console.log(isOpen);
  }
  return (
    <div className="min-h-[100vh] relative md:pt-20 fadeInTopAnimation">
      <div className="effect-wrap">
        <div className="effect effect-1"></div>
        <div className="effect effect-2">
          {[...Array(28)].map((_, i) => <div key={i} />)}
        </div>
        <div className="effect effect-3"></div>
        <div className="effect effect-4">
          {[...Array(10)].map((_, i) => <div key={i} />)}
        </div>
      </div>
      <div className="container">
        <div className="flex flex-wrap justify-center full-screen items-center py-[50px]">
          <div className="home-text">
            <p>Hello</p>
            <h2>I'm Kushal Kumar </h2>
            <h1>Developer & DSA Learner</h1>
            {navigationItems.map(({ link, label }) => (
              <NavLink
                key={label}
                to={link}
                className={"btn-1 outer-shadow hover-in-shadow mr-5"}
                onClick={clickHandler}>
                {label}
              </NavLink>
            ))}
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
