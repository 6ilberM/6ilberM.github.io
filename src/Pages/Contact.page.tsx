export const layout = "layouts/default.tsx";
export const url = "/contact/";
export const title = "Contact Me";

const Contact = () => {
  function getForm() {
    return (
      <form method="POST" action="https://formspree.io/f/xjkvolno">
        <div>
          <label for="name">Name:</label>
          <br />
          <input type="text" id="name" name="name" required />
        </div>

        <div>
          <label for="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="_replyto"
            required
          />
        </div>

        <div>
          <label for="message">Message:</label>
          <br />
          <textarea id="message" name="message" required></textarea>
        </div>

        {/* Use a string for style, not an object */}
        <input
          type="text"
          name="_gotcha"
          style="display: none;"
        />

        <button type="submit">Send Message</button>
      </form>
    );
  }

  return (
    <>
      <div>
        <h1>Contact Me</h1>
        <p>
          Feel free to reach out to me at{" "}
          <a href="mailto:6ilberm@gmail.com">6ilberm@gmail.com</a>.
        </p>

        {getForm()}
      </div>
      <div className="follow-me">
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
          <li>
            <a href="https://www.twitch.tv/6ilberm" target="_blank">
              Twitch!
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Contact;
