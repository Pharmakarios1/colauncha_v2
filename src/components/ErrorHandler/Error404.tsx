import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

const Error404 = () => {
  // This component will be displayed when the user tries to access a non-existent route
  const navigate = useNavigate();
  const handleGoBackHome = () => {
    navigate('/');
  };
  return (
    <div className="mt-12">
      <img
        src="/png/mvp.png"
        alt="404 Error"
        style={{
          display: 'block',
          margin: '0 auto',
          width: '50%',
          height: 'auto',
          maxWidth: '600px',
          maxHeight: '400px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
        }}
      />
      <h1 className="text-xl font-bold text-center text-red-500">
        404 - Page Not Found
      </h1>
      <p className="text-center text-gray-600 text-[10px] sm:text-base">
        Sorry, the page you are looking for does not exist.
      </p>
      <p
        className="text-center text-gray-600 cursor-pointer"
        onClick={handleGoBackHome}
      >
        <ArrowLeftOutlined className="!text-gray-600" /> Return to the homepage.
      </p>
    </div>
  );
};

export default Error404;
