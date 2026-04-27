import { getAllNewsApi, getSingleNewsApi } from "./newsApi";

export const newsService = {
  getAll: async () => {
    const res = await getAllNewsApi();
    return res.data.data.news;
  },
  getSingle: async (slug) => {
    const res = await getSingleNewsApi(slug);
    return res.data.data.news;
  },
};
