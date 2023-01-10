"use client";

import { motion } from "framer-motion";
import { WhyUs as WU, TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn, projectVariants } from "../utils/motion";
import { whyUs } from "../constants";

const WhyUs = () => (
  <section
    className={`${styles.paddings} relative z-10`}
    id='whyus'
    style={{ scrollSnapType: "y mandatory" }}
  >
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: "true", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={projectVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src='/email.svg'
          alt='get-started'
          className='w-[90%] h-[90%] object-contain'
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] flex justify-center flex-col'
      >
        <TypingText title='| Why Choose Us' />
        <TitleText title={<>Why Should You choose Us?</>} />
        <div className='mt-[31px] flex flex-col max-w-[370px] gap-[24px]'>
          {whyUs.map((feature, index) => (
            <WU key={feature} number={index + 1} text={feature} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhyUs;
