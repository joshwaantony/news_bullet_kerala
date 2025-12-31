// "use client";

// import { useEffect, useState } from "react";
// import useNewsStore from "@/store/admin/news.store";

// export default function EditNewsModal({ open, onClose, news }) {
//   if (!open || !news) return null;

//   const { updateNews, loading, error } = useNewsStore();

//   const [heading, setHeading] = useState("");
//   const [body, setBody] = useState("");

//   // preload data
//   useEffect(() => {
//     setHeading(news.heading || "");
//     setBody(news.body || "");
//   }, [news]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await updateNews(news._id, {
//       heading,
//       body,
//     });

//     onClose();
//   };

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

//         <h2 className="text-2xl font-bold mb-6 text-[#231A15]">
//           Edit News
//         </h2>

//         <form className="space-y-5" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             value={heading}
//             onChange={(e) => setHeading(e.target.value)}
//             placeholder="News Title"
//             className="w-full border border-black rounded-lg px-4 py-3"
//             required
//           />

//           <textarea
//             rows="8"
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             placeholder="News Description"
//             className="w-full border border-black rounded-lg px-4 py-3 resize-none"
//             required
//           />

//           {error && (
//             <p className="text-sm text-red-600">{error}</p>
//           )}

//           <div className="flex justify-end gap-3 pt-4">
//             <button
//               type="button"
//               onClick={onClose}
//               className="px-4 py-2 rounded-lg border"
//             >
//               Cancel
//             </button>

//             <button
//               type="submit"
//               disabled={loading}
//               className="px-6 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-60"
//             >
//               {loading ? "Updating..." : "Update News"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }



"use client";

import useNewsStore from "@/store/admin/news.store";
import { useEffect, useState } from "react";

export default function EditNewsModal({ open, onClose, news }) {
  if (!open || !news) return null;

  console.log(news)

  const { updateNews, loading, error } = useNewsStore();

  const [heading, setHeading] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    setHeading(news.heading || "");
    setBody(news.body || "");
  }, [news]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await updateNews(news.slug, {
      heading,
      body,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-6 text-[#231A15]">
          Edit News
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="w-full border border-black rounded-lg px-4 py-3"
            required
          />

          <textarea
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
              className="px-4 py-2 rounded-lg border"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update News"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
