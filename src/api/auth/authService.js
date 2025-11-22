import { registerApi } from "./authApi";
import { loginApi } from "./authApi";

export const AuthService = {
  login: async (email, password) => {
    return await loginApi(email, password);
  },

  register: async (name, email, password) => {
    return await registerApi(name, email, password);
  },
};
