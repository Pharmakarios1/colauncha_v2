//third parties

import {
  LogoutOutlined,
  ProjectOutlined,
  UploadOutlined,
  UserOutlined
} from '@ant-design/icons';

import Sider from 'antd/es/layout/Sider';

import { Layout, Menu } from 'antd';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { useNavigate } from 'react-router';

//components
import ProjectRequest from '@components/DashboardData/_partials/ProjectRequest';
import TalentRequest from '@components/DashboardData/_partials/JoinAsATalent';
import UploadProposal from '@components/DashboardData/_partials/Proposals';
import Logout from '@components/DashboardData/_partials/Logout';

const baseurl = '/dashboard/';
export const items = [
   {
    label: 'Talent',
    key: '1',
    icon: <UserOutlined />,
    comp: <TalentRequest />,
    path: `${baseurl}join-as-talent`
  },
  {
    label: 'Project',
    key: '2',
    icon: <ProjectOutlined />,
    comp: <ProjectRequest />,
    path: `${baseurl}project-request`
  },
 

  {
    label: 'Proposal',
    key: '3',
    icon: <UploadOutlined />,
    comp: <UploadProposal />,
    path: `${baseurl}upload-proposal`
  },
  {
    label: 'Logout',
    key: '4',
    icon: <LogoutOutlined />,
    comp: <Logout />,
    path: `${baseurl}logout`
  }
];

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [mobileCollapsed, setMobileCollapsed] = useState(window.innerWidth < 768);
  const navigate = useNavigate();
  const handleSiderCollapse = (collapsed: boolean) => {
    setCollapsed(!collapsed);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setMobileCollapsed(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
  , []);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header className='!fixed !z-100 !w-full '>
        <p className="text-sm text-center md:text-left md:text-2xl py-5 text-nowrap">
          welcome to the Dashboard
        </p>
      </Layout.Header>
      <Layout>
        <Sider
        className='pt-[100px] !fixed h-[100vh] z-20 '
          onCollapse={handleSiderCollapse}
          collapsible
          collapsed={!collapsed}
          width={150}
         {...mobileCollapsed ? { collapsedWidth: 0 } : {collapsedWidth: 80}}
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
              }
            }}
          />
        </Sider>
        <Layout>
          <Layout.Content
            style={{ margin: '24px 16px 0', overflow: 'initial' }}
          >
            <div
              style={{
                padding: 24,
                textAlign: 'center'
              }}
            >
              <Outlet />
            </div>
          </Layout.Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
