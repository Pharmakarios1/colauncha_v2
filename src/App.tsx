//third party libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { ConfigProvider } from 'antd';
import '@ant-design/v5-patch-for-react-19';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

//local imports
import LandingPage from '@pages/LandingPage';
import AboutUs from '@pages/AboutUs';
import ContactUs from '@pages/ContactUs';
import OurTeam from '@pages/OurTeam';
import Navigation from '@components/Navigation';
import Dashboard from '@pages/Dashboard';
import ProjectRequest from '@components/DashboardData/_partials/ProjectRequest';
import TalentRequest from '@components/DashboardData/_partials/JoinAsATalent';
import UploadProposal from '@components/DashboardData/_partials/Proposals';
import Logout from '@components/DashboardData/_partials/Logout';
import Error404 from '@components/ErrorHandler/Error404';
// import { items } from "@pages/Dashboard";

const queryClient = new QueryClient();

const App = () => {
  const primaryColor = '#3783FF';

  const antTheme = {
    token: {
      colorPrimary: primaryColor,
      fontFamily: 'Inter, sans-serif',
      colorLink: primaryColor,
      colorBorder: '#e5e7eb',
      borderRadius: 8,
      colorBgMask: 'rgba(255, 255, 255, 0.6)'
    },
    components: {
      Layout: {
        colorBgContainer: '#f0f2f5',
        colorText: primaryColor
      },
      Card: {
        colorBgContainer: '#F7F5BC7D',
        colorText: primaryColor,
        colorTextHeading: primaryColor
      }
    }
  };
  return (
    <ConfigProvider theme={{ ...antTheme }}>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Navigation />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<ProjectRequest />} />
              <Route path="join-as-talent" element={<TalentRequest />} />
              <Route path="project-request" element={<ProjectRequest />} />
              <Route path="upload-proposal" element={<UploadProposal />} />
              <Route path="logout" element={<Logout />} />
            </Route>
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Router>
    </ConfigProvider>
  );
};

export default App;
