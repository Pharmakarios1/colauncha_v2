import {
  ProjectOutlined,
  UploadOutlined,
  UserOutlined,
  MenuOutlined,
  ShrinkOutlined,
  ArrowsAltOutlined,
  CloseOutlined,
  ContactsOutlined,
} from '@ant-design/icons';

import Sider from 'antd/es/layout/Sider';

import { Layout, Menu, Button } from 'antd';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';

//components
import ProjectRequest from '@components/DashboardData/_partials/ProjectRequest';
import TalentRequest from '@components/DashboardData/_partials/JoinAsATalent';
import UploadProposal from '@components/DashboardData/_partials/Proposals';
// import Logout from '@components/DashboardData/_partials/Logout';
import ContactUs from './ContactUs';
import Footer from '@components/Footer';

const baseurl = '/contact/';
export const items = [
  {
    label: 'Project',
    key: '1',
    icon: <ProjectOutlined />,
    comp: <ProjectRequest />,
    path: `${baseurl}project-request`
  }, 
  {
    label: 'Talent',
    key: '2',
    icon: <UserOutlined />,
    comp: <TalentRequest />,
    path: `${baseurl}join-as-talent`
  },
  {
    label: 'Proposal',
    key: '3',
    icon: <UploadOutlined />,
    comp: <UploadProposal />,
    path: `${baseurl}upload-proposal`
  },
  {
    label: 'Enquires',
    key: '4',
    icon: <ContactsOutlined />,
    comp: <ContactUs />,
    path: `${baseurl}enquires`
  }
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [totalCollapse, setTotalCollapse] = useState(false);
  const [mobileCollapsed, setMobileCollapsed] = useState(window.innerWidth < 768);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  
  const handleSiderCollapse = (collapsed: boolean) => {
    if (!totalCollapse) {
      setCollapsed(!collapsed);
    }
  };

  const handleTotalCollapse = () => {
    setTotalCollapse(!totalCollapse);
    if (totalCollapse) {
      // When expanding from total collapse, set to normal collapsed state
      setCollapsed(false);
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileCollapsed(!mobileCollapsed);
  };
  
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setMobileCollapsed(mobile); // Start collapsed on mobile
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Calculate the margin based on sider state
  const getContentMargin = () => {
    if (totalCollapse) {
      return '0px'; // No margin when totally collapsed
    }
    if (isMobile) {
      return mobileCollapsed ? '0px' : '200px'; // Mobile margins
    }
    return collapsed ? '150px' : '80px'; // Desktop margins
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header className='!fixed !z-100 !w-full '>
        <div className="flex items-center justify-between">
          <p className="text-sm text-center md:text-left md:text-2xl py-5 text-nowrap">
            Welcome to the Request Page
          </p>
          {/* Mobile menu button */}
          {isMobile && (
            <Button
              type="text"
              icon={<MenuOutlined />}
              onClick={handleMobileMenuToggle}
              className="text-white hover:!text-gray-300"
              size="large"
            />
          )}
        </div>
      </Layout.Header>
      <Layout>
        {!totalCollapse ? (
          <Sider
            className={`pt-[100px] !fixed h-[100vh] z-20 ${isMobile && mobileCollapsed ? '!-left-[200px]' : ''}`}
            onCollapse={handleSiderCollapse}
            collapsible={!isMobile} // Disable built-in collapse on mobile
            collapsed={!collapsed}
            width={isMobile ? 200 : 150}
            collapsedWidth={isMobile ? 200 : 80} // Keep same width on mobile
            style={{
              transition: 'left 0.3s ease', // Smooth slide animation on mobile
            }}
            trigger={
              !isMobile ? (
                <div className="flex gap-1 items-center justify-center">
                  <div className="group relative">
                    <Button
                      type="text"
                      icon={<CloseOutlined />}
                      onClick={handleTotalCollapse}
                      className="text-white hover:!text-gray-300 !p-0 !border-0"
                      size="small"
                      title="Hide sidebar completely"
                    />
                    <span className="absolute text-xs bg-black rounded-md p-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Hide
                    </span>
                  </div>
                  <div className="group relative">
                    <Button
                      type="text"
                      icon={!collapsed ? <ArrowsAltOutlined /> : <ShrinkOutlined />}
                      className="text-white hover:!text-gray-300 !p-0 !border-0"
                      size="small"
                      title="Toggle sidebar size"
                    />
                    <span className="absolute text-xs bg-black rounded-md p-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {!collapsed ? 'Expand' : 'Collapse'}
                    </span>
                  </div>
                </div>
              ) : (
                // Mobile close button
                <div className="flex items-center justify-center">
                  <Button
                    type="text"
                    icon={<CloseOutlined />}
                    onClick={handleMobileMenuToggle}
                    className="text-white hover:!text-gray-300"
                    size="small"
                  />
                </div>
              )
            }
          >
            <Menu
              theme="dark"
              className='!h-full lg:!space-y-10'
              mode="inline"
              defaultSelectedKeys={['1']}
              items={items}
              onClick={({ key }) => {
                const clickedItem = items.find((item) => item.key === key);
                if (clickedItem) {
                  navigate(clickedItem.path);
                  // Close mobile menu after navigation
                  if (isMobile) {
                    setMobileCollapsed(true);
                  }
                }
              }}
            />
          </Sider>
        ) : (!isMobile &&
          <div className={`fixed h-8 w-10 top-35 left-0 z-150 p-4 border-t-2 border-b-2 border-r-2 rounded-r-lg border-blue-200 bg-gray-800 text-white flex items-center justify-center transition-all duration-1000 ${totalCollapse ? 'opacity-100' : 'opacity-0'}`}>
            <div className="group relative">
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={handleTotalCollapse}
                className="text-gray-600 hover:!text-gray-300"
                size="small"
              />
              <span className="absolute text-xs text-white w-max bg-black rounded-md p-1 left-1/2 transform translate-x-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Show sidebar
              </span>
            </div>  
          </div>
        )}
        
        {/* Mobile overlay */}
        {isMobile && !mobileCollapsed && !totalCollapse && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={handleMobileMenuToggle}
          />
        )}
        
        <Layout>
          <Layout.Content
            style={{ 
              margin: '24px 16px 0', 
              overflow: 'initial',
              marginLeft: getContentMargin(),
              transition: 'margin-left 0.2s ease'
            }}
          >
            <div
              style={{
                padding: 24,
                textAlign: 'center'
              }}
            >
              <Outlet />
            </div>
            <div className="mt-10 max-h-[500px] w-full flex flex-col py-3 px-10 md:py-10 md:px-20">
              <Footer />
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;