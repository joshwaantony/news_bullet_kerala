import api from "../axios";

// LOGIN API
export const loginApi = async (email, password) => {
  const res = await api.post("/auth/login", { email, password });
  return res.data;
};

// REGISTER API
export const registerApi = async (name, email, password) => {
  const res = await api.post("/auth/register", { name, email, password });
  return res.data;
};
