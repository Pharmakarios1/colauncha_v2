import {
  HomeOutlined,
  MobileOutlined,
  UsergroupAddOutlined,
  UserOutlined
} from '@ant-design/icons';
import Navigation from '@components/Navigation';

import { useState } from 'react';
const MobileNav = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <div className="md:hidden fixed z-30 bottom-0 left-0 right-0 flex items-center justify-between bg-[#3783FF]/8 shadow-lg p-4">
      <div className="relative flex-1  h-full">
        {/* mobile menu */}
        <div
          className={`absolute left-0 w-full bottom-[60px] -z-10 rounded-t-xl py-7 px-5 flex justify-center items-center transition-all duration-500 bg-[#3783FF] ${
            showMenu ? 'translate-y-0' : 'translate-y-[400px]'
          }  `}
        >
          <div className="grid grid-cols-4 w-full  font-medium gap-5 gap-y-10  ">
            <a
              className="flex flex-col items-center  gap-1 text-gray-100 "
              href="/"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <HomeOutlined className="w-10 h-full " />
            </a>
            <a
              className="flex flex-col items-center  gap-1 text-gray-100 "
              href="/about"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <UserOutlined className="text-secondaryBG w-7 h-full " />
            </a>
            <a
              className="flex flex-col items-center  gap-1 text-gray-100 "
              href="/team"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <UsergroupAddOutlined className="text-secondaryBG w-7 h-full " />
            </a>
            <a
              className="flex flex-col items-center  gap-1 text-gray-100 "
              href="/contact"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <MobileOutlined className="text-secondaryBG w-7 h-full " />
            </a>
          </div>
        </div>
      </div>
      <Navigation setShowMenu={setShowMenu} showMenu={showMenu} />
    </div>
  );
};

export default MobileNav;
