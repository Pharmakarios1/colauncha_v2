import { LinkOutlined } from '@ant-design/icons';
import { Link } from 'react-router';

const mvpData = [
  {
    image: 'png/biddius.png',
    title: 'Biddius',
    path: 'http://www.biddius.com',
    description:
      'Discover treasures at Biddius - where bidding meets buying. Join online auctions and find unique items to buy and sell with excitement!'
  },
  {
    image: '/png/fixServe.png',
    title: 'FixServ',
    path: 'https://lovable.dev/projects/bfc03a53-18f6-47a1-96cf-9981d4217e24',
    description:
      'FixServ is a digital marketplace that connects users with professional artisans specializing in gadget repairs and services.'
  },
  {
    image: '/png/phlouriche.png',
    title: 'Plouriche NG ',
    path: 'http://www.phlouriche.com',
    description:
      'Phlouriche Nigeria Limited is a trusted partner in delivering innovative engineering solutions tailored for the energy sector.'
  }
];

const MVP = () => {
  return (
    <div className="my-10 md:mt-20 w-[90%]  md:w-[85%] mx-auto">
      <div className="flex">
        <h2 className="text-xl  font-bold mb-10">Built MVPs</h2>
        <Link to="/mvp" className="ml-auto text-blue-600 hover:underline">
          View All
        </Link>
      </div>
      <div className="w-full  mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {mvpData.map((item, index) => (
          <a
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full shadow-md p-3 rounded-sm"
            key={index}
          >
            <img src={item.image} alt="mvp_img" />
            <div className="flex justify-between items-center">
              {' '}
              <h3 className="font-bold my-3 text-blue-600">
                {item.title}
              </h3>{' '}
              <span className="text-blue-600 hover:underline">
                <LinkOutlined />
              </span>
            </div>
            <p className="text-[12px]">{item.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MVP;
