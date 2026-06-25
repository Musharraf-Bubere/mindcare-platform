import api from "../api/api";

export const submitAssessment = async (assessmentData) => {

    const token = localStorage.getItem("token");

    const response = await api.post(
        "/assessment/submit",
        assessmentData,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    return response.data;
};