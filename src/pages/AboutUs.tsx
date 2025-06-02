import { AnimatePresence } from 'motion/react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <>
      <div className="w-full h-full bg-white">
        <div className="flex flex-col items-center w-full lg:w-[85%] mx-auto  min-h-screen justify-center px-4 py-8">
          <h1 className="text-3xl text-black font-bold mb-4">About Us</h1>
          <AnimatePresence>
            <div className="hidden md:grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-10 mt-2">
              <motion.img
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                whileHover={{ scale: [1, 1.1, 1], opacity: [0, 1] }}
                transition={{ duration: 0.9 }}
                src="/png/about1.png"
                alt=""
                className="w-52 h-52 rounded-lg"
              />
              <motion.img
                animate={{ y: [-100, 0], opacity: [0, 1] }}
                whileHover={{ scale: [1, 1.1, 1], opacity: [1] }}
                transition={{ duration: 0.9 }}
                src="/png/about2.png"
                alt=""
                className="w-44 h-44 rounded-lg"
              />
              <motion.img
                animate={{ x: [100, 0], opacity: [0, 1] }}
                whileHover={{ scale: [1, 1.1, 1], opacity: [0, 1] }}
                transition={{ duration: 0.9 }}
                src="/png/about3.png"
                alt=""
                className="w-52 h-52 rounded-lg"
              />
            </div>
          </AnimatePresence>
          <div className="my-5 flex items-center justify-between">
            <img src="/png/angle1.png" alt="" className="w-6 h-6" />{' '}
            <p className="text-[12px] sm:text-sm lg:text-[24px] text-black">
              We make sure your idea & creation is delivered properly
            </p>{' '}
            <img src="/png/angle2.png" alt="" className="w-6 h-6" />
          </div>
          <div className="w-full mt-2 md:mt-10  ">
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center ">
              <motion.img
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                whileHover={{ scale: [1, 1.1, 1], opacity: [0, 1] }}
                transition={{ duration: 0.9 }}
                src="/png/about11.png"
                alt=""
                className=" w-[60%] h-full md:w-72 md:h-60 rounded-lg"
              />
              <div className="w-[400px] mt-4">
                <h3 className="text-2xl text-blue-500 w-[80%]">
                  We empower startups with the right talents
                </h3>
                <p className="text-base md:w-72 text-black mt-4 md:leading-6">
                  We build a sustainable bridge between talented tech
                  professionals and the startups that need them, empowering both
                  sides to grow and succeed{' '}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center mt-10 px-20">
              <motion.img
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                whileHover={{ scale: [1, 1.1, 1], opacity: [0, 1] }}
                transition={{ duration: 0.9 }}
                src="/png/about12.png"
                alt=""
                className=" w-full h-full md:w-72 md:h-60 rounded-lg md:order-2"
              />
              <div className="w-[400px] mt-4">
                <h3 className="text-2xl text-red-500">Our aim and goal</h3>
                <p className="text-base md:w-72 text-black mt-4 md:leading-6">
                  To become the leading talent marketplace for tech startups,
                  fostering innovation and growth through affordable,
                  sustainable talent solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
