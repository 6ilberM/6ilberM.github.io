import React from "react";

const SkillsSection: React.FC = () => {
    const skills = [
        "Unity3D Game Development",
        "C# Programming",
        "C++ Programming",
        "Game Design",
        "UI/UX Implementation",
        "Performance Optimization",
        "Cross-platform Development",
    ];

    return (
        <section className="skills">
            <h3>Key Skills</h3>
            <ul>
                {skills.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </section>
    );
};

export default SkillsSection;
