import { AnimatePresence } from 'motion/react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-white">
        <div className="flex flex-col items-center w-full max-w-7xl mx-auto min-h-screen justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          
          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-black font-bold mb-6 lg:mb-8 text-center">
            About Us
          </h1>
          
          {/* Animated Images Section - Desktop Only */}
          <AnimatePresence>
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-6 lg:gap-10 mt-4 mb-8">
              <motion.img
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.9 }}
                src="/png/about1.png"
                alt="About us illustration 1"
                className="w-48 h-48 lg:w-52 lg:h-52 rounded-lg object-cover shadow-md"
              />
              <motion.img
                animate={{ y: [-100, 0], opacity: [0, 1] }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.9 }}
                src="/png/about2.png"
                alt="About us illustration 2"
                className="w-40 h-40 lg:w-44 lg:h-44 rounded-lg object-cover shadow-md"
              />
              <motion.img
                animate={{ x: [100, 0], opacity: [0, 1] }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.9 }}
                src="/png/about3.png"
                alt="About us illustration 3"
                className="w-48 h-48 lg:w-52 lg:h-52 rounded-lg object-cover shadow-md"
              />
            </div>
          </AnimatePresence>
          
          {/* Mission Statement */}
          <div className="my-6 lg:my-8 flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 max-w-4xl mx-auto">
            <img src="/png/angle1.png" alt="Decorative angle" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
            <p className="text-sm sm:text-base md:text-lg lg:text-2xl xl:text-3xl text-black text-center leading-relaxed px-2">
              We make sure your <span className='text-green-500 font-semibold'>idea</span> & creation is <span className='text-amber-400 font-semibold'>delivered</span> properly
            </p>
            <img src="/png/angle2.png" alt="Decorative angle" className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 flex-shrink-0" />
          </div>
          
          {/* Content Sections */}
          <div className="w-full mt-6 lg:mt-12 space-y-12 lg:space-y-16">
            
            {/* First Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <motion.div
                animate={{ x: [-100, 0], opacity: [0, 1] }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.9 }}
                className="order-2 lg:order-1 flex justify-center"
              >
                <img
                  src="/png/about11.png"
                  alt="Empowering startups with talent"
                  className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto rounded-lg object-cover shadow-lg"
                />
              </motion.div>
              
              <div className="order-1 lg:order-2 text-center lg:text-left space-y-4 px-4 lg:px-0">
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-blue-500 font-bold leading-tight">
                  We empower startups with the right talents
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  We build a sustainable bridge between talented tech professionals and the startups that need them, empowering both sides to grow and succeed.
                </p>
              </div>
            </div>
            
            {/* Second Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
              <motion.div
                animate={{ x: [100, 0], opacity: [0, 1] }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.9 }}
                className="order-2 flex justify-center"
              >
                <img
                  src="/png/about12.png"
                  alt="Our aim and goal illustration"
                  className="w-full max-w-sm lg:max-w-md xl:max-w-lg h-auto rounded-lg object-cover shadow-lg"
                />
              </motion.div>
              
              <div className="order-1 text-center lg:text-left space-y-4 px-4 lg:px-0">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-red-500 font-bold leading-tight">
                  Our aim and goal
                </h3>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                  To become the leading talent marketplace for tech startups, fostering innovation and growth through affordable, sustainable talent solutions.
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