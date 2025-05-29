//third party
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Dispatch, SetStateAction } from 'react';
//local imports
import DeskTopNav from './_partials/DeskTopNav';

type NavigationProps = {
  showMenu: boolean;
  setShowMenu: Dispatch<SetStateAction<boolean>>;
};
const Navigation = ({ showMenu, setShowMenu }: NavigationProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isRootPath = location.pathname === '/';

  // Function to handle navigation to talent request page
  const handleTalentRequest = () => {
    navigate('/dashboard');
  };
  return (
    <div
      className={`${isRootPath ? 'fixed' : 'sticky'} w-full backdrop-blur-2xl h-18  top-0 z-20 shadow-lg flex items-center justify-between px-4`}
    >
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

      <div className="flex items-center gap-4 pr-4">
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
        <div className="md:hidden">
          <Button
            icon={showMenu ? <CloseOutlined /> : <MenuOutlined />}
            onClick={() => setShowMenu(!showMenu)}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
