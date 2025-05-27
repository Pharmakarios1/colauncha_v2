import {
  EnvironmentOutlined,
  MailOutlined,
  PhoneOutlined,
  VerticalAlignBottomOutlined
} from '@ant-design/icons';
import { Card, Typography } from 'antd';
import { useNavigate } from 'react-router';

const Contact = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/contact');
  };
  return (
    <div className="mt-40 max-h-[500px] flex flex-col bg-[#F60000] py-3 px-10 md:py-10 md:px-20">
      <Typography.Title
        level={2}
        className="text-center md:text-left text-white"
      >
        Contact Us
      </Typography.Title>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 md:mt-10">
        <Card className="w-full md:w-1/2 max-h-[200px] p-5 rounded-lg !shadow-lg  !overflow-y-auto no-scrollbar">
          <Typography.Paragraph className="md:text-left">
            <Typography.Text className="text-sm md:text-base">
              We are here to help you with any questions or concerns you may
              have. Our team is dedicated to providing you with the support you
              need to make the most of our platform.
              <p
                onClick={handleNavigation}
                className="mt-2 text-right text-blue-500 cursor-pointer hover:underline"
              >
                Please fill our form <VerticalAlignBottomOutlined />
              </p>
            </Typography.Text>
          </Typography.Paragraph>
        </Card>

        <Card className="w-full md:w-1/2 max-h-[200px] p-5 rounded-lg !shadow-lg  !overflow-y-auto">
          <div className="grid grid-cols-[1fr_2fr] gap-5">
            <div className="flex flex-col gap-2">
              <Typography.Text className="text-sm md:text-base">
                <MailOutlined size={300} className='!text-blue-500' />
              </Typography.Text>
              <Typography.Text className="text-sm md:text-base">
                <PhoneOutlined className='!text-blue-500'/>
              </Typography.Text>
              <Typography.Text className="text-sm md:text-base">
                <EnvironmentOutlined className='!text-blue-500'/>
              </Typography.Text>
            </div>
            <div className="flex flex-col gap-2">
              <Typography.Text className="text-sm md:text-base">
                Colauncha@gmail.com
              </Typography.Text>
              <Typography.Text className="text-sm md:text-base">
                +234 98356672867
              </Typography.Text>
              <Typography.Text className="text-sm md:text-base">
                Lagos, Nigeria
              </Typography.Text>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
