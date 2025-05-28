
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

const TechTalent = () => {
 
  return (
    <div className="w-full lg:w-[85%] mx-auto ">
      <div className="text-xl lg:text-2xl">Tech Talents</div>
      <div
        
        className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6"
      >
        {techTalentData.map((talent, idx) => (
          <div
            key={talent.id}
            className={`relative w-full lg:w-[100%] h-[300px] p-4 ${idx % 2 === 1 ? 'bg-[#3783FF]' : 'bg-red-500'} rounded-lg shadow-md hover:scale-102 transition-transform duration-300 ease-in-out`}
            style={{
              backgroundImage: `url(${talent.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-black/10 bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-lg"></div>
            <p className="absolute bottom-2 left-2 text-white bg-black/30 p-1 px-2 rounded-full">
              {talent.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechTalent;
