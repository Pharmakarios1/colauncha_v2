import { Link } from 'react-router';

const mvpData = [
  {
    image: 'png/biddius.png',
    title: 'Biddius',
    path: 'www.biddius.com',
    description:
      'Discover treasures at Biddius - where bidding meets buying. Join online auctions and find unique items to buy and sell with excitement!'
  },
  {
    image: '/png/fixServe.png',
    title: 'FixServ',
    path: 'www.fixServ.com',
    description:
      'FixServ is a digital marketplace that connects users with professional artisans specializing in gadget repairs and services.'
  },
  {
    image: '/png/phlouriche.png',
    title: 'Plouriche NG ',
    path: 'www.phlouriche.com',
    description:
      'Phlouriche Nigeria Limited is a trusted partner in delivering innovative engineering solutions tailored for the energy sector.'
  }
];

const MVP = () => {
  return (
    <div className="my-10 md:mt-0 w-[90%]  md:w-[85%] mx-auto">
      <div className="flex">
        <h2 className="text-xl  font-bold mb-10">Built MVPs</h2>
        <Link to="/mvp" className="ml-auto text-blue-600 hover:underline">
          View All
        </Link>
      </div>
      <div className="w-full  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {mvpData.map((item, index) => (
          <Link
            to={item.path}
            className="w-full shadow-md p-3 rounded-sm"
            key={index}
          >
            <img src={item.image} alt="mvp_img" />
            <h3 className="font-bold my-3">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MVP;
