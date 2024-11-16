import React from "react";
import Footer from "./components/Footer.tsx";
import SupportMeWidget from "./components/SupportMeWidget.tsx";
export const title = "Gilberto Moreno";

const Home: React.FC = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>6ilberM's Website</title>
                <link rel="stylesheet" href="./Styles/main.css" />
                <link rel="stylesheet" href="./Styles/footer.css" />
            </head>
            <body>
                <div className="site">
                    <nav>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                        </ul>
                    </nav>
                    <main className="site-content">
                        <div className="header-container">
                            <div className="text-container">
                                <h1>Greetings! 😀</h1>
                                <h2>I'm Gilberto Moreno</h2>
                                <h3>
                                    Software engineer & Game Developer.
                                </h3>
                            </div>
                            <div className="profile-container">
                                <img
                                    src="./static/images/GM-Bunny_Animated_600.gif"
                                    // src="./static/images/QxcOZ89Q.jpeg"
                                    alt="My Avatar"
                                    className="avatar profile-image"
                                />
                            </div>
                        </div>

                        <p>
                            I like making things & games.
                        </p>
                        <p>
                            I believe dreams shape the world, so I dream to make
                            games people will love.
                        </p>
                        <a
                            className="curriculum-vitae-button"
                            href="https://drive.google.com/file/d/1--t4DQJFXh9ti8ZPsKtAqUAe_GFvhEo6/view?usp=sharing"
                        >
                            Curriculum - Resume
                        </a>
                        <br />

                        <SupportMeWidget />
                    </main>

                    <Footer />
                </div>
            </body>
        </html>
    );
};

export default Home;
