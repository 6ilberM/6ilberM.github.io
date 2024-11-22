import React from "react";

export const layout = "layouts/default.tsx";
export const url = "/contact/";

const Contact = () => {
    return (
        <>
            <div>
                <h1>Contact Me</h1>
                <p>
                    Feel free to reach out to me at{" "}
                    <a href="mailto:6ilberm@gmail.com">6ilberm@gmail.com</a>.
                </p>
                <form
                    method="POST"
                    action="https://formspree.io/f/xjkvolno"
                >
                    <div>
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <br />
                        <input
                            type="email"
                            id="email"
                            name="_replyto"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <br />
                        <textarea id="message" name="message" required>
                        </textarea>
                    </div>
                    <input
                        type="text"
                        name="_gotcha"
                        style={{ display: "none" }}
                    />
                    <button type="submit">Send Message</button>
                </form>
            </div>
            <div className={"follow-me"}>
                <h2>Follow Me</h2>
                <ul>
                    <li>
                        <a
                            href="https://x.com/6ilberm"
                            target="_blank"
                        >
                            Twitter
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/gilber-moreno/"
                            target="_blank"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default Contact;
