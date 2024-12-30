import React from 'react';
import styles from '../styles/Project.module.css'; // Import the CSS file
import holder from '../assets/holder.png'; // Placeholder image

const projectData = [
    {
        id: 1,
        title: "Project 1",
        description: "A brief description of Project 1.",
        image: holder,
        liveLink: "https://live-project1.com",
        githubLink: "https://github.com/yourusername/project1",
    },
    {
        id: 2,
        title: "Project 2",
        description: "A brief description of Project 2.",
        image: holder,
        liveLink: "https://live-project2.com",
        githubLink: "https://github.com/yourusername/project2",
    },
    {
        id: 3,
        title: "Project 3",
        description: "A brief description of Project 3.",
        image: holder,
        liveLink: "https://live-project3.com",
        githubLink: "https://github.com/yourusername/project3",
    },
];

const Projects = () => {
    return (
        <section className={styles.projectsSection}>
            <div className='landing'>
                <div className={styles.header}>
                    <h1>Projects</h1>
                    <p>Take a look at some of my recent work.</p>
                </div>
                <div className={styles.projectsGrid}>
                    {projectData.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
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
                                <div className={styles.projectLinks}>
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.btn} ${styles.btnPrimary}`}
                                    >
                                        View Live
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${styles.btn} ${styles.btnSecondary}`}
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;