import ProjectGallery from "./ProjectGallery.tsx";

interface FeaturedProjectProps {
  images: { src: string; alt: string }[];
}

export default ({ images }: FeaturedProjectProps) => (
  <div class="featured-project">
    <h2 id="featured-project">Featured Project</h2>
    <section class="project-overview">
      <h3>911 Emergency Dispatcher</h3>
      <p>A Mobile Hyper Casual Game</p>
      <p>
        <strong>30MM+</strong> Downloads
      </p>
    </section>

    <section class="key-features">
      <h3>Features I Developed</h3>
      <ul>
        <li>Humorous 911 call scenarios</li>
        <li>Dialogue and decision-making systems</li>
        <li>Mini Games</li>
        <li>Bug Fixing</li>
        <li>Cutscenes and animations</li>
      </ul>
    </section>

    <section class="screenshots">
      <ProjectGallery
        images={images}
        title="Screenshots"
      />
    </section>
  </div>
);
