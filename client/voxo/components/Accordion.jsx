"use client"

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/Accordion.module.css";
import arrow from "../public/images/arrow.png";
import Image from "next/image";

const Accordion = ({title, description, number}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div className={styles.container}>
            <AnimatePresence>
                <motion.div
                    key="question"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <motion.div className={styles.titleHolder}>
                        <h1 className={styles.title}> <span className={styles.number}>{number}</span> {title}</h1>
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ ease: "easeOut", duration: 0.2 }}
                        >
                            <Image src={arrow} alt={"arrow"} className={styles.arrow}/>
                        </motion.div>
                    </motion.div>
                </motion.div>

                {isOpen && (
                    <motion.div
                        key="answer"
                        initial={{ y: -65}}
                        animate={{
                            y: 0,
                            transition: {
                                duration: 0.5,
                            },
                        }}
                        exit={{ y: -65}}
                        className={styles.description}
                    >
                        {description}
                    </motion.div>
                )}
            </AnimatePresence>
            <hr />
        </motion.div>
    );
};

export default Accordion;