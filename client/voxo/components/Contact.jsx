import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
    return (
        <div className={styles.holder}>
            <h1 className={styles.heading}>HAVE A COOL PROJECT?</h1>
            <a href="mailto:lakshayyadav.dev@gmail.com" className={styles.link}>@voxoagency.gmail.com</a>
        </div>
    );
};

export default Contact;