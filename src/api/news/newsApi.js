import api from "../axios";




export const getAllNewsApi = () => api.get("/news")