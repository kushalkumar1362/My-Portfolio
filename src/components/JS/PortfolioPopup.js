import React, { useState } from "react";
import "../CSS/Projects.css";
import { FaPlus, FaMinus } from "react-icons/fa6";

const PortfolioPopup = ({ data, onClose }) => {

  const { title, description, tools, website, screenshots } = data;
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="portfolio-popup open">
      {/* Popup Content */}
      <div className={`pp-details ${showDetails ? "active" : ""}`}>
        <div className="pp-details-inner">
          <div className="pp-title">
            <h2>{title}</h2>
          </div>
          <div className="pp-project-details">
            <div className="flex flex-wrap">
              <div className="description">
                <h3>Project Brief :</h3>
                <p>{description}</p>
              </div>
              <div className="info">
                <h3>Project Info</h3>
                <ul>
                  <li>
                    Tools <span>{tools.join(", ")}</span>
                  </li>
                  <li>
                    Web{" "}
                    <span>
                      <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer">
                        {website}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="separator"></div>
      {/* Slideshow */}
      <div className="pp-main">
        <div className="pp-main-inner">
          <div
            className="pp-project-details-btn outer-shadow hover-in-shadow"
            onClick={() => setShowDetails(!showDetails)}>
            <p>Project Details</p>
            {showDetails ? (
              <FaMinus className="ml-2" />
            ) : (
              <FaPlus className="ml-2" />
            )}
          </div>
          <div
            className="pp-close outer-shadow hover-in-shadow"
            onClick={onClose}>
            &times;
          </div>
          <img
            src={screenshots[1]}
            alt={`Screenshot of ${title}`}
            className="pp-img outer-shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default PortfolioPopup;
