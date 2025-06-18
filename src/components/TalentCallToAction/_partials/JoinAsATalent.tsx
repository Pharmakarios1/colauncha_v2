import { Divider, Button } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router';

const JoinAsATalent = () => {
  const navigate = useNavigate();
  const handleNavigationClick = () => {
    navigate('/contact/join-as-talent');
  };
  const animationStates = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 }
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
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={animationStates}
      transition={{ duration: 0.9 }}
      className="flex flex-col justify-center gap-8 mt-5 w-[90%] mx-auto md-full"
    >
      <Divider
        className="text-center !text-3xl md:!text-4xl mt-5 uppercase !text-black !font-bold !border-black"
        variant="solid"
      >
        Join as Talent
      </Divider>
      <p className="!text-black text-2xl whitespace-pre-wrap md:text-4xl text-center md:text-left">
        Fuel Innovation.
        Build Tomorrow's MVPs.
      </p>
      <p className="text-black text-xl mt-4 text-center md:text-left">
        {' '}
        Join us and be part of a community that values your skills and
        creativity. Our network of tech teams undergoes a rigorous screening and
        are matched based on the needs of each project
      </p>

      <div className="relative flex justify-between">
        <Button
          onClick={handleNavigationClick}
          type="text"
          size="large"
          className="!w-[90%] !rounded-full md:!w-[150px] mx-auto md:mx-0 !text-white !bg-[#F68600C2]"
        >
          Apply Now
        </Button>
        <motion.div
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          variants={arrowAnimationStates}
          whileInView={'View'}
          exit={'outOfView'}
          transition={{ duration: 0.9 }}
          className="hidden lg:block absolute right-55 top-[70%] transform -translate-y-1/2 translate-x-10"
        >
          <img src="/png/arrow3.png" alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default JoinAsATalent;
