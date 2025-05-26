import { Carousel } from 'antd';
import { motion as modtion } from 'framer-motion';

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

const CustomHeroImage = () => {
  return (
    <modtion.div
      initial="hidden"
      whileInView="inView"
      variants={animatedTextVariants}
      className="flex flex-col gap-10 p-6 md:p-0 "
    >
      <Carousel
        autoplay={{ dotDuration: true }}
        fade
        easing="ease-in-out"
        autoplaySpeed={9000}
        dots={false}
      >
        <div>
          <img src="/png/heroImage.png" alt="" />
        </div>
        <div>
          <img src="/png/techTalent.png" alt="" />
        </div>
      </Carousel>
    </modtion.div>
  );
};

export default CustomHeroImage;
