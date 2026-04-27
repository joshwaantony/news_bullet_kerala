import api from "../axios";

// =====================
// LOGIN API
// =====================
export const loginApi = async (identifier, password) => {
  const res = await api.post("/auth/login", {
    identifier,
    password,
  });
  return res.data;
};

// =====================
// REGISTER API (UPDATED 🔥)
// =====================
export const registerApi = async ({ name, email, password, phone }) => {
  const res = await api.post("/auth/register", {
    name,
    email,
    password,
    phone,
  });
  return res.data;
};

// =====================
// GET CURRENT USER
// =====================
export const getMeApi = async () => {
  const res = await api.get("/auth/me");
  return res.data.data; // { success, data: { user } }
};
