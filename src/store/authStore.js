
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthService } from "@/api/auth/authService";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      role: null,
      isLoggedIn: false,
      isAdmin: false,
      isUser: false,
      accessToken: null,
      loading: false,
      error: null,

      // =====================
      // LOGIN
      // =====================
 login: async (identifier, password) => {
  set({ loading: true, error: null });

  try {
    const res = await AuthService.login(identifier, password);

    const user = res?.data?.user;
    const token = res?.data?.accessToken;
    const role = user?.role;

    set({
      user,
      role,
      accessToken: token,
      isLoggedIn: true,
      isAdmin: role === "admin",
      isUser: role === "user",
      loading: false,
    });

    return res.data;
  } catch (err) {
    set({
      error: err.response?.data?.message || "Login failed",
      loading: false,
    });
    throw err;
  }
},

      // =====================
      // REGISTER (UPDATED 🔥)
      // =====================
      register: async (name, email, password, phone) => {
        set({ loading: true, error: null });

        try {
          const res = await AuthService.register({
            name,
            email,
            password,
            phone,
          });

          const user = res?.data?.user;
          const token = res?.data?.accessToken;
          const role = user?.role;

          set({
            user,
            role,
            accessToken: token,
            isLoggedIn: true,
            isAdmin: role === "admin",
            isUser: role === "user",
            loading: false,
            error: null,
          });

          return res.data;
        } catch (err) {
          set({
            error: err.response?.data?.message || "Register failed",
            loading: false,
          });
          throw err;
        }
      },

      // =====================
      // LOGOUT
      // =====================
      logout: () => {
        set({
          user: null,
          role: null,
          accessToken: null,
          isLoggedIn: false,
          isAdmin: false,
          isUser: false,
        });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        role: state.role,
        accessToken: state.accessToken,
        isLoggedIn: state.isLoggedIn,
        isAdmin: state.isAdmin,
        isUser: state.isUser,
      }),
    }
  )
);
