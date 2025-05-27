
import { motion as modtion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const Dev = () => {
     const animationStates = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 }
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2
  });

  return (
    <modtion.div ref={ref}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={animationStates}
      transition={{ duration: 0.9 }}className="flex flex-col gap-10 p-6 md:p-0 md:mt-20 ">
     <img
        src="/png/talent.png"
        alt="Developer"
        className="w-full h-[450px] rounded-md"
      />
    </modtion.div>
  );
};

export default Dev;
