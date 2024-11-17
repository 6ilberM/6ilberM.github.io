import React from "react";

import NavigationBar from "./components/NavigationBar.tsx";
import Footer from "./components/Footer.tsx";
import SupportMeWidget from "./components/SupportMeWidget.tsx";

export const title = "Gilberto Moreno";
export const layout = "layouts/default.tsx";

const Home: React.FC = () => {
    return (
        <>
            <div className="site-content">
                <div className="header-container">
                    <div className="profile-container">
                        <img
                            // src="./static/images/GM-Bunny_Animated_600.gif"
                            src="./static/images/qxc_Squared.jpeg"
                            alt="My Avatar"
                            className="avatar profile-image"
                        />
                    </div>
                    <div className="text-container">
                        <h1>Greetings! 😀</h1>
                        <h2>I'm Gilberto Moreno</h2>
                        <h3>
                            Software engineer & Game Developer.
                        </h3>
                    </div>
                </div>

                <p>
                    I like making things & games.
                </p>
                <p>
                    I believe dreams shape the world, so I dream to make games
                    people will love.
                </p>
                <a
                    className="curriculum-vitae-button"
                    href="https://drive.google.com/file/d/1--t4DQJFXh9ti8ZPsKtAqUAe_GFvhEo6/view?usp=sharing"
                >
                    Curriculum - Resume
                </a>
                <br />

                <SupportMeWidget />
            </div>
        </>
    );
};

export default Home;
