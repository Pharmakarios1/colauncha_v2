import axiosInstance from "./axiosInstance";


const submitContactForm = async (formData: Record<string, any>) => {
  const response = await axiosInstance.post("/contact", formData);
  return response.data;
};
export default submitContactForm;