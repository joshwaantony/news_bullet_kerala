// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://72t09sg9-4000.inc1.devtunnels.ms/api/v1",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true, // allows cookies like refreshToken
// });

// export default api;




import axios from "axios";
import { useAuthStore } from "@/store/authStore";

const api = axios.create({
  baseURL: "https://72t09sg9-4000.inc1.devtunnels.ms/api/v1",
  headers: { "Content-Type": "application/json" },
  withCredentials: true, // important for refresh token cookie
});

// 🔥 Add access token to all requests
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 🔥 Handle expired token => auto-refresh
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    // If token expired → refresh
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshRes = await axios.get(
          "https://72t09sg9-4000.inc1.devtunnels.ms/api/v1/auth/refresh-token",
          { withCredentials: true }
        );

        const newToken = refreshRes.data?.data?.accessToken;

        if (newToken) {
          // store new token
          useAuthStore.getState().setAccessToken(newToken);

          // retry original request with new token
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        useAuthStore.getState().logout();
      }
    }

    return Promise.reject(err);
  }
);

export default api;
