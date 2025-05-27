import axiosInstance from './axiosInstance'; // Assuming you have a centralized axios setup
import { ProjectRequestFormData } from '../components/DashboardData/_partials/ProjectRequest'; // Adjust the import path as necessary

const submitProjectRequest = async (projectData:ProjectRequestFormData) => {
  const response = await axiosInstance.post('/projects', projectData);
  return response.data;
};

export default submitProjectRequest;
