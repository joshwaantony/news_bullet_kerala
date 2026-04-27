import api from "../axios";




export const getAllNewsApi = () => api.get("/news")

export const getSingleNewsApi = (slug) => api.get(`/news/${slug}`);