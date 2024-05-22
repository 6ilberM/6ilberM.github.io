import React from "react";
import Portfolio from "./components/Portfolio.tsx";

export const title = "Gilberto Moreno";

const Home: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gilberto Moreno's Portfolio</title>
        <link rel="stylesheet" href="/styles/main.css" />
      </head>
      <body>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
          </ul>
        </nav>
        <main>
          <h1>Welcome to My Portfolio</h1>
          <p>I like making things & games. I believe dreams shape the world, so I dream to make games people will love.</p>
          <a href="https://docs.google.com/document/d/1qCgo6lXCTizieMTYZIFztEDsZXifV_3Sxfq1ILncjkI/edit?usp=sharing">Curriculum - Resume</a>
          <Portfolio />
        </main>
        <footer>
          <p>&copy; 2024 Gilberto Moreno. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default Home;
