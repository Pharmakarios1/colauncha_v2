import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface TestimonialCardProps {
  name: string;
  imgurl?: string;
  testimonial: string;
}
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1
  }
};
const testimonialData = [
  {
    id: 1,
    name: 'Charles Davies',
    imgurl: '/png/charles.png',
    testimonial:
      'Colauncha helped us bring our vision to life without upfront costs, while our team gained valuable experience'
  },
  {
    id: 2,
    name: 'Frank Cole',
    imgurl: '/png/frank.png',
    testimonial: 'Colauncha helped me to achieve a lot with their tech team '
  },
  {
    id: 3,
    name: 'Jumoke Bello',
    imgurl: '/png/jumoke.png',
    testimonial:
      'Working with Colauncha provided real-world experience I needed to advance my career'
  }
];
const Card: React.FC<TestimonialCardProps> = ({
  name,
  imgurl,
  testimonial
}) => (
  <div className="flex flex-col h-[280px] bg-[#fca1a1e7] p-6 rounded-lg shadow mx-3 mb-5">
    <div className="flex items-center mb-4 gap-5">
      <img src={imgurl} alt="" className="w-12 h-12 rounded-full" />
      <div className="flex flex-col">
        <h2 className="text-base text-lg text-white font-bold">{name}</h2>
      </div>
    </div>
    <p className="text-base mt-4 text-gray-800">{testimonial}</p>
  </div>
);

const MultiCardCarousel = () => (
  <Carousel
    responsive={responsive}
    autoPlay={true}
    autoPlaySpeed={3000}
    infinite={true}
    className={'w-3/4 mx-auto'}
  >
    {testimonialData.map((item) => (
      <Card key={item.id} name={item.name} testimonial={item.testimonial} imgurl={item.imgurl} />
    ))}
  </Carousel>
);

export default MultiCardCarousel;
