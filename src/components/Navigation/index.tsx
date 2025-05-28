//third party
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { motion } from 'motion/react';
//local imports
import DeskTopNav from './_partials/DeskTopNav';
import MobileDrawer from './_partials/MobileNav';

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isRootPath = location.pathname === '/';

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
    <div className={`${isRootPath? "fixed":"sticky" } w-full backdrop-blur-2xl h-18  top-0 z-20 shadow-lg flex items-center justify-between px-4`}>
      <Link to="/">
        <img
          src="/png/logo.png"
          alt="colauncha_logo"
          className="w-16 h-16 sm:w-full "
        />
      </Link>
      <div className="hidden md:flex ">
        <DeskTopNav />
      </div>

      <div className="flex items-center gap-4">
        <motion.button
          initial={{ scale: 1.3, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1, transition: { duration: 0.6 } }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={handleTalentRequest}
          className="hidden cursor-pointer md:flex bg-blue-500 text-white text-sm text-nowrap px-4 py-2 rounded-4xl hover:bg-blue-600 transition duration-300"
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
