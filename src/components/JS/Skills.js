import React from 'react';
import "../CSS/About.css";

const Skills = () => {
  const categories = [
    {
      title: "Skills",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "C",
        "C++",
        "Git",
        "Java",
        "Python",
      ],
    },
    {
      title: "Frameworks/ Libraries",
      items: ["React", "Tailwind", "Express", "MongoDB", "SQL"],
    },
    {
      title: "Tools/ Platforms",
      items: [
        "VS Code",
        "Eclipse",
        "Git",
        "MongoDB Compass",
        "Cloudinary",
        "PostMan",
        "Figma",
        "Firebase",
        "Replit",
      ],
    },
  ];

  const Category = ({ title, items }) => (
    <div className="category-divider">
      <h1>{title}</h1>
      <hr />
      <div className="about-tabs">
        {items.map((item, index) => (
          <span key={index} className="tab-item outer-shadow active hover:scale-125">
            {item}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-wrap fadeInTopAnimation">
      <div className="skills tab-content active">
        {categories.map((category, index) => (
          <Category
            key={index}
            title={category.title}
            items={category.items}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;