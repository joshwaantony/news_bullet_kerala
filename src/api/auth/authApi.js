import api from "../axios";

// LOGIN API
export const loginApi = async (phone, password) => {
  const res = await api.post("/auth/login", { phone, password });
  return res.data;
};

// REGISTER API
export const registerApi = async (name, phone, password) => {
  const res = await api.post("/auth/register", { name, phone, password });
  return res.data;
};
