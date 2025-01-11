import React, { useState } from "react";
import styles from "../styles/Project.module.css";
import holder from "../assets/holder.png";
import portfolio from "../assets/personal portfolio.png";

// Project Data
const projectData = [
    {
        id: 1,
        title: "My Personal Portfolio",
        description: "A responsive portfolio showcasing my skills, projects, and contact information.",
        what: "I have created a responsive and visually appealing personal portfolio website that showcases my skills, projects, and contact information. The portfolio serves as a central hub to demonstrate my expertise in front-end development, including React, CSS, and JavaScript, along with my ability to create user-friendly designs.",
        how: "I started by designing wireframes and a cohesive theme using Figma to ensure a visually appealing and structured layout. The website was built using React for its reusable components, React Router for seamless navigation, and CSS Modules for modular and scoped styling. I integrated interactive features like a project carousel and modals for detailed project views to enhance user experience. By utilizing CSS Grid and Flexbox, I ensured the site is fully responsive across desktop, tablet, and mobile devices. Finally, I deployed the portfolio on GitHub Pages for easy access and version control.",
        achieved: "The portfolio provides a polished and professional online presence, enabling me to effectively share my expertise with potential employers and collaborators. It highlights my skills in front-end development, responsive design, and interactivity through a dedicated projects section. By incorporating a clear structure and engaging design, the website offers an enjoyable and seamless user experience. Building this portfolio also allowed me to refine my technical skills and gain hands-on experience with deployment and managing live projects.",
        tags: ["React", "Frontend", "Portfolio"],
        image: portfolio,
        liveLink: "https://maliawakeshoajwang.github.io/portfolio/",
        githubLink: "https://github.com/MaliaWakeshoAjwang/portfolio",
    },
    {
        id: 2,
        title: "Project 2",
        description: "A brief description of Project 2.",
        tags: ["Node.js", "Backend"],
        image: holder,
        liveLink: "https://live-project2.com",
        githubLink: "https://github.com/yourusername/project2",
    },
    {
        id: 3,
        title: "Project 3",
        description: "A brief description of Project 3.",
        tags: ["React", "Fullstack"],
        image: holder,
        liveLink: "https://live-project3.com",
        githubLink: "https://github.com/yourusername/project3",
    },
];

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
                {["React", "Frontend", "Backend", "Portfolio", "Fullstack"].map((tag) => (
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