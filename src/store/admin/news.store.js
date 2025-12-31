// import { createNewsApi } from "@/api/admin/news/news.api";
// import { create } from "zustand";

// const useNewsStore = create((set) => ({
//   loading: false,
//   error: null,
//   success: false,

//   createNews: async (newsData) => {
//     try {
//       set({ loading: true, error: null, success: false });

//       await createNewsApi(newsData);

//       set({ loading: false, success: true });
//     } catch (err) {
//       set({
//         loading: false,
//         error:
//           err?.response?.data?.message ||
//           "Failed to add news",
//       });
//     }
//   },

//   resetStatus: () =>
//     set({ loading: false, error: null, success: false }),
// }));

// export default useNewsStore;



// import { createNewsApi, getAllNewsApi } from "@/api/admin/news/news.api";
// import { create } from "zustand";

// const useNewsStore = create((set) => ({
//   loading: false,
//   error: null,
//   success: false,
//   news: [],

//   // CREATE
//   createNews: async (newsData) => {
//     try {
//       set({ loading: true, error: null, success: false });

//       await createNewsApi(newsData);

//       set({ loading: false, success: true });
//     } catch (err) {
//       set({
//         loading: false,
//         error:
//           err?.response?.data?.message || "Failed to add news",
//       });
//     }
//   },

//   // ✅ GET ALL NEWS
//   fetchAllNews: async () => {
//     try {
//       set({ loading: true, error: null });

//       const res = await getAllNewsApi();
// console.log(res)
//       set({
//         loading: false,
//         news: res.data.data || res.data, // backend structure safe
//       });
//     } catch (err) {
//       set({
//         loading: false,
//         error: "Failed to fetch news",
//       });
//     }
//   },

//   resetStatus: () =>
//     set({ loading: false, error: null, success: false }),
// }));

// export default useNewsStore;



import { create } from "zustand";
import {
  createNewsApi,
  getAllNewsApi,
} from "@/api/admin/news/news.api";

const useNewsStore = create((set) => ({
  loading: false,
  error: null,
  success: false,
  news: [], // ✅ always array

  // CREATE NEWS
  createNews: async (newsData) => {
    try {
      set({ loading: true, error: null, success: false });

      await createNewsApi(newsData);

      set({ loading: false, success: true });
    } catch (err) {
      set({
        loading: false,
        error:
          err?.response?.data?.message ||
          "Failed to add news",
      });
    }
  },

  // ✅ GET ALL NEWS (FIXED)
  fetchAllNews: async () => {
    try {
      set({ loading: true, error: null });

      const res = await getAllNewsApi();

      console.log("API RESPONSE 👉", res);

      set({
        loading: false,

        // ✅ EXACT PATH BASED ON YOUR RESPONSE
        news: res?.data?.data?.news || [],
      });
    } catch (err) {
      set({
        loading: false,
        error: "Failed to fetch news",
        news: [], // safety
      });
    }
  },

  resetStatus: () =>
    set({ loading: false, error: null, success: false }),
}));

export default useNewsStore;
