import api from "@/api/axios";

export const SubscriptionService = {
  createSubscription: (payload) =>
    api.post("/payments/subscriptions/create", payload),

  verifySubscription: (payload) =>
    api.post("/payments/subscriptions/verify", payload),

  getUserSubscriptions: () =>
    api.get("/payments/subscriptions/user/all"),

  getSingleSubscription: (id) =>
    api.get(`/payments/subscriptions/${id}`),

  cancelSubscription: (id, body) =>
    api.post(`/payments/subscriptions/${id}/cancel`, body),

  pauseSubscription: (id, body) =>
    api.post(`/payments/subscriptions/${id}/pause`, body),

  resumeSubscription: (id, body) =>
    api.post(`/payments/subscriptions/${id}/resume`, body),
};
