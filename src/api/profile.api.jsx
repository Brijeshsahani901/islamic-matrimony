import axiosInstance from "@/utils/axiosInstance";

export const personalInfoUpdated = async (userData) => {
  try {
    const response = await axiosInstance.post(
      "/profile/personal-info",
      userData
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const fetchProfiles = async (params) => {
  try {
    const response = await axiosInstance.get("/search-profiles", { params });
    return response.data.data; // Adjust based on API response shape
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getUserProfileById = async (userId) => {
  const response = await axiosInstance.get(`/profile/${userId}`);
  return response.data;
};

export const getUserProfile = async () => {
  try {
    const response = await axiosInstance.post("/profile");
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const careerEducationUpdated = async (data) => {
  try {
    const response = await axiosInstance.post("/profile/career-info", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const religiousInfoUpdated = async (data) => {
  try {
    const response = await axiosInstance.post("/profile/religious-info", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
export const familyInfoUpdated = async (data) => {
  try {
    const response = await axiosInstance.post("/profile/family-info", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
export const privacyUpdated = async (data) => {
  try {
    const response = await axiosInstance.post(
      "/profile/privacy-settings",
      data
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const preferencesUpdated = async (data) => {
  try {
    const response = await axiosInstance.post("/profile/preferences", data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
