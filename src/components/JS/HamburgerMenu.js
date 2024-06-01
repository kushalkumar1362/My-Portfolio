import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "../CSS/HamburgerMenu.css"; // Import the CSS file

const HamburgerMenu = () => {
    const [isOpen, setOpen] = useState(false);
    const location = useLocation();

    return (
        <div>
            <Hamburger toggled={isOpen} toggle={setOpen} size={21} rounded />
            {isOpen && (
                <nav className="nav-menu">
                    <div className="flex items-center justify-center h-full">
                        <div className="p-4 flex flex-col gap-10">
                            <NavLink
                                to={"/"}
                                className={({ isActive }) =>
                                    isActive
                                        ? "btn-1 outer-shadow hover-in-shadow inner-shadow"
                                        : "btn-1 outer-shadow hover-in-shadow"
                                }
                                onClick={() => setOpen(false)}>
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "btn-1 outer-shadow hover-in-shadow inner-shadow"
                                        : "btn-1 outer-shadow hover-in-shadow"
                                }
                                onClick={() => setOpen(false)}>
                                About
                            </NavLink>
                            <NavLink
                                to="/portfolio"
                                className={({ isActive }) =>
                                    isActive
                                        ? "btn-1 outer-shadow hover-in-shadow inner-shadow"
                                        : "btn-1 outer-shadow hover-in-shadow"
                                }
                                onClick={() => setOpen(false)}>
                                Portfolio
                            </NavLink>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    isActive
                                        ? "btn-1 outer-shadow hover-in-shadow inner-shadow"
                                        : "btn-1 outer-shadow hover-in-shadow"
                                }
                                onClick={() => setOpen(false)}>
                                Contact
                            </NavLink>
                        </div>
                    </div>
                    <p className="copyright-text">&copy; 2024 Kushal Kumar </p>
                </nav>
            )}
        </div>
    );
};

export default HamburgerMenu;
