"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  <motion.nav
    variants={navVariants}
    initial='hidden'
    whileInView='show'
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className='absolute w-[50%] insert-0 gradient-01' />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      {/* <img
          src='/search.svg'
          alt='search'
          className='w-[24px] h-[24px] object-contain'
        /> */}
      <h2 className='font-extrabold text-[24px] leading-[30px] text-white'>
        Noka
      </h2>
      {/* <img
          src='/menu.svg'
          alt='menu'
          className='w-[24px] h-[24px] object-contain cursor-pointer'
          // onClick={() => handleMenuClick()}
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        />
        {isMenuOpen && (
          <ul
            className='absolute right-0 top-[45px] mr-40 z-10 bg-white rounded-md shadow-md py-2'
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <li className='px-4 py-2'>
              <a href='#hero' className='block text-gray-800 hover:bg-gray-200'>
                Home
              </a>
            </li>
            <li className='px-4 py-2'>
              <a
                href='#about'
                className='block text-gray-800 hover:bg-gray-200'
              >
                About
              </a>
            </li>
            <li className='px-4 py-2'>
              <a
                href='#explore'
                className='block text-gray-800 hover:bg-gray-200'
              >
                Projects
              </a>
            </li>
            <li className='px-4 py-2'>
              <a
                href='#whyus'
                className='block text-gray-800 hover:bg-gray-200'
              >
                Why Us?
              </a>
            </li>
            <li className='px-4 py-2'>
              <a
                href='#features'
                className='block text-gray-800 hover:bg-gray-200'
              >
                Our Focus
              </a>
            </li>
            <li className='px-4 py-2'>
              <a
                href='#world'
                className='block text-gray-800 hover:bg-gray-200'
              >
                Collaborators
              </a>
            </li>
            <li className='px-4 py-2'>
              <a
                href='#services'
                className='block text-gray-800 hover:bg-gray-200'
              >
                Services
              </a>
            </li>
            <li className='px-4 py-2'>
              <a
                href='#feedback'
                className='block text-gray-800 hover:bg-gray-200'
              >
                Feedback
              </a>
            </li>
          </ul>
        )} */}
    </div>
  </motion.nav>
);
export default Navbar;
