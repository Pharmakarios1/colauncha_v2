import { Carousel } from 'antd';
import { motion as modtion } from 'framer-motion';

const TechStacks = () => {
  return (
    <modtion.div className="flex flex-col gap-10 p-6 md:p-0 md:mt-20 ">
      <Carousel
        autoplay={{ dotDuration: true }}
        fade
        easing="ease-in-out"
        autoplaySpeed={4000}
        dots={false}
      >
        <div>
          <img
            src="/png/product_mgr.png"
            alt=""
            className="w-full h-[450px] rounded-md"
          />
        </div>
        <div>
          <img
            src="/png/uiux.png"
            alt=""
            className="w-full h-[450px] rounded-md"
          />
        </div>
        <div>
          <img
            src="/png/frontend.png"
            alt=""
            className="w-full h-[450px] rounded-md"
          />
        </div>
        <div>
          <img
            src="/png/backend.png"
            alt=""
            className="w-full h-[450px] rounded-md"
          />
        </div>
      </Carousel>
    </modtion.div>
  );
};

export default TechStacks;
