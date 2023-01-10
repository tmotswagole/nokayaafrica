"use client";

import { motion } from "framer-motion";
import { ServicesCard, TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { services } from "../constants";

const Services = () => (
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
      <TypingText title='| Services' textStyles='text-center' />
      <TitleText title='Services We Offer' textStyles='text-center' />
      <div className='mt-[50px] flex flex-col gap-[30px]'>
        {services.map((servicesValue, index) => (
          <ServicesCard
            key={`services-${index}`}
            {...servicesValue}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Services;
