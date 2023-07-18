import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
	return (
        <nav className={styles.navbar}>
            <ul className={styles.list}>
                <li>home</li>
                <li>about</li>
                <li className={styles.logoText}>VOXO</li>
                <li>projects</li>
                <li>contact</li>
            </ul>

            <div className={`${styles.mobileNavbar} ${styles.hide}`}>
                <h2>VOXO</h2>
                <div className={styles.burger}>
                    <div />
                    <div />
                </div>
            </div>
        </nav>
    )
};

export default Navbar;