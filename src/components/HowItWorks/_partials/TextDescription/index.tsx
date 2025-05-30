import { Button, Card, Divider, Typography } from 'antd';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router';

const HowItWorksTexts = () => {
  const navigate = useNavigate();
  const handleNavigationClick = () => {
    navigate('/dashboard');
  };
  const animationStates = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 }
  };
  

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={animationStates}
      transition={{ duration: 0.9 }}
      whileInView="inView"
      className="mt-10 md:mt-0 flex flex-col items-center w-full md:w-[85%] mx-auto px-10 md:px-0"
    >
      <Divider
        className=" !text-3xl text-blue-900 font-bold  md:!text-4xl"
        variant="solid"
        style={{ borderColor: '#3783FF' }}
      >
        How It <span className="text-[#3783FF]">Works</span>
      </Divider>

      <Card>
        <Typography className="my-2 text-center">
          Your Path to a Fully-Developed MVP, Simplified!
        </Typography>
        <p className="text-center  text-[12px] ">
          With Colauncha, you’re not just building a product—you’re partnering
          for success.
        </p>
      </Card>
      <motion.p
        variants={animationStates}
        whileHover={{
          scale: 1.05,
          fontWeight: 'bold',
          color: '#3783FF',
          transition: { type: 'spring', stiffness: 300 }
        }}
        className="text-left text-[12px] my-5"
      >
        Our streamlined process ensures that your MVP is not only developed
        efficiently but also tailored to your unique vision. From ideation to
        execution, we’re with you every step of the way. Our dedicated team of
        experts is committed to delivering a product that not only meets your
        expectations but exceeds them.{' '}
      </motion.p>
      <motion.p
        variants={animationStates}
        whileHover={{
          scale: 1.05,
          fontWeight: 'bold',
          color: '#3783FF',
          transition: { type: 'spring', stiffness: 300 }
        }}
        className="text-left text-[12px] "
      >
        We understand that every project is unique, and we take the time to
        understand your specific needs and goals. Our team of experts will work
        closely with you to ensure that your MVP is not only functional but also
        user-friendly and visually appealing.
      </motion.p>
      <p className="my-5 text-[12px]">Book your talents to get started.</p>

      <Button
        onClick={handleNavigationClick}
        type="primary"
        ghost
        className="mt-4 !w-full md:!w-[200px] !rounded-full !text-white !bg-blue-700 hover:!bg-blue-800"
        size="large"
      >
        Book here
      </Button>
    </motion.div>
  );
};

export default HowItWorksTexts;
