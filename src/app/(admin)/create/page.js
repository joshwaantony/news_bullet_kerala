// "use client";

// import { useState } from "react";
// import api from "@/api/axios";
// import toast from "react-hot-toast";

// export default function CreatePlan() {
//   const [form, setForm] = useState({
//     name: "",
//     amount: "",
//     period: "",
//     interval: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submitPlan = async (e) => {
//     e.preventDefault();

//     try {
//       await api.post("/payments/plans/create", form);
//       toast.success("Plan created successfully!");
//     } catch (err) {
//       toast.error("Failed to create plan");
//     }
//   };

//   return (
//     <div className="max-w-xl bg-white p-6 rounded-xl shadow">
//       <h2 className="text-xl font-semibold mb-4">Create Subscription Plan</h2>

//       <form className="space-y-4" onSubmit={submitPlan}>
//         <input name="name" onChange={handleChange} placeholder="Plan Name" className="input" />
//         <input name="amount" onChange={handleChange} placeholder="Amount" className="input" />
//         <input name="period" onChange={handleChange} placeholder="Period (monthly/yearly)" className="input" />
//         <input name="interval" onChange={handleChange} placeholder="Interval" className="input" />
//         <textarea name="description" onChange={handleChange} placeholder="Description" className="input" />

//         <button className="bg-orange-600 text-white px-4 py-2 rounded-lg">Create</button>
//       </form>
//     </div>
//   );
// }





// "use client";

// import { useState } from "react";
// import api from "@/api/axios";
// import toast from "react-hot-toast";

// export default function CreatePlan() {
//   const [form, setForm] = useState({
//     name: "",
//     amount: "",
//     period: "",
//     interval: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submitPlan = async (e) => {
//     e.preventDefault();

//     try {
//       await api.post("/payments/plans/create", form);
//       toast.success("Plan created successfully!");
//       setForm({
//         name: "",
//         amount: "",
//         period: "",
//         interval: "",
//         description: "",
//       });
//     } catch (err) {
//       toast.error(err.response?.data?.message || "Failed to create plan");
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-gray-200">

//       {/* Heading */}
//       <h2 className="text-3xl font-bold text-[#231A15]">
//         Create Subscription Plan
//       </h2>
//       <p className="text-gray-600 mt-1">
//         Add a new pricing plan for users to subscribe.
//       </p>

//       {/* Accent line */}
//       <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full mt-3 mb-6"></div>

//       {/* Form */}
//       <form className="space-y-5" onSubmit={submitPlan}>

//         <div>
//           <label className="text-sm text-gray-700 font-medium">Plan Name</label>
//           <input
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Premium Monthly"
//             className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                        focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
//             required
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//           <div>
//             <label className="text-sm text-gray-700 font-medium">Amount (₹)</label>
//             <input
//               name="amount"
//               value={form.amount}
//               onChange={handleChange}
//               type="number"
//               placeholder="199"
//               className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                          focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
//               required
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-700 font-medium">Billing Period</label>
//             <select
//               name="period"
//               value={form.period}
//               onChange={handleChange}
//               className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                          focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
//               required
//             >
//               <option value="">Select</option>
//               <option value="monthly">Monthly</option>
//               <option value="yearly">Yearly</option>
//             </select>
//           </div>

//         </div>

//         <div>
//           <label className="text-sm text-gray-700 font-medium">Interval</label>
//           <input
//             name="interval"
//             value={form.interval}
//             onChange={handleChange}
//             type="number"
//             placeholder="1"
//             className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                        focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
//             required
//           />
//         </div>

//         <div>
//           <label className="text-sm text-gray-700 font-medium">Description</label>
//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             placeholder="Write a short description about this plan..."
//             rows={4}
//             className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                        focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-3 text-white text-lg rounded-xl 
//                      bg-gradient-to-r from-orange-500 to-orange-800 
//                      shadow-lg hover:opacity-90 transition active:scale-95"
//         >
//           Create Plan
//         </button>

//       </form>
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { usePlanStore } from "@/store/planStore"; 
import toast from "react-hot-toast";

export default function CreatePlan() {
  const [form, setForm] = useState({
    name: "",
    amount: "",
    period: "",
    interval: "",
    description: "",
  });

  const { createPlan, loading } = usePlanStore();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPlan = async (e) => {
    e.preventDefault();

    try {
      await createPlan(form); // ⭐ using Zustand store
      setForm({
        name: "",
        amount: "",
        period: "",
        interval: "",
        description: "",
      });
    } catch (err) {}
  };

  return (
    <div className="max-w-3xl mx-auto bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-gray-200">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-[#231A15]">
        Create Subscription Plan
      </h2>
      <p className="text-gray-600 mt-1">
        Add a new pricing plan for users to subscribe.
      </p>

      {/* Accent line */}
      <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full mt-3 mb-6"></div>

      {/* Form */}
      <form className="space-y-5" onSubmit={submitPlan}>

        <div>
          <label className="text-sm text-gray-700 font-medium">Plan Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Premium Monthly"
            className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
                       focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div>
            <label className="text-sm text-gray-700 font-medium">Amount (₹)</label>
            <input
              name="amount"
              value={form.amount}
              onChange={handleChange}
              type="number"
              placeholder="199"
              className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
                         focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-medium">Billing Period</label>
            <select
              name="period"
              value={form.period}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
                         focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
              required
            >
              <option value="">Select</option>
              <option value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
            </select>
          </div>

        </div>

        <div>
          <label className="text-sm text-gray-700 font-medium">Interval</label>
          <input
            name="interval"
            value={form.interval}
            onChange={handleChange}
            type="number"
            placeholder="1"
            className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
                       focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Write a short description about this plan..."
            rows={4}
            className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
                       focus:ring-2 focus:ring-orange-400 focus:bg-white transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 text-white text-lg rounded-xl 
                     bg-gradient-to-r from-orange-500 to-orange-800 
                     shadow-lg hover:opacity-90 transition active:scale-95 disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create Plan"}
        </button>

      </form>
    </div>
  );
}
