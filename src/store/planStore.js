import { create } from "zustand";
import { PlanService } from "@/api/payments/planService";
import toast from "react-hot-toast";

export const usePlanStore = create((set) => ({
  plans: [],
  singlePlan: null,
  loading: false,
  error: null,

  // CREATE PLAN
  createPlan: async (payload) => {
    set({ loading: true, error: null });
    try {
      const res = await PlanService.createPlan(payload);
      toast.success("Plan created successfully");
      return res.data;
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create plan");
      set({ error: err.message });
      throw err;
    } finally {
      set({ loading: false });
    }
  },

  // GET ALL PLANS
getPlans: async () => {
  set({ loading: true });

  try {
    const res = await PlanService.getPlans();
    console.log(res);

    // ✔ Correct: backend sends res.data.data as an array
    set({ plans: res.data.data || [] });

  } catch (err) {
    set({ error: err.response?.data?.message || err.message });
  } finally {
    set({ loading: false });
  }
},


  // GET PLAN BY ID
  getPlanById: async (id) => {
    set({ loading: true });
    try {
      const res = await PlanService.getPlanById(id);
      set({ singlePlan: res.data.data });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));
