"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, fadeIn, zoomIn } from "../utils/motion";

const Feedback = () => (
  <section
    className={`${styles.paddings} relative z-10`}
    id='feedback'
    style={{ scrollSnapType: "y mandatory" }}
  >
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className='flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#f2e8df] relative'
      >
        <div className='feedback-gradient' />
        <div>
          <h4 className='font-bold sm:text-[32px] text-[26px] sm:leading-[40px] leading-[36px] text-white'>
            Raven
          </h4>
          <p className='mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white'>
            Founder of Caesar Capital
            <br />
            (PTY LTD)
          </p>
        </div>
        <p className='mt-[24px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white'>
          "I recently worked with Noka, providing us with Backend development on
          a website project and I was thoroughly impressed with their skills and
          expertise. I would highly recommend this company for any website
          project."
        </p>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className='relative flex-1 flex justify-center items-center'
      >
        <img
          src='/person-working.svg'
          alt='person-working'
          className='w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]'
        />
        <motion.div
          variant={zoomIn(0.4, 1)}
          className='lg:block hidden absolute -left-[10%] top-[3%]'
        >
          <img
            src='/stamp.png'
            alt='stamp'
            className='w-[155px] h-[155px] object-contain'
          />
        </motion.div>
      </motion.div>
    </motion.div>
  </section>
);

export default Feedback;
