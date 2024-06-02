import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Navbar.css"; // Import the CSS file
import HamburgerMenu from "./HamburgerMenu";
import Loader from "./loader"; // Import the Loader component

const Navbar = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleHomeClick = () => {
        setIsLoading(true);
        // Add a timeout to simulate a delay
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    };

    return (
        <div className="header">
            {isLoading && <Loader />}

            <div className="container">
                <div className="flex flex-wrap justify-between">
                    <NavLink
                        to="/"
                        className="btn-1 outer-shadow hover-in-shadow"
                        onClick={handleHomeClick}>
                        Home
                    </NavLink>
                    <div className="hamburger-btn outer-shadow hover-in-shadow">
                        <HamburgerMenu />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
