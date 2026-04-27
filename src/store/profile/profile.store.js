import { create } from "zustand";
import { getMeApi } from "@/api/auth/authApi";
import { SubscriptionService } from "@/api/payments/subscriptionService";

export const useProfileStore = create((set) => ({
  user: null,
  subscriptions: [],
  loading: false,
  error: null,

  fetchProfile: async () => {
    try {
      set({ loading: true, error: null });

      const [userRes, subRes] = await Promise.all([
        getMeApi(), // ✅ already returns user object
        SubscriptionService.getUserSubscriptions(), // ❌ axios response
      ]);

      set({
        user: userRes,                    // ✅ user object
        subscriptions: subRes.data.data, // ✅ extracted HERE
        loading: false,
      });
    } catch (err) {
      console.error("Profile fetch failed:", err);
      set({
        loading: false,
        error: "Failed to load profile",
      });
    }
  },
}));
