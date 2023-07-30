import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
    return (
        <section className={styles.container} id="about">
            <h1>ABOUT US</h1>
            <hr />
            <p>
                Step into a realm where artistry and modernity converge to shape extraordinary digital experiences. At VOXO, we are more than just creators; we are storytellers, crafting compelling narratives through captivating designs.
                <br /> <br />
                From sleek and sophisticated interfaces to immersive and interactive web solutions, we blend the best of both worlds to ensure your brand stands out in the ever-evolving digital landscape.
            </p>
        </section>
    );
};

export default About;