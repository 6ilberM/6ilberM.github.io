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
                        <br />
                        <h1>Greetings! 😀</h1>
                        <h2>
                            I'm Gilberto Moreno<br />
                        </h2>
                        <img
                            src="./static/images/GM-Bunny_Animated_600.gif"
                            alt="My Avatar"
                        />
                        <h3>
                            Software engineer & Game Developer.
                        </h3>

                        <p>
                            I like making things & games.
                        </p>
                        <p>
                            I believe dreams shape the world, so I dream to make
                            games people will love.
                        </p>
                        <a href="https://docs.google.com/document/d/1qCgo6lXCTizieMTYZIFztEDsZXifV_3Sxfq1ILncjkI/edit?usp=sharing">
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
