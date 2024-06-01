import { FaSun, FaMoon, FaCog } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import "./CSS/StyleSwitcher.css";

const StyleSwitcher = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeToggle = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <div className="style-switcher outer-shadow">
            <div
                className="top-[55px] s-icon outer-shadow hover-in-shadow"
                onClick={handleThemeToggle}>
                {theme === "dark" ? (
                    <FaSun className="icon" />
                ) : (
                    <FaMoon className="icon" />
                )}
            </div>
        </div>
    );
};

export default StyleSwitcher;
