// import api from "@/api/axios";

// export const PlanService = {
//   createPlan: (payload) =>
//     api.post("/payments/plans/create", payload),

//   getPlans: () =>
//     api.get("/payments/plans"),

//   getPlanById: (planId) =>
//     api.get(`/payments/plans/${planId}`),
// };



import api from "@/api/axios";

export const PlanService = {
  // CREATE PLAN
  createPlan: (payload) =>
    api.post("/payments/plans/create", payload),

  // GET ALL PLANS
  getPlans: () =>
    api.get("/payments/plans"),

  // GET SINGLE PLAN
  getPlanById: (planId) =>
    api.get(`/payments/plans/${planId}`),

  // DELETE PLAN
  deletePlan: (planId) =>
    api.delete(`/payments/plans/${planId}`),

  // ENABLE / DISABLE PLAN
  toggleStatus: (planId, body) =>
    api.patch(`/payments/plans/${planId}/status`, body),
};
