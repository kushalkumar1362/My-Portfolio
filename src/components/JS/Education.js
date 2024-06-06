import React from "react";
import "../CSS/About.css";
import { FaGraduationCap } from "react-icons/fa6";

const Education = () => {
    const educationData = [
        {
            period: "August, 2021 - May, 2024",
            degree: "Bachelor of Computer Applications",
            institution: "Govt. PG College, Ambala Cantt",
            percentage: "78.32%",
        },
        {
            period: "March, 2019 - March, 2020",
            degree: "12th (Non-Medical)",
            institution: "Govt Model Sanskriti Sr Sec School",
            percentage: "67%",
        },

        {
            period: "March, 2017 - March, 2018",
            degree: "",
            institution: "Public Girls Sr Sec School",
            percentage: "77%",
        },
    ];
    const TimelineItem = ({ period, degree, institution, percentage }) => (
        <div className="timeline-item">
            <div className="timeline-item-inner outer-shadow ">
                <FaGraduationCap className="icon" />
                <span>{period}</span>
                <h3>{degree}</h3>
                <h4>{institution}</h4>
                <h3>{percentage}</h3>
            </div>
        </div>
    );
    return (
        <div className="flex flex-wrap fadeInTopAnimation">
            <div className="education tab-content">
                <div className="flex flex-wrap">
                    <div className="timeline">
                        <div className="flex flex-wrap">
                            {educationData.map((item, index) => (
                                <TimelineItem
                                    key={index}
                                    period={item.period}
                                    degree={item.degree}
                                    institution={item.institution}
                                    percentage={item.percentage}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;
