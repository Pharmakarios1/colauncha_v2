import Contact from '@components/Contact';
import Footer from '@components/Footer';
import Hero from '@components/Hero';
import HowItWorks from '@components/HowItWorks';
import MVP from '@components/MVP';
import TalentCallToAction from '@components/TalentCallToAction';
import Testimonial from '@components/Testimonial';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <motion.div className="flex flex-col min-h-screen ">
      <Hero />
      <HowItWorks />
      <MVP />
      <TalentCallToAction />
      <Testimonial />
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;
