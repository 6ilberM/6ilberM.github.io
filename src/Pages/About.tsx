export const layout = "layouts/default.tsx";
export const url = "/about/";

const About = () => {
    return (
        <>
            <div className="about-page">
                <h1>About Me</h1>
                <p>
                    Hi! I'm Gilberto Moreno, a game programmer and designer with
                    a passion for creating engaging gameplay experiences. I've
                    been involved in game development for 7 years, with a focus
                    on gameplay systems, game feel, and tool development.
                </p>
                <p>
                    Outside of work, I enjoy currently quite enjoy reading the
                    dune book series, love comic books and going out for walks
                    with my dogs. I'm always eager to learn new technologies and
                    techniques to push the boundaries of what's possible in
                    games, AR and useful handy tools.
                </p>
                <p>
                    If you'd like to discuss potential collaborations or have
                    any questions about my work, please don't hesitate to
                    <a href="/contact">get in touch</a>.
                </p>
            </div>
        </>
    );
};

export default About;
