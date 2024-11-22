import React from "react";
import PortfolioIntro from "../components/PortfolioIntro.tsx";
import FeaturedProject from "../components/FeaturedProject.tsx";
import ProjectGrid from "../components/ProjectGrid.tsx";
import SkillsSection from "../components/SkillsSection.tsx";
import MiscProjects from "../components/MiscProjects.tsx";

export const layout = "layouts/default.tsx";
export const url = "/portfolio/";

const Portfolio = () => {
    const successfulProjectImages = [
        {
            src: "https://play-lh.googleusercontent.com/KFXHhPzvbJn0gi9n6txO4sXerKfYjYnpM0FUuM5zLyWOWOuWX6QSlFGL6U-MKNph7ho3=w2560-h1440-rw",
            alt: "Game screenshot",
        },
        {
            src: "https://play-lh.googleusercontent.com/KUSW6PkA02A7yFZm1x1sSFeL3uGTFNVxXlDo6jzfCWKblLEVLHTle0OUDVrX5lhO6zU=w2560-h1440-rw",
            alt: "Start screen",
        },
    ];

    const projects = [
        { name: "Seat as", image: "https://i.ibb.co/yPxzx0N/seatas.webp" },
        { name: "Seats", image: "https://i.ibb.co/n6SyDLC/seats.webp" },
        {
            name: "Donuts Merge",
            image: "https://i.ibb.co/6gdgxrS/donuts-Merge.webp",
        },
        {
            name: "Bottle Challenge",
            image: "https://i.ibb.co/g7q4bZG/bottle-Challenge.webp",
        },
        {
            name: "Dodgeball 2",
            image: "https://i.ibb.co/1dx7cLv/dodgeball-2.webp",
        },
        { name: "Unicorn", image: "https://i.ibb.co/88pzxyb/unicorn.webp" },
        {
            name: "Unicorn DIY",
            image: "https://i.ibb.co/F0HHdck/unicorn-DIY.webp",
        },
        {
            name: "Merge Legs",
            image: "https://i.ibb.co/HK65WD4/merge-legs.webp",
        },
        {
            name: "Merge Legs 2",
            image: "https://i.ibb.co/QFpLPd6/merge-legs-2.webp",
        },
        { name: "Dodgeball", image: "https://i.ibb.co/GQK1pH4/dodgeball.webp" },
        {
            name: "Planet Digger",
            image:
                "https://play-lh.googleusercontent.com/9MwmPHwqdRr8nn9E4i3EGE9RrHoVp-gx9C1P97wDLbzttQuFy4HIcO95GcKA_OUdpPG5=w5120-h2880-rw",
        },
    ];

    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <PortfolioIntro />
            <FeaturedProject images={successfulProjectImages} />
            <section className="professional-projects">
                <h2>Other Projects</h2>
                <p>
                    At FiveBits, I often led projects and assisted in others.
                    Here are some of them:
                </p>
                <ProjectGrid projects={projects} />
            </section>
            <SkillsSection />
            <MiscProjects />
            <div className="contact-cta">
                <p>
                    Interested in collaborating or have questions?{" "}
                    <a href="/contact">Contact me</a>.
                </p>
                <p>
                    Learn more <a href="/about">About Me</a>.
                </p>
            </div>
        </div>
    );
};

export default Portfolio;
