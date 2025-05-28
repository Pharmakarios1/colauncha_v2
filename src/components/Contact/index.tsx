import {
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
    <div className="mt-40 max-h-[500px] flex flex-col bg-[#C4C4C426] py-3 px-10 md:py-10 md:px-20">
      <Typography.Title
        level={2}
        className="text-center md:text-left text-white"
      >
        Contact Us
      </Typography.Title>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 md:mt-10 ">
        <Card className="w-full md:w-full max-h-[200px] p-5 rounded-lg !bg-[#F49090] !shadow-4xl !border-[#F49090] ">
          <Typography.Paragraph className="md:text-left">
            <Typography.Text className="text-[11px] md:text-base ">
              Stay updated with the latest news, resources, and events. Get
              insightful articles, tips, and more delivered to your inbox.
              <div className="grid grid-cols-1 lg:grid-cols-5 mt-2">
                <div>
                  <MailOutlined className="!text-blue-500 !text-lg" />
                  <span className="ml-2">Info@colauncha.com</span>
                </div>
                <div>
                  <PhoneOutlined className="!text-blue-500 !text-lg" />
                  <span className="ml-2"> +23498356672867</span>
                </div>
              </div>
              <p
                onClick={handleNavigation}
                className="mt-2 text-right !text-white cursor-pointer hover:underline"
              >
                Please fill our form <VerticalAlignBottomOutlined />
              </p>
            </Typography.Text>
          </Typography.Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
