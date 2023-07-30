import React from "react";
import styles from "../styles/Work.module.css";
import Image from "next/image";
import Project from "@/components/Project";
import dogpak from "../public/images/dogpak.png";
import hoobank from "../public/images/hoobank_landingpage.png";
import geritch_landingpage from "../public/images/gericht_landingpage.png";
import client_website from "../public/images/client_website.webp";

const Work = () => {
    return (
        <section className={styles.holder} id="work">
            <h1>OUR WORK</h1>
            <div className={styles.projectsHolder}>
                <Project
                    coverImage={dogpak}
                    projectName={"Dogpak Landing page"}
                    projectDescription={"Landing page for DOGPAK. A k9 gear company based in Switzerland. The website is built with Next.js. The design focuses on conveying the message of the brand and building trust and to communicate effectively with the target audience."}
                />

                <Project
                    coverImage={hoobank}
                    projectName={"Hoobank"}
                    projectDescription={"This is a landing page for a fictional bank. The website is built with Next.js. It's responsive across all devices. The design focuses on building trust and conveying the bank's values."}
                />

<Project
                    coverImage={geritch_landingpage}
                    projectName={"Gericht Restaurant"}
                    projectDescription={"This is a landing page for a fictional restaurant. The website is built with Next.js. The website has been crafted with SEO and performance in mind. The design focuses on the brand identity and conveys the restaurant's values."}
                />

<Project
                    coverImage={client_website}
                    projectName={"AI Website"}
                    projectDescription={"This is an AI themed website for a client. The website is built with React. It is responsive across all devices. "}
                />
            </div>
        </section>
    );
};

export default Work;