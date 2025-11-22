import api from "@/api/axios";

export const SubscriptionService = {
  createSubscription: (payload) =>
    api.post("/payments/create", payload),

  verifySubscription: (payload) =>
    api.post("/payment/verify", payload),

  getUserSubscriptions: () =>
    api.get("/payments/user/all"),

  getSingleSubscription: (id) =>
    api.get(`/payments/${id}`),

  cancelSubscription: (id, body) =>
    api.post(`/payments/${id}/cancel`, body),

  pauseSubscription: (id, body) =>
    api.post(`/payments/${id}/pause`, body),

  resumeSubscription: (id, body) =>
    api.post(`/payments/${id}/resume`, body),
};
