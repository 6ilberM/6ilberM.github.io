import React from "react";
import Footer from "./components/Footer.tsx";
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
                <link rel="stylesheet" href="/Styles/footer.css" />
            </head>

            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                    </ul>
                </nav>

                <main>
                    <br />

                    <h1>Welcome to My Portfolio</h1>
                    <p>
                        I like making things & games. I believe dreams shape the
                        world, so I dream to make games people will love.
                    </p>
                    <a href="https://docs.google.com/document/d/1qCgo6lXCTizieMTYZIFztEDsZXifV_3Sxfq1ILncjkI/edit?usp=sharing">
                        Curriculum - Resume
                    </a>
                </main>
                <Footer />
            </body>
        </html>
    );
};

export default Home;
