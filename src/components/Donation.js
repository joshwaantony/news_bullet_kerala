// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";

// export default function Donation() {

//    const router = useRouter();
   
//   const [proceedLoading, setProceedLoading] = useState(false);

//   const [btnLoading, setBtnLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [amount, setAmount] = useState("");
//   const [loading, setLoading] = useState(false);

//   // const startPayment = async () => {
//   //   if (!amount || Number(amount) < 1) {
//   //     console.log("Please enter a valid amount");
//   //     return;
//   //   }

//   //   setProceedLoading(true);

//   //   try {
//   //     // CREATE ORDER
//   //     const orderRes = await fetch(
//   //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/create-order`,
//   //       {
//   //         method: "POST",
//   //         headers: { "Content-Type": "application/json" },
//   //         body: JSON.stringify({ amount: Number(amount) }),
//   //       }
//   //     );

//   //     const orderData = await orderRes.json();
//   //     console.log("ORDER:", orderData);

//   //     if (!orderData.success) {
//   //       console.log("Order creation failed");
//   //       setProceedLoading(false);
//   //       return;
//   //     }

//   //     // RAZORPAY OPTIONS
//   //     const options = {
//   //       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//   //       amount: orderData.data.amount,
//   //       currency: orderData.data.currency,
//   //       order_id: orderData.data.id,
//   //       name: "News Bullet Kerala",
//   //       description: "Donation",
//   //       image: "/logo.jpg",

//   //       // VERIFY AFTER SUCCESS
//   //       handler: async function (response) {
//   //         const verifyRes = await fetch(
//   //           `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/verify`,
//   //           {
//   //             method: "POST",
//   //             headers: { "Content-Type": "application/json" },
//   //             body: JSON.stringify({
//   //               order_id: response.razorpay_order_id,
//   //               payment_id: response.razorpay_payment_id,
//   //               signature: response.razorpay_signature,
//   //             }),
//   //           }
//   //         );

//   //         const verifyData = await verifyRes.json();

//   //         if (verifyData.success) {
//   //           console.log("Payment Successful! ");
//   //         } else {
//   //           console.log("Payment Verification Failed ");
//   //         }

//   //         // NOW close popup
//   //         setShowModal(false);
//   //       },

//   //       theme: { color: "#E87331" },
//   //     };

//   //     const razorpay = new window.Razorpay(options);
//   //     razorpay.open();
//   //   } catch (err) {
//   //     console.error(err);
//   //   }

//   //   setProceedLoading(false);
//   // };


//   const startPayment = async () => {
//     if (!amount || Number(amount) < 1) {
//       console.log("Please enter a valid amount");
//       return;
//     }

//     setProceedLoading(true);

//     try {
//       // CREATE ORDER
//       const orderRes = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/create-order`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ amount: Number(amount) }),
//         }
//       );

//       const orderData = await orderRes.json();
//       console.log("ORDER:", orderData);

//       if (!orderData.success) {
//         console.log("Order creation failed");
//         setProceedLoading(false);
//         return;
//       }

//       // RAZORPAY OPTIONS
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: orderData.data.amount,
//         currency: orderData.data.currency,
//         order_id: orderData.data.id,
//         name: "News Bullet Kerala",
//         description: "Donation",
//         image: "/logo.jpg",

//         // VERIFY AFTER SUCCESS
//         handler: async function (response) {
//           const verifyRes = await fetch(
//             `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/verify`,
//             {
//               method: "POST",
//               headers: { "Content-Type": "application/json" },
//               body: JSON.stringify({
//                 order_id: response.razorpay_order_id,
//                 payment_id: response.razorpay_payment_id,
//                 signature: response.razorpay_signature,
//               }),
//             }
//           );

//           const verifyData = await verifyRes.json();

//           if (verifyData.success) {
//             console.log("Payment Successful!");

//             // 🎉 REDIRECT USER TO /video PAGE
//             router.push("/video");
//           } else {
//             console.log("Payment Verification Failed");
//           }

//           // Close modal
//           setShowModal(false);
//         },

//         theme: { color: "#E87331" },
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     } catch (err) {
//       console.error(err);
//     }

//     setProceedLoading(false);
//   };

//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center px-4 
//       bg-gradient-to-br from-[#E87331] to-[#563D2F] text-white text-center"
//     >
//       {/* Logo */}
//       <img
//         src="/logo.jpg"
//         alt="Logo"
//         className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-6 rounded-full shadow-lg"
//       />

//       {/* Heading */}
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
//         Support News Bullet Kerala!
//       </h1>

//       <p className="text-base sm:text-lg max-w-xl md:max-w-2xl leading-relaxed mb-6 px-2">
//         Your donations help us bring authentic, independent news stories to you.
//       </p>

//       <p className="text-sm sm:text-base max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed mb-10 px-3">
//         At News Bullet Kerala, we connect the logic behind every story. We
//         believe in journalism that empowers you to think critically and stay
//         informed about what truly matters in our community.
//       </p>

//       {/* Donate Button */}
//       <button
//         onClick={() => {
//           setBtnLoading(true);
//           setTimeout(() => {
//             setShowModal(true);
//             setBtnLoading(false);
//           }, 300); // smooth effect
//         }}
//         className="bg-white text-orange-700 font-semibold py-3 rounded-xl shadow-md 
//   hover:bg-gray-100 transition-all w-full max-w-xs"
//       >
//         {btnLoading ? "Loading..." : "Donate & Support"}
//       </button>

//       {/* Continue Without Donating */}
//       <Link
//         href="/video"
//         className="border border-white text-white py-3 rounded-xl mt-4 w-full max-w-xs
//         hover:bg-white hover:text-orange-700 transition-all"
//       >
//         Continue Without Donating
//       </Link>

//       {/* Bottom Small Text */}
//       <p className="mt-8 text-xs opacity-90">
//         You can continue without donating, but your support keeps us
//         independent.
//       </p>

//       {showModal && (
//         <div
//           className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md
//                   animate-fadeIn z-50"
//         >
//           <div
//             className="bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl
//                     rounded-3xl w-80 p-6 relative animate-slideUp"
//           >
//             {/* Close Button */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
//             >
//               ×
//             </button>

//             {/* Title */}
//             <h2 className="text-2xl font-bold mb-2 text-center text-gray-900">
//               Enter Amount
//             </h2>

//             <p className="text-center text-gray-600 text-sm mb-5">
//               Your support helps us continue independent journalism.
//             </p>

//             {/* Input Box */}
//             <div className="mb-5">
//               <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm">
//                 <span className="text-gray-400 text-lg">₹</span>
//                 <input
//                   type="number"
//                   placeholder="100"
//                   value={amount}
//                   onChange={(e) => setAmount(e.target.value)}
//                   className="flex-1 px-3 bg-transparent outline-none text-gray-700 text-lg"
//                 />
//               </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex gap-3">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="w-1/2 py-2 rounded-xl border border-gray-300 text-gray-700 
//                      hover:bg-gray-100 transition-all"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={startPayment}
//                 disabled={proceedLoading}
//                 className="w-1/2 py-2 rounded-xl text-white font-semibold bg-gradient-to-r 
//              from-orange-500 to-orange-700 hover:opacity-90 transition-all shadow-md
//              disabled:opacity-50 disabled:cursor-not-allowed"
//               >
//                 {proceedLoading ? (
//                   <div className="flex items-center justify-center gap-2">
//                     <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//                     Processing…
//                   </div>
//                 ) : (
//                   "Proceed"
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }




// "use client";

// import Link from "next/link";

// export default function Donation() {
  

//   return (
//     <div
//       className="min-h-screen flex flex-col items-center justify-center px-4 
//       bg-gradient-to-br from-[#E87331] to-[#563D2F] text-white text-center"
//     >
//       {/* Logo */}
//       <img
//         src="/logo.jpg"
//         alt="Logo"
//         className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-6 rounded-full shadow-lg"
//       />

//       {/* Heading */}
//       <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
//         Support News Bullet Kerala!
//       </h1>

//       <p className="text-base sm:text-lg max-w-xl md:max-w-2xl leading-relaxed mb-6 px-2">
//         Your donations help us bring authentic, independent news stories to you.
//       </p>

//       <p className="text-sm sm:text-base max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed mb-10 px-3">
//         At News Bullet Kerala, we connect the logic behind every story. We
//         believe in journalism that empowers you to think critically and stay
//         informed about what truly matters in our community.
//       </p>

//       {/* Donate Button */}
//       <Link href={"/"}
       
//         className="bg-white text-orange-700 font-semibold py-3 rounded-xl shadow-md 
//         hover:bg-gray-100 transition-all w-full max-w-xs"
//       >
//         Donate & Support
//       </Link>

//       {/* Continue Without Donating */}
//       <Link
//         href="/video"
//         className="border border-white text-white py-3 rounded-xl mt-4 w-full max-w-xs
//           hover:bg-white hover:text-orange-700 transition-all"
//       >
//         Continue Without Donating
//       </Link>

//       {/* Bottom Text */}
//       <p className="mt-8 text-xs opacity-90">
//         You can continue without donating, but your support keeps us independent.
//       </p>

    
//     </div>
//   );
// }



// "use client";

// import Link from "next/link";

// export default function Donation() {
//   return (
//     <div className="min-h-screen w-full bg-gradient-to-br from-[#E87331] to-[#563D2F] flex flex-col items-center px-4 py-10 text-center text-white">

//       {/* Logo */}
//       <img
//         src="/logo.jpg"
//         alt="Logo"
//         className="w-24 h-24 md:w-28 md:h-28 rounded-full shadow-xl mb-6"
//       />

//       {/* Title */}
//       <h1 className="text-3xl md:text-5xl font-extrabold">
//         News Bullet Kerala Premium
//       </h1>

//       <p className="text-base md:text-lg max-w-2xl mt-3 opacity-90">
//         Get full access to in-depth analysis, exclusive videos and ad-free viewing
//         by subscribing to our premium plan.
//       </p>

//       {/* Subscription Card */}
//       <div className="bg-white text-black w-full max-w-md mt-10 rounded-2xl shadow-xl p-8 relative">

//         {/* Status Badge */}
//         <div className="absolute top-4 right-4 bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
//           Not Subscribed
//         </div>

//         {/* Plan Name */}
//         <h2 className="text-2xl font-bold">Premium Monthly</h2>

//         {/* Price */}
//         <p className="text-4xl font-extrabold text-[#231A15] mt-2">
//           ₹199
//           <span className="text-base font-medium text-gray-600">/monthly</span>
//         </p>

//         <p className="text-gray-600 text-sm mt-1">Billed every 1 monthly.</p>

//         {/* Description */}
//         <p className="text-gray-700 mt-5 text-[15px] leading-relaxed">
//           Subscribe now to unlock premium features and support independent journalism.
//         </p>

//         {/* Subscribe Button */}
//         <button
//           className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-700 text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
//         >
//           Subscribe Now
//         </button>
//       </div>

//       {/* Continue Without Subscription */}
//       <Link
//         href="/video"
//         className="border border-white text-white py-3 rounded-xl mt-10 w-full max-w-md
//         hover:bg-white hover:text-orange-700 transition-all font-medium"
//       >
//         Continue Without Subscription
//       </Link>

//       {/* Bottom Text */}
//       <p className="text-xs mt-5 max-w-md opacity-90 text-center">
//         Your subscription keeps News Bullet Kerala independent and ad-free.
//         You can still continue without subscribing.
//       </p>
//     </div>
//   );
// }




// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import api from "@/api/axios";

// export default function PremiumPlansPage() {
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const getPlans = async () => {
//     try {
//       const res = await api.get("/payments/plans"); // ⭐ Backend call
//       setPlans(res.data.data || []);                // Save plans in state
//     } catch (err) {
//       console.log("Error fetching plans", err);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     getPlans();
//   }, []);

//   return (
//     <div
//       className="min-h-screen w-full bg-gradient-to-br from-[#E87331] to-[#563D2F] 
//       flex flex-col items-center px-4 py-10 text-center text-white"
//     >
//       {/* Logo */}
//       <img
//         src="/logo.jpg"
//         alt="Logo"
//         className="w-24 h-24 md:w-28 md:h-28 rounded-full shadow-xl mb-6"
//       />

//       {/* Title */}
//       <h1 className="text-3xl md:text-5xl font-extrabold">
//         News Bullet Kerala Premium
//       </h1>

//       <p className="text-base md:text-lg max-w-2xl mt-3 opacity-90">
//         Get full access to in-depth analysis, exclusive videos and ad-free
//         viewing by subscribing to our premium plans.
//       </p>

//       {/* Loading */}
//       {loading && (
//         <p className="text-white/90 mt-10">Loading Plans...</p>
//       )}

//       {/* Plans Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full max-w-3xl">
//         {plans?.map((plan) => (
//           <div
//             key={plan._id}
//             className="bg-white text-black rounded-2xl shadow-xl p-8 relative"
//           >
//             {/* Status Badge */}
//             <div className="absolute top-4 right-4 bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
//               Not Subscribed
//             </div>

//             {/* Plan Name */}
//             <h2 className="text-2xl font-bold">{plan.item.name}</h2>

//             {/* Price */}
//             <p className="text-4xl font-extrabold text-[#231A15] mt-2">
//               ₹{plan.item.unit_amount}
//               <span className="text-base font-medium text-gray-600">
//                 /{plan.period}
//               </span>
//             </p>

//             <p className="text-gray-600 text-sm mt-1">
//               Billed every {plan.interval} {plan.period}.
//             </p>

//             {/* Description */}
//             <p className="text-gray-700 mt-5 text-[15px] leading-relaxed">
//               {plan.item.description || "No description available"}
//             </p>

//             {/* Subscribe Button */}
//             <button
//               className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-700 
//               text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 
//               transition"
//             >
//               Subscribe Now
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Continue Without Subscription */}
//       <Link
//         href="/video"
//         className="border border-white text-white py-3 rounded-xl mt-10 w-full max-w-md
//         hover:bg-white hover:text-orange-700 transition-all font-medium"
//       >
//         Continue Without Subscription
//       </Link>

//       {/* Bottom Text */}
//       <p className="text-xs mt-5 max-w-md opacity-90 text-center">
//         Your subscription keeps News Bullet Kerala independent and ad-free.
//         You can still continue without subscribing.
//       </p>
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import api from "@/api/axios";

// export default function PremiumPlansPage() {
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const getPlans = async () => {
//     try {
//       const res = await api.get("/payments/plans"); 
//       setPlans(res.data.data || []);  // data = [{ meta, razorpay }]
//     } catch (err) {
//       console.log("Error fetching plans", err);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     getPlans();
//   }, []);

//   return (
//     <div
//       className="min-h-screen w-full bg-gradient-to-br from-[#E87331] to-[#563D2F] 
//       flex flex-col items-center px-4 py-10 text-center text-white"
//     >
//       {/* Logo */}
//       <img
//         src="/logo.jpg"
//         alt="Logo"
//         className="w-24 h-24 md:w-28 md:h-28 rounded-full shadow-xl mb-6"
//       />

//       {/* Title */}
//       <h1 className="text-3xl md:text-5xl font-extrabold">
//         News Bullet Kerala Premium
//       </h1>

//       <p className="text-base md:text-lg max-w-2xl mt-3 opacity-90">
//         Get full access to in-depth analysis, exclusive videos and ad-free
//         viewing by subscribing to our premium plans.
//       </p>

//       {loading && <p className="text-white/90 mt-10">Loading Plans...</p>}

//       {/* Plans List */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full max-w-3xl">
//         {plans?.map((plan) => {
//           const meta = plan.meta; // ⭐ use only meta

//           return (
//             <div
//               key={meta._id}
//               className="bg-white text-black rounded-2xl shadow-xl p-8 relative"
//             >
//               {/* Status */}
//               <div className="absolute top-4 right-4 bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
//                 Not Subscribed
//               </div>

//               {/* Plan Name */}
//               <h2 className="text-2xl font-bold">{meta.name}</h2>

//               {/* Price */}
//               <p className="text-4xl font-extrabold text-[#231A15] mt-2">
//                 ₹{meta.amount}
//                 <span className="text-base font-medium text-gray-600">
//                   /{meta.period}
//                 </span>
//               </p>

//               <p className="text-gray-600 text-sm mt-1">
//                 Billed every {meta.interval} {meta.period}
//               </p>

//               {/* Description */}
//               <p className="text-gray-700 mt-5 text-[15px] leading-relaxed">
//                 {meta.description || "No description available"}
//               </p>

//               {/* Subscribe Button */}
//               <button
//                 className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-700 
//                 text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 
//                 transition"
//               >
//                 Subscribe Now
//               </button>
//             </div>
//           );
//         })}
//       </div>

//       {/* Continue Without Subscription */}
//       <Link
//         href="/video"
//         className="border border-white text-white py-3 rounded-xl mt-10 w-full max-w-md
//           hover:bg-white hover:text-orange-700 transition-all font-medium"
//       >
//         Continue Without Subscription
//       </Link>

//       {/* Bottom Text */}
//       <p className="text-xs mt-5 max-w-md opacity-90 text-center">
//         Your subscription keeps News Bullet Kerala independent and ad-free.
//         You can still continue without subscribing.
//       </p>
//     </div>
//   );
// }




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
          <PlanCard key={plan.meta._id} meta={plan.meta} />
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
