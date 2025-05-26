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
        title={<img src="/png/colauncha_logo.png" className="w-44" />}
        onClose={onClose}
        open={open}
        placement="top"
        height={600}
        className="!bg-blue-900 text-white"
      >
        <div className="w-[280px] mx-auto md:w-0 md:mx-0">
          <DeskTopNav />
        </div>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
