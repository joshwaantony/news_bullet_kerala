"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { SubscriptionService } from "@/api/payments/subscriptionService";

export default function PlanCard({ plan, subscriptions = [] }) {
  const [loading, setLoading] = useState(false);

  const meta = plan.meta || {};
  const planId = plan.razorpay?.id;

  // ✅ SOURCE OF TRUTH
  const isSubscribed = subscriptions.some(
    (sub) =>
      sub.planId === planId &&
      ["active", "authenticated", "pending"].includes(sub.status)
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
        description: meta.description,
        handler: () => {
          // Webhooks handle activation
          window.location.href = "/video";
        },
        theme: { color: "#E87331" },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error(err);
      toast.error("Failed to start subscription");
    } finally {
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
