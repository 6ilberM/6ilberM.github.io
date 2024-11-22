// components/MiscProjects.tsx
import React from "react";

const MiscProjects: React.FC = () => (
    <section className="other-projects">
        <h3>Miscellaneous</h3>
        <ul>
            <li>
                Cool stuff I made in Pico-8 as an experiment{" "}
                <a href="https://ibb.co/34MPXzv">
                    <img
                        src="https://i.ibb.co/KbL8ZwD/midpointer-0.gif"
                        alt="Pico-8 Experiment"
                    />
                </a>
            </li>
            <li>
                <a href="https://github.com/6ilberM/chronok">Chronok</a>
                <p>
                    A simple Rust CLI application for time tracking, helping those with time
                    blindness keep track of time during any period. Made to learn Rust, a
                    language I greatly enjoy.
                </p>
                <img
                    src="https://i.ibb.co/YchC6n9/chronok.gif"
                    alt="Chronok Application"
                />
            </li>
        </ul>
    </section>
);

export default MiscProjects;
