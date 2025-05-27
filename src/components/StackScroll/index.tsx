import { motion } from 'framer-motion';

const stackList = [
  {
    name: 'Web Development'
  },
  {
    name: 'UI/UX Design'
  },
  {
    name: 'App Development'
  },
  {
    name: 'Innovative Solutions'
  },
  {
    name: 'Development Agency'
  },
  {
    name: 'Web Development'
  },
  {
    name: 'UI/UX Design'
  },
  {
    name: 'App Development'
  },
  {
    name: 'Innovative Solutions'
  },
  {
    name: 'Development Agency'
  }
];

const scrollLeftAnimation = {
  initial: { x: 0 },
  animate: {
    x: '-100%',
    transition: {
      duration: 20,
      ease: 'linear',
      repeat: Infinity
    }
  }
};

const StackScrollLeft = () => {
  return (
    <div className="w-full px-8 lg:px-0 flex items-center flex-col justify-center gap-20 overflow-hidden ">
      <motion.div
        variants={scrollLeftAnimation}
        initial="initial"
        animate="animate"
        className=" relative  "
      >
        <div className="bg-blue-500 flex gap-5 items-center h-[88px] p-4 min-w-max w-full ">
          {stackList.map((skill, index) => (
            <p key={index} className="text-white">
              {skill.name}
            </p>
          ))}
        </div>
        <div className="flex bg-blue-500 gap-5 absolute left-[100%] h-[88px] top-0 w-full items-center p-4 ">
          {stackList.map((skill, index) => (
            <p key={index} className="text-white">
              {skill.name}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default StackScrollLeft;
