import React from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/Header.module.css'
import styled from'styled-components';
import TwitterIcon from '../assets/Twitter.png';
import YouTubeIcon from '../assets/YouTube.png';
import LinkedInIcon from '../assets/LinkedIn.png';
import InstagramIcon from '../assets/Instagram.png';

const Logo = styled(Link)`
    text-decoration: none;
    color: var(--gold);
    font-weight: bold;
    margin: 0 10px;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: var(--jet);
        text-decoration: underline;
    }
`;

const Navlink = styled(Link)`
    text-decoration: none;
    color: var(--jet);
    font-size: 1rem;
    font-weight: 500;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: var(--gold);
        font-weight: bold;
    }
`;

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Logo to="/">MazWakes</Logo>
            </div>
            <div className={styles.nav}>
                <nav>
                    <ul>
                        <li>
                            <Navlink to="/about">About</Navlink>
                        </li>
                        <li>
                            <Navlink to="/projects">Projects</Navlink>
                        </li>
                        <li>
                            <Navlink to="/contact">Contact</Navlink>
                        </li>
                        <li>
                            <img src={TwitterIcon} alt='Twitter logo'/>
                        </li>
                        <li>
                            <img src={InstagramIcon} alt='Instagram logo'/>
                        </li>
                        <li>
                            <img src={YouTubeIcon} alt='YouTube logo'/>
                        </li>
                        <li>
                            <a herf="https://instagram.com" target="_blank" rel="noopener nore">
                                <img src={LinkedInIcon} alt='LinkedIn logo'/>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;