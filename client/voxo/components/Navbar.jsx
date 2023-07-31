import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
	return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li className={styles.logoText}>VOXO</li>
                <li><a href="#work">projects</a></li>
                <li><a href="#contact">contact</a></li>
            </ul>

            <div className={`${styles.mobileNavbar} ${styles.hide}`}>
                <h2>VOXO</h2>
                {/* <div className={styles.burger}>
                    <div />
                    <div />
                </div> */}
            </div>
        </nav>
    )
};

export default Navbar;