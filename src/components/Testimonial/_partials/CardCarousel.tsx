import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

interface TestimonialCardProps {
  name: string;
  position: string;
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
    name: 'John Doe',
    position: 'CEO, Company A',
    testimonial:
      'This is a great service! It has helped us improve our workflow significantly.'
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'CTO, Company B',
    testimonial:
      'I highly recommend this service. The team is very professional and responsive.'
  },
  {
    id: 3,
    name: 'Alice Johnson',
    position: 'COO, Company C',
    testimonial:
      'A game changer for our business. We have seen a significant increase in productivity.'
  }
];
const Card: React.FC<TestimonialCardProps> = ({
  name,
  position,
  testimonial
}) => (
  <div className="flex flex-col max-h-[250px] bg-[#F600005E] p-6 rounded-lg shadow mx-2">
    <div className="flex items-center mb-4 gap-5">
      <img src="/png/mvp.png" alt="" className="w-12 h-12 rounded-full" />
      <div className="flex flex-col">
        <h2 className="text-base font-bold">{name}</h2>
        <p className="text-[10px] text-white">{position}</p>
      </div>
    </div>
    <p className="text-sm text-gray-800">{testimonial}</p>
  </div>
);

const MultiCardCarousel = () => (
  <Carousel
    responsive={responsive}
    autoPlay={true}
    autoPlaySpeed={3000}
    infinite={true}
  >
    {testimonialData.map((item) => (
      <Card
        key={item.id}
        name={item.name}
        position={item.position}
        testimonial={item.testimonial}
      />
    ))}
  </Carousel>
);

export default MultiCardCarousel;
