import React from 'react';
import styles from '../styles/Footer.module.css';
import styled from'styled-components';
import { Link } from "react-router-dom";
// import Twitter from '../assets/icons/X.png';
// import YouTube from '../assets/icons/YouTube.png';
import LinkedIn from '../assets/icons/LinkedIn.png';
import Instagram from '../assets/icons/Instagram.png';
import Github from '../assets/icons/Github.png';


const Logo = styled(Link)`
    text-decoration: none;
    color: var(--gold);
    font-weight: center;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: var(--jet);
        text-decoration: underline;
    }
`;

const Footer = () => {
    return (
        <footer className={styles.footer}>


            <div className={styles.top}>
                <div>
                    <div>
                        <Logo to="/">MazWakes</Logo>
                    </div>
                    <p className={styles.heading}>Social Media</p>
                    <div className={styles.socials}>
                        <ul>
                            {/* <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener nore noreferrer" className={styles.x}>
                                <img src={Twitter} alt='Twitter logo'/>
                            </a>
                            </li> */}
                            <li>
                                <a href="https://www.instagram.com/mazwakes/" target="_blank" rel="noopener nore noreferrer" className={styles.insta}>
                                    <img src={Instagram} alt='Instagram logo'/>
                                </a>
                            </li>
                            {/* <li>
                                <a href="https://www.youtube.com" target="_blank" rel="noopener nore noreferrer" className={styles.yt}>
                                    <img src={YouTube} alt='YouTube logo'/>
                                </a>
                            </li> */}
                            <li>
                                <a href="https://www.linkedin.com/in/malia-wakesho-ajwang/" target="_blank" rel="noopener nore noreferrer" className={styles.linkedin}>
                                    <img src={LinkedIn} alt='LinkedIn logo'/>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/MaliaWakeshoAjwang" target="_blank" rel="noopener nore noreferrer" className={styles.github}>
                                    <img src={Github} alt='Github logo'/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className={styles.middle}>
                    <div className={styles.contact}>
                        <p className={styles.heading}>Contact Us</p>
                        <p>Atlanta, USA and London, UK</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@mazwakes.com</p>
                    </div>
                </div>

                <div className={styles.right}>
                    <p className={styles.heading}>Quick Links</p>
                    <div className={styles.quicklinks}>
                        <ul>
                            <li><Link to="/" className={styles.quicklink}>Home</Link></li>
                            <li><Link to="/about" className={styles.quicklink}>About</Link></li>
                            <li><Link to="/projects" className={styles.quicklink}>Projects</Link></li>
                            {/* <li><Link to="/blog" className={styles.quicklink}>Blog</Link></li> */}
                            <li><Link to="/contact" className={styles.quicklink}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>


            <div className={styles.bottom}>
                <p>&copy; 2024 MazWakes. All Rights Reserved.</p>
                <div className={styles.documents}>
                    <a href="/terms">Terms of Service</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;