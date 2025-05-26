import { motion } from 'framer-motion';

const skillList = [
  {
    name: 'biddius',
    image: '/public/png/biddius.png',
    width: '90'
  },
  {
    name: 'fixServ',
    image: '/public/png/fixServ.png',
    width: '77'
  },
  {
    name: 'biddius',
    image: '/public/png/biddius.png',
    width: '90'
  },
  {
    name: 'fixServ',
    image: '/public/png/fixServ.png',
    width: '77'
  },
  {
    name: 'biddius',
    image: '/public/png/biddius.png',
    width: '90'
  },
  {
    name: 'fixServ',
    image: '/public/png/fixServ.png',
    width: '77'
  },
  {
    name: 'biddius',
    image: '/public/png/biddius.png',
    width: '90'
  },
  {
    name: 'fixServ',
    image: '/public/png/fixServ.png',
    width: '77'
  },
  {
    name: 'biddius',
    image: '/public/png/biddius.png',
    width: '90'
  },
  {
    name: 'fixServ',
    image: '/public/png/fixServ.png',
    width: '77'
  },
  {
    name: 'biddius',
    image: '/public/png/biddius.png',
    width: '90'
  },
  {
    name: 'fixServ',
    image: '/public/png/fixServ.png',
    width: '77'
  },
  {
    name: 'biddius',
    image: '/public/png/biddius.png',
    width: '90'
  },
  {
    name: 'fixServ',
    image: '/public/png/fixServ.png',
    width: '77'
  },
  {
    name: 'biddius',
    image: '/public/png/biddius.png',
    width: '90'
  },
  {
    name: 'fixServ',
    image: '/public/png/fixServ.png',
    width: '77'
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

const ScrollLeft = () => {
  return (
    <div className="w-full px-8 lg:px-0 flex items-center flex-col justify-center gap-20 overflow-hidden ">
      <motion.div
        variants={scrollLeftAnimation}
        initial="initial"
        animate="animate"
        className=" relative  "
      >
        <div className="bg-[#e5e3c0] flex gap-5 items-center p-4 min-w-max w-full ">
          {skillList.map((skill, index) => (
            <img
              className="w-16 object-contain"
              key={index}
              src={`public/png/${skill.name}.png`}
            />
          ))}
        </div>
        <div className="flex bg-[#e5e3c0] gap-5 absolute left-[100%] top-0 w-full items-center p-4 ">
          {skillList.map((skill, index) => (
            <img
              className="w-16 object-contain"
              key={index}
              src={`public/png/${skill.name}.png`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollLeft;
