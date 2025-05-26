//third party
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { motion } from 'motion/react';
//local imports
import DeskTopNav from './_partials/DeskTopNav';
import MobileDrawer from './_partials/MobileNav';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  // Function to show the drawer
  const showDrawer = () => {
    setOpen(true);
  };
  // Function to hide the drawer
  const onClose = () => {
    setOpen(false);
  };
  // Function to handle menu toggle
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    showDrawer();
  };
  // Function to handle navigation to talent request page
  const handleTalentRequest = () => {
    navigate('/dashboard');
    setIsMenuOpen(false);
    onClose();
  };
  return (
    <div className="w-full h-18 sticky top-0 z-20 bg-blue-900 shadow-lg flex items-center justify-between px-4">
      <Link to="/">
        <img
          src="/png/colauncha_logo.png"
          alt="colauncha_logo"
          className="w-36 sm:w-full "
        />
      </Link>
      <div className="hidden md:flex ">
        <DeskTopNav />
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          initial={{ scale: 1 }}
          animate={{ scale: 1.1, transition: { duration: 0.4 } }}
          onClick={handleTalentRequest}
          className="hidden cursor-pointer md:flex bg-blue-500 text-white text-nowrap px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Get Started
        </motion.button>
        <div
          onClick={handleMenuToggle}
          className="md:hidden flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300"
        >
          {/* Mobile menu icon */}

          <MenuOutlined className="!text-white !transition duration-300" />

          {isMenuOpen && <MobileDrawer onClose={onClose} open={open} />}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
