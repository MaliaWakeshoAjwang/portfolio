import React from 'react';
import styles from '../styles/Home.module.css';
import Malia from '../assets/Subject.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
            <div>
                {/* LANDING */}
                <div className={`landing ${styles.landing}`}>
                    <h1>MazWakes</h1>
                    <p>Web & App Developer | Designer | Creator of Digital Magic</p>
                    <div class={styles.scrollindicator}>
                        <p>Scroll Down</p>
                            <div class={styles.goldline}></div>
                    </div>
                </div>
                {/* ABOUT */}
                <div className={styles.about}>
                    <div className={styles.selfie}>
                        <img src={Malia} alt='Malia'/>
                    </div>
                    <div className={styles.info}>
                        <h2>About Me</h2>
                        <p>I'm a passionate, dedicated, and creative web developer with a strong foundation in front-end development and a background in cyber-security. I have a keen eye for detail and an unwavering commitment to delivering high-quality, user-friendly experiences. I'm currently seeking opportunities to work on challenging projects and contribute to the growing industry.</p>
                        <div className={styles.ctacontainer}>
                            <button className={styles.ctablack}>
                                <Link to="/about" className={styles.link}>More About Me</Link>
                            </button>
                            <button className={styles.ctawhite}>
                                <Link to="/projects" className={styles.link}>Latest Project</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;