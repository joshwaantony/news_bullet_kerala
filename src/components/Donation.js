// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePlanStore } from "@/store/planStore";
// import { SubscriptionService } from "@/api/payments/subscriptionService";
// import PlanCard from "./PlanCard";

// export default function Donation() {
//   const { plans, loading, getPlans } = usePlanStore();
//   const [subscriptions, setSubscriptions] = useState([]);

//   useEffect(() => {
//     getPlans();
//     SubscriptionService.getUserSubscriptions()
//       .then((res) => {
//         setSubscriptions(res.data.data || []);
//       })
//       .catch(() => {
//         setSubscriptions([]);
//       });
//   }, []);

//   return (
//     <div
//       className="min-h-screen w-full bg-gradient-to-br from-[#E87331] to-[#563D2F] 
//       flex flex-col items-center px-4 py-10 text-center text-white"
//     >
//       {/* Logo */}
//       <img
//         src="/logo.jpg"
//         className="w-24 h-24 md:w-28 md:h-28 rounded-full shadow-xl mb-6"
//       />

//       {/* Title */}
//       <h1 className="text-3xl md:text-5xl font-extrabold">
//         News Bullet Kerala Premium
//       </h1>

//       <p className="text-base md:text-lg max-w-2xl mt-3 opacity-90">
//         Get full access to exclusive journalism & ad-free viewing.
//       </p>

//       {loading && <p className="mt-6 text-white/90">Loading plans...</p>}

//       {/* Plans */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full max-w-3xl">
//         {plans?.map((plan) => (
//           <PlanCard
//             key={plan.razorpay?.id || plan.meta?._id}
//             plan={plan}
//             subscriptions={subscriptions}
//           />
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

//       <p className="text-xs mt-5 max-w-md opacity-90">
//         Your subscription keeps News Bullet Kerala independent and ad-free.
//       </p>
//     </div>
//   );
// }
// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { usePlanStore } from "@/store/planStore";
// import { SubscriptionService } from "@/api/payments/subscriptionService";
// import PlanCard from "./PlanCard";

// export default function Donation() {
//   const router = useRouter();
//   const { plans, loading, getPlans } = usePlanStore();
//   const [subscriptions, setSubscriptions] = useState([]);
//   const [checking, setChecking] = useState(true); // ⬅️ important

//   useEffect(() => {
//     const init = async () => {
//       try {
//         await getPlans();

//         const res = await SubscriptionService.getUserSubscriptions();
//         const subs = res?.data?.data || [];
//         setSubscriptions(subs);

//         // ✅ CHECK IF USER IS ALREADY SUBSCRIBED
//         const isSubscribed = subs.some((sub) =>
//           ["active", "authenticated", "pending"].includes(sub.status)
//         );

//         if (isSubscribed) {
//           router.replace("/video"); // 🔥 redirect immediately
//           return;
//         }
//       } catch (err) {
//         setSubscriptions([]);
//       } finally {
//         setChecking(false);
//       }
//     };

//     init();
//   }, [getPlans, router]);

//   // ⛔ Prevent UI flicker while checking
//   if (checking) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-[#E87331] to-[#563D2F]">
//         Checking subscription…
//       </div>
//     );
//   }

//   return (
//     <div
//       className="min-h-screen w-full bg-gradient-to-br from-[#E87331] to-[#563D2F] 
//       flex flex-col items-center px-4 py-10 text-center text-white"
//     >
//       {/* Logo */}
//       <img
//         src="/logo.jpg"
//         className="w-24 h-24 md:w-28 md:h-28 rounded-full shadow-xl mb-6"
//         alt="News Bullet Kerala"
//       />

//       {/* Title */}
//       <h1 className="text-3xl md:text-5xl font-extrabold">
//         News Bullet Kerala Premium
//       </h1>

//       <p className="text-base md:text-lg max-w-2xl mt-3 opacity-90">
//         Get full access to exclusive journalism & ad-free viewing.
//       </p>

//       {loading && <p className="mt-6 text-white/90">Loading plans...</p>}

//       {/* Plans */}
//       {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 w-full max-w-3xl">
//         {plans?.map((plan) => (
//           <PlanCard
//             key={plan.razorpay?.id || plan.meta?._id}
//             plan={plan}
//             subscriptions={subscriptions}
//           />
//         ))}
//       </div> */}

//       <div
//   className={`
//     mt-10 w-full max-w-3xl
//     ${
//       plans?.length === 1
//         ? "flex justify-center"
//         : "grid grid-cols-1 md:grid-cols-2 gap-8"
//     }
//   `}
// >
//   {plans?.map((plan) => (
//     <PlanCard
//       key={plan.razorpay?.id || plan.meta?._id}
//       plan={plan}
//       subscriptions={subscriptions}
//     />
//   ))}
// </div>


//       {/* Continue Without Subscription */}
//       <Link
//         href="/video"
//         className="border border-white text-white py-3 rounded-xl mt-10 w-full max-w-md
//         hover:bg-white hover:text-orange-700 transition-all font-medium"
//       >
//         Continue Without Subscription
//       </Link>

//       <p className="text-xs mt-5 max-w-md opacity-90">
//         Your subscription keeps News Bullet Kerala independent and ad-free.
//       </p>
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePlanStore } from "@/store/planStore";
import { SubscriptionService } from "@/api/payments/subscriptionService";
import PlanCard from "./PlanCard";

export default function Donation() {
  const router = useRouter();
  const { plans, loading, getPlans } = usePlanStore();

  const [subscriptions, setSubscriptions] = useState([]);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        await getPlans();

        const res = await SubscriptionService.getUserSubscriptions();
        const subs = res?.data?.data || [];
        setSubscriptions(subs);

        const isSubscribed = subs.some((sub) =>
          ["active", "authenticated", "pending"].includes(sub.status)
        );

        if (isSubscribed) {
          router.replace("/video"); // 🔥 HARD redirect
          return;
        }
      } catch (err) {
        setSubscriptions([]);
      } finally {
        setChecking(false);
      }
    };

    init();
  }, [getPlans, router]);

  // ⛔ Prevent flicker
  if (checking) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white
        bg-gradient-to-br from-[#E87331] to-[#563D2F]">
        Checking subscription…
      </div>
    );
  }

  const isSubscribed = subscriptions.some((sub) =>
    ["active", "authenticated", "pending"].includes(sub.status)
  );

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-[#E87331] to-[#563D2F]
      flex flex-col items-center px-4 py-10 text-center text-white"
    >
      {/* Logo */}
      <img
        src="/logo.jpg"
        className="w-24 h-24 md:w-28 md:h-28 rounded-full shadow-xl mb-6"
        alt="News Bullet Kerala"
      />

      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-extrabold">
        News Bullet Kerala Premium
      </h1>

      <p className="text-base md:text-lg max-w-2xl mt-3 opacity-90">
        Get full access to exclusive journalism & ad-free viewing.
      </p>

      {loading && (
        <p className="mt-6 text-white/90">Loading plans...</p>
      )}

      {/* Plans */}
      <div
        className={`
          mt-10 w-full max-w-3xl
          ${
            plans?.length === 1
              ? "flex justify-center"
              : "grid grid-cols-1 md:grid-cols-2 gap-8"
          }
        `}
      >
        {plans?.map((plan) => (
          <PlanCard
            key={plan.razorpay?.id || plan.meta?._id}
            plan={plan}
            subscriptions={subscriptions}
          />
        ))}
      </div>

      {/* Continue Without Subscription */}
      {!isSubscribed && (
        <Link
          href="/video"
          className="border border-white text-white py-3 rounded-xl mt-10
          w-full max-w-md hover:bg-white hover:text-orange-700
          transition-all font-medium"
        >
          Continue Without Subscription
        </Link>
      )}

      <p className="text-xs mt-5 max-w-md opacity-90">
        Your subscription keeps News Bullet Kerala independent and ad-free.
      </p>

      {/* Legal Links - Required for Razorpay */}
      <div className="mt-8 text-xs text-white/80 max-w-md">
        <p className="mb-2">By subscribing, you agree to our:</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/terms" className="underline hover:text-white transition">
            Terms & Conditions
          </Link>
          <span className="text-white/60">|</span>
          <Link href="/privacy" className="underline hover:text-white transition">
            Privacy Policy
          </Link>
          <span className="text-white/60">|</span>
          <Link href="/refund" className="underline hover:text-white transition">
            Refund Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
