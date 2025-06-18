// import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const HowItWorksPictures = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // run only once
    threshold: 0.25 // trigger when 20% visible
  });
  const animationStates = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 }
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={animationStates}
        transition={{ duration: 0.9 }}
        className="mx-auto md:mx-0 relative"
      >
        <img src="/png/howItWorksImg.png" alt="" className="w-[500px] h-full" />
      </motion.div>
    </>
  );
};

export default HowItWorksPictures;
