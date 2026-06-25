import api from "../api/api";

// Register User
export const registerUser = async (userData) => {
  const response = await api.post("/signup", userData);
  return response.data;
};

// Login User
export const loginUser = async (loginData) => {
  const response = await api.post("/login", loginData);
  return response.data;
};