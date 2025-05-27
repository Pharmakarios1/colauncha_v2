import { Typography, Divider, Button } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router';

const { Text } = Typography;
const JoinAsATalent = () => {
  const navigate = useNavigate();
  const handleNavigationClick = () => {
    navigate('/dashboard');
  };
 const animationStates = {
    hidden: { opacity: 0, y: -50 },
    show: { opacity: 1, y: 0 }
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
      className="flex flex-col gap-8 mt-10 w-[90%] mx-auto md-full"
    >
      <Divider
        className="text-center !text-3xl md:!text-4xl mt-5 uppercase !text-black !font-bold !border-black"
        variant="solid"
      >
        Join as Talent
      </Divider>
      <p className="!text-black text-xl md:text-3xl text-center md:text-left">
        Fuel Innovation. Build Tomorrow's MVPs.
      </p>
      <p className="text-black text-xl mt-4 text-center md:text-left">
        {' '}
        Join us and be part of a community that values your skills and
        creativity. Our network of tech teams undergoes a rigorous screening and
        are matched based on the needs of each project
      </p>
      {/* <Text className="!text-white text-lg mt-4 text-shadow-initial text-center md:text-left">
        Ready to take the leap?
      </Text> */}
      <Button
        onClick={handleNavigationClick}
        type="text"
        size="large"
        className="!w-[80%] md:!w-[200px] mx-auto md:mx-0 !text-white !bg-[#F60000]"
      >
        Join as a Talent
      </Button>
    </motion.div>
  );
};

export default JoinAsATalent;
