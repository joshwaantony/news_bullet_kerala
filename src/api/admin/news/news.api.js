// // path correct ആക്കി നോക്കുക

import api from "@/api/axios";

export const createNewsApi = (data) => {
  return api.post("/news", data);
};






// ✅ GET ALL NEWS (PUBLIC)
export const getAllNewsApi = () => {
  return api.get("/news");
};


// GET NEWS BY SLUG (PUBLIC)
export const getNewsBySlugApi = (slug) => {
  return api.get(`/news/${slug}`);
};

// UPDATE NEWS (PROTECTED)
export const updateNewsApi = (slug, data) => {
  return api.put(`/news/${slug}`, data); // JWT via axios instance
};


// DELETE NEWS (PROTECTED)
export const deleteNewsApi = (slug) => {
  return api.delete(`/news/${slug}`);
};