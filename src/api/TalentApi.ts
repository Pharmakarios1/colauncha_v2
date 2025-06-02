// src/api/talentApi.ts
import axiosInstance from './axiosInstance';
import { TalentRequestFormData } from '@components/DashboardData/_partials/JoinAsATalent';



export const submitTalentRequest = async (data: TalentRequestFormData) => {
    const response = await axiosInstance.post('/talent', data);
    return response.data;
};

export default submitTalentRequest;