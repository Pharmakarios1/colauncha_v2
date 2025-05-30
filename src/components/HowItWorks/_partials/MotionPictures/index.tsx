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

  const arrowAnimationStates = {
    initial: {
      opacity: 0,
      x: -200
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        delay: 1,
        ease: 'easeOut'
      }
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: 'easeOut'
      }
    },
    View: {
      x: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        delay: 1,
        ease: 'easeOut'
      }
    }
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
        <img src="/png/howItWorksImg.png" alt="" className="w-[350px] h-full" />

        <motion.div
          initial="initial"
          animate={inView ? 'animate' : 'initial'}
          whileHover="hover"
          variants={arrowAnimationStates}
          whileInView="View"
          className="hidden lg:block absolute -right-20 bottom-10 -translate-y-1/2"
        >
          <img src="/png/arrow1.png" alt="" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default HowItWorksPictures;
