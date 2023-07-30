import React from "react";
import Accordion from "@/components/Accordion";
import styles from "../styles/Services.module.css";

const Services = () => {
    return (
        <section className={styles.container} id="services">
            <Accordion
                title={"DESIGN"}
                number={"01"}
                description={"We believe that every project is an opportunity to weave magic on the digital canvas. With a team of artistic visionaries and modern design experts, we take pride in crafting bespoke solutions that breathe life into brands and tell captivating stories."}
            />
            <Accordion
                title={"DEVELOPMENT"}
                number={"02"}
                description={"Our development process is built on a foundation of collaboration and communication, ensuring that we understand your unique needs and objectives. From conceptualization to deployment, we meticulously craft websites and applications that not only meet your requirements but also exceed your expectations."}
            />
            <Accordion
                title={"UI/UX"}
                number={"03"}
                description={"From the first click to the final interaction, we prioritize the user journey, ensuring that every step is a delightful and engaging experience. Our iterative design process involves continuous refinement and feedback, allowing us to craft solutions that not only align with your brand identity but also resonate with your target audience."}
            />
        </section>
    );
};

export default Services;