import { useEffect, ReactNode } from 'react';
import { useLocation } from 'react-router';

const ScrollToTopWindow: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { pathname } = useLocation();
    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    }, [pathname]);
  return (
    <>
      {children}
    </>
  );
};

export default ScrollToTopWindow;