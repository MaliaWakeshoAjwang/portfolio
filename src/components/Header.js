import React from 'react';
import { NavLink } from "react-router-dom";
import styles from '../styles/Header.module.css'
import styled from'styled-components';
import Twitter from '../assets/icons/X.png';
import YouTube from '../assets/icons/YouTube.png';
import LinkedIn from '../assets/icons/LinkedIn.png';
import Instagram from '../assets/icons/Instagram.png';

const Logo = styled(NavLink)`
    text-decoration: none;
    color: var(--gold);
    font-weight: bold;
    margin: 0 10px;
    transition: color 0.2s ease-in-out;

    &:hover {
        color: var(--jet);
    }

`;

const Navlink = styled(NavLink)`
    text-decoration: none;
    color: var(--jet);
    font-size: 1rem;
    font-weight: 500;
    position: relative;
    transition: color 0.3s ease-in-out;

    &:hover {
        color: var(--gold);
        font-weight: bold;
    }
    
    &.active {
        font-weight: 650;
        text-decoration: underline;
        text-decoration-color: var(--gold);
        text-decoration-thickness: 2px;
        text-underline-offset:5px;
    }

    &.active::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 2px
        background-color: var(--gold);
    }
`;

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Logo to="/">MazWakes</Logo>
            </div>
            <nav>
                <ul>
                    <li>
                        <Navlink to="/">Home</Navlink>
                    </li>
                    <li>
                        <Navlink to="/about">About</Navlink>
                    </li>
                    <li>
                        <Navlink to="/projects">Projects</Navlink>
                    </li>
                    <li>
                        <Navlink to="/blog">Blog</Navlink>
                    </li>
                    <li>
                        <Navlink to="/contact">Contact</Navlink>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener nore noreferrer" className={styles.x}>
                            <img src={Twitter} alt='Twitter logo'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noopener nore noreferrer" className={styles.insta}>
                            <img src={Instagram} alt='Instagram logo'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com" target="_blank" rel="noopener nore noreferrer" className={styles.yt}>
                            <img src={YouTube} alt='YouTube logo'/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener nore noreferrer" className={styles.linkedin}>
                            <img src={LinkedIn} alt='LinkedIn logo'/>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;