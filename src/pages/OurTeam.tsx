// import React from 'react'

import { LinkedinFilled, TwitterSquareFilled } from '@ant-design/icons';
import Team from '@components/TeamData';

const OurTeam = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100  px-6 lg:px-12 pt-10">
      <div className="">
        <h1 className="text-2xl font-bold text-center mb-6">Meet Our Team</h1>
        <p className="text-center text-xl">
          <span className="text-green-500">Enthusiastic</span> individuals{' '}
          <span className="text-red-500">working</span>{' '}
          <span className="text-blue-500">together</span>
          to take your ideas to <span className="text-yellow-300">life</span>
        </p>
      </div>
      {/* CEO */}
      <div className=" relative flex flex-col md:flex-row items-center bg-white gap-4 w-full h-full p-4 rounded-md md:max-w-[600px] my-10 shadow-2xl">
        <img src="/png/sholaEdited.png" alt="" className="w-80 h-72" />
        <div className="flex flex-col justify-center items-start gap-2">
          <h2 className="text-2xl font-bold ">Shola Akano</h2>
          <p className="text-sm">
            Mr. Sola Akano is a visionary leader with over 10 years of
            experience in the tech & energineering industry. He has a passion
            for innovation and a commitment to excellence.
          </p>
          <div className="flex gap-4 ">
            <a
              href="https://www.linkedin.com/in/sola-akano-0b1b4a1b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              <LinkedinFilled className='text-2xl'/>
            </a>
            <a
              href="https://twitter.com/sola_akano"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
            <TwitterSquareFilled className="text-2xl !text-[#1DA1F2] " />
            </a>
          </div>
        </div>
        <div className="absolute bottom-52 left-1/2  md:bottom-10 text-[12px] md:left-44 bg-[#D9D9D942] text-white rounded-md p-1">CEO & Founder</div>
      </div>
      <Team />
    </div>
  );
};

export default OurTeam;
