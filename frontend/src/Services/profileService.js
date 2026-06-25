import api from "../api/api";

export const getProfile = async () => {

    const token = localStorage.getItem("token");

    const response = await api.get("/profile", {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    return response.data;
};

export const updateProfile = async (profileData) => {

    const token = localStorage.getItem("token");

    const response = await api.put(
        "/profile",
        profileData,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};