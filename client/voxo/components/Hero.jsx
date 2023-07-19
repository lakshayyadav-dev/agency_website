import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import image2 from "../public/image 2.png";
import agency_1 from "../public/agency_1.png";
import agency_2 from "../public/agency_2.png";

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div>
                    <h1 className={styles.heading}>Creating Artful <br className={styles.lineBreak}/> Digital Experiences</h1>
                    <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for
                        previewing layouts and visual mockups. </p>
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
        </div>
    );
};

export default Hero;