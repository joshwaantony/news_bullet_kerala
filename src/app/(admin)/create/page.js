



// "use client";

// import { useState, useEffect } from "react";
// import { usePlanStore } from "@/store/planStore";
// import { MdDelete } from "react-icons/md";
// import toast from "react-hot-toast";

// export default function CreatePlanPage() {
//   const { createPlan, getPlans, plans, loading } = usePlanStore();

//   const [showModal, setShowModal] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     amount: "",
//     period: "",
//     interval: "",
//     description: "",
//   });

//   useEffect(() => {
//     getPlans(); // load plans on page load
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submitPlan = async (e) => {
//     e.preventDefault();

//     try {
//       await createPlan(form);
//       toast.success("Plan created");

//       setForm({
//         name: "",
//         amount: "",
//         period: "",
//         interval: "",
//         description: "",
//       });

//       setShowModal(false); // close modal
//       getPlans()
//     } catch (err) {}
//   };

//   return (
//     <div className="p-4">

//       {/* TOP */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl text-black font-bold">Subscription Plans</h1>

//         {/* OPEN POPUP BUTTON */}
//         <button
//           onClick={() => setShowModal(true)}
//           className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-orange-500 to-orange-800 shadow-md hover:opacity-90"
//         >
//           + Create Plan
//         </button>
//       </div>

//       {/* PLANS LIST */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">

//         {plans.length === 0 && (
//           <p className="text-gray-600 text-sm">No plans created yet.</p>
//         )}

       

// {plans?.map((plan) => {
//   const meta = plan.meta; // ⭐ clean access

//   return (
//     <div
//       key={meta._id}
//       className="relative bg-[#FFF8F2] rounded-3xl p-8 shadow-lg border border-orange-100
//                  hover:shadow-xl transition-all duration-300"
//     >
//       {/* Status Badge */}
//       <button
//         className="absolute top-5 right-5 px-1.5 py-1.5 text-sm font-semibold rounded-full hover:bg-red-300 "
    
//       >
//         <MdDelete className="text-red-500 text-xl hover:text-white " />
//       </button>
//       <button>
//        </button>

//       {/* Title */}
//       <h3 className="text-2xl font-bold text-[#1A1A1A]">{meta.name}</h3>

//       {/* Amount */}
//       <div className="mt-4">
//         <span className="text-4xl text-[#F54A00] font-extrabold">
//           ₹{meta.amount}
//         </span>
//         <span className="text-lg text-gray-600">/{meta.period}</span>

//         <p className="text-gray-500 text-sm mt-1">
//           Billed every {meta.interval} {meta.period}
//         </p>
//       </div>

//       {/* Description */}
//       <p className="text-[#333] my-6 leading-relaxed">
//         {meta.description || "No description available"}
//       </p>

//       {/* Buttons */}

//         <span
//         className={`  px-4 py-1.5 text-sm font-semibold rounded-full 
//           ${meta.isActive
//             ? "bg-green-100 text-green-700"
//             : "bg-orange-100 text-orange-600"
//           }`}
//       >
//         {meta.isActive ? "Active" : "Disabled"}
//       </span>
      
//     </div>
//   );
// })}


//       </div>

//       {/* -------------------------------------------------------------- */}
//       {/* POPUP MODAL */}
//       {/* -------------------------------------------------------------- */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

//           <div className="max-w-3xl w-full mx-4 bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-gray-200 relative">

//             {/* CLOSE BUTTON */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
//             >
//               ✕
//             </button>

//             {/* Heading */}
//             <h2 className="text-3xl font-bold text-[#231A15]">
//               Create Subscription Plan
//             </h2>
//             <p className="text-gray-600 mt-1">
//               Add a new pricing plan for users to subscribe.
//             </p>

//             {/* Accent line */}
//             <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full mt-3 mb-6"></div>

//             {/* FORM */}
//             <form className="space-y-5" onSubmit={submitPlan}>

//               <div>
//                 <label className="text-sm text-gray-700 font-medium">Plan Name</label>
//                 <input
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="Premium Monthly"
//                   className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                 focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//                 <div>
//                   <label className="text-sm text-gray-700 font-medium">Amount (₹)</label>
//                   <input
//                     name="amount"
//                     value={form.amount}
//                     onChange={handleChange}
//                     type="number"
//                     placeholder="199"
//                     className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                   focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm text-gray-700 font-medium">Billing Period</label>
//                   <select
//                     name="period"
//                     value={form.period}
//                     onChange={handleChange}
//                     className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                   focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-gray-300"
//                     required
//                   >
//                     <option value="">Select</option>
//                     <option value="monthly">Monthly</option>
//                     <option value="yearly">Yearly</option>
//                   </select>
//                 </div>

//               </div>

//               <div>
//                 <label className="text-sm text-gray-700 font-medium">Interval</label>
//                 <input
//                   name="interval"
//                   value={form.interval}
//                   onChange={handleChange}
//                   type="number"
//                   placeholder="1"
//                   className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                 focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-700 font-medium">Description</label>
//                 <textarea
//                   name="description"
//                   value={form.description}
//                   onChange={handleChange}
//                   rows={4}
//                   placeholder="Write a short description..."
//                   className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                 focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full py-3 text-white text-lg rounded-xl 
//               bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg 
//               hover:opacity-90 transition active:scale-95 disabled:opacity-50"
//               >
//                 {loading ? "Creating..." : "Create Plan"}
//               </button>
//             </form>
//           </div>

//         </div>
//       )}
//     </div>
//   );
// }













// "use client";

// import { useState, useEffect } from "react";
// import { usePlanStore } from "@/store/planStore";
// import { MdDelete } from "react-icons/md";
// import toast from "react-hot-toast";

// export default function CreatePlanPage() {
//   const { createPlan, getPlans, deletePlan, plans, loading } = usePlanStore();
//   const [deleteLoading, setDeleteLoading] = useState(false);


//   const [showModal, setShowModal] = useState(false);
//   const [deleteConfirm, setDeleteConfirm] = useState(null); // planId to delete

//   const [form, setForm] = useState({
//     name: "",
//     amount: "",
//     period: "",
//     interval: "",
//     description: "",
//   });

//   useEffect(() => {
//     getPlans();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submitPlan = async (e) => {
//     e.preventDefault();

//     try {
//       await createPlan(form);
//       toast.success("Plan created");

//       setForm({
//         name: "",
//         amount: "",
//         period: "",
//         interval: "",
//         description: "",
//       });

//       setShowModal(false);
//       getPlans();
//     } catch (err) {}
//   };

//   // DELETE ACTION
//   // const handleDelete = async () => {
//   //   try {
//   //     await deletePlan(deleteConfirm);
//   //     toast.success("Plan Removed");
//   //     setDeleteConfirm(null);
//   //   } catch (err) {
//   //     toast.error("Failed to delete");
//   //   }
//   // };

//   const handleDelete = async () => {
//   setDeleteLoading(true);
//   try {
//     await deletePlan(deleteConfirm);
//     toast.success("Plan Removed");
//     setDeleteConfirm(null);
//   } catch (err) {
//     toast.error("Failed to delete");
//   } finally {
//     setDeleteLoading(false);
//   }
// };


//   return (
//     <div className="p-4">

//       {/* TOP */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-2xl text-black font-bold">Subscription Plans</h1>

//         <button
//           onClick={() => setShowModal(true)}
//           className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-orange-500 to-orange-800 shadow-md hover:opacity-90"
//         >
//           + Create Plan
//         </button>
//       </div>

//       {/* PLANS LIST */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">

//         {plans.length === 0 && (
//           <p className="text-gray-600 text-sm">No plans created yet.</p>
//         )}

//         {plans?.map((plan) => {
//           const meta = plan.meta;

//           return (
//             <div
//               key={meta._id}
//               className="relative bg-[#FFF8F2] rounded-3xl p-8 shadow-lg border border-orange-100
//                 hover:shadow-xl transition-all duration-300"
//             >
//               {/* DELETE BUTTON */}
//               <button
//                 onClick={() => setDeleteConfirm(meta.razorpayPlanId)}
//                 className="absolute top-5 right-5 p-2 rounded-full hover:bg-red-200 transition"
//               >
//                 <MdDelete className="text-red-500 text-xl" />
//               </button>

//               {/* Title */}
//               <h3 className="text-2xl font-bold text-[#1A1A1A]">{meta.name}</h3>

//               <div className="mt-4">
//                 <span className="text-4xl text-[#F54A00] font-extrabold">
//                   ₹{meta.amount}
//                 </span>
//                 <span className="text-lg text-gray-600">/{meta.period}</span>

//                 <p className="text-gray-500 text-sm mt-1">
//                   Billed every {meta.interval} {meta.period}
//                 </p>
//               </div>

//               <p className="text-[#333] my-6 leading-relaxed">
//                 {meta.description || "No description available"}
//               </p>

//               <span
//                 className={`px-4 py-1.5 text-sm font-semibold rounded-full 
//                 ${meta.isActive ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-600"}`}
//               >
//                 {meta.isActive ? "Active" : "Disabled"}
//               </span>
//             </div>
//           );
//         })}

//       </div>

//       {/* DELETE CONFIRMATION POPUP */}
//       {/* {deleteConfirm && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl w-[300px] shadow-xl">
//             <h3 className="text-lg font-bold text-center">Delete Plan?</h3>
//             <p className="text-center text-gray-600 mt-2">
//               This action cannot be undone.
//             </p>

//             <div className="flex justify-between mt-6">
//               <button
//                 onClick={() => setDeleteConfirm(null)}
//                 className="px-4 py-2 border rounded-lg"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleDelete}
//                 className="px-4 py-2 bg-red-600 text-white rounded-lg"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )} */}
//       {deleteConfirm && (
//   <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//     <div className="bg-white p-6 rounded-xl w-[300px] shadow-xl">
//       <h3 className="text-lg font-bold text-black text-center">Delete Plan?</h3>
//       <p className="text-center text-gray-600 mt-2">
//         This action cannot be undone.
//       </p>

//       <div className="flex justify-between mt-6">
//         <button
//           onClick={() => (!deleteLoading ? setDeleteConfirm(null) : null)}
//           disabled={deleteLoading}
//           className="px-4 py-2 border text-gray-500 rounded-lg disabled:opacity-50"
//         >
//           Cancel
//         </button>

//         <button
//           onClick={handleDelete}
//           disabled={deleteLoading}
//           className="px-4 py-2 bg-red-600 text-white rounded-lg disabled:opacity-50"
//         >
//           {deleteLoading ? "Deleting..." : "Delete"}
//         </button>
//       </div>
//     </div>
//   </div>
// )}


//       {/* CREATE PLAN POPUP */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

//           <div className="max-w-3xl w-full mx-4 bg-white/90 backdrop-blur-xl shadow-2xl rounded-2xl p-8 border border-gray-200 relative">

//             {/* CLOSE BUTTON */}
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
//             >
//               ✕
//             </button>

//             {/* Heading */}
//             <h2 className="text-3xl font-bold text-[#231A15]">
//               Create Subscription Plan
//             </h2>
//             <p className="text-gray-600 mt-1">
//               Add a new pricing plan for users to subscribe.
//             </p>

//             {/* Accent line */}
//             <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full mt-3 mb-6"></div>

//             {/* FORM */}
//             <form className="space-y-5" onSubmit={submitPlan}>

//               <div>
//                 <label className="text-sm text-gray-700 font-medium">Plan Name</label>
//                 <input
//                   name="name"
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="Premium Monthly"
//                   className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                 focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
//                   required
//                 />
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

//                 <div>
//                   <label className="text-sm text-gray-700 font-medium">Amount (₹)</label>
//                   <input
//                     name="amount"
//                     value={form.amount}
//                     onChange={handleChange}
//                     type="number"
//                     placeholder="199"
//                     className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                   focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
//                     required
//                   />
//                 </div>

//                 <div>
//                   <label className="text-sm text-gray-700 font-medium">Billing Period</label>
//                   <select
//                     name="period"
//                     value={form.period}
//                     onChange={handleChange}
//                     className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                   focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-gray-300"
//                     required
//                   >
//                     <option value="">Select</option>
//                     <option value="monthly">Monthly</option>
//                     <option value="yearly">Yearly</option>
//                   </select>
//                 </div>

//               </div>

//               <div>
//                 <label className="text-sm text-gray-700 font-medium">Interval</label>
//                 <input
//                   name="interval"
//                   value={form.interval}
//                   onChange={handleChange}
//                   type="number"
//                   placeholder="1"
//                   className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                 focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-700 font-medium">Description</label>
//                 <textarea
//                   name="description"
//                   value={form.description}
//                   onChange={handleChange}
//                   rows={4}
//                   placeholder="Write a short description..."
//                   className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-50 
//                 focus:ring-2 focus:ring-orange-400 focus:bg-white transition placeholder:text-gray-300 text-black"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full py-3 text-white text-lg rounded-xl 
//               bg-gradient-to-r from-orange-500 to-orange-800 shadow-lg 
//               hover:opacity-90 transition active:scale-95 disabled:opacity-50"
//               >
//                 {loading ? "Creating..." : "Create Plan"}
//               </button>
//             </form>
//           </div>

//         </div>
//       )}

//     </div>
//   );
// }




// "use client";

// import { useState, useEffect } from "react";
// import { usePlanStore } from "@/store/planStore";
// import { MdDelete } from "react-icons/md";
// import toast from "react-hot-toast";
// import CreatePlanModal from "../dashboard/components/CreatePlanModal";

// export default function CreatePlanPage() {
//   const { createPlan, getPlans, deletePlan, plans, loading } = usePlanStore();

//   const [showModal, setShowModal] = useState(false);
//   const [deleteConfirm, setDeleteConfirm] = useState(null);
//   const [deleteLoading, setDeleteLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     amount: "",
//     period: "",
//     interval: "",
//     description: "",
//   });

//   useEffect(() => {
//     getPlans();
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const submitPlan = async (e) => {
//     e.preventDefault();
//     try {
//       await createPlan(form);
//       toast.success("Plan created");

//       setForm({
//         name: "",
//         amount: "",
//         period: "",
//         interval: "",
//         description: "",
//       });

//       setShowModal(false);
//       getPlans();
//     } catch (err) {}
//   };

//   const handleDelete = async () => {
//     setDeleteLoading(true);
//     try {
//       await deletePlan(deleteConfirm);
//       toast.success("Plan Deleted");
//       setDeleteConfirm(null);
//     } catch (err) {
//       toast.error("Failed to delete");
//     } finally {
//       setDeleteLoading(false);
//     }
//   };

//   return (
//     <div className="p-4">

//       {/* TOP BAR */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="sm:text-2xl text-black font-bold">Subscription Plans</h1>

//         <button
//           onClick={() => setShowModal(true)}
//           className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-orange-500 to-orange-800 shadow-md hover:opacity-90"
//         >
//           + Create Plan
//         </button>
//       </div>

//       {/* PLANS GRID */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-4">
//         {plans.length === 0 && (
//           <p className="text-gray-600 text-sm">No plans created yet.</p>
//         )}

//         {plans?.map((plan) => {
//           const meta = plan.meta;

//           return (
//             <div
//               key={meta._id}
//               className="relative bg-[#FFF8F2] rounded-3xl p-8 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300"
//             >
//               {/* DELETE ICON */}
//               <button
//                 onClick={() => setDeleteConfirm(meta.razorpayPlanId)}
//                 className="absolute top-5 right-5 p-2 rounded-full hover:bg-red-200 transition"
//               >
//                 <MdDelete className="text-red-500 text-xl" />
//               </button>

//               {/* NAME */}
//               <h3 className="text-2xl font-bold text-[#1A1A1A]">{meta.name}</h3>

//               {/* PRICE */}
//               <div className="mt-4">
//                 <span className="text-4xl text-[#F54A00] font-extrabold">₹{meta.amount}</span>
//                 <span className="text-lg text-gray-600">/{meta.period}</span>

//                 <p className="text-gray-500 text-sm mt-1">
//                   Billed every {meta.interval} {meta.period}
//                 </p>
//               </div>

//               {/* DESCRIPTION */}
//               <p className="text-[#333] my-6 leading-relaxed">
//                 {meta.description || "No description available"}
//               </p>

//               {/* STATUS */}
//               <span
//                 className={`px-4 py-1.5 text-sm font-semibold rounded-full ${
//                   meta.isActive
//                     ? "bg-green-100 text-green-700"
//                     : "bg-orange-100 text-orange-600"
//                 }`}
//               >
//                 {meta.isActive ? "Active" : "Disabled"}
//               </span>
//             </div>
//           );
//         })}
//       </div>

//       {/* DELETE CONFIRM MODAL */}
//       {deleteConfirm && (
//         <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-xl w-[300px] shadow-xl">
//             <h3 className="text-lg font-bold text-black text-center">Delete Plan?</h3>
//             <p className="text-center text-gray-600 mt-2">This action cannot be undone.</p>

//             <div className="flex justify-between mt-6">
//               <button
//                 onClick={() => (!deleteLoading ? setDeleteConfirm(null) : null)}
//                 className="px-4 py-2 border text-gray-500 rounded-lg disabled:opacity-50"
//                 disabled={deleteLoading}
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleDelete}
//                 disabled={deleteLoading}
//                 className="px-4 py-2 bg-red-600 text-white rounded-lg disabled:opacity-50"
//               >
//                 {deleteLoading ? "Deleting..." : "Delete"}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* CREATE PLAN MODAL (SEPARATE COMPONENT) */}
//       <CreatePlanModal
//         open={showModal}
//         onClose={() => setShowModal(false)}
//         onSubmit={submitPlan}
//         form={form}
//         onChange={handleChange}
//         loading={loading}
//       />
//     </div>
//   );
// }







"use client";

import { useState, useEffect } from "react";
import { usePlanStore } from "@/store/planStore";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import CreatePlanModal from "../dashboard/components/CreatePlanModal";

export default function CreatePlanPage() {
  const { createPlan, getPlans, deletePlan, plans, loading } = usePlanStore();

  const [showModal, setShowModal] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    amount: "",
    period: "",
    interval: "",
    description: "",
  });

  useEffect(() => {
    getPlans();
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

      setShowModal(false);
      getPlans();
    } catch (err) {}
  };

  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      await deletePlan(deleteConfirm);
      toast.success("Plan Deleted");
      setDeleteConfirm(null);
    } catch (err) {
      toast.error("Failed to delete");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="p-3 sm:p-4">

      {/* ===== TOP BAR ===== */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <h1 className="text-xl sm:text-2xl font-bold text-black">Subscription Plans</h1>

        <button
          onClick={() => setShowModal(true)}
          className="px-4 py-2 w-full sm:w-auto text-center rounded-lg text-white 
          bg-gradient-to-r from-orange-500 to-orange-800 shadow-md hover:opacity-90 transition"
        >
          + Create Plan
        </button>
      </div>

      {/* ===== PLANS GRID ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
        {plans.length === 0 && (
          <p className="text-gray-500 text-sm">No plans created yet.</p>
        )}

        {plans?.map((plan) => {
          const meta = plan.meta;

          return (
            <div
              key={meta._id}
              className="relative bg-[#FFF8F2] rounded-2xl p-6 sm:p-8 shadow-lg 
              border border-orange-100 hover:shadow-xl transition duration-300"
            >
              {/* DELETE ICON */}
              <button
                onClick={() => setDeleteConfirm(meta.razorpayPlanId)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-red-200 transition"
              >
                <MdDelete className="text-red-500 text-lg sm:text-xl" />
              </button>

              {/* NAME */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#1A1A1A]">{meta.name}</h3>

              {/* PRICE */}
              <div className="mt-3 sm:mt-4">
                <span className="text-3xl sm:text-4xl text-[#F54A00] font-extrabold">
                  ₹{meta.amount}
                </span>
                <span className="text-base sm:text-lg text-gray-600">/{meta.period}</span>

                <p className="text-gray-500 text-xs sm:text-sm mt-1">
                  Billed every {meta.interval} {meta.period}
                </p>
              </div>

              {/* DESCRIPTION */}
              <p className="text-[#333] mt-4 sm:mt-6 text-sm leading-relaxed">
                {meta.description || "No description available"}
              </p>

              {/* STATUS */}
              <span
                className={`mt-4 inline-block px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full ${
                  meta.isActive
                    ? "bg-green-100 text-green-700"
                    : "bg-orange-100 text-orange-600"
                }`}
              >
                {meta.isActive ? "Active" : "Disabled"}
              </span>
            </div>
          );
        })}
      </div>

      {/* ===== DELETE CONFIRMATION MODAL ===== */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-5 sm:p-6 rounded-xl w-full max-w-xs shadow-xl">
            <h3 className="text-lg font-bold text-center text-black">Delete Plan?</h3>
            <p className="text-center text-gray-600 text-sm mt-2">
              This action cannot be undone.
            </p>

            <div className="flex justify-between mt-6">
              <button
                onClick={() => (!deleteLoading ? setDeleteConfirm(null) : null)}
                disabled={deleteLoading}
                className="px-4 py-2 border text-gray-600 rounded-lg disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                disabled={deleteLoading}
                className="px-4 py-2 bg-red-600 text-white rounded-lg disabled:opacity-50"
              >
                {deleteLoading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== CREATE PLAN MODAL ===== */}
      <CreatePlanModal
        open={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={submitPlan}
        form={form}
        onChange={handleChange}
        loading={loading}
      />
    </div>
  );
}
