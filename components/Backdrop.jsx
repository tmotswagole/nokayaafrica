"use client";

import { motion } from "framer-motion";

const Backdrop = ({ children, onClick }) => (
  <motion.div
    className='absolute z-10 top-0 left-0 opacity-0.5 h-full w-full bg-black-e1 flex items-center justify-center'
    onClick={onClick}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
);

export default Backdrop;
