import {
  MailOutlined,
  VerticalAlignBottomOutlined
} from '@ant-design/icons';
import { MdPhoneInTalk } from "react-icons/md";
import { Card, Typography } from 'antd';
import { useNavigate } from 'react-router';

const Contact = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/contact/enquires');
  };
  return (
    <div className="mt-20 sm:mt-32 lg:mt-40 min-h-[400px] flex flex-col bg-[#C4C4C426] py-4 px-4 sm:py-6 sm:px-8 md:py-10 md:px-20">
      <Typography.Title
        level={2}
        className="text-center lg:text-left text-white text-2xl sm:text-3xl lg:text-4xl mb-6 lg:mb-0"
      >
        Contact Us
      </Typography.Title>
      <div className="flex flex-col gap-5 md:gap-10 mt-6 lg:mt-10">
        <Card className="w-full min-h-[200px] sm:min-h-[220px] lg:min-h-[250px] p-4 sm:p-5 lg:p-6 rounded-lg !bg-[#F49090] !shadow-4xl !border-[#F49090]">
          <Typography.Paragraph className="text-left mb-0">
            <Typography.Text className="!text-sm sm:!text-base lg:!text-lg font-light leading-relaxed">
              Stay updated with the latest news, resources, and events. Get
              insightful articles, tips, and more delivered to your inbox.
            </Typography.Text>
            
            <div className="flex flex-col lg:flex-row py-4 sm:py-5 gap-4 lg:gap-5 lg:justify-between lg:items-end">
              <div className='flex flex-col gap-3 sm:gap-4 flex-1'>
                <div className="flex items-center flex-wrap">
                  <MailOutlined className="!text-white !text-base sm:!text-lg flex-shrink-0" />
                  <span className="ml-2 text-sm sm:text-base break-all">info@colauncha.com</span>
                </div>
                <div className="flex items-start sm:items-center flex-wrap">
                  <MdPhoneInTalk className="!text-white !text-base sm:!text-lg flex-shrink-0 mt-1 sm:mt-0" />
                  <span className="ml-2 text-sm sm:text-base">
                    +234 708 4274 918, +234 805 9770 443
                  </span>
                </div>
              </div>
              
              <div className="lg:flex-shrink-0">
                <p
                  onClick={handleNavigation}
                  className="!text-white cursor-pointer hover:underline text-sm sm:text-base text-left lg:text-right transition-all duration-200 hover:opacity-80"
                >
                  Fill our enquiry form <VerticalAlignBottomOutlined />
                </p>
              </div>
            </div>
          </Typography.Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
