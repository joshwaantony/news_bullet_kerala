import api from "@/api/axios";

export const PlanService = {
  createPlan: (payload) =>
    api.post("/payments/plans/create", payload),

  getPlans: () =>
    api.get("/payments/plans"),

  getPlanById: (planId) =>
    api.get(`/payments/plans/${planId}`),
};
