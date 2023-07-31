import React from "react";
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <section className={styles.holder}>
            <div className={styles.companyInfo}>
                <h1>VOXO</h1>
                <p>Where Art Meets Web Development.</p>
                <p className={styles.locationText}>Based in New Delhi, India.</p>
            </div>

            <div className={styles.links}>
                <a href="#hero">home</a>
                <a href="#about">about</a>
                <a href="#services">services</a>
                <a href="#work">work</a>
                <a href="#testimonials">testimonials</a>
                <a href="#contact">contact</a>
            </div>
        </section>
    );
};

export default Footer;