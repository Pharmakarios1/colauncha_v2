import MultiCardCarousel from './_partials/CardCarousel';

const Testimonial = () => {
  return (
    <div
      className="relative h-[60vh] bg-cover bg-center"
      style={{ backgroundImage: `url('/png/Clients.png')` }}
    >
       <div className="absolute inset-0 bg-black/60 p-5 md:p-10"> <h1 className="text-xl md:text-3xl font-bold text-white md:mt-5 text-center md:text-left ">
            What our Clients says
          </h1></div>
      
      <div className="absolute inset-0 top-[80%] md:top-[50%] transform -translate-y-1/5 p-5 md:py-50">
        <MultiCardCarousel />
      </div>
    </div>
  );
};

export default Testimonial;
