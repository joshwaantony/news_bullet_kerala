// "use client";

// import React from "react";

// export default function CreatePlanModal({
//   open,
//   onClose,
//   onSubmit,
//   form,
//   onChange,
//   loading,
// }) {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//       <div className="max-w-3xl w-full mx-4 bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-gray-200 relative">

//         {/* CLOSE BUTTON */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
//         >
//           ✕
//         </button>

//         {/* Heading */}
//         <h2 className="text-3xl font-bold text-[#231A15]">
//           Create Subscription Plan
//         </h2>
//         <p className="text-gray-600 mt-1">
//           Add a new pricing plan for users to subscribe.
//         </p>

//         {/* Accent line */}
//         <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full mt-3 mb-6"></div>

//         {/* FORM */}
//         <form className="space-y-5" onSubmit={onSubmit}>

//           <div>
//             <label className="text-sm text-gray-700 font-medium">Plan Name</label>
//             <input
//               name="name"
//               value={form.name}
//               onChange={onChange}
//               placeholder="Premium Monthly"
//               className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//               focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
//               required
//             />
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//             <div>
//               <label className="text-sm text-gray-700 font-medium">Amount (₹)</label>
//               <input
//                 name="amount"
//                 value={form.amount}
//                 onChange={onChange}
//                 type="number"
//                 placeholder="199"
//                 className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                 focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
//                 required
//               />
//             </div>

//             <div>
//               <label className="text-sm text-gray-700 font-medium">Billing Period</label>
//               <select
//                 name="period"
//                 value={form.period}
//                 onChange={onChange}
//                 className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                 focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-gray-300"
//                 required
//               >
//                 <option value="">Select</option>
//                 <option value="monthly">Monthly</option>
//                 <option value="yearly">Yearly</option>
//               </select>
//             </div>

//           </div>

//           <div>
//             <label className="text-sm text-gray-700 font-medium">Interval</label>
//             <input
//               name="interval"
//               value={form.interval}
//               onChange={onChange}
//               type="number"
//               placeholder="1"
//               className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//               focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
//               required
//             />
//           </div>

//           <div>
//             <label className="text-sm text-gray-700 font-medium">Description</label>
//             <textarea
//               name="description"
//               value={form.description}
//               onChange={onChange}
//               rows={4}
//               placeholder="Write a short description..."
//               className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//               focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 text-white text-lg rounded-xl 
//             bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg 
//             hover:opacity-90 transition active:scale-95 disabled:opacity-50"
//           >
//             {loading ? "Creating..." : "Create Plan"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }







"use client";

import React from "react";

export default function CreatePlanModal({
  open,
  onClose,
  onSubmit,
  form,
  onChange,
  loading,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-3 sm:px-0">
      
      {/* Modal Box */}
      <div
        className="w-full max-w-lg sm:max-w-2xl bg-white rounded-2xl shadow-2xl 
        border border-gray-200 p-5 sm:p-8 relative overflow-y-auto max-h-[90vh]"
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-[#231A15]">
          Create Subscription Plan
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mt-1">
          Add a new pricing plan for users to subscribe.
        </p>

        {/* Accent line */}
        <div className="w-24 sm:w-28 h-1 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full mt-3 mb-6"></div>

        {/* FORM */}
        <form className="space-y-4 sm:space-y-5" onSubmit={onSubmit}>

          {/* PLAN NAME */}
          <div>
            <label className="text-sm font-medium text-gray-700">Plan Name</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Premium Monthly"
              className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
              focus:ring-2 focus:ring-orange-400 focus:bg-white transition 
              placeholder:text-gray-300 text-black text-sm sm:text-base"
              required
            />
          </div>

          {/* AMOUNT + PERIOD */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            
            {/* AMOUNT */}
            <div>
              <label className="text-sm font-medium text-gray-700">Amount (₹)</label>
              <input
                name="amount"
                value={form.amount}
                onChange={onChange}
                type="number"
                placeholder="199"
                className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
                focus:ring-2 focus:ring-orange-400 focus:bg-white transition 
                placeholder:text-gray-300 text-black text-sm sm:text-base"
                required
              />
            </div>

            {/* BILLING PERIOD */}
            <div>
              <label className="text-sm font-medium text-gray-700">Billing Period</label>
              <select
                name="period"
                value={form.period}
                onChange={onChange}
                className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
                focus:ring-2 focus:ring-orange-400 focus:bg-white transition 
                placeholder:text-gray-300 text-gray-600 text-sm sm:text-base"
                required
              >
                <option value="">Select</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

          </div>

          {/* INTERVAL */}
          <div>
            <label className="text-sm font-medium text-gray-700">Interval</label>
            <input
              name="interval"
              value={form.interval}
              onChange={onChange}
              type="number"
              placeholder="1"
              className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
              focus:ring-2 focus:ring-orange-400 focus:bg-white transition 
              placeholder:text-gray-300 text-black text-sm sm:text-base"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={onChange}
              rows={4}
              placeholder="Write a short description..."
              className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
              focus:ring-2 focus:ring-orange-400 focus:bg-white transition
              placeholder:text-gray-300 text-black text-sm sm:text-base"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-white text-base sm:text-lg rounded-xl 
            bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg 
            hover:opacity-90 transition active:scale-95 disabled:opacity-50"
          >
            {loading ? "Creating..." : "Create Plan"}
          </button>
        </form>
      </div>
    </div>
  );
}
