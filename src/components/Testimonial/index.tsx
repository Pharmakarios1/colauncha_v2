import MultiCardCarousel from './_partials/CardCarousel';

const Testimonial = () => {
  return (
    <div className="w-full relative ">
      <div className="relative">
        <img
          src="/png/Clients.png"
          alt=""
          className="h-full w-full object-contain"
        />
        <div className="absolute top-0 left-0  p-5 md:p-10 ">
          <h1 className="text-xl md:text-3xl font-bold text-white md:mt-5 text-center md:text-left ">
            What our Clients says
          </h1>
        </div>
      </div>
      <div className="absolute inset-0 top-1/2 transform -translate-y-1/5 p-5 md:py-50">
        <MultiCardCarousel />
      </div>
    </div>
  );
};

export default Testimonial;
