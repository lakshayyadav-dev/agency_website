import React from "react";
import styles from "@/styles/Work.module.css";
import Image from "next/image";

const Project = ({projectName, projectDescription, coverImage}) => {
    return (
        <div className={styles.project}>
            <Image src={coverImage} className={styles.projectImage} alt={"image"}/>

            <div className={styles.projectDescription}>
                <h2>{projectName}</h2>
                <p>{projectDescription}</p>
            </div>
        </div>
    );
};

export default Project;