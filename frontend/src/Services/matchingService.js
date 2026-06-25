import api from "../api/api";

export const getMatchingTherapists = async (assessment) => {

    const response = await api.post(
        "/matching",
        assessment
    );

    return response.data;
};