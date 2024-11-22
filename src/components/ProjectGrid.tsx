import React from "react";

interface Project {
    name: string;
    image: string;
}

interface ProjectGridProps {
    projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = (
    { projects }: ProjectGridProps,
) => {
    if (!projects || projects.length === 0) {
        return <div>No projects to display.</div>;
    }

    return (
        <div className="project-grid">
            {projects.map((project, index) => (
                <div key={index} className="project-item">
                    <img src={project.image} alt={project.name} />
                    <p>{project.name}</p>
                </div>
            ))}
        </div>
    );
};

export default ProjectGrid;
