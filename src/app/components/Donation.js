// import Link from "next/link";

// export default function Donation() {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center px-4
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

//         {/* Outline button */}
//         <Link href={"/video"} className="border border-white text-white py-3 rounded-xl font-semibold
//           hover:bg-white hover:text-orange-700 transition-all">
//           Continue Without Donating
//         </Link>
//       </div>

//       {/* Bottom small text */}
//       <p className="mt-8 text-xs sm:text-sm opacity-90 px-2 max-w-sm">
//         You can continue without donating, but your support keeps us independent.
//       </p>
//     </div>
//   );
// }

// "use client";

// import Link from "next/link";

// export default function Donation() {
//   const handleDonate = async () => {

//     // STEP 1: Create order from your backend
//     const orderRes = await fetch("https://72t09sg9-3000.inc1.devtunnels.ms/api/v1/payments/create-order", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ amount: 100 }),
//     });

//     const order = await orderRes.json();

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//       amount: order.amount,
//       currency: "INR",
//       name: "News Bullet Kerala",
//       description: "Donation",
//       image: "/logo.jpg",
//       order_id: order.id,

//       // STEP 2: Razorpay Success Handler
//       handler: async function (response) {
//         const verifyRes = await fetch("https://72t09sg9-3000.inc1.devtunnels.ms/api/v1/payments/verify", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             order_id: response.razorpay_order_id,
//             payment_id: response.razorpay_payment_id,
//             signature: response.razorpay_signature,
//           }),
//         });

//         const verifyData = await verifyRes.json();

//         if (verifyData.success) {
//           alert("Payment Successful 🎉");
//         } else {
//           alert("Payment Verification Failed ❌");
//         }
//       },

//       theme: { color: "#E87331" },
//     };

//     const rzp = new window.Razorpay(options);
//     rzp.open();
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center px-4
//     bg-gradient-to-br from-[#E87331] to-[#563D2F] text-white text-center">

//       <img src="/logo.jpg" className="w-20 h-20 rounded-full mb-6" />

//       <h1 className="text-4xl font-bold mb-4">Support News Bullet Kerala!</h1>

//       <button
//         onClick={handleDonate}
//         className="bg-white text-orange-700 font-semibold py-3 rounded-xl shadow-md
//         hover:bg-gray-100 transition-all w-full max-w-xs"
//       >
//         Donate ₹100
//       </button>

//       <Link
//         href="/video"
//         className="border border-white text-white py-3 rounded-xl mt-4 w-full max-w-xs
//         hover:bg-white hover:text-orange-700 transition-all"
//       >
//         Continue Without Donating
//       </Link>

//     </div>
//   );
// }

// "use client";
// import { useState } from "react";

// export default function DonatePage() {
//   const [loading, setLoading] = useState(false);

//   const makePayment = async () => {
//     setLoading(true);

//     try {
//       // 1️⃣ Create Razorpay order from backend
//       const orderRes = await fetch(
//         `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/create-order`,
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ amount: 100 }),
//         }
//       );

//       const orderData = await orderRes.json();
//       console.log("ORDER:", orderData);

//       if (!orderData.success) {
//         alert("Order creation failed");
//         setLoading(false);
//         return;
//       }

//       // 2️⃣ Razorpay checkout options
//       const options = {
//         key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//         amount: orderData.data.amount,
//         currency: orderData.data.currency,
//         name: "NewsBullet Kerala",
//         description: "Donation Payment",
//         order_id: orderData.data.id,

//         handler: async function (response) {
//           console.log("PAYMENT RESPONSE:", response);

//           // 3️⃣ Verify payment at backend
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
//             alert("Payment Successful! 🎉");
//           } else {
//             alert("Payment Verification Failed ❌");
//           }
//         },

//         theme: {
//           color: "#EC1C24",
//         },
//       };

//       const razorpay = new window.Razorpay(options);
//       razorpay.open();
//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
//       <h1 className="text-xl font-semibold mb-5">Support NewsBullet Kerala</h1>

//       <button
//         onClick={makePayment}
//         disabled={loading}
//         className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg shadow hover:bg-red-700 disabled:opacity-50"
//       >
//         {loading ? "Processing..." : "Donate ₹100"}
//       </button>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";

export default function Donation() {
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
      // 1️⃣ Create Order
      const orderRes = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payments/create-order`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: Number(amount) }),
        }
      );

      const orderData = await orderRes.json();
      console.log("ORDER RESPONSE:", orderData);

      if (!orderData.success) {
        alert("Order creation failed");
        setLoading(false);
        return;
      }

      // 2️⃣ Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: orderData.data.amount,
        currency: orderData.data.currency,
        name: "News Bullet Kerala",
        description: "Donation",
        image: "/logo.jpg",
        order_id: orderData.data.id,

        handler: async function (response) {
          console.log("PAYMENT RESPONSE:", response);

          // 3️⃣ Verify Payment
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
          console.log("VERIFY RESPONSE:", verifyData);

          if (verifyData.success) {
            alert("🎉 Payment Successful! Thank you!");
          } else {
            alert("❌ Payment Verification Failed!");
          }
        },

        theme: {
          color: "#E87331",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 
      bg-gradient-to-br from-[#E87331] to-[#563D2F] text-white text-center"
    >
      {/* Logo */}
      <img
        src="/logo.jpg"
        alt="Logo"
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-6 rounded-full shadow-lg"
      />

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 leading-tight">
        Support News Bullet Kerala!
      </h1>

      <p className="text-base sm:text-lg max-w-xl md:max-w-2xl leading-relaxed mb-6 px-2">
        Your donations help us bring authentic, independent news stories to you.
      </p>

      <p className="text-sm sm:text-base max-w-md sm:max-w-xl md:max-w-2xl leading-relaxed mb-10 px-3">
        At News Bullet Kerala, we connect the logic behind every story. We
        believe in journalism that empowers you to think critically and stay
        informed about what truly matters in our community.
      </p>

      {/* Donate Button */}
      <button
        onClick={() => setShowModal(true)}
        className="bg-white text-orange-700 font-semibold py-3 rounded-xl shadow-md 
        hover:bg-gray-100 transition-all w-full max-w-xs"
      >
        Donate & Support
      </button>

      {/* Continue Without Donating */}
      <Link
        href="/video"
        className="border border-white text-white py-3 rounded-xl mt-4 w-full max-w-xs
        hover:bg-white hover:text-orange-700 transition-all"
      >
        Continue Without Donating
      </Link>

      {/* Bottom Small Text */}
      <p className="mt-8 text-xs opacity-90">
        You can continue without donating, but your support keeps us
        independent.
      </p>

      {/* MODAL */}
      {/* {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white text-black p-6 rounded-2xl w-80 shadow-xl">

            <h2 className="text-xl font-bold mb-4 text-center">
              Enter Donation Amount
            </h2>

            <input
              type="number"
              placeholder="Amount in ₹"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 mb-4 
              focus:outline-none focus:ring-2 focus:ring-orange-500"
            />

            <div className="flex gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="w-1/2 py-2 border rounded-lg hover:bg-gray-200"
              >
                Cancel
              </button>

              <button
                onClick={startPayment}
                className="w-1/2 py-2 bg-orange-600 rounded-lg text-white hover:bg-orange-700"
              >
                Proceed
              </button>
            </div>

          </div>
        </div>
      )} */}

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-md
                  animate-fadeIn z-50"
        >
          <div
            className="bg-white/90 backdrop-blur-xl border border-white/30 shadow-2xl
                    rounded-3xl w-80 p-6 relative animate-slideUp"
          >
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
                className="w-1/2 py-2 rounded-xl border border-gray-300 text-gray-700 
                     hover:bg-gray-100 transition-all"
              >
                Cancel
              </button>

              <button
                onClick={startPayment}
                className="w-1/2 py-2 rounded-xl text-white font-semibold bg-gradient-to-r 
                     from-orange-500 to-orange-700 hover:opacity-90 transition-all shadow-md"
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
