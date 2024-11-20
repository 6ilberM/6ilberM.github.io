import React from "react";
import ProjectGallery from "../components/ProjectGallery.tsx";
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
        <>
            <div className="portfolio">
                <h1>Portfolio</h1>
                <div className={"portfolio-intro"}>
                    Portfolio //what can I offer as a professional Programmer

                    Do you want to develop a game?

                    //Why should you hire me? that i can offer you
                </div>

                <div className={"professional-successful-projs"}>
                    <section className="project-overview">
                        <h2>911 Emergency Dispatcher</h2>
                        <p>A Mobile Hyper Casual Game</p>
                        <p>30MM + Downloads</p>
                    </section>

                    <section className="key-features">
                        <h3>Features I developed</h3>
                        <ul>
                            <li>Humorous 911 call scenarios</li>
                            <li>
                                Dialogue and decision-making challenges &
                                systems
                            </li>
                            <li>Mini Games</li>
                            <li>Bug Fixing</li>
                            <li>Cutscenes and animations</li>
                        </ul>
                    </section>

                    <section className="screenshots">
                        <h3>Screenshots</h3>
                        <div>
                            <ProjectGallery
                                images={successfulProjectImages}
                                title="Screenshots"
                                showNames={false}
                            />
                        </div>
                    </section>
                </div>
                <div className={"professional-projects"}>
                    <section className={"led-projects-or-assisted"}>
                        <p>
                            I was responsible for developing sometimes a led
                            project at FiveBits and assisted in others.
                        </p>
                        //Simple carousel that just shows a few screenshots with
                        a name or showing I developed these and these other ones
                        I assisted in

                        <div className={"led-projects"}>
                        </div>

                        <div className="project-grid">
                            {projects.map((project, index) => (
                                <div key={index} className="project-item">
                                    <img
                                        src={project.image}
                                        alt={project.name}
                                    />
                                    <p>{project.name}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <section className="skills">
                    <h3>Key Skills</h3>
                    <ul>
                        <li>Unity3D Game Development</li>
                        <li>C# Programming</li>
                        <li>C++ Programming</li>
                        <li>Game Design</li>
                        <li>UI/UX Implementation</li>
                        <li>Performance Optimization</li>
                        <li>Cross-platform Development</li>
                    </ul>
                </section>

                <section className="other-projects">
                    <h3>Miscellaneous</h3>
                    <ul>
                        <li>
                            Cool stuff I made in Pico-8 as an experiment{" "}
                            <a href="https://ibb.co/34MPXzv">
                                <img
                                    src="https://i.ibb.co/KbL8ZwD/midpointer-0.gif"
                                    alt="midpointer-0"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/6ilberM/chronok">
                                Chronok
                            </a>{" "}
                            <p>
                                A simple Rust CLI application to display time I
                                had an idea for that could help me with keeping
                                track with time left during any sort of time
                                period particularly helpful for people with time
                                blindness
                            </p>
                            <p>
                                Making it to learn rust, I quite like that
                                programming language
                            </p>

                            <img
                                src={"https://i.ibb.co/YchC6n9/chronok.gif"}
                                alt={"chronok application"}
                            />
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
};

export default Portfolio;
