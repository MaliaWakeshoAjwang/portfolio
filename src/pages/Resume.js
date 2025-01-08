import React from "react";
import styles from "../styles/Resume.module.css";
import ResumePDF from "../assets/Resume.pdf";

const Resume = () => {
    return (
        <section className={styles.resume}>
            <div className={styles.container}>
                <h1>My Resume</h1>
                <p>Download a PDF version of my resume or explore my skills, experience, and education below.</p>
                <a
                    href={ResumePDF}
                    className={styles.ctaButton}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download Resume
                </a>

                <div className={styles.sections}>
                    {/* Experience Section */}
                    <div className={styles.section}>
                        <h2>Experience</h2>
                        <ul>
                            <li className={styles.experience}>
                                <h3>Innovation Consulting Fellow</h3>
                                <p>The Hatchery, Atlanta, GA</p>
                                <p>Sep 2024 – May 2025</p>
                                <ul>
                                    <li>Advised student ventures on innovation strategies using Human-Centered Design and Lean Startup principles.</li>
                                    <li>Supported student founders with prototyping, software development, and technology integration.</li>
                                    <li>Specialized in consulting for programming and technology solutions, optimizing software, and troubleshooting challenges.</li>
                                </ul>
                            </li>
                            <li className={styles.experience}>
                                <h3>Software Engineering Virtual Experience Trainee</h3>
                                <p>J.P. Morgan, Remote</p>
                                <p>Jun 2024</p>
                                <ul>
                                    <li>Developed a live graph visualization tool using Python and J.P. Morgan’s Perspective library.</li>
                                    <li>Fixed and optimized code in a broken repository to ensure efficient web application performance.</li>
                                    <li>Gained insights into financial services technology and global decision-making.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Education Section */}
                    <div className={styles.section}>
                        <h2>Education</h2>
                        <ul>
                            <li className={styles.experience}>
                                <h3>Bachelor of Art in Computer Science and Psychology</h3>
                                <p>Emory University, Atlanta, GA</p>
                                <p>May 2022 - Present</p>
                                <p>Cumulative GPA: 3.85/4.00</p>
                            </li>
                        </ul>
                    </div>

                    {/* Skills Section */}
                    <div className={styles.section}>
                        <h2>Skills</h2>
                        <ul className={styles.skills}>
                            <li>JavaScript (ES6+)</li>
                            <li>React & Redux</li>
                            <li>HTML5 & CSS3</li>
                            <li>Node.js</li>
                            <li>UI/UX Design</li>
                            <li>Python</li>
                            <li>Human-Centered Design</li>
                        </ul>
                    </div>

                    {/* Leadership Section */}
                    <div className={styles.section}>
                        <h2>Leadership & Community Engagement</h2>
                        <ul>
                            <li className={styles.experience}>
                                <h3>Freelance Web Development</h3>
                                <p>Atlanta, GA</p>
                                <p>Jun 2024 – Present</p>
                                <ul>
                                    <li>Built websites for Emory clubs and individual student portfolios.</li>
                                    <li>Developing the official website for Emory African Students Association (ASA).</li>
                                </ul>
                            </li>
                            <li className={styles.experience}>
                                <h3>Volunteer, Emory Girls Who Code</h3>
                                <p>Sep 2024 – Present</p>
                                <ul>
                                    <li>Promoted coding and technology education for girls in neighboring schools.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    {/* Additional Skills Section */}
                    <div className={styles.section}>
                        <h2>Additional Skills & Interests</h2>
                        <ul className={styles.skills}>
                            <li>Languages: Fluent in English; Conversational in Swahili and French</li>
                            <li>Soccer</li>
                            <li>Psychology</li>
                            <li>Travel</li>
                            <li>Literature and Creative Writing</li>
                            <li>Social Impact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Resume;