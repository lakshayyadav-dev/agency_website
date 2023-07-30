import React from "react";
import styles from "../styles/Testimonials.module.css";
import Image from "next/image";
import dogpak from "../public/images/dogpak.png";
import client from "../public/images/client.webp";

const Testimonials = () => {
    return (
        <section className={styles.holder} id="testimonials">
            <h1>WHAT THEY SAY ABOUT US <span className={styles.small}>(scroll horizontally)</span></h1>

            <div className={styles.testimonialsHolder}>
                <div className={styles.testimonial}>
                    <p className={styles.testimonialText}>VOXO helped me redesign my website and landing pages to better match my brand. While I had a good idea of what I wanted, I lacked the professional skills and creativity to produce it. After describing what I wanted to convey through our website, The designers was able to come up with a compelling, robust design that perfectly matched our brand aesthetics, leading to better conversion rates within our target audience. I remain impressed with both, technical skills and creativity of the designers and developers. I would happily work with them again, and I appreciate their prompt responses and willingness to ensure our design was perfect. Thank you!</p>

                    <div className={styles.testimonialInfo}>
                        <Image src={dogpak} alt={"img"} className={styles.testimonialImage}/>

                        <div className={styles.testimonialName}>
                            <h3>Devin K.</h3>
                            <p>Founder - Dogpak</p>
                        </div>
                    </div>
                </div>

                <div className={styles.testimonial}>
                    <p className={styles.testimonialText}> It was a pleasure to work with VOXO! From the initial intake to our formal kickoff meeting they were responsive, intuitive, and went above and beyond to deliver and exceed expectations. Their communication, ideation, and creativity made it easy to manage the project and keep deadlines on track. We look forward to working with them again in the future!</p>

                    <div className={styles.testimonialInfo}>
                        <Image src={client} alt={"img"} className={styles.testimonialImage}/>

                        <div className={styles.testimonialName}>
                            <h3>Sam D.</h3>
                            <p>Client</p>
                        </div>
                    </div>
                </div>
            

            </div>
        </section>
    );
};

export default Testimonials;