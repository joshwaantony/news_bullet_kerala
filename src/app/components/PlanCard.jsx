// export default function PlanCard({ meta }) {
//   return (
//     <div className="bg-white text-black rounded-2xl shadow-xl p-8 relative">

//       {/* Status */}
//       <div className="absolute top-4 right-4 bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
//         Not Subscribed
//       </div>

//       {/* Name */}
//       <h2 className="text-2xl font-bold">{meta.name}</h2>

//       {/* Price */}
//       <p className="text-4xl font-extrabold text-[#231A15] mt-2">
//         ₹{meta.amount}
//         <span className="text-base font-medium text-gray-600">/{meta.period}</span>
//       </p>

//       <p className="text-gray-600 text-sm mt-1">
//         Billed every {meta.interval} {meta.period}
//       </p>

//       {/* Description */}
//       <p className="text-gray-700 mt-5 text-[15px] leading-relaxed">
//         {meta.description || "No description available"}
//       </p>

//       {/* Subscribe Button */}
//       <button
//         className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-700 
//         text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
//       >
//         Subscribe Now
//       </button>
//     </div>
//   );
// }






// "use client";

// import { useSubscriptionStore } from "@/store/subscriptionStore";
// import toast from "react-hot-toast";

// export default function PlanCard({ meta }) {

//   const { createSubscription, verifyPayment } = useSubscriptionStore();

//   const handleSubscribe = async () => {
//     try {
//       // 1️⃣ CREATE SUBSCRIPTION (CALL BACKEND)
//       const res = await createSubscription({
//         plan_id: meta.razorpayPlanId,  // Razorpay Plan ID
//         total_count: 12,               // 12 months OR change as needed
//         notes: { plan: meta.name },
//       });

//       const subscription = res?.subscription;

//       if (!subscription) {
//         toast.error("Failed to create Razorpay subscription");
//         return;
//       }

//       // 2️⃣ OPEN RAZORPAY CHECKOUT
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         subscription_id: subscription.id,
//         name: "News Bullet Kerala",
//         description: meta.description,
//         image: "/logo.jpg",

//         handler: async function (response) {
//           // 3️⃣ VERIFY PAYMENT
//           try {
//             await verifyPayment({
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_subscription_id: response.razorpay_subscription_id,
//               razorpay_signature: response.razorpay_signature,
//             });

//             toast.success("Subscription Activated!");
//             window.location.href = "/video";
//           } catch (err) {
//             toast.error("Verification Failed");
//           }
//         },

//         theme: { color: "#E87331" },
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.open();

//     } catch (err) {
//       console.error(err);
//       toast.error("Subscription failed");
//     }
//   };

//   return (
//     <div className="bg-white text-black rounded-2xl shadow-xl p-8 relative">

//       {/* Status */}
//       <div className="absolute top-4 right-4 bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
//         Not Subscribed
//       </div>

//       {/* Name */}
//       <h2 className="text-2xl font-bold">{meta.name}</h2>

//       {/* Price */}
//       <p className="text-4xl font-extrabold text-[#231A15] mt-2">
//         ₹{meta.amount}
//         <span className="text-base font-medium text-gray-600">/{meta.period}</span>
//       </p>

//       <p className="text-gray-600 text-sm mt-1">
//         Billed every {meta.interval} {meta.period}
//       </p>

//       {/* Description */}
//       <p className="text-gray-700 mt-5 text-[15px] leading-relaxed">
//         {meta.description || "No description available"}
//       </p>

//       {/* Subscribe Button */}
//       <button
//         onClick={handleSubscribe}
//         className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-700 
//         text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition"
//       >
//         Subscribe Now
//       </button>
//     </div>
//   );
// }


"use client";

import { useSubscriptionStore } from "@/store/subscriptionStore";
import toast from "react-hot-toast";

export default function PlanCard({ meta }) {
  const { createSubscription, loading } = useSubscriptionStore();

  const handleSubscribe = async () => {
    try {
      const payload = {
        plan_id: meta.razorpayPlanId, // ⭐ required by backend
        total_count: 12,              // OR meta.interval if needed
        notes: {
          plan: meta.name,
        },
      };

      const res = await createSubscription(payload);
console.log(res);

      const shortUrl = res?.data.subscription?.short_url;

      if (!shortUrl) {
        toast.error("Payment link missing");
        return;
      }

      // ⭐ redirect user to Razorpay hosted payment page
      window.location.href = shortUrl;
    } catch (err) {
      console.log(err);
      toast.error("Failed to start subscription");
    }
  };

  return (
    <div className="bg-white text-black rounded-2xl shadow-xl p-8 relative">

      {/* Status */}
      <div className="absolute top-4 right-4 bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-semibold">
        Not Subscribed
      </div>

      {/* Name */}
      <h2 className="text-2xl font-bold">{meta.name}</h2>

      {/* Price */}
      <p className="text-4xl font-extrabold text-[#231A15] mt-2">
        ₹{meta.amount}
        <span className="text-base font-medium text-gray-600">/{meta.period}</span>
      </p>

      <p className="text-gray-600 text-sm mt-1">
        Billed every {meta.interval} {meta.period}
      </p>

      {/* Description */}
      <p className="text-gray-700 mt-5 text-[15px] leading-relaxed">
        {meta.description || "No description available"}
      </p>

      {/* Subscribe Button */}
      <button
        onClick={handleSubscribe}
        disabled={loading}
        className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-700 
        text-white py-3 rounded-xl font-semibold shadow-md hover:opacity-90 transition disabled:opacity-50"
      >
        {loading ? "Processing..." : "Subscribe Now"}
      </button>
    </div>
  );
}
