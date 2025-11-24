import React from "react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#FFFDFB]">
     
    

      <main className="flex flex-col items-center py-12 px-4">
        <section className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 pt-7"
          style={{ boxShadow: "0 4px 44px #E8D8C5" }}>
          <h1 className="text-4xl font-bold text-[#FF9132] mb-3">My Profile</h1>
          <p className="text-[#73695A] text-lg mb-7">Manage your account and subscription</p>
          
          <div className="bg-[#FFF8F2] rounded-xl border-t-4 border-[#FF9132] px-6 py-8">
            {/* Subscription Heading */}
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-2xl text-[#2E211A]">Subscription Status</span>
              <span className="bg-[#FF9132] text-white font-bold px-5 py-1 rounded-full text-[17px]">ACTIVE</span>
            </div>
            <p className="text-[#73695A] mb-6 text-[15px]">Manage your News Bullet Kerala membership</p>

            {/* Current Plan */}
            <div className="flex items-center bg-[#F9F6F3] rounded-lg border border-[#F3ECDF] p-5 w-full mb-6">
              <div className="h-12 w-12 rounded-full bg-[#EFA265] flex items-center justify-center mr-5">
                <span className="font-bold text-white text-lg">G</span>
              </div>
              <div>
                <span className="font-bold text-lg text-[#222]">Current Plan</span>
                <div className="text-[#73695A] text-[16px]">gastlyaxom768@gmail.com</div>
              </div>
            </div>

            {/* Plan Type */}
            <div className="mb-6">
              <div className="mb-1 text-[#73695A] text-[15px]">Plan Type</div>
              <div className="bg-gradient-to-b from-[#FFFDFB] to-[#FFF0E2] border border-[#F3ECDF] rounded-lg px-5 py-3 text-[#FF9132] font-bold text-[18px] w-fit lowercase">free</div>
            </div>

            {/* Pause/Cancel Buttons */}
            <div className="flex gap-4 mb-6">
              <button className="flex-1 flex items-center justify-center border border-[#F3ECDF] bg-white py-3 rounded-lg font-semibold text-[#73695A] hover:bg-[#F7E6D5] transition">
                <span className="mr-2 text-xl">⏸</span> Pause
              </button>
              <button className="flex-1 flex items-center justify-center bg-[#FF4747] hover:bg-[#e63f3f] py-3 rounded-lg font-semibold text-white transition">
                <span className="mr-2 text-xl">✖</span> Cancel
              </button>
            </div>
            {/* View All Plans */}
            <button className="w-full border border-[#222] text-[#222] py-3 rounded-lg font-semibold text-lg bg-white hover:bg-[#F9F6F3] transition">
              View All Plans
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
