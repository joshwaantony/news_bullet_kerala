
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { SubscriptionService } from "@/api/payments/subscriptionService";
import { useAuthStore } from "@/store/authStore";

export default function PlanCard({ plan, subscriptions = [] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // ✅ Get user from auth store
  const { user } = useAuthStore();
  

  const meta = plan.meta || {};
  const planId = plan.razorpay?.id;

  // ✅ SOURCE OF TRUTH
  const isSubscribed = subscriptions.some(
    (sub) =>
      sub.planId === planId &&
      ["active", "authenticated", "pending"].includes(sub.status),
  );

  const handleSubscribe = async () => {
    if (!planId) {
      toast.error("Invalid Plan ID");
      return;
    }

    try {
      setLoading(true);

      const payload = {
        plan_id: planId,
        total_count: meta.period === "monthly" ? 12 : 1,
        notes: { plan: meta.name },
      };

      const res = await SubscriptionService.createSubscription(payload);
      const subscription = res?.data?.data?.subscription;

      if (!subscription?.id) {
        toast.error("Subscription creation failed");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        subscription_id: subscription.id,
        name: "News Bullet Kerala",
        description: meta.description || `Subscribe to ${meta.name}`,

        // ✅ PREFILL USER DETAILS (PHONE SENT 🔥)
        prefill: {
          name: user?.name || user?.fullName || "",
          email: user?.email || "",
          contact: user?.phone || "", // 👈 PHONE NUMBER
        },

        theme: { color: "#E87331" },

        handler: function () {
          toast.success("Subscription activated! Redirecting to videos...");
          setLoading(false);
          setTimeout(() => router.push("/video"), 1000);
        },

        modal: {
          ondismiss: function () {
            toast.error("Payment cancelled");
            setLoading(false);
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.on("payment.failed", function () {
        toast.error("Payment failed. Please try again.");
        setLoading(false);
      });

      razorpay.open();
    } catch (err) {
      console.error(err);
      toast.error("Failed to start subscription");
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 relative text-black">
      {/* Status badge */}
      {isSubscribed && (
        <div className="absolute top-4 right-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold">
          Subscribed
        </div>
      )}

      <h2 className="text-xl font-bold mt-2">{meta.name}</h2>

      <p className="text-3xl font-extrabold mt-2">
        ₹{meta.amount}
        <span className="text-base text-gray-500">/{meta.period}</span>
      </p>

      <p className="text-sm text-gray-600 mt-1">
        Billed every {meta.interval} {meta.period}
      </p>

      <p className="text-gray-700 mt-4 text-sm">
        {meta.description || "Unlock premium access"}
      </p>

      <button
        onClick={handleSubscribe}
        disabled={loading || isSubscribed}
        className={`w-full mt-6 py-3 rounded-xl font-semibold transition
          ${
            isSubscribed
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-orange-600 text-white hover:bg-orange-700"
          }`}
      >
        {isSubscribed
          ? "Already Subscribed"
          : loading
            ? "Processing..."
            : "Subscribe Now"}
      </button>
    </div>
  );
}
