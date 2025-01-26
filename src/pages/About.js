import React from "react";
import styles from "../styles/About.module.css"; // Ensure you create this CSS file
import profile from "../assets/image.png";
import { BlackButton } from "../styles/SharedComponents"; // Adjust the import path
import { Link } from "react-router-dom";


const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.imageSection}>
                    <img
                        src={profile} // Replace with your profile image path
                        alt="Profile"
                        className={styles.profileImage}
                    />
                </div>
                <div className={styles.textSection}>
                    <h1>About Me</h1>
                    <p>
                        Hi, I'm <strong>Maz Wakes</strong>, a passionate web and app developer
                        with a keen eye for detail and a love for creating intuitive, user-friendly designs.
                        My journey began with a fascination for technology, and over the years,
                        I've honed my skills to build modern, responsive, and innovative applications.
                    </p>
                    <p>
                        Beyond coding, I enjoy exploring creative outlets like design and photography,
                        which inspire my work. I'm always excited to tackle new challenges and collaborate
                        on impactful projects.
                    </p>
                    <h2>Skills</h2>
                    <ul className={styles.skills}>
                        <li>JavaScript (ES6+)</li>
                        <li>React & Redux</li>
                        <li>HTML5 & CSS3</li>
                        <li>Node.js</li>
                        <li>Responsive Design</li>
                        <li>UI/UX Design</li>
                    </ul>
                    <h2>Resume</h2>
                    <BlackButton>
                        <Link to="/resume">Click for Resume</Link>
                    </BlackButton>
                </div>
            </div>
        </section>
    );
};

export default About;