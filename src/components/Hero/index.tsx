import { Button } from 'antd';
import { useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';


// Array of background images
const backgroundImages = [
  '/png/heroMod.png',
  '/png/heroMod2.png',
  '/png/heroMod3.png',
  '/png/heroMod4.png'
];

// Animation configurations for background transitions
const backgroundVariants = {
  enter: {
    opacity: 0.9,
    scale: 1.05
  },
  center: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 6,
      ease: [0.1, 0.4, 0.68, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 1,
    transition: {
      duration: 2.5,
      ease: [0.1, 0.4, 0.68, 1]
    }
  }
};
// button animation variants
const animateBtn = {
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
  inView: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      delay: 2.8,
      ease: 'easeOut'
    }
  },
  Tap: {
    Transform: 'translatY(360deg)',
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  }
};
const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
      setNextImageIndex((prev) =>
        prev === backgroundImages.length - 1 ? 0 : prev + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  // Preload next image
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImages[nextImageIndex];
  }, [nextImageIndex]);

  return (
    <div className="relative h-[85vh] md:h-screen overflow-hidden ">
    
      {/* Current Background */}
      <motion.div
        key={`current-${currentImageIndex}`}
        initial="enter"
        animate="center"
        exit="exit"
        variants={backgroundVariants}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          zIndex: 10
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </motion.div>

      {/* Next Background (pre-rendered for smooth transition) */}
      <AnimatePresence>
        {nextImageIndex !== currentImageIndex && (
          <motion.div
            key={`next-${nextImageIndex}`}
            initial="enter"
            animate="center"
            variants={backgroundVariants}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${backgroundImages[nextImageIndex]})`,
              zIndex: 5
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-3xl px-4"
        >
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            Empowering <span className="text-blue-600">Startups</span> with the
            Right <span className="text-red-500">Talent</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-[12px] sm:text-lg"
          >
            Empowering founders with a{' '}
            <span className="text-green-400">team</span> of experts to bring
            your <span className="text-yellow-200">vision</span> to life
          </motion.p>
          <motion.div
            variants={animateBtn}
            initial="initial"
            animate="animate"
            whileInView="inView"
            whileHover="hover"
            whileTap="Tap"
            transition={{ delay: 0.6, duration: 0.9 }}
          >
            <Button
              className="mt-16 rounded-2xl! px-12!"
              size="large"
              type="primary"
              onClick={() => navigate('/contact')}
            >
              Get started
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
