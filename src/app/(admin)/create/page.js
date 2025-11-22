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




// "use client";

// import { useState } from "react";
// import { usePlanStore } from "@/store/planStore"; 
// import toast from "react-hot-toast";

// export default function CreatePlan() {
//   const [form, setForm] = useState({
//     name: "",
//     amount: "",
//     period: "",
//     interval: "",
//     description: "",
//   });

//   const { createPlan, loading } = usePlanStore();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submitPlan = async (e) => {
//     e.preventDefault();

//     try {
//       await createPlan(form); // ⭐ using Zustand store
//       setForm({
//         name: "",
//         amount: "",
//         period: "",
//         interval: "",
//         description: "",
//       });
//     } catch (err) {}
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
//           disabled={loading}
//           className="w-full py-3 text-white text-lg rounded-xl 
//                      bg-gradient-to-r from-orange-500 to-orange-800 
//                      shadow-lg hover:opacity-90 transition active:scale-95 disabled:opacity-50"
//         >
//           {loading ? "Creating..." : "Create Plan"}
//         </button>

//       </form>
//     </div>
//   );
// }



"use client";

import { useState, useEffect } from "react";
import { usePlanStore } from "@/store/planStore";
import toast from "react-hot-toast";

export default function CreatePlanPage() {
  const { createPlan, getPlans, plans, loading } = usePlanStore();

  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    name: "",
    amount: "",
    period: "",
    interval: "",
    description: "",
  });

  useEffect(() => {
    getPlans(); // load plans on page load
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitPlan = async (e) => {
    e.preventDefault();

    try {
      await createPlan(form);
      toast.success("Plan created");

      setForm({
        name: "",
        amount: "",
        period: "",
        interval: "",
        description: "",
      });

      setShowModal(false); // close modal
      getPlans()
    } catch (err) {}
  };

  return (
    <div className="p-4">

      {/* TOP */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl text-black font-bold">Subscription Plans</h1>

        {/* OPEN POPUP BUTTON */}
        <button
          onClick={() => setShowModal(true)}
          className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-orange-500 to-orange-800 shadow-md hover:opacity-90"
        >
          + Create Plan
        </button>
      </div>

      {/* PLANS LIST */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">

        {plans.length === 0 && (
          <p className="text-gray-600 text-sm">No plans created yet.</p>
        )}

       

{plans?.map((plan) => {
  const meta = plan.meta; // ⭐ clean access

  return (
    <div
      key={meta._id}
      className="relative bg-[#FFF8F2] rounded-3xl p-8 shadow-lg border border-orange-100
                 hover:shadow-xl transition-all duration-300"
    >
      {/* Status Badge */}
      <span
        className={`absolute top-5 right-5 px-4 py-1.5 text-sm font-semibold rounded-full 
          ${meta.isActive
            ? "bg-green-100 text-green-700"
            : "bg-orange-100 text-orange-600"
          }`}
      >
        {meta.isActive ? "Active" : "Disabled"}
      </span>

      {/* Title */}
      <h3 className="text-2xl font-bold text-[#1A1A1A]">{meta.name}</h3>

      {/* Amount */}
      <div className="mt-4">
        <span className="text-4xl text-[#F54A00] font-extrabold">
          ₹{meta.amount}
        </span>
        <span className="text-lg text-gray-600">/{meta.period}</span>

        <p className="text-gray-500 text-sm mt-1">
          Billed every {meta.interval} {meta.period}
        </p>
      </div>

      {/* Description */}
      <p className="text-[#333] mt-6 leading-relaxed">
        {meta.description || "No description available"}
      </p>

      {/* Buttons */}
      <div className="flex gap-3 mt-8">
        <button
          className={`flex-1 py-3 rounded-xl font-semibold text-white transition
            ${meta.isActive
              ? "bg-red-600 hover:bg-red-700"
              : "bg-green-600 hover:bg-green-700"
            }`}
        >
          {meta.isActive ? "Disable" : "Enable"}
        </button>

        <button
          className="flex-1 py-3 rounded-xl font-semibold border border-orange-400 
                     text-orange-600 hover:bg-orange-50 transition"
        >
          Edit
        </button>
      </div>
    </div>
  );
})}


      </div>

      {/* -------------------------------------------------------------- */}
      {/* POPUP MODAL */}
      {/* -------------------------------------------------------------- */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="max-w-3xl w-full mx-4 bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-gray-200 relative">

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Heading */}
            <h2 className="text-3xl font-bold text-[#231A15]">
              Create Subscription Plan
            </h2>
            <p className="text-gray-600 mt-1">
              Add a new pricing plan for users to subscribe.
            </p>

            {/* Accent line */}
            <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full mt-3 mb-6"></div>

            {/* FORM */}
            <form className="space-y-5" onSubmit={submitPlan}>

              <div>
                <label className="text-sm text-gray-700 font-medium">Plan Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Premium Monthly"
                  className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
                focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
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
                  focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
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
                  focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-gray-300"
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
                focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
                  required
                />
              </div>

              <div>
                <label className="text-sm text-gray-700 font-medium">Description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write a short description..."
                  className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
                focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 text-white text-lg rounded-xl 
              bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg 
              hover:opacity-90 transition active:scale-95 disabled:opacity-50"
              >
                {loading ? "Creating..." : "Create Plan"}
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
}
