import React from "react";
import styles from "../styles/Resume.module.css";

const Resume = () => {
    return (
        <section className={styles.resume}>
            <div className={styles.container}>
                <h1>My Resume</h1>
                <p>Download a PDF version of my resume or explore my skills, experience, and education below.</p>
                <a
                    href="/assets/MazWakes_Resume.pdf" // Replace with your actual resume path
                    className={styles.ctaButton}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download Resume
                </a>

                <div className={styles.sections}>
                    <div className={styles.section}>
                        <h2>Experience</h2>
                        <ul>
                            <li>
                                <h3>Web Developer at XYZ Company</h3>
                                <p>June 2021 - Present</p>
                                <p>
                                    - Built and maintained responsive websites using React and CSS frameworks.
                                    - Improved website performance by 30% through optimization techniques.
                                    - Collaborated with designers and back-end developers to deliver client projects.
                                </p>
                            </li>
                            <li>
                                <h3>Graphic Designer at ABC Studio</h3>
                                <p>Jan 2019 - May 2021</p>
                                <p>
                                    - Designed custom graphics and marketing materials for clients.
                                    - Increased client satisfaction by 25% through effective design strategies.
                                </p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2>Education</h2>
                        <ul>
                            <li>
                                <h3>Bachelor of Science in Computer Science</h3>
                                <p>University of Technology, 2016 - 2020</p>
                            </li>
                            <li>
                                <h3>Certificate in UI/UX Design</h3>
                                <p>Online Design Academy, 2021</p>
                            </li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h2>Skills</h2>
                        <ul className={styles.skills}>
                            <li>JavaScript (ES6+)</li>
                            <li>React & Redux</li>
                            <li>HTML5 & CSS3</li>
                            <li>Node.js</li>
                            <li>UI/UX Design</li>
                            <li>Responsive Design</li>
                            <li>Git & GitHub</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;