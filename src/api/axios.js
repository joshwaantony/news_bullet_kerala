import axios from "axios";

const api = axios.create({
  baseURL: "https://72t09sg9-4000.inc1.devtunnels.ms/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // allows cookies like refreshToken
});

export default api;
