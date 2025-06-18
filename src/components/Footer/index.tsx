import { FaXTwitter, FaFacebook, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

import { Typography } from 'antd';

const Footer = () => {
  return (
    <div className="mt-12 sm:mt-16 lg:mt-20 min-h-[160px] sm:min-h-[180px] lg:min-h-[200px] bg-[#C4C4C426] py-6 sm:py-8 lg:py-10 px-4 sm:px-8 lg:px-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 lg:gap-0 h-full">
        <div className="flex flex-col justify-center items-center lg:items-start gap-3 sm:gap-4">
          <Typography.Title className="!text-2xl sm:!text-3xl lg:!text-4xl xl:!text-5xl !font-700 !text-center lg:!text-left text-[#000000] !mb-0">
            Follow for updates
          </Typography.Title>

          <div className="flex gap-3 sm:gap-4 lg:gap-5 flex-wrap justify-center lg:justify-start">
            <div className="flex items-center justify-center p-3 sm:p-4 lg:p-5 rounded-full bg-[#C4C4C426] hover:bg-[#C4C4C440] transition-colors duration-200">
              <a
                href="https://www.facebook.com/colauncha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FaFacebook className="text-xl sm:text-2xl lg:text-3xl text-[#000000] hover:opacity-80 transition-opacity duration-200" />
              </a>
            </div>

            <div className="flex items-center justify-center p-3 sm:p-4 lg:p-5 rounded-full bg-[#C4C4C426] hover:bg-[#C4C4C440] transition-colors duration-200">
              <a
                href="https://twitter.com/colauncha"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FaXTwitter className="text-xl sm:text-2xl lg:text-3xl text-[#000000] hover:opacity-80 transition-opacity duration-200" />
              </a>
            </div>

            <div className="flex items-center justify-center p-3 sm:p-4 lg:p-5 rounded-full bg-[#C4C4C426] hover:bg-[#C4C4C440] transition-colors duration-200">
              <a
                href="https://www.instagram.com/colauncha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FaInstagram className="text-xl sm:text-2xl lg:text-3xl text-[#000000] hover:opacity-80 transition-opacity duration-200" />
              </a>
            </div>

            <div className="flex items-center justify-center p-3 sm:p-4 lg:p-5 rounded-full bg-[#C4C4C426] hover:bg-[#C4C4C440] transition-colors duration-200">
              <a
                href="https://www.linkedin.com/company/colauncha/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FaLinkedinIn className="text-xl sm:text-2xl lg:text-3xl text-[#000000] hover:opacity-80 transition-opacity duration-200" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-end justify-center lg:justify-end order-first lg:order-last">
          <p className="text-xs sm:text-sm lg:text-base text-center lg:text-right text-[#000000] opacity-80">
            ©{new Date().getFullYear()} Designed by Colauncha
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
