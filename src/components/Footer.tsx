import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2024 Gilberto Moreno. All rights reserved.</p>
        <a
          href="https://github.com/6ilberM/6ilberM.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          SourceCode
        </a>
        <div>
          <p>Contact Me On!</p>
          <ul className="social-links">
            <li>
              <a
                href="https://mastodon.gamedev.place/@6ilberm"
                target="_blank"
                rel="me"
                className="mastodon-button"
              >
                <img
                  src="../static/images/logo-white.svg"
                  alt="Mastodon Logo"
                  className="social-logo"
                />{" "}
                Mastodon
              </a>
            </li>
            <li>
              <a
                href="https://x.com/6ilberm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../static/images/icons8-twitterx.svg"
                  alt="X Logo"
                  className="social-logo"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/6ilberM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../static/images/github-logo-duotone-svgrepo-com.svg"
                  alt="GitHub Logo"
                  className="social-logo"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
