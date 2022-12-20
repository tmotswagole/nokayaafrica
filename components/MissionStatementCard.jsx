"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { missionStatement, gifs } from "../constants";

const MissionStatementCard = () => (
  <motion.div
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    className={`mx-auto ${styles.flexCenter}`}
  >
    <div className='py-10 sm:py-10 lg:py-30'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mt-20 max-w-lg sm:mx-auto md:max-w-none'>
          <div className='grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16'>
            <div className='relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row'>
              <div className='flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0'>
                <img
                  src={gifs.eyeglasses}
                  alt={gifs.title}
                  className='object-contain'
                />
              </div>
              <div className='sm:min-w-0 sm:flex-1'>
                <p className='text-lg font-semibold leading-8 text-white'>
                  Vision
                </p>
                <p className='mt-2 text-base leading-7 text-white'>
                  {missionStatement.vision}
                </p>
              </div>
            </div>

            <div className='relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row'>
              <div className='flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0'>
                <img
                  src={gifs.goal}
                  alt={gifs.title}
                  className='object-contain'
                />
              </div>
              <div className='sm:min-w-0 sm:flex-1'>
                <p className='text-lg font-semibold leading-8 text-white'>
                  Mission
                </p>
                <p className='mt-2 text-base leading-7 text-white'>
                  {missionStatement.goals}
                </p>
              </div>
            </div>

            <div className='relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row'>
              <div className='flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0'>
                <img
                  src={gifs.target}
                  alt={gifs.title}
                  className='object-contain'
                />
              </div>
              <div className='sm:min-w-0 sm:flex-1'>
                <p className='text-lg font-semibold leading-8 text-white'>
                  Goals
                </p>
                <p className='mt-2 text-base leading-7 text-white'>
                  {missionStatement.goals}
                </p>
              </div>
            </div>

            <div className='relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row'>
              <div className='flex h-12 w-12 items-center justify-center rounded-xl text-white sm:shrink-0'>
                <img
                  src={gifs.yinyang}
                  alt={gifs.title}
                  className='object-contain'
                />
              </div>
              <div className='sm:min-w-0 sm:flex-1'>
                <p className='text-lg font-semibold leading-8 text-white'>
                  Philosophy
                </p>
                <p className='mt-2 text-base leading-7 text-white'>
                  {missionStatement.philosophy}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

export default MissionStatementCard;
