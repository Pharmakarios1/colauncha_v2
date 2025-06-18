import PageWrapper from '@components/PageWrapper';
import HowItWorksPictures from './_partials/MotionPictures';
import HowItWorksTexts from './_partials/TextDescription';
import { AnimatePresence } from 'framer-motion';

const HowItWorks = () => {
  return (
    <AnimatePresence>
      <PageWrapper className="w-full flex-col-reverse md:w-[85%] mx-auto">
        <HowItWorksPictures />
        <HowItWorksTexts />
      </PageWrapper>
    </AnimatePresence>
  );
};

export default HowItWorks;
