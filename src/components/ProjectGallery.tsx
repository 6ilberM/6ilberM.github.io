import React from "react";

interface ProjectImage {
    src: string;
    alt: string;
    name?: string;
}

interface ProjectGalleryProps {
    images: ProjectImage[] | [];
    title?: string;
}

const ProjectGallery: React.FC<ProjectGalleryProps> = (
    { images = [], title }: ProjectGalleryProps,
) => {
    return (
        <>
            {title && <h3>{title}</h3>}
            <div className="project-grid">
                {images.map((image, index) => (
                    <div key={index} className="project-item">
                        <img src={image.src} alt={image.alt} />
                        {image.name && <p>{image.name}</p>}
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProjectGallery;
