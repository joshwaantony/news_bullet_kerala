import { create } from "zustand";
import { AuthService } from "@/api/auth/authService";

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,

  // LOGIN
  login: async (phone, password) => {
    set({ loading: true, error: null });

    try {
      const data = await AuthService.login(phone, password);

      set({ user: data.user, loading: false });
      return data;
    } catch (err) {
      set({ error: err.response?.data?.message || "Login failed", loading: false });
      throw err;
    }
  },

  // REGISTER
  register: async (name, phone, password) => {
    set({ loading: true, error: null });

    try {
      const data = await AuthService.register(name, phone, password);

      set({ user: data.user, loading: false });
      return data;
    } catch (err) {
      set({ error: err.response?.data?.message || "Register failed", loading: false });
      throw err;
    }
  },

  logout: () => {
    set({ user: null });
  },
}));
