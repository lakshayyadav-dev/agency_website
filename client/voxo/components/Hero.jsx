import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import image2 from "../public/images/image 2.png";
import agency_1 from "../public/images/agency_1.png";
import agency_2 from "../public/images/agency_2.png";

const Hero = () => {
    return (
        <section className={styles.container} id="hero">
            <div className={styles.hero}>
                <div>
                    <h1 className={styles.heading}>Creating Artful <br className={styles.lineBreak}/> Digital Experiences</h1>
                    <p>Unleashing the synergy of creativity and coding, we are a web development atelier specializing in crafting artful digital experiences that captivate and inspire. </p>
                </div>
                <Image src={image2} className={styles.mainImage} alt={"abstract pattern"}/>
            </div>

            <div className={styles.servicesHolder}>
                <hr />
                <div className={styles.services}>
                    <p>design</p>
                    <p>development</p>
                    <p>seo</p>
                </div>
                <hr />
            </div>

            <div className={styles.images}>
                <Image src={agency_1} alt={"workspace"} className={styles.image}/>
                <Image src={agency_2} alt={"workspace"} className={styles.image}/>
            </div>
        </section>
    );
};

export default Hero;