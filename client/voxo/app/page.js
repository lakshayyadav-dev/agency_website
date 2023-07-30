import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <div className={styles.container}>
            <Navbar />
            <Hero />
            <About />
            <Services />
            <Work />
            <Testimonials />
            <Contact />
        </div>
    );
}
