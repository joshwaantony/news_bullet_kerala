
"use client";

import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useProfileStore } from "@/store/profile/profile.store";

export default function ProfilePage() {
  const { user, subscriptions, loading, fetchProfile } =
    useProfileStore();

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  // ✅ SAFE GUARD (MOST IMPORTANT FIX)
  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFDFB]">
        Loading profile…
      </div>
    );
  }

  // ✅ ACTIVE SUBSCRIPTION LOGIC
  const activeSub = subscriptions.find((sub) =>
    ["authenticated", "active"].includes(sub.status)
  );

  const status = activeSub ? "Active" : "Free";
  const planType = activeSub?.notes?.plan || "Free";
  const expiry = activeSub
    ? new Date(activeSub.endAt).toDateString()
    : "Unlimited";

  return (
    <div className="min-h-screen bg-[#FFFDFB]">
      <Navbar />

      <main className="flex justify-center py-10 px-4 sm:px-6">
        <section
          className="w-full max-w-xl sm:max-w-2xl bg-white rounded-2xl shadow-xl p-6 sm:p-8"
          style={{ boxShadow: "0 6px 48px #E8D8C5" }}
        >
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#FF9132]">
              My Profile
            </h1>
            <p className="text-[#73695A] text-base sm:text-lg mt-2">
              Account & subscription details
            </p>
          </div>

          {/* Profile Card */}
          <div className="bg-gradient-to-b from-[#FFF8F2] to-[#FFFDFB]
            rounded-2xl border border-[#F3ECDF] p-6 sm:p-8">

            {/* Status */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg sm:text-xl font-semibold text-[#2E211A]">
                Subscription Status
              </span>

              <span
                className={`inline-flex items-center gap-2 font-semibold
                px-4 py-1.5 rounded-full text-sm
                ${
                  status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-700"
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    status === "Active"
                      ? "bg-green-500"
                      : "bg-orange-500"
                  }`}
                />
                {status}
              </span>
            </div>

            {/* User Info */}
            <div className="flex items-center gap-4 bg-white rounded-xl
              border border-[#F3ECDF] p-4 sm:p-5 mb-6">

              <div className="h-12 w-12 rounded-full
                bg-gradient-to-br from-[#FF9132] to-[#E97A18]
                flex items-center justify-center text-white
                font-bold text-lg">
                {user.email?.charAt(0).toUpperCase()}
              </div>

              <div>
                <p className="font-semibold text-[#222] text-base sm:text-lg">
                  Account Email
                </p>
                <p className="text-[#73695A] text-sm sm:text-[15px]">
                  {user.email}
                </p>
              </div>
            </div>

            {/* Plan Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white border border-[#F3ECDF]
                rounded-xl p-4">
                <p className="text-[#73695A] text-sm mb-1">
                  Plan Type
                </p>
                <p className="font-bold text-[#FF9132] text-lg lowercase">
                  {planType}
                </p>
              </div>

              <div className="bg-white border border-[#F3ECDF]
                rounded-xl p-4">
                <p className="text-[#73695A] text-sm mb-1">
                  Valid Until
                </p>
                <p className="font-semibold text-[#222] text-base">
                  {expiry}
                </p>
              </div>
            </div>

            <div className="mt-6 text-center text-sm text-[#9C8F7F]">
              {status === "Active"
                ? "Thank you for being a premium subscriber."
                : "You are currently on a free plan."}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
