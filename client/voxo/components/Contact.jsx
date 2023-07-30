import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
    return (
        <section className={styles.holder} id="contact">
            <h1 className={styles.heading}>HAVE A COOL PROJECT?</h1>
            <a href="mailto:lakshayyadav.dev@gmail.com" className={styles.link}>@voxoagency.gmail.com</a>
        </section>
    );
};

export default Contact;