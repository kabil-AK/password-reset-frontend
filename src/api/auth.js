import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api/auth" });

export const forgotPassword = (email) =>
  API.post("/forgot-password", { email });
export const resetPassword = (token) => API.get(`/reset-password/${token}`);
export const updatePassword = (data) => API.post("/update-password", data);

