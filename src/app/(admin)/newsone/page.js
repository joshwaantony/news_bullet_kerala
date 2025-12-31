// // "use client";

// // import { useState } from "react";
// // import AddNewsModal from "../dashboard/components/AddNewsModal";

// // export default function NewsPage() {
// //   const [open, setOpen] = useState(false);

// //   return (
// //     <div className="p-6 sm:p-10">
// //       {/* Header */}
// //       <div className="flex items-center justify-between mb-8">
// //         <h1 className="text-3xl font-bold text-[#231A15]">News</h1>

// //         <button
// //           onClick={() => setOpen(true)}
// //           className="px-5 py-2.5 rounded-lg
// //          bg-gradient-to-r from-orange-500 to-orange-800 shadow-md hover:opacity-90 transition"
// //         >
// //           + Add News
// //         </button>
// //       </div>

// //       {/* Empty State (for now) */}
// //       <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
// //         No news added yet.
// //       </div>

// //       {/* Modal */}
// //       <AddNewsModal open={open} onClose={() => setOpen(false)} />
// //     </div>
// //   );
// // }



// "use client";

// import { useEffect, useState } from "react";
// import AddNewsModal from "../dashboard/components/AddNewsModal";
// import useNewsStore from "@/store/admin/news.store";

// export default function NewsPage() {
//   const [open, setOpen] = useState(false);

//   const { fetchAllNews, news, loading } = useNewsStore();

//   // fetch on page load
//   useEffect(() => {
//     fetchAllNews();
//   }, [fetchAllNews]);

//   return (
//     <div className="p-6 sm:p-10">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold text-[#231A15]">News</h1>

//         <button
//           onClick={() => setOpen(true)}
//           className="px-5 py-2.5 rounded-lg
//           bg-gradient-to-r from-orange-500 to-orange-800
//           shadow-md hover:opacity-90 transition text-white"
//         >
//           + Add News
//         </button>
//       </div>

//       {/* News List */}
//       {loading ? (
//         <div className="text-center text-gray-500">Loading...</div>
//       ) : news.length === 0 ? (
//         <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
//           No news added yet.
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {news.map((item) => (
//             <div
//               key={item._id}
//               className="bg-white rounded-xl shadow p-6"
//             >
//               <h2 className="text-lg font-semibold text-[#231A15] mb-2">
//                 {item.heading}
//               </h2>

//               <p className="text-sm text-gray-600 line-clamp-3">
//                 {item.body}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Modal */}
//       <AddNewsModal
//         open={open}
//         onClose={() => setOpen(false)}
//       />
//     </div>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import AddNewsModal from "../dashboard/components/AddNewsModal";
import useNewsStore from "@/store/admin/news.store";

export default function NewsPage() {
  const [open, setOpen] = useState(false);

  const { fetchAllNews, news, loading, error } = useNewsStore();

  // fetch news on page load
  useEffect(() => {
    fetchAllNews();
  }, [fetchAllNews]);

  return (
    <div className="p-6 sm:p-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-[#231A15]">
          News
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="px-5 py-2.5 rounded-lg
          bg-gradient-to-r from-orange-500 to-orange-800
          shadow-md hover:opacity-90 transition text-white"
        >
          + Add News
        </button>
      </div>

      {/* Content */}
      {loading ? (
        <div className="text-center text-gray-500">
          Loading...
        </div>
      ) : error ? (
        <div className="text-center text-red-500">
          {error}
        </div>
      ) : Array.isArray(news) && news.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
          No news added yet.
        </div>
      ) : (
        <div className="space-y-4">
          {Array.isArray(news) &&
            news.map((item) => (
              <div
                key={item._id}
                className="bg-white rounded-xl shadow p-6"
              >
                <h2 className="text-lg font-semibold text-[#231A15] mb-2">
                  {item.heading}
                </h2>

                <p className="text-sm text-gray-600 line-clamp-3">
                  {item.body}
                </p>
              </div>
            ))}
        </div>
      )}

      {/* Modal */}
      <AddNewsModal
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
