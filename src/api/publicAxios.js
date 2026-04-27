import axios from "axios";
import { useAuthStore } from "@/store/authStore";

const publicAxios = axios.create({
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
});

publicAxios.interceptors.request.use((config) => {
    const token = useAuthStore.getState().accessToken;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

publicAxios.interceptors.response.use(
    (res) => res,
    async (err) => {
        const originalRequest = err.config;

        if (err.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const refreshRes = await axios.get(
                "https://newsbulletkerala.com/api/v1/auth/refresh-token",
                { withCredentials: true }
            );

            const newToken = refreshRes.data?.data?.accessToken;
            if (newToken) {
                useAuthStore.getState().setAccessToken(newToken);
                originalRequest.headers.Authorization = `Bearer ${newToken}`;
                return publicAxios(originalRequest);
            }
        }

        return Promise.reject(err);
    }
);

export default publicAxios;
