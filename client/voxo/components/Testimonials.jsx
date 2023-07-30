import React from "react";
import styles from "../styles/Testimonials.module.css";
import Image from "next/image";
import agency_1 from "../public/agency_1.png";

const Testimonials = () => {
    return (
        <div className={styles.holder}>
            <h1>WHAT THEY SAY ABOUT US <span className={styles.small}>(scroll horizontally)</span></h1>

            <div className={styles.testimonialsHolder}>
                <div className={styles.testimonial}>
                    <p className={styles.testimonialText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <div className={styles.testimonialInfo}>
                        <Image src={agency_1} alt={"img"} className={styles.testimonialImage}/>

                        <div className={styles.testimonialName}>
                            <h3>John Doe</h3>
                            <p>CEO of Company</p>
                        </div>
                    </div>
                </div>
                <div className={styles.testimonial}>
                    <p className={styles.testimonialText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <div className={styles.testimonialInfo}>
                        <Image src={agency_1} alt={"img"} className={styles.testimonialImage}/>

                        <div className={styles.testimonialName}>
                            <h3>John Doe</h3>
                            <p>CEO of Company</p>
                        </div>
                    </div>
                </div>
                <div className={styles.testimonial}>
                    <p className={styles.testimonialText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <div className={styles.testimonialInfo}>
                        <Image src={agency_1} alt={"img"} className={styles.testimonialImage}/>

                        <div className={styles.testimonialName}>
                            <h3>John Doe</h3>
                            <p>CEO of Company</p>
                        </div>
                    </div>
                </div>
                <div className={styles.testimonial}>
                    <p className={styles.testimonialText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <div className={styles.testimonialInfo}>
                        <Image src={agency_1} alt={"img"} className={styles.testimonialImage}/>

                        <div className={styles.testimonialName}>
                            <h3>John Doe</h3>
                            <p>CEO of Company</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;