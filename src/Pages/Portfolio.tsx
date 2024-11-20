import React from "react";
export const layout = "layouts/default.tsx";
export const url = "/portfolio/";

const Portfolio = () => {
    return (
        <>
            <div className="portfolio">
                <h1>Portfolio</h1>

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
                        <div className="screenshot-container">
                            <img
                                src={"https://play-lh.googleusercontent.com/KFXHhPzvbJn0gi9n6txO4sXerKfYjYnpM0FUuM5zLyWOWOuWX6QSlFGL6U-MKNph7ho3=w2560-h1440-rw"}
                                alt={"game screenshot"}
                            />
                            <img
                                src={"https://play-lh.googleusercontent.com/KUSW6PkA02A7yFZm1x1sSFeL3uGTFNVxXlDo6jzfCWKblLEVLHTle0OUDVrX5lhO6zU=w2560-h1440-rw"}
                                alt={"start Screen"}
                            />
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
