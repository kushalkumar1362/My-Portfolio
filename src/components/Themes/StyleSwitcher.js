import { FaSun, FaMoon, FaCog } from "react-icons/fa";
import "font-awesome/css/font-awesome.min.css";
import React, { useEffect, useState } from "react";
import "./CSS/StyleSwitcher.css";
import "./CSS/color-1.css";
import "./CSS/color-2.css";
import "./CSS/color-3.css";
import "./CSS/color-4.css";
import "./CSS/color-5.css";

const StyleSwitcher = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );
  const [isOpen, setIsOpen] = useState(false);
  const [skinColor, setSkinColor] = useState(
    localStorage.getItem("skinColor") || "#1fc586"
  );

  useEffect(() => {
    console.log("Theme:", theme);
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    console.log("Theme toggled");
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleToggleClick = () => {
    console.log("handleToggleClick Click");
    setIsOpen(!isOpen);
  };

  const handleColorChange = (color) => {
    setSkinColor(color);
    localStorage.setItem("skinColor", color);
    setIsOpen(false);
    console.log("handleColorChange Click");
  };

  useEffect(() => {
    console.log("useEffect for skinColor Trigered");
    const root = document.documentElement;
    root.style.setProperty("--skin-color", skinColor);
  }, [skinColor]);

  return (
    <div className={`style-switcher outer-shadow ${isOpen ? "open" : ""}`}>
      <div
        className="md:top-0 top-[55px] s-icon outer-shadow hover-in-shadow"
        onClick={handleToggleClick}>
        <FaCog className="fa-spin" size={25} />
      </div>

      <div
        className="md:top-[55px] top-0 s-icon outer-shadow hover-in-shadow"
        onClick={handleThemeToggle}>
        {theme === "dark" ? (
          <FaSun className="icon" />
        ) : (
          <FaMoon className="icon" />
        )}
      </div>

      <div className="small-screen">
        <h4>Theme Colors</h4>
        <div className="colors">
          <span
            className="color-1"
            onClick={() => handleColorChange("#fb839e")}></span>
          <span
            className="color-2"
            onClick={() => handleColorChange("#ec9412")}></span>
          <span
            className="color-3"
            onClick={() => handleColorChange("#1fc586")}></span>
          <span
            className="color-4"
            onClick={() => handleColorChange("#2eb1ed")}></span>
          <span
            className="color-5"
            onClick={() => handleColorChange("#cc3a3b")}></span>
        </div>
      </div>
    </div>
  );
};

export default StyleSwitcher;
