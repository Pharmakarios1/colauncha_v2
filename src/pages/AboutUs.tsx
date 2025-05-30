import { Card } from 'antd';
import { AnimatePresence } from 'motion/react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.9
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const AboutUs = () => {
  return (
    <Card className="grid sm:grid-cols-1 !bg-slate-100 ">
      <div className="flex flex-col items-center  min-h-screen bg-gray-100">
        <h1 className="text-4xl text-black font-bold mb-4">About Us</h1>
        <p className="text-lg text-center my-3 max-w-2xl">
          We empower startups with the right talents
        </p>
        <AnimatePresence>
          <div className="hidden md:grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-10 mt-2">
            <motion.img
              animate={{ x: [-100, 0], opacity: [0, 1] }}
              whileHover={{ scale: [1, 1.1, 1], opacity: [0, 1] }}
              transition={{ duration: 0.9 }}
              src="/png/about1.png"
              alt=""
              className="w-60 h-60 rounded-lg"
            />
            <motion.img
              animate={{ y: [-100, 0], opacity: [0, 1] }}
              whileHover={{ scale: [1, 1.1, 1], opacity: [1] }}
              transition={{ duration: 0.9 }}
              src="/png/about2.png"
              alt=""
              className="w-60 h-60 rounded-lg"
            />
            <motion.img
              animate={{ x: [100, 0], opacity: [0, 1] }}
              whileHover={{ scale: [1, 1.1, 1], opacity: [0, 1] }}
              transition={{ duration: 0.9 }}
              src="/png/about3.png"
              alt=""
              className="w-60 h-60 rounded-lg"
            />
          </div>
        </AnimatePresence>
        <div className='my-10 flex items-center justify-between'>
         <img src="/png/angle1.png" alt="" className='w-6 h-6' /> <p className='text-[26px] text-black'>We make sure your idea & creation is delivered properly</p> <img src="/png/angle2.png" alt=""className='w-6 h-6' /> 
        </div>
        
        {/* <motion.div
          className="flex flex-col  mx-auto w-[70%] mt-6 md:my-14"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              color: '#4F46E5',
              transition: { type: 'spring', stiffness: 300 }
            }}
          >
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="text-[12px] md:text-sm">
              To build a sustainable bridge between talented tech professionals
              and the startups that need them, empowering both sides to grow and
              succeed
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              color: '#4F46E5',
              transition: { type: 'spring', stiffness: 300 }
            }}
          >
            <h3 className="text-xl font-bold mt-4">Our Vision</h3>
            <p className="text-[12px] md:text-sm">
              To become the leading talent marketplace for tech startups,
              fostering innovation and growth through affordable, sustainable
              talent solutions
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              color: '#4F46E5',
              transition: { type: 'spring', stiffness: 300 }
            }}
          >
            <h3 className="text-xl font-bold mt-4">Our Values</h3>
            <ul className="list-disc list-inside">
              <li className="text-[12px] md:text-sm">
                Integrity: We believe in honesty and transparency.
              </li>
              <li className="text-[12px] md:text-sm">
                Innovation: We embrace creativity and new ideas.
              </li>
              <li className="text-[12px] md:text-sm">
                Collaboration: We work together to achieve common goals.
              </li>
              <li className="text-[12px] md:text-sm">
                Excellence: We strive for the highest quality in everything we
                do.
              </li>
            </ul>
          </motion.div>
        </motion.div> */}
      </div>
    </Card>
  );
};

export default AboutUs;
