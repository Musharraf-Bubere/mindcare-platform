import api from "../api/api";

// ===============================
// Get Assessment Questions
// ===============================
export const getQuestions = async () => {

    const response = await api.get("/assessment/questions");

    return response.data;

};

// ===============================
// Submit Assessment
// ===============================
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