import { create } from "zustand";
import { SubscriptionService } from "@/api/payments/subscriptionService";
import toast from "react-hot-toast";

export const useSubscriptionStore = create((set) => ({
  subscriptions: [],
  singleSubscription: null,
  loading: false,
  error: null,

  // CREATE SUBSCRIPTION → payment link or Razorpay checkout
  createSubscription: async (payload) => {
    set({ loading: true });
    try {
      const res = await SubscriptionService.createSubscription(payload);
      return res.data;
    } catch (err) {
      toast.error("Failed to create subscription");
      throw err;
    } finally {
      set({ loading: false });
    }
  },

  // VERIFY PAYMENT
  verifyPayment: async (payload) => {
    try {
      const res = await SubscriptionService.verifySubscription(payload);
      toast.success("Payment Verified!");
      return res.data;
    } catch (err) {
      toast.error("Verification Failed");
      throw err;
    }
  },

  // GET USER SUBSCRIPTIONS
  getUserSubscriptions: async () => {
    set({ loading: true });
    try {
      const res = await SubscriptionService.getUserSubscriptions();
      set({ subscriptions: res.data.data });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  // GET SINGLE SUB
  getSubscriptionById: async (id) => {
    set({ loading: true });
    try {
      const res = await SubscriptionService.getSingleSubscription(id);
      set({ singleSubscription: res.data.data });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  // CANCEL
  cancelSubscription: async (id, body) => {
    try {
      const res = await SubscriptionService.cancelSubscription(id, body);
      toast.success("Subscription cancelled");
      return res.data;
    } catch (err) {
      toast.error("Cancel failed");
      throw err;
    }
  },

  // PAUSE
  pauseSubscription: async (id, body) => {
    try {
      const res = await SubscriptionService.pauseSubscription(id, body);
      toast.success("Subscription paused");
      return res.data;
    } catch (err) {
      toast.error("Pause failed");
      throw err;
    }
  },

  // RESUME
  resumeSubscription: async (id, body) => {
    try {
      const res = await SubscriptionService.resumeSubscription(id, body);
      toast.success("Subscription resumed");
      return res.data;
    } catch (err) {
      toast.error("Resume failed");
      throw err;
    }
  },
}));
