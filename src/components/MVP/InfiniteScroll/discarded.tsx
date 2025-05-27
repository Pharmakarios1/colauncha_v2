import { Card, Carousel, Image, Space, Typography } from 'antd';


const mvpData = [
  {
    image: 'png/biddius.png',
    title: 'Biddius',
    path: 'www.biddius.com',
    description:
      'Discover treasures at Biddius - where bidding meets buying. Join online auctions and find unique items to buy and sell with excitement!'
  },
  {
    image: '/png/fixServ.png',
    title: 'fIxServ',
    path: 'www.fixServ.com',
    description:
      'FixServ is a digital marketplace that connects users with professional artisans specializing in gadget repairs and services.'
  }
];
const { Meta } = Card;
const { Text } = Typography;

const MVPcc = () => {
  return (
    <div className="my-10 md:mt-0 w-[90%]  md:w-[85%] mx-auto">
      <h2 className="text-xl  font-bold mb-10">Built MVPs</h2>
      <div>
        <Carousel
          autoplay
          infinite
          autoplaySpeed={10000}
          dots={false}
          className=""
        >
          {mvpData.map((item, index) => (
            <Card
              hoverable
              cover={
                <Image.PreviewGroup
                  items={[
                    {
                      src: item.image,
                      alt: 'example'
                    }
                  ]}
                >
                  <Image
                    src={item.image}
                    alt="img"
                    className="!h-[300px] md:!w-[80%] mx-auto"
                  />
                </Image.PreviewGroup>
              }
              key={index}
              className="flex items-center"
            >
              <Meta title={item?.title} description={item?.path} />
              <Space direction="vertical" size={10} className="mt-5" />

              <Text className="text-center mt-5">{item.description}</Text>
            </Card>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MVPcc;
