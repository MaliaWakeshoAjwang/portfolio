import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import styles from '../styles/Header.module.css';
import styled from 'styled-components';
import LinkedIn from '../assets/icons/LinkedIn.png';
import Instagram from '../assets/icons/Instagram.png';
import Github from '../assets/icons/Github.png';

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
        text-underline-offset: 5px;
    }
`;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Logo to="/">MazWakes</Logo>
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <span className={menuOpen ? styles.barOpen : styles.bar}></span>
                <span className={menuOpen ? styles.barOpen : styles.bar}></span>
                <span className={menuOpen ? styles.barOpen : styles.bar}></span>
            </div>
            <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                <ul>
                    <li>
                        <Navlink to="/" onClick={() => setMenuOpen(false)}>Home</Navlink>
                    </li>
                    <li>
                        <Navlink to="/about" onClick={() => setMenuOpen(false)}>About</Navlink>
                    </li>
                    <li>
                        <Navlink to="/projects" onClick={() => setMenuOpen(false)}>Projects</Navlink>
                    </li>
                    <li>
                        <Navlink to="/contact" onClick={() => setMenuOpen(false)}>Contact</Navlink>
                    </li>
                    <li>
                        <a
                            href="https://www.instagram.com/mazwakes/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.insta}
                        >
                            <img src={Instagram} alt='Instagram logo' />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/malia-wakesho-ajwang/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkedin}
                        >
                            <img src={LinkedIn} alt='LinkedIn logo' />
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/MaliaWakeshoAjwang"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.github}
                        >
                            <img src={Github} alt='Github logo' />
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;