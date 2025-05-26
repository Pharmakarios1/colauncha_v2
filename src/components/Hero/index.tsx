import CustomHeroText from './_partials/CustomText';
import CustomHeroImage from './_partials/CustomImage';
import PageWrapper from '@components/PageWrapper';
import { Divider } from 'antd';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0, transition: { duration: 0.8 } }}
    >
      <PageWrapper className="w-full  md:w-[85%] mx-auto">
        <CustomHeroText />
        <CustomHeroImage />
        <Divider
          variant="solid"
          className="md:!border-4 md:!border-[#FF8C00] w-full"
        />
      </PageWrapper>
    </motion.div>
  );
};

export default Hero;
