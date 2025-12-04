import { getAllNewsApi } from "./newsApi";

export const newsService = {
  getAll: async () => {
    const res = await getAllNewsApi();
    return res.data.data.news;
  },
};
