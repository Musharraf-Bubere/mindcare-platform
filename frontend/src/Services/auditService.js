import api from "../api/api";

export const getAuditLogs = async (userId) => {

    const response = await api.get(`/audit/${userId}`);

    return response.data;

};