import React from "react";
import SupportMeWidget from "./components/SupportMeWidget.tsx";

export const title = "Gilberto Moreno";
export const layout = "layouts/default.tsx";

const Home: React.FC = () => {
    return (
        <>
            <main className="site-content">
                <div className="profile-section">
                    <div className="profile-container">
                        <img
                            src="./static/images/qxc_Squared.jpeg"
                            alt="My Avatar"
                            className="avatar profile-image"
                        />
                    </div>
                    <div className="text-container">
                        <h1>
                            <span className="greeting">Hi, I'm</span>{" "}
                            Gilberto Moreno
                        </h1>
                        <h2>Software Engineer & Gameplay Programmer</h2>
                        <p>
                            I like making things & games.
                        </p>
                        <p>
                            I believe dreams shape the world, so I dream to make
                            games people will love.
                        </p>
                    </div>
                </div>

                <a
                    className="curriculum-vitae-button"
                    href="https://drive.google.com/file/d/1-2MbmS8zoA6cRPZOukpPi7SlgJgG4L4K/view?usp=sharing"
                >
                    Curriculum - Resume
                </a>
                <br />

                <SupportMeWidget />
            </main>
        </>
    );
};

export default Home;
