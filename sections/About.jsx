"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section
    className={`${styles.paddings} relative z-10`}
    id='about'
    style={{ scrollSnapType: "y mandatory" }}
  >
    <div className='gradient-02 z-0' />
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title='| About Noka' textStyles='text-center' />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className='mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white'
      >
        Being the change we wish to see in the world is central to{" "}
        <span className='font-extrabold text-white'>Our Philosophy</span>. To
        accomplish this{" "}
        <span className='font-extrabold text-white'>Our Mission</span> statement
        is to establish ecosystems of African technological products that are
        human centric. A unified African technological revolution that ushers in
        the new era is what we envision.{" "}
        <span className='font-extrabold text-white'>Our Objectives</span> are in
        innovation and quality based, with research and development as a key
        areas of emphasis, to achieve this.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src='/arrow-down.svg'
        alt='arrow down'
        className='w-[18px] h-[28px] object-contain mt-[28px]'
      />
    </motion.div>
  </section>
);

export default About;
