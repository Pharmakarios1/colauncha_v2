import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpOutlined } from '@ant-design/icons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={scrollToTop}
          className="fixed  bottom-6 right-6 z-50 p-3 flexitems-center justify-center rounded-full shadow-xl bg-[#3783FF] hover:bg-blue-600 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          aria-label="Scroll to top"
          title="Scroll to top"
          style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
          
        >
        <span className="absolute ring-offset-2 animate-ping outline-2 outline-blue-800 bg-blue-400 rounded-full w-[25px] h-[25px]"></span>
          <ArrowUpOutlined className="h-6 w-6 pl-1" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTopButton;