import { Button } from 'antd';
import { useNavigate } from 'react-router';

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/');
  };
  return (
    <div>
      <h1 className="text-2xl font-bold mt-10 mb-4 text-center">Logout</h1>
      <p className="text-base">Are you sure you want to logout?</p>
      <Button
        onClick={handleLogout}
        className="mt-4 !bg-blue-900 !text-white px-4 py-2 rounded"
      >
        Logout
      </Button>
    </div>
  );
};

export default Logout;
