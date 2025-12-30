"use client";

import { useState } from "react";
import { SubscriptionService } from "../api/payments/subscriptionService";
import toast from "react-hot-toast";

export default function PlanCard({ plan }) {
  const [loading, setLoading] = useState(false);

  // Extract meta and ID
  const meta = plan.meta || {};
  const planId = plan.razorpay?.id; 

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
      
      // Access nested subscription object
      // backend returns { success: true, data: { subscription: { ... } } }
      const subscription = res?.data?.data?.subscription;

      if (!subscription?.id) {
        toast.error("Failed to create subscription: ID missing");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        subscription_id: subscription.id,
        name: "News Bullet Kerala",
        description: meta.description,
        image: "/logo.jpg",
        handler: function () {
            // DO NOT verify here - Webhooks handle activation
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
    <div className="bg-white rounded-2xl shadow-xl p-6 relative flex flex-col items-center text-center text-black">
      {/* Status Badge */}
      <div className="absolute top-4 right-4 bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
        Premium
      </div>

      <h2 className="text-xl font-bold mt-4">{meta.name}</h2>

      <p className="text-3xl font-extrabold mt-2 text-[#231A15]">
        ₹{meta.amount}
        <span className="text-base text-gray-500 font-medium">/{meta.period}</span>
      </p>

      <p className="text-sm text-gray-600 mt-1">
        Billed every {meta.interval} {meta.period}
      </p>

      <p className="text-gray-700 mt-4 leading-relaxed text-sm px-2">
        {meta.description || "Unlock premium access to all content."}
      </p>

      <button
        onClick={handleSubscribe}
        disabled={loading}
        className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-700 text-white py-3 rounded-xl font-semibold shadow-md hover:from-orange-600 hover:to-orange-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Processing..." : "Subscribe Now"}
      </button>
    </div>
  );
}
