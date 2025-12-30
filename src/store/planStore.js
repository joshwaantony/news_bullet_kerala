// import { create } from "zustand";
// import { PlanService } from "@/api/payments/planService";
// import toast from "react-hot-toast";

// export const usePlanStore = create((set) => ({
//   plans: [],
//   singlePlan: null,
//   loading: false,
//   error: null,

//   // CREATE PLAN
//   createPlan: async (payload) => {
//     set({ loading: true, error: null });
//     try {
//       const res = await PlanService.createPlan(payload);
//       toast.success("Plan created successfully");
//       return res.data;
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to create plan");
//       set({ error: err.message });
//       throw err;
//     } finally {
//       set({ loading: false });
//     }
//   },

//   // GET ALL PLANS
// getPlans: async () => {
//   set({ loading: true });

//   try {
//     const res = await PlanService.getPlans();
//     console.log(res);

//     // ✔ Correct: backend sends res.data.data as an array
//     set({ plans: res.data.data || [] });

//   } catch (err) {
//     set({ error: err.response?.data?.message || err.message });
//   } finally {
//     set({ loading: false });
//   }
// },


//   // GET PLAN BY ID
//   getPlanById: async (id) => {
//     set({ loading: true });
//     try {
//       const res = await PlanService.getPlanById(id);
//       set({ singlePlan: res.data.data });
//     } catch (err) {
//       set({ error: err.message });
//     } finally {
//       set({ loading: false });
//     }
//   },
// }));




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
    set({ loading: true, error: null });

    try {
      const res = await PlanService.getPlans();

      // Backend response: res.data.data = array of { meta, razorpay }
      set({ plans: res.data.data || [] });

    } catch (err) {
      set({ error: err.response?.data?.message || err.message });
    } finally {
      set({ loading: false });
    }
  },

  // GET SINGLE PLAN
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

  // DELETE PLAN
  deletePlan: async (planId) => {
    set({ loading: true });

    try {
      await PlanService.deletePlan(planId);
      toast.success("Plan deleted");

      // Refresh plans
      const res = await PlanService.getPlans();
      set({ plans: res.data.data || [] });

    } catch (err) {
      toast.error("Failed to delete plan");
      throw err;
    } finally {
      set({ loading: false });
    }
  },

  // TOGGLE ACTIVE / DISABLE
  togglePlanStatus: async (planId, status) => {
    set({ loading: true });

    try {
      await PlanService.toggleStatus(planId, { isActive: status });
      toast.success(status ? "Plan Enabled" : "Plan Disabled");

      // Refresh list
      const res = await PlanService.getPlans();
      set({ plans: res.data.data || [] });

    } catch (err) {
      toast.error("Failed to update status");
      throw err;
    } finally {
      set({ loading: false });
    }
  },

  // USER SUBSCRIPTIONS
  userSubscriptions: [],
  getUserSubscriptions: async () => {
    set({ loading: true });
    try {
      // Lazy import to avoid circular dependency if needed, or just standard import
      const { SubscriptionService } = await import("@/api/payments/subscriptionService");
      const res = await SubscriptionService.getUserSubscriptions();
      set({ userSubscriptions: res.data.data || [] });
    } catch (err) {
      console.error(err);
      // Don't block UI with error toast for this background check
    } finally {
      set({ loading: false });
    }
  },

}));
