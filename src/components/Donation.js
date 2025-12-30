"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePlanStore } from "@/store/planStore";
import PlanCard from "./PlanCard";

export default function Donation() {
  const { plans, loading, getPlans } = usePlanStore();

  useEffect(() => {
    getPlans();
  }, []);

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-[#E87331] to-[#563D2F] 
      flex flex-col items-center px-4 py-10 text-center text-white"
    >
      {/* Logo */}
      <img
        src="/logo.jpg"
        className="w-24 h-24 md:w-28 md:h-28 rounded-full shadow-xl mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold">
        News Bullet Kerala Premium
      </h1>

      <p className="text-base md:text-lg max-w-2xl mt-3 opacity-90">
        Get full access to exclusive journalism & ad-free viewing.
      </p>

      {loading && <p className="mt-6 text-white/90">Loading plans...</p>}

      {/* Plans */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full max-w-3xl">
        {plans?.map((plan) => (
          <PlanCard key={plan.razorpay?.id || plan.meta?._id} plan={plan} />
        ))}
      </div>

      {/* Continue Without Subscription */}
      <Link
        href="/video"
        className="border border-white text-white py-3 rounded-xl mt-10 w-full max-w-md
        hover:bg-white hover:text-orange-700 transition-all font-medium"
      >
        Continue Without Subscription
      </Link>

      <p className="text-xs mt-5 max-w-md opacity-90">
        Your subscription keeps News Bullet Kerala independent and ad-free.
      </p>
    </div>
  );
}
