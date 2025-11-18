// import React from "react";
// import Navbar from "../components/Navbar";

// function page() {
//   return <div>
//     <Navbar/>
//         <div className=" min-h-screen flex flex-col items-center justify-center px-4 
//       bg-gradient-to-br from-[#E87331] to-[#563D2F] text-white text-center">

//       {/* Logo */}
//       <img
//         src="/logo.jpg"
//         alt="Logo"
//         className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-6 rounded-full"
//       />

//       {/* Heading */}
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
//         Support News Bullet Kerala!
//       </h1>

//       {/* Subheading */}
//       <p className="text-base sm:text-lg max-w-xl md:max-w-2xl leading-relaxed mb-6 px-2">
//         Your donations help us bring authentic, independent news stories to you.
//       </p>

//       {/* Description */}
//       <p className="text-sm sm:text-base max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed mb-10 px-3">
//         At News Bullet Kerala, we connect the logic behind every story.
//         We believe in journalism that empowers you to think critically and stay
//         informed about what truly matters in our community.
//       </p>

//       {/* Buttons */}
//       <div className="flex flex-col gap-4 w-full max-w-xs sm:max-w-md">
//         {/* Donate button */}
//         <button className="bg-white text-orange-700 font-semibold py-3 rounded-xl shadow-md 
//           hover:bg-gray-100 transition-all">
//           Donate & Support
//         </button>

  
//       </div>

//       {/* Bottom small text */}
//       <p className="mt-8 text-xs sm:text-sm opacity-90 px-2 max-w-sm">
//         You can continue without donating, but your support keeps us independent.
//       </p>
//     </div>
   
//   </div>;
// }

// export default page;



"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Script from "next/script";

export default function Page() {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const startPayment = async () => {
    if (!amount || Number(amount) < 1) {
      alert("Please enter a valid amount");
      return;
    }

    setShowModal(false);
    setLoading(true);

    try {
      // 1️⃣ Create order from backend
      const orderRes = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/create-order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: Number(amount) }),
        }
      );

      const orderData = await orderRes.json();
      console.log("ORDER:", orderData);

      if (!orderData.success) {
        alert("Order creation failed");
        setLoading(false);
        return;
      }

      // 2️⃣ Razorpay Options
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.data.amount,
        currency: orderData.data.currency,
        name: "News Bullet Kerala",
        description: "Donation",
        order_id: orderData.data.id,
        image: "/logo.jpg",

        handler: async function (response) {
          // 3️⃣ Verify
          const verifyRes = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/verify`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                order_id: response.razorpay_order_id,
                payment_id: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            }
          );

          const verifyData = await verifyRes.json();
          if (verifyData.success) alert("Payment Successful! 🎉");
          else alert("Payment Verification Failed ❌");
        },

        theme: {
          color: "#E87331",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error(err);
      alert("Error processing payment");
    }

    setLoading(false);
  };

  return (
    <div>
      {/* Load Razorpay Script */}
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <Navbar />

      {/* MAIN PAGE */}
      <div className="min-h-screen flex flex-col items-center justify-center px-4 
        bg-gradient-to-br from-[#E87331] to-[#563D2F] text-white text-center">

        {/* Logo */}
        <img
          src="/logo.jpg"
          alt="Logo"
          className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-6 rounded-full"
        />

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
          Support News Bullet Kerala!
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg max-w-xl md:max-w-2xl mb-6 px-2">
          Your donations help us bring authentic, independent news stories to you.
        </p>

        {/* Description */}
        <p className="text-sm sm:text-base max-w-md md:max-w-2xl mb-10 px-3 opacity-90">
          At News Bullet Kerala, we connect the logic behind every story — 
          empowering people to think critically.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-4 w-full max-w-xs sm:max-w-md">

          {/* Donate button */}
          <button
            onClick={() => setShowModal(true)}
            className="bg-white text-orange-700 font-semibold py-3 rounded-xl shadow-md hover:bg-gray-100 transition-all"
          >
            {loading ? "Processing..." : "Donate & Support"}
          </button>

        </div>

        {/* Small Text */}
        <p className="mt-8 text-xs opacity-90 max-w-sm">
          You can continue without donating, but your support keeps us independent.
        </p>
      </div>

      {/* MODAL (Premium UI) */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md z-50 animate-fadeIn">

          <div className="bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl
                          rounded-3xl w-80 p-6 relative animate-slideUp">

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2 text-center text-gray-900">
              Enter Amount
            </h2>

            <p className="text-center text-gray-600 text-sm mb-5">
              Your support helps us continue independent journalism.
            </p>

            {/* Input Box */}
            <div className="mb-5">
              <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
                <span className="text-gray-400 text-lg">₹</span>
                <input
                  type="number"
                  placeholder="100"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="flex-1 px-3 bg-transparent outline-none text-gray-700 text-lg"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="w-1/2 py-2 rounded-xl border border-gray-300 
                           text-gray-700 hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                onClick={startPayment}
                className="w-1/2 py-2 rounded-xl text-white font-semibold bg-gradient-to-r 
                           from-orange-500 to-orange-700 hover:opacity-90 transition shadow-md"
              >
                Proceed
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
