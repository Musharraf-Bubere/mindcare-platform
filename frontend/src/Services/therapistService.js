import api from "../api/api";

export const getTherapists = async () => {
  const response = await api.get("/therapists");
  return response.data;
};