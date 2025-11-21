// import { create } from "zustand";
// import { AuthService } from "@/api/auth/authService";

// export const useAuthStore = create((set) => ({
//   user: null,
//   loading: false,
//   error: null,

//   // LOGIN
//   login: async (phone, password) => {
//     set({ loading: true, error: null });

//     try {
//       const data = await AuthService.login(phone, password);

//       set({ user: data.user, loading: false });
//       return data;
//     } catch (err) {
//       set({ error: err.response?.data?.message || "Login failed", loading: false });
//       throw err;
//     }
//   },

//   // REGISTER
//   register: async (name, phone, password) => {
//     set({ loading: true, error: null });

//     try {
//       const data = await AuthService.register(name, phone, password);

//       set({ user: data.user, loading: false });
//       return data;
//     } catch (err) {
//       set({ error: err.response?.data?.message || "Register failed", loading: false });
//       throw err;
//     }
//   },

//   logout: () => {
//     set({ user: null });
//   },
// }));




import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthService } from "@/api/auth/authService";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      accessToken: null,
      loading: false,
      error: null,

      // LOGIN
      login: async (phone, password) => {
        set({ loading: true, error: null });

        try {
          const res = await AuthService.login(phone, password);

          const user = res?.data?.user;
          const token = res?.data?.accessToken;

          set({ user, accessToken: token, loading: false, error: null });

          return res.data;
        } catch (err) {
          set({
            error: err.response?.data?.message || "Login failed",
            loading: false,
          });
          throw err;
        }
      },

      // REGISTER
      register: async (name, phone, password) => {
        set({ loading: true, error: null });

        try {
          const res = await AuthService.register(name, phone, password);

          const user = res?.data?.user;
          const token = res?.data?.accessToken;

          set({ user, accessToken: token, loading: false });

          return res.data;
        } catch (err) {
          set({
            error: err.response?.data?.message || "Register failed",
            loading: false,
          });
          throw err;
        }
      },

      // SET ACCESS TOKEN
      setAccessToken: (token) => set({ accessToken: token }),

      // LOGOUT
      logout: () => {
        set({ user: null, accessToken: null });
      },
    }),
    {
      name: "auth-storage", // 🧠 saves to localStorage
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
      }),
    }
  )
);
