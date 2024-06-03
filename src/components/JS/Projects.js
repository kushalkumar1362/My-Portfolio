import React, { useEffect, useState } from "react";
import "../CSS/Projects.css";
import PortfolioPopup from "./PortfolioPopup";
import Loader from "../JS/loader";
import StyleSwitcher from "../Themes/StyleSwitcher";

import portfolioData from "./data";
const Projects = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const togglePopup = (project) => {
        setCurrentProject(project);
        setPopupOpen(!popupOpen);
        if (!popupOpen) {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
            }, 2000);
        }
    };

     useEffect(() => {
         if (popupOpen) {
             document.body.classList.add("no-scroll");
         } else {
             document.body.classList.remove("no-scroll");
              window.scrollTo(0, 0);
         }

         // Cleanup on component unmount
         return () => {
             document.body.classList.remove("no-scroll");
              window.scrollTo(0, 0);
         };
     }, [popupOpen]);

    return (
        <div className="projects-section">
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
                    <div className="flex flex-wrap portfolio-items">
                        {portfolioData.map((project, index) => (
                            <div key={index} className="portfolio-item">
                                <div
                                    className="portfolio-item-inner outer-shadow"
                                    onClick={() => togglePopup(project)}>
                                    <div className="portfolio-item-img">
                                        <img
                                            src={project.screenshots[0]}
                                            alt={`${project.title} screenshot`}
                                        />
                                        <span className="view-project">
                                            View Project
                                        </span>
                                    </div>
                                    <p className="portfolio-item-title">
                                        {project.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {popupOpen && currentProject && (
                <PortfolioPopup
                    data={currentProject}
                    onClose={() => togglePopup(null)}
                />
            )}
        </div>
    );
};

export default Projects;