import React from "react";
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={styles.holder}>
            <div className={styles.companyInfo}>
                <h1>VOXO</h1>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            <div className={styles.links}>
                <a>home</a>
                <a>about</a>
                <a>services</a>
                <a>work</a>
                <a>testimonials</a>
                <a>contact</a>
            </div>
        </div>
    );
};

export default Footer;