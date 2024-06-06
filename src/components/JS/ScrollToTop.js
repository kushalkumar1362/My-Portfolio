import React, { useEffect, useState } from "react";
import "../CSS/ScrollToTop.css";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo(
            {
                top: 0, left: 0, behavior: "smooth"
            }
        );
    };

    const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <div className="scroll-section">
            {isVisible && (
                <div className="top-btn outer-shadow" onClick={goToBtn}>
                    <FaArrowUp className="arrow-icon" />
                </div>
            )}
        </div>
    );
};

export default GoToTop;