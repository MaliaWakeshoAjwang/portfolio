import React from 'react';
import { Link } from "react-router-dom";
import styles from '../styles/Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">MazWakes</Link>
                {/* <h1>MazWakes</h1> */}
            </div>
            <div className={styles.nav}>

            </div>
        </header>
    );
};

export default Header;