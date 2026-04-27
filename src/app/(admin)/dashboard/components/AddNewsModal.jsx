// "use client";

// export default function AddNewsModal({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
//       <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-6 relative">

//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-gray-500 hover:text-black text-xl"
//         >
//           ✕
//         </button>

//         {/* Heading */}
//         <h2 className="text-2xl font-bold mb-6 text-[#231A15]">
//           Add News
//         </h2>

//         {/* Form */}
//         <form className="space-y-4">
//           <input
//             type="text"
//             placeholder="News Title"
//             className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />

//           <textarea
//             placeholder="News Description"
//             rows="4"
//             className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />

//           <input
//             type="file"
//             className="w-full border rounded-lg px-4 py-2"
//           />

//           <div className="flex justify-end gap-3 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 rounded-lg border text-sm"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               className="px-5 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-sm"
//             >
//               Add News
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }


// "use client";

// export default function AddNewsModal({ open, onClose }) {
//   if (!open) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
//       <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 relative">
//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-gray-500 hover:text-black text-xl"
//         >
//           ✕
//         </button>

//         {/* Heading */}
//         <h2 className="text-2xl font-bold mb-6 text-[#231A15]">
//           Add News
//         </h2>

//         {/* Form */}
//         <form className="space-y-5">
//           {/* News Title */}
//           <input
//             type="text"
//             placeholder="News Title"
//             className=" placeholder:text-gray-500 w-full border border-black rounded-lg px-4 py-3 text-sm
//             focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />

//           {/* Bigger News Description */}
//           <textarea
//             placeholder="News Description"
//             rows="8"
//             className="placeholder:text-gray-500 w-full border border-black rounded-lg px-4 py-3 text-sm resize-none
//             focus:outline-none focus:ring-2 focus:ring-orange-500"
//           />

//           {/* Actions */}
//           <div className="flex justify-end gap-3 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 rounded-lg border border-black text-sm text-gray-500"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               className="px-6 py-2 rounded-lg bg-orange-600 hover:bg-orange-700
//               text-white text-sm font-medium"
//             >
//               Add News
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }




"use client";

import useNewsStore from "@/store/admin/news.store";
import { useState, useEffect } from "react";

export default function AddNewsModal({ open, onClose }) {
  if (!open) return null;

  const { createNews, loading, success, error, resetStatus } =
    useNewsStore();

  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createNews({ heading, body });
  };

  useEffect(() => {
    if (success) {
      setHeading("");
      setBody("");
      resetStatus();
      onClose();
    }
  }, [success, resetStatus, onClose]);

  return (
    <div className="fixed text-black inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-[#231A15]">
          Add News
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="News Title"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full border border-black rounded-lg px-4 py-3"
            required
          />

          <textarea
            placeholder="News Description"
            rows="8"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="w-full border border-black rounded-lg px-4 py-3 resize-none"
            required
          />

          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-black text-sm text-gray-500"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 rounded-lg bg-orange-600 hover:bg-orange-700
              text-white text-sm font-medium disabled:opacity-60"
            >
              {loading ? "Adding..." : "Add News"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
