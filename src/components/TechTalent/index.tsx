import { Button } from 'antd';
import { motion } from 'framer-motion';
const techTalentData = [
  {
    id: 1,
    name: 'Product Manager',

    image: '/png/product_mgr.png',
    description:
      'An experienced software engineer with a passion for building scalable applications.'
  },
  {
    id: 2,
    name: 'Frontend Developer',

    image: '/png/frontend.png',
    description:
      'A data scientist who loves to extract insights from complex datasets.'
  },
  {
    id: 3,
    name: 'Backend Developer',

    image: '/png/backend.png',
    description:
      'A creative designer focused on enhancing user experience through intuitive interfaces.'
  },
  {
    id: 4,
    name: 'Ui/UX Designer',

    image: '/png/uiux.png',
    description:
      'A creative designer focused on enhancing user experience through intuitive interfaces.'
  }
];
const arrowAnimationStates = {
  initial: {
    opacity: 0,
    x: -200
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.5,
      delay: 1,
      ease: 'easeOut'
    }
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: 'easeOut'
    }
  },
  View: {
    x: [0, -10, 0],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      delay: 1,
      ease: 'easeOut'
    }
  }
};
const TechTalent = () => {
  return (
    <div className="w-full mt-4 lg:w-[95%] mx-auto md:h-[75vh]">
      <div className="text-4xl lg:text-4xl !pl-5"><h1 className='!text-4xl !font-bold'>Tech Talents</h1></div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6">
        {techTalentData.map((talent, idx) => (
          <div
            key={talent.id}
            className={`relative w-full lg:w-[100%] h-[300px] p-4 ${idx % 2 === 1 ? 'bg-[#3783FF]' : 'bg-red-500'} rounded-[10%] shadow-md hover:scale-102 transition-transform duration-300 ease-in-out`}
            style={{
              backgroundImage: `url(${talent.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/10 bg-opacity-20 flex flex-col justify-center items-center text-white p-4 rounded-[10%]"></div>
            <p className="absolute bottom-2 left-2 text-white bg-black/30 p-1 px-2 rounded-full">
              {talent.name}
            </p>
          </div>
        ))}
      </div>
      <div className="relative flex justify-end pr-6 w-full h-[250px]">
        <Button type="primary" className=" !h-[50px] !w-[130px] !rounded-full ">
          View All
        </Button>
        <motion.div
          initial="initial"
          animate="animate"
          whileHover="hover"
          whileInView="View"
          variants={arrowAnimationStates}
          onHoverStart={() => {}}
          onHoverEnd={() => {}}
          className="absolute right-42 -top-3"
        >
          <img src="/png/arrow2.png" alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default TechTalent;
