import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Gilberto Moreno. All rights reserved.</p>

                <div>
                    <p>Contact Me On!</p>

                    <ul className="social-links">
                        <li>
                            <a
                                href="https://github.com/6ilberM/6ilberM.github.io"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Website Source
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://mastodon.gamedev.place/@6ilberm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mastodon-button"
                            >
                                <img
                                    src="../images/logo-white.svg"
                                    alt="Mastodon Logo"
                                    className="mastodon-logo"
                                />
                                Mastodon
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://x.com/6ilberm"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                X
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
