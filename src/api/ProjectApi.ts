import axiosInstance from './axiosInstance'; // Assuming you have a centralized axios setup
const submitProjectRequest = async (projectData) => {
  const response = await axiosInstance.post('/projects', projectData);
  return response.data;
};

export default submitProjectRequest;
