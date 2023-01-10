"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { MissionStatementCard, TitleText, TypingText } from "../components";
import { staggerContainer } from "../utils/motion";

const MissionStatement = () => (
  <section
    className={`${styles.paddings} relative z-10`}
    id='services'
    style={{ scrollSnapType: "y mandatory" }}
  >
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: "true", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| Mission Statement' textStyles='text-center' />
      <TitleText title='What We Stand For' textStyles='text-center' />
      <MissionStatementCard />
    </motion.div>
  </section>
);

export default MissionStatement;
