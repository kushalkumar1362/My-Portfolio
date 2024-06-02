import React, { useState } from "react";
import "../CSS/Projects.css";
import PortfolioPopup from "./PortfolioPopup";
import Loader from "../JS/loader";
import StyleSwitcher from "../Themes/StyleSwitcher";
import img1 from "../../Images/Projects/project1/project-1-thumb.png";
import img2 from "../../Images/Projects/project1/project-1-large.png";

const Projects = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const portfolioData = [
        {
            title: "github explorer",
            description:
                "GitHub Explorer is a dynamic web app providing real-time GitHub user and repository data. It features search suggestions and customizable dark/light modes, enhancing the user experience.",
            tools: ["HTML, ", "CSS, ", "JavaScript, ", "GitHub API"],
            screenshots: [img1, img2],
            website: "https://github-explorer-kushal.netlify.app/",
        },
    ];

    const { title, screenshots } = portfolioData[0];

    const togglePopup = () => {
        setPopupOpen(!popupOpen);
        if (!popupOpen) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    };

    return (
        <div>
            <div className="py-[80px] min-h-[100vh]">
                <StyleSwitcher />
                {isLoading && <Loader />}
                <div className="container">
                    <div className="flex flex-wrap">
                        <div className="section-title">
                            <p>Portfolio</p>
                            <h2>Latest Works</h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="portfolio-item">
                            <div
                                className="portfolio-item-inner outer-shadow"
                                onClick={togglePopup}>
                                <div className="portfolio-item-img">
                                    <img src={screenshots[0]} alt="portfolio" />
                                    <span className="view-project">
                                        View Project
                                    </span>
                                </div>
                                <p className="portfolio-item-title">{title}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {popupOpen && (
                <PortfolioPopup data={portfolioData[0]} onClose={togglePopup} />
            )}
        </div>
    );
};

export default Projects;
