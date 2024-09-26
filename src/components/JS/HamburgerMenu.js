import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";
import "../CSS/HamburgerMenu.css"; // Import the CSS file

const menuData = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "About", path: "/about" },
  { id: 3, name: "Portfolio", path: "/portfolio" },
  { id: 4, name: "Contact", path: "/contact" },
];

const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="ham-color">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          size={21}
          rounded
        />
      </div>
      {isOpen && (
        <nav className="nav-menu">
          <div className="flex items-center justify-center h-full">
            <div className="p-4 flex flex-col gap-10">
              {menuData.map(({ id, name, path }) => (
                <NavLink
                  key={id}
                  to={path}
                  className={({ isActive }) =>
                    `nav-link btn-1 outer-shadow hover-in-shadow ${isActive ? "inner-shadow active" : ""
                    }`
                  }
                  onClick={() => setOpen(false)}>
                  {name}
                </NavLink>
              ))}
            </div>
          </div>
          <p className="copyright-text">&copy; 2024 Kushal Kumar </p>
        </nav>
      )}
    </div>
  );
};

export default HamburgerMenu;