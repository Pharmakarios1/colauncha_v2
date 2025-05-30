import Hero from '@components/Hero';
import HowItWorks from '@components/HowItWorks';
import MVP from '@components/MVP';

import ScrollToTopButton from '@components/ScrollToTop';
import StackScrollLeft from '@components/StackScroll';
import TalentCallToAction from '@components/TalentCallToAction';
import TechTalent from '@components/TechTalent';
import Testimonial from '@components/Testimonial';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <motion.div className="flex flex-col min-h-screen ">
      <Hero />
      <StackScrollLeft />
      <HowItWorks />
      <TechTalent />
      <TalentCallToAction />
      <MVP />
      <Testimonial />
      <ScrollToTopButton />
    </motion.div>
  );
};

export default LandingPage;
