import React from "react";

export const title = "Gilberto Moreno";

const Home: React.FC = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>6ilberM's website?</title>
        <link rel="stylesheet" href="../styles/main.css" />
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
          <h1>Welcome to My Portfolio</h1>
          <p>
            I like making things & games. I believe dreams shape the world, so I
            dream to make games people will love.
          </p>
          <a href="https://docs.google.com/document/d/1qCgo6lXCTizieMTYZIFztEDsZXifV_3Sxfq1ILncjkI/edit?usp=sharing">
            Curriculum - Resume
          </a>
        </main>
        <footer>
          <p>&copy; 2024 Gilberto Moreno. All rights reserved.</p>
          <a href="https://github.com/6ilberM/6ilberM.github.io">
            Website Repo
          </a>
        </footer>
      </body>
    </html>
  );
};

export default Home;
