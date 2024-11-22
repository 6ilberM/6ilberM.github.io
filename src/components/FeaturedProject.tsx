import ProjectGallery from "./ProjectGallery.tsx";

interface FeaturedProjectProps {
    images: { src: string; alt: string }[];
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ images }) => (
    <div className="featured-project">
        <h2 id="featured-project">Featured Project</h2>
        <section className="project-overview">
            <h3>911 Emergency Dispatcher</h3>
            <p>A Mobile Hyper Casual Game</p>
            <p>
                <strong>30MM+</strong> Downloads
            </p>
        </section>

        <section className="key-features">
            <h3>Features I Developed</h3>
            <ul>
                <li>Humorous 911 call scenarios</li>
                <li>Dialogue and decision-making systems</li>
                <li>Mini Games</li>
                <li>Bug Fixing</li>
                <li>Cutscenes and animations</li>
            </ul>
        </section>

        <section className="screenshots">
            <ProjectGallery
                images={images}
                title="Screenshots"
                showNames={false}
            />
        </section>
    </div>
);

export default FeaturedProject;
