import React from "react";
import styles from "../styles/Work.module.css";
import Image from "next/image";
import Project from "@/components/Project";
import agency_1 from "../public/agency_1.png";
import agency_2 from "../public/agency_2.png";

const Work = () => {
    return (
        <div className={styles.holder}>
            <h1>OUR WORK</h1>
            <div className={styles.projectsHolder}>
                <Project
                    coverImage={agency_1}
                    projectName={"Dogpak Landing page"}
                    projectDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                />

                <Project
                    coverImage={agency_2}
                    projectName={"Dogpak Landing page"}
                    projectDescription={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
                />
            </div>
        </div>
    );
};

export default Work;