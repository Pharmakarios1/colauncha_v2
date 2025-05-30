import { AiOutlineTeam } from 'react-icons/ai';
import { CiHome } from 'react-icons/ci';
import { IoIosPhonePortrait } from 'react-icons/io';
import { FcAbout } from 'react-icons/fc';

import { useState } from 'react';
import { Button } from 'antd';
const MobileNav = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="md:hidden fixed z-30 bottom-0 left-0 right-0 flex items-center justify-between bg-[#3783FF]/90 shadow-lg p-4 ">
      <div className="relative flex-1  h-full">
        <div className="flex w-full justify-center   items-center gap-2 text-gray-100">
          {/* logo removed */}
          {/* <a href="/" className="text-center font-bold text-xl">
            <img src="/png/logo.png" alt="" className="w-14 h-14" />
          </a> */}

          {showMenu ? (
            <Button onClick={() => setShowMenu((prev) => !prev)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                {/* Diagonal X inside the O */}
                <line
                  x1="8"
                  y1="8"
                  x2="16"
                  y2="16"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <line
                  x1="16"
                  y1="8"
                  x2="8"
                  y2="16"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </Button>
          ) : (
            <Button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setShowMenu((prev) => !prev)}
                className="cursor-pointer"
              >
                {/* Top-left box */}
                <rect x="2" y="2" width="8" height="8" fill="#d10064" />

                {/* Top-right box */}
                <rect x="14" y="2" width="8" height="8" fill="currentColor" />

                {/* Bottom-left box */}
                <rect x="2" y="14" width="8" height="8" fill="currentColor" />

                {/* Bottom-right box */}
                <rect x="14" y="14" width="8" height="8" fill="#d10064" />
              </svg>
            </Button>
          )}
        </div>

        {/* mobile menu */}
        <div
          className={`absolute left-0 w-full bottom-[40px] -z-10 rounded-t-xl py-7 px-5 flex justify-center items-center transition-all duration-500 bg-[#3783FF]/80 ${
            showMenu ? 'translate-y-0' : 'translate-y-[400px]'
          }  `}
        >
          <div className="grid grid-cols-4 w-full  font-light gap-5 gap-y-10  ">
            <a
              className="flex flex-col items-center  gap-1 text-gray-100 "
              href="/"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <CiHome /> HOME
            </a>
            <a
              className="flex flex-col items-center  gap-1 text-gray-100 "
              href="/about"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <FcAbout />
              ABOUT
            </a>
            <a
              className="flex flex-col items-center  gap-1 text-gray-100 "
              href="/team"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <AiOutlineTeam />
              TEAM
            </a>
            <a
              className="flex flex-col items-center  gap-1 text-gray-100 "
              href="/contact"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <IoIosPhonePortrait /> <p>CONTACT</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
