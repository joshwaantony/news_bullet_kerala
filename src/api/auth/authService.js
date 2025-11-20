import { registerApi } from "./authApi";
import { loginApi } from "./authApi";

export const AuthService = {
  login: async (phone, password) => {
    return await loginApi(phone, password);
  },

  register: async (name, phone, password) => {
    return await registerApi(name, phone, password);
  },
};
