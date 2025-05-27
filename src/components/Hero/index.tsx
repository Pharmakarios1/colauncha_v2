import { Button } from 'antd';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

//animation
const textVariants = {
  hidden: {
    opacity: 0,
    scale: 0.5
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: 'easeInOut'
    }
  },
  inView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.95,
      ease: 'easeInOut'
    }
  }
};
const textChildren = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: 'easeInOut',
      staggerChildren: 0.1
    }
  }
};
const buttonBounce = {
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
      duration: 1,
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
  const handleNavigationClick = () => {
    navigate('/dashboard');
  };
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url('/png/heroMod.png')` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex h-full items-center justify-center text-center text-white">
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          whileInView="inView"
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-3xl px-4"
        >
          <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
            Empowering <span className="text-blue-600">Startups</span> with the
            Right <span className="text-red-500">Talent</span>
          </h1>
          <motion.p
            variants={textChildren}
            initial="hidden"
            animate="visible"
            className="mt-4 text-[12px] sm:text-lg"
          >
            Empowering founders with a{' '}
            <span className="text-green-400">team</span> of experts to bring
            your <span className="text-yellow-200">vision</span> to life
          </motion.p>
          <motion.div
            variants={buttonBounce}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileInView="inView"
            whileTap={`Tap`}
          >
            <Button
              className="mt-6 rounded-2xl! px-12!"
              size="large"
              disabled={false}
              type="primary"
              onClick={handleNavigationClick}
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
