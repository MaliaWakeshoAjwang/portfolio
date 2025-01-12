import React, { useState } from "react";
import styles from "../styles/Project.module.css";
import projectData from "../data/projectData"; // Import project dat

// Projects Component
const Projects = () => {
    const [activeTags, setActiveTags] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    // Toggle tags for filtering
    const handleTagClick = (tag) => {
        setActiveTags((prevTags) =>
            prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
        );
    };

    // Filter projects based on selected tags
    const filteredProjects = activeTags.length
        ? projectData.filter((project) =>
              activeTags.every((tag) => project.tags.includes(tag))
          )
        : projectData;

    return (
        <section className={styles.projectsSection}>
            {/* Header */}
            <div className={styles.header}>
                <h1>Projects</h1>
                <p>Take a look at some of my recent work and explore by tags.</p>
            </div>

            {/* Tags for Filtering */}
            <div className={styles.tags}>
                {["React", "Frontend", "Backend", "Portfolio", "Fullstack", "JavaScript"].map((tag) => (
                    <button
                        key={tag}
                        onClick={() => handleTagClick(tag)}
                        className={`${styles.tag} ${
                            activeTags.includes(tag) ? styles.activeTag : ""
                        }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className={styles.projectsGrid}>
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className={styles.projectCard}
                        onClick={() => setSelectedProject(project)}
                    >
                        <div className={styles.imageContainer}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className={styles.projectImage}
                            />
                        </div>
                        <div className={styles.projectDetails}>
                            <h2 className={styles.projectTitle}>
                                {project.title}
                            </h2>
                            <p className={styles.projectDescription}>
                                {project.description}
                            </p>
                            <div className={styles.projectTags}>
                                {project.tags.map((tag) => (
                                    <span key={tag} className={styles.projectTag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Selected Project */}
            {selectedProject && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <button
                            className={styles.closeButton}
                            onClick={() => setSelectedProject(null)} // Close modal
                        >
                            &times;
                        </button>
                        <div className={styles.modalBody}>
                            <h2>{selectedProject.title}</h2>
                            <h3>What I've done:</h3>
                            <p>{selectedProject.what}</p>
                            <h3>How I did it:</h3>
                            <p>{selectedProject.how}</p>
                            <h3>Achievements:</h3>
                            <p>{selectedProject.achieved}</p>
                            <div className={styles.projectTags}>
                                {selectedProject.tags?.map((tag, index) => (
                                    <span key={index} className={styles.projectTag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className={styles.modalFooter}>
                            <a
                                href={selectedProject.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                GitHub
                            </a>
                            <a
                                href={selectedProject.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Projects;