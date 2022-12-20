"use client";

import { motion } from "framer-motion";
import { Features as Ft, TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn, projectVariants } from "../utils/motion";
import { features } from "../constants";

const Features = () => (
  <section
    className={`${styles.paddings} relative z-10`}
    id='features'
    style={{ scrollSnapType: "y mandatory" }}
  >
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className='flex-[0.75] flex justify-center flex-col'
      >
        <TypingText title='| Our Focus' />
        <TitleText title={<>What is our focus?</>} />
        <div className='mt-[48px] flex flex-wrap justify-between gap-[24px]'>
          {features.map((feature) => (
            <Ft key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={projectVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src='/online-shopping.svg'
          alt='focus'
          className='w-[90%] h-[90%] object-contain'
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Features;
