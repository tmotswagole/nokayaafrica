"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactModal from "./ContactModal";
import styles from "../styles";
import { footerVariants } from "../utils/motion";
import { socials } from "../constants";

const Footer = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  return (
    <motion.footer
      variants={footerVariants}
      initial='hidden'
      whileInView='show'
      className={`${styles.paddings} py-8 relative`}
    >
      <div className='footer-gradient' />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className='flex items-center justify-between flex-wrap gap-5'>
          <h4 className='font-bold md:text-[60px] text-[44px] text-white'>
            Want to learn more? Get in touch!
          </h4>
          <motion.button
            type='button'
            className='flex items-center h-fit py-4 px-6 bg-[#d98fcc] rounded-[32px] gap-[12px]'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen ? close() : open())}
          >
            <img
              src='/gmail.png'
              alt='email'
              className='w-[24px] h-[24px] object-contain'
            />
            <span className='font-normal text-[16px] text-white'>
              CONTACT US
            </span>
          </motion.button>
        </div>

        <AnimatePresence initial={false} exit onExitComplete={() => null}>
          {modalOpen && (
            <ContactModal modalOpen={modalOpen} handleClose={close} />
          )}
        </AnimatePresence>
        <div className='flex flex-col'>
          <div className='mn-[50px] h-[2[x] bg-white opacity-10' />
          <div className='flex items-center justify-between flex-wrap gap-4'>
            <h4 className='font-extrabold text-[24px] text-white'>
              Noka Ya Africa
            </h4>
            <p className='font-normal text-[14px] text-white opacity-50'>
              Copyright &copy; 2022-2021 Noka Ya Africa. All rights reserved.
            </p>
            <div className='flex gap-4'>
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  onClick={() => window.open(social.link, "_blank")}
                  className='w-[24px] h-[24px] object-contain cursor-pointer'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
