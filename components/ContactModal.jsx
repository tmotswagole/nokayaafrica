"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Backdrop from "./Backdrop";
import { fadeIn } from "../utils/motion";

const ContactModal = ({ handleClose }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_nml8ezt",
      "template_1fuqzhk",
      form.current,
      "GQNHyO4GXJWQGx1kJ"
    );
    e.target.reset();
    handleClose();
  };
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className='w-clamp-50-700-90 h-min-50-300 p-2 rounded-lg flex items-center justify-center'
        variants={fadeIn}
        initial='hidden'
        animate='visible'
        exit='exit'
        onClick={(e) => e.stopPropagation()}
      >
        <form
          onSubmit={sendEmail}
          ref={form}
          className='mx-auto max-w-sm p-4 bg-white rounded-lg shadow-md'
        >
          <label className='font-bold text-[14px]'>Email:</label>
          <input
            type='email'
            name='email'
            className='w-full py-2 px-4 rounded-lg shadow-md'
            required
          />
          <label className='font-bold text-[14px]'>Company Name:</label>
          <input
            type='text'
            name='companyName'
            className='w-full py-2 px-4 rounded-lg shadow-md'
            required
          />
          <label className='font-bold text-[14px]'>Field:</label>
          <select
            name='field'
            className='w-full py-2 px-4 rounded-lg shadow-md'
            required
          >
            <option value='Accounting'>Accounting</option>
            <option value='Advertising'>Advertising</option>
            <option value='Agriculture'>Agriculture</option>
            <option value='Architecture'>Architecture</option>
            <option value='Construction'>Construction</option>
            <option value='Consulting'>Consulting</option>
            <option value='Education'>Education</option>
            <option value='Energy'>Energy</option>
            <option value='Entertainment'>Entertainment</option>
            <option value='Event Planning'>Event Planning</option>
            <option value='Financial Services'>Financial Services</option>
            <option value='Fashion'>Fashion</option>
            <option value='Food and Beverage'>Food and Beverage</option>
            <option value='Graphic Design'>Graphic Design</option>
            <option value='Government'>Government</option>
            <option value='Healthcare'>Healthcare</option>
            <option value='Hospitality'>Hospitality</option>
            <option value='Insurance'>Insurance</option>
            <option value='Interior Design'>Interior Design</option>
            <option value='Landscaping'>Landscaping</option>
            <option value='Law'>Law</option>
            <option value='Legal Services'>Legal Services</option>
            <option value='Logistics'>Logistics</option>
            <option value='Manufacturing'>Manufacturing</option>
            <option value='Marketing'>Marketing</option>
            <option value='Media'>Media</option>
            <option value='Non-Profit'>Non-Profit</option>
            <option value='Other'>Other</option>
            <option value='Photography'>Photography</option>
            <option value='Pharmaceuticals'>Pharmaceuticals</option>
            <option value='Public Relations'>Public Relations</option>
            <option value='Real Estate'>Real Estate</option>
            <option value='Retail'>Retail</option>
            <option value='Technology'>Technology</option>
            <option value='Telecommunications'>Telecommunications</option>
            <option value='Tourism'>Tourism</option>
            <option value='Transportation'>Transportation</option>
            <option value='Web Design'>Web Design</option>
            <option value='Wholesale'>Wholesale</option>
          </select>
          <label className='font-bold text-[14px]'>Message:</label>
          <textarea
            name='message'
            className='w-full py-2 px-4 rounded-lg shadow-md'
            required
          />
          <div className='flex gap-x-4'>
            <button
              type='submit'
              className='w-full py-2 px-4 bg-[#d98fcc] rounded-lg shadow-md text-white font-bold'
            >
              Submit
            </button>
            <button
              type='button'
              className='w-full py-2 px-4 bg-[#d98fcc] rounded-lg shadow-md text-white font-bold'
              onClick={handleClose}
            >
              Close
            </button>
          </div>
        </form>
      </motion.div>
    </Backdrop>
  );
};

export default ContactModal;
