// src/components/ProjectGrid.tsx
interface Project {
  name: string;
  image: string;
}

export default ({ projects }: { projects: Project[] }) => {
  if (!projects?.length) return <div>No projects to display.</div>;

  return (
      <div class="project-grid">
        {projects.map((project) => (
            <div class="project-item">
              <img src={project.image} alt={project.name} />
              <p>{project.name}</p>
            </div>
        ))}
      </div>
  );
};