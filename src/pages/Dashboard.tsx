//third parties

import {
  LogoutOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined
} from '@ant-design/icons';

import Sider from 'antd/es/layout/Sider';

import { Layout, Menu } from 'antd';
import { useState } from 'react';
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
    label: 'Team Request',
    key: '1',
    icon: <TeamOutlined />,
    comp: <ProjectRequest />,
    path: `${baseurl}project-request`
  },
  {
    label: 'Talent Request',
    key: '2',
    icon: <UserOutlined />,
    comp: <TalentRequest />,
    path: `${baseurl}join-as-talent`
  },

  {
    label: 'Upload Proposal',
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
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const handleSiderCollapse = (collapsed: boolean) => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Header>
        <p className="text-sm text-center md:text-left md:text-2xl py-5 text-nowrap">
          Colauncha Dashboard
        </p>
      </Layout.Header>
      <Layout>
        <Sider
          style={{ paddingTop: '100px' }}
          onCollapse={handleSiderCollapse}
          collapsible
          collapsed={!collapsed}
          width={200}
          collapsedWidth={0}
        >
          <Menu
            theme="dark"
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
      <Layout.Footer style={{ textAlign: 'center' }}>
        ©{new Date().getFullYear()} Created by Colauncha
      </Layout.Footer>
    </Layout>
  );
};

export default Dashboard;
