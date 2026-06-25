import api from "../api/api";

// ===============================
// Get Privacy Settings
// ===============================
export const getPrivacySettings = async (userId) => {
  const response = await api.get(`/privacy/${userId}`);
  return response.data;
};

// ===============================
// Save Privacy Settings
// ===============================
export const savePrivacySettings = async (data) => {
  const response = await api.post("/privacy", data);
  return response.data;
};

// ===============================
// Get All User Data
// (Profile + Privacy + Assessment)
// ===============================
export const getUserData = async (userId) => {
  const response = await api.get(`/privacy/data/${userId}`);
  return response.data;
};


export const logDataDownload = async (userId) => {
  const response = await api.post("/privacy/download-log", {
    user_id: userId
  });

  return response.data;
};