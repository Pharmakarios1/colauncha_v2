import { Drawer } from 'antd';
import React from 'react';
import DeskTopNav from '../DeskTopNav';

interface MobileDrawerProps {
  onClose: () => void;
  open: boolean;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ onClose, open }) => {
  return (
    <>
      <Drawer
        title={<img src="/png/logo.png" className="w-24 h-24" />}
        onClose={onClose}
        open={open}
        placement="top"
        height={1000}
        className="!bg-[#3783FF] text-white !p-0 !shadow-lg"
      >
        <div className="w-[350px] pt-12 mx-auto md:w-0 md:mx-0">
          <DeskTopNav />
        </div>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
