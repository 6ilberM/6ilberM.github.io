import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Gilberto Moreno. All rights reserved.</p>
                <ul className="social-links">
                    <li>
                        <a
                            href="https://github.com/6ilberM/6ilberM.github.io"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Website Repo
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://mastodon.gamedev.place/@6ilberm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
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
        </footer>
    );
};

export default Footer;
