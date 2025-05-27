import { Button, Carousel } from 'antd';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router';

const carouselData = [
  {
    title: 'Empowering Startups with the Right Talent',
    description:
      'Connect with skilled tech teams ready to bring your vision to life.'
  },
  {
    title: 'Build Your MVP in 3 Months, Zero Upfront Cost',
    description:
      'Empowering founders with a team of experts to bring your vision to life.'
  }
];

const animatedTextVariants = {
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
      ease: 'easeInOut',
      staggerChildren: 0.1 // Optional: if you have child animations
    }
  }
};

const CustomHeroText = () => {
  const navigate = useNavigate();
  const handleNavigationClick = () => {
    navigate('/dashboard');
  };
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="inView"
        variants={animatedTextVariants}
        className="flex flex-col gap-10 p-6 md:p-0 "
      >
        <Carousel
          autoplay={{ dotDuration: true }}
          fade
          dots
          dotPosition="left"
          autoplaySpeed={9000}
          easing="ease-in-out"
        >
          {carouselData.map((item, index) => (
            <div key={index} className="w-full flex flex-col ">
              <h2 className="text-5xl md:text-[3.5rem]  font-bold text-center md:text-left leading-16 md:leading-20">
                {item.title}
              </h2>
              <p className="mt-5 text-xl text-center md:text-left w-full md:w-2/3 mx-auto md:mx-0">
                {item.description}
              </p>
            </div>
          ))}
        </Carousel>

        <Button
          onClick={handleNavigationClick}
          type="primary"
          className="w-full md:w-[200px] !h-[45px] text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
        >
          Get Started
        </Button>
      </motion.div>
    </>
  );
};

export default CustomHeroText;
