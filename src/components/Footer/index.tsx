import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterSquareFilled
} from '@ant-design/icons';

import { Typography } from 'antd';

const Footer = () => {
  return (
    <div className="mt-20 h-[200px] bg-[#C4C4C426] py-10 px-5 md:px-20 relative">
      <div className="grid md:grid-cols-[3fr_1fr]">
        <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-5">
          <Typography.Title className="!text-2xl !text-center md:!text-3xl md:!text-left  text-[#000000]">
            Follow our latest updates on social media platforms
          </Typography.Title>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/company/colauncha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookFilled style={{ fontSize: '20px', color: 'blue' }} />
            </a>

            <a
              href="https://twitter.com/colauncha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterSquareFilled
                style={{ fontSize: '20px', color: 'skyblue' }}
              />
            </a>

            <a
              href="https://www.instagram.com/colauncha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramFilled style={{ fontSize: '20px', color: '' }} />
            </a>
            <a
              href="https://www.linkedin.com/company/colauncha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinFilled style={{ fontSize: '20px', color: '#0a66c2' }} />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          {/* <div className="absolute top-0 right-5 transform -translate-y-4 w-12 h-12 rounded-full cursor-pointer bg-blue-900 flex items-center justify-center ">
            <div className="animate-pulse">
              <ScrollToTopButton />
            </div>
          </div> */}
          <p className="text-sm">
            {' '}
            ©{new Date().getFullYear()} Designed by Colauncha
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
