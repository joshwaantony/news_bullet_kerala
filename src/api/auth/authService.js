import { registerApi, loginApi } from "./authApi";

export const AuthService = {
  // =====================
  // LOGIN
  // =====================
  login: async (identifier, password) => {
    return await loginApi(identifier, password);
  },

  // =====================
  // REGISTER (UPDATED 🔥)
  // =====================
  register: async ({ name, email, password, phone }) => {
    return await registerApi({
      name,
      email,
      password,
      phone,
    });
  },
};
