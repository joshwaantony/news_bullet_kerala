// // path correct ആക്കി നോക്കുക

import api from "@/api/axios";

export const createNewsApi = (data) => {
  return api.post("/news", data);
};






// ✅ GET ALL NEWS (PUBLIC)
export const getAllNewsApi = () => {
  return api.get("/news");
};
