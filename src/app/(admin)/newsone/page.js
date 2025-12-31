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




// "use client";

// import { useEffect, useState } from "react";
// import AddNewsModal from "../dashboard/components/AddNewsModal";
// import useNewsStore from "@/store/admin/news.store";

// export default function NewsPage() {
//   const [open, setOpen] = useState(false);

//   const { fetchAllNews, news, loading, error } = useNewsStore();

//   // fetch news on page load
//   useEffect(() => {
//     fetchAllNews();
//   }, [fetchAllNews]);

//   return (
//     <div className="p-6 sm:p-10">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold text-[#231A15]">
//           News
//         </h1>

//         <button
//           onClick={() => setOpen(true)}
//           className="px-5 py-2.5 rounded-lg
//           bg-gradient-to-r from-orange-500 to-orange-800
//           shadow-md hover:opacity-90 transition text-white"
//         >
//           + Add News
//         </button>
//       </div>

//       {/* Content */}
//       {loading ? (
//         <div className="text-center text-gray-500">
//           Loading...
//         </div>
//       ) : error ? (
//         <div className="text-center text-red-500">
//           {error}
//         </div>
//       ) : Array.isArray(news) && news.length === 0 ? (
//         <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
//           No news added yet.
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {Array.isArray(news) &&
//             news.map((item) => (
//               <div
//                 key={item._id}
//                 className="bg-white rounded-xl shadow p-6"
//               >
//                 <h2 className="text-lg font-semibold text-[#231A15] mb-2">
//                   {item.heading}
//                 </h2>

//                 <p className="text-sm text-gray-600 line-clamp-3">
//                   {item.body}
//                 </p>
//               </div>
//             ))}
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


// "use client";

// import { useEffect, useState } from "react";
// import AddNewsModal from "../dashboard/components/AddNewsModal";
// import useNewsStore from "@/store/admin/news.store";
// import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
// import { useRouter } from "next/navigation";

// export default function NewsPage() {
//   const [open, setOpen] = useState(false);
//   const router = useRouter();

//   const { fetchAllNews, news, loading, error } = useNewsStore();

//   useEffect(() => {
//     fetchAllNews();
//   }, [fetchAllNews]);

//   // TEMP handlers (connect API later)
//   const handleEdit = (item) => {
//     console.log("Edit:", item);
//   };

//   const handleDelete = (id) => {
//     if (confirm("Are you sure you want to delete this news?")) {
//       console.log("Delete:", id);
//     }
//   };

//   const handleView = (item) => {
//   router.push(`/newsone/${item.slug}`)
//   };  

//   return (
//     <div className="p-6 sm:p-10">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold text-[#231A15]">
//           News
//         </h1>

//         <button
//           onClick={() => setOpen(true)}
//           className="px-5 py-2.5 rounded-lg
//           bg-gradient-to-r from-orange-500 to-orange-800
//           shadow-md hover:opacity-90 transition text-white"
//         >
//           + Add News
//         </button>
//       </div>

//       {/* Content */}
//       {loading ? (
//         <div className="text-center text-gray-500">
//           Loading...
//         </div>
//       ) : error ? (
//         <div className="text-center text-red-500">
//           {error}
//         </div>
//       ) : Array.isArray(news) && news.length === 0 ? (
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
//               <div className="flex justify-between items-start gap-4">
//                 <div>
//                   <h2 className="text-lg font-semibold text-[#231A15] mb-2">
//                     {item.heading}
//                   </h2>

//                   <p className="text-sm text-gray-600 line-clamp-3">
//                     {item.body}
//                   </p>
//                 </div>

//                 {/* ACTION BUTTONS */}
//                 <div className="flex gap-2">
//                   {/* View */}
//                   <button
//                     onClick={() => handleView(item)}
//                     className="p-2 rounded-lg border hover:bg-gray-100"
//                     title="View"
//                   >
//                     <FiEye />
//                   </button>

//                   {/* Edit */}
//                   <button
//                     onClick={() => handleEdit(item)}
//                     className="p-2 rounded-lg border hover:bg-gray-100"
//                     title="Edit"
//                   >
//                     <FiEdit />
//                   </button>

//                   {/* Delete */}
//                   <button
//                     onClick={() => handleDelete(item._id)}
//                     className="p-2 rounded-lg border border-red-300 text-red-600 hover:bg-red-50"
//                     title="Delete"
//                   >
//                     <FiTrash2 />
//                   </button>
//                 </div>
//               </div>
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



// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import AddNewsModal from "../dashboard/components/AddNewsModal";
// import useNewsStore from "@/store/admin/news.store";
// import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
// import EditNewsModal from "../dashboard/components/EditNewsModal";

// export default function NewsPage() {
//   const [open, setOpen] = useState(false);
//   const [editOpen, setEditOpen] = useState(false);
//   const [selectedNews, setSelectedNews] = useState(null);

//   const router = useRouter();

//   const { fetchAllNews, news, loading, error } = useNewsStore();

//   useEffect(() => {
//     fetchAllNews();
//   }, [fetchAllNews]);

//   // VIEW
//   const handleView = (item) => {
//     router.push(`/newsone/${item.slug}`);
//   };

//   // EDIT
//   const handleEdit = (item) => {
//     setSelectedNews(item);
//     setEditOpen(true);
//   };

//   // DELETE (API later)
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this news?")) {
//       console.log("Delete:", id);
//     }
//   };

//   return (
//     <div className="p-6 sm:p-10">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold text-[#231A15]">
//           News
//         </h1>

//         <button
//           onClick={() => setOpen(true)}
//           className="px-5 py-2.5 rounded-lg
//           bg-gradient-to-r from-orange-500 to-orange-800
//           shadow-md hover:opacity-90 transition text-white"
//         >
//           + Add News
//         </button>
//       </div>

//       {/* Content */}
//       {loading ? (
//         <div className="text-center text-gray-500">
//           Loading...
//         </div>
//       ) : error ? (
//         <div className="text-center text-red-500">
//           {error}
//         </div>
//       ) : !Array.isArray(news) || news.length === 0 ? (
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
//               <div className="flex justify-between items-start gap-4">
//                 {/* Content */}
//                 <div className="flex-1">
//                   <h2 className="text-lg font-semibold text-[#231A15] mb-2">
//                     {item.heading}
//                   </h2>

//                   <p className="text-sm text-gray-600 line-clamp-3">
//                     {item.body}
//                   </p>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex gap-2 shrink-0">
//                   <button
//                     onClick={() => handleView(item)}
//                     className="p-2 rounded-lg border hover:bg-gray-100"
//                     title="View"
//                   >
//                     <FiEye />
//                   </button>

//                   <button
//                     onClick={() => handleEdit(item)}
//                     className="p-2 rounded-lg border hover:bg-gray-100"
//                     title="Edit"
//                   >
//                     <FiEdit />
//                   </button>

//                   <button
//                     onClick={() => handleDelete(item._id)}
//                     className="p-2 rounded-lg border border-red-300 text-red-600 hover:bg-red-50"
//                     title="Delete"
//                   >
//                     <FiTrash2 />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Add News Modal */}
//       <AddNewsModal
//         open={open}
//         onClose={() => setOpen(false)}
//       />

//       {/* Edit News Modal */}
//       <EditNewsModal
//         open={editOpen}
//         news={selectedNews}
//         onClose={() => {
//           setEditOpen(false);
//           setSelectedNews(null);
//           fetchAllNews(); // refresh after edit
//         }}
//       />
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import AddNewsModal from "../dashboard/components/AddNewsModal";
// import EditNewsModal from "../dashboard/components/EditNewsModal";
// import useNewsStore from "@/store/admin/news.store";
// import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";

// export default function NewsPage() {
//   const [open, setOpen] = useState(false);
//   const [editOpen, setEditOpen] = useState(false);
//   const [selectedNews, setSelectedNews] = useState(null);

//   const router = useRouter();

//   // ✅ include deleteNews from store
//   const {
//     fetchAllNews,
//     deleteNews,
//     news,
//     loading,
//     error,
//   } = useNewsStore();

//   useEffect(() => {
//     fetchAllNews();
//   }, [fetchAllNews]);

//   // VIEW
//   const handleView = (item) => {
//     router.push(`/newsone/${item.slug}`);
//   };

//   // EDIT
//   const handleEdit = (item) => {
//     setSelectedNews(item);
//     setEditOpen(true);
//   };

//   // DELETE ✅ (uses slug)
//   const handleDelete = async (slug) => {
//     if (!window.confirm("Are you sure you want to delete this news?")) return;

//     await deleteNews(slug);
//     fetchAllNews(); // refresh list
//   };

//   return (
//     <div className="p-6 sm:p-10">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold text-[#231A15]">
//           News
//         </h1>

//         <button
//           onClick={() => setOpen(true)}
//           className="px-5 py-2.5 rounded-lg
//           bg-gradient-to-r from-orange-500 to-orange-800
//           shadow-md hover:opacity-90 transition text-white"
//         >
//           + Add News
//         </button>
//       </div>

//       {/* Content */}
//       {loading ? (
//         <div className="text-center text-gray-500">
//           Loading...
//         </div>
//       ) : error ? (
//         <div className="text-center text-red-500">
//           {error}
//         </div>
//       ) : !Array.isArray(news) || news.length === 0 ? (
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
//               <div className="flex justify-between items-start gap-4">
//                 {/* Content */}
//                 <div className="flex-1">
//                   <h2 className="text-lg font-semibold text-[#231A15] mb-2">
//                     {item.heading}
//                   </h2>

//                   <p className="text-sm text-gray-600 line-clamp-3">
//                     {item.body}
//                   </p>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex gap-2 shrink-0">
//                   <button
//                     onClick={() => handleView(item)}
//                     className="p-2 rounded-lg border hover:bg-gray-100"
//                     title="View"
//                   >
//                     <FiEye />
//                   </button>

//                   <button
//                     onClick={() => handleEdit(item)}
//                     className="p-2 rounded-lg border hover:bg-gray-100"
//                     title="Edit"
//                   >
//                     <FiEdit />
//                   </button>

//                   <button
//                     onClick={() => handleDelete(item.slug)} // ✅ FIX
//                     className="p-2 rounded-lg border border-red-300 text-red-600 hover:bg-red-50"
//                     title="Delete"
//                   >
//                     <FiTrash2 />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Add News Modal */}
//       <AddNewsModal
//         open={open}
//         onClose={() => setOpen(false)}
//       />

//       {/* Edit News Modal */}
//       <EditNewsModal
//         open={editOpen}
//         news={selectedNews}
//         onClose={() => {
//           setEditOpen(false);
//           setSelectedNews(null);
//           fetchAllNews(); // refresh after edit
//         }}
//       />
//     </div>
//   );
// }



// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import toast from "react-hot-toast";

// import AddNewsModal from "../dashboard/components/AddNewsModal";
// import EditNewsModal from "../dashboard/components/EditNewsModal";
// import useNewsStore from "@/store/admin/news.store";

// import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";

// export default function NewsPage() {
//   const [open, setOpen] = useState(false);
//   const [editOpen, setEditOpen] = useState(false);
//   const [selectedNews, setSelectedNews] = useState(null);

//   const router = useRouter();

//   const {
//     fetchAllNews,
//     deleteNews,
//     news,
//     loading,
//     error,
//   } = useNewsStore();

//   useEffect(() => {
//     fetchAllNews();
//   }, [fetchAllNews]);

//   // VIEW
//   const handleView = (item) => {
//     router.push(`/newsone/${item.slug}`);
//   };

//   // EDIT
//   const handleEdit = (item) => {
//     setSelectedNews(item);
//     setEditOpen(true);
//   };

//   // DELETE with TOAST
//   const handleDelete = async (slug) => {
//     if (!window.confirm("Are you sure you want to delete this news?")) return;

//     const toastId = toast.loading("Deleting news...");

//     try {
//       await deleteNews(slug);
//       toast.success("News deleted successfully", { id: toastId });
//       fetchAllNews();
//     } catch (err) {
//       toast.error("Failed to delete news", { id: toastId });
//     }
//   };

//   return (
//     <div className="p-6 sm:p-10">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-8">
//         <h1 className="text-3xl font-bold text-[#231A15]">
//           News
//         </h1>

//         <button
//           onClick={() => setOpen(true)}
//           className="px-5 py-2.5 rounded-lg
//           bg-gradient-to-r from-orange-500 to-orange-800
//           shadow-md hover:opacity-90 transition text-white"
//         >
//           + Add News
//         </button>
//       </div>

//       {/* Content */}
//       {loading ? (
//         <div className="text-center text-gray-500">
//           Loading...
//         </div>
//       ) : error ? (
//         <div className="text-center text-red-500">
//           {error}
//         </div>
//       ) : !Array.isArray(news) || news.length === 0 ? (
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
//               <div className="flex justify-between items-start gap-4">
//                 {/* Content */}
//                 <div className="flex-1">
//                   <h2 className="text-lg font-semibold text-[#231A15] mb-2">
//                     {item.heading}
//                   </h2>

//                   <p className="text-sm text-gray-600 line-clamp-3">
//                     {item.body}
//                   </p>
//                 </div>

//                 {/* Actions */}
//                 <div className="flex gap-2 shrink-0">
//                   {/* View */}
//                   <button
//                     onClick={() => handleView(item)}
//                     className="p-2 rounded-lg border hover:bg-gray-100"
//                     title="View"
//                   >
//                     <FiEye />
//                   </button>

//                   {/* Edit */}
//                   <button
//                     onClick={() => handleEdit(item)}
//                     className="p-2 rounded-lg border hover:bg-gray-100"
//                     title="Edit"
//                   >
//                     <FiEdit />
//                   </button>

//                   {/* Delete */}
//                   <button
//                     onClick={() => handleDelete(item.slug)}
//                     className="p-2 rounded-lg border border-red-300 text-red-600 hover:bg-red-50"
//                     title="Delete"
//                   >
//                     <FiTrash2 />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Add News Modal */}
//       <AddNewsModal
//         open={open}
//         onClose={() => setOpen(false)}
//       />

//       {/* Edit News Modal */}
//       <EditNewsModal
//         open={editOpen}
//         news={selectedNews}
//         onClose={() => {
//           setEditOpen(false);
//           setSelectedNews(null);
//           fetchAllNews();
//         }}
//       />
//     </div>
//   );
// }




"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import AddNewsModal from "../dashboard/components/AddNewsModal";
import EditNewsModal from "../dashboard/components/EditNewsModal";

import useNewsStore from "@/store/admin/news.store";
import { FiEdit, FiTrash2, FiEye } from "react-icons/fi";
import DeleteConfirmModal from "../dashboard/components/DeleteConfirmModal";

export default function NewsPage() {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteSlug, setDeleteSlug] = useState(null);

  const router = useRouter();

  const {
    fetchAllNews,
    deleteNews,
    news,
    loading,
    error,
  } = useNewsStore();

  useEffect(() => {
    fetchAllNews();
  }, [fetchAllNews]);

  // VIEW
  const handleView = (item) => {
    router.push(`/newsone/${item.slug}`);
  };

  // EDIT
  const handleEdit = (item) => {
    setSelectedNews(item);
    setEditOpen(true);
  };

  // OPEN DELETE POPUP
  const openDeletePopup = (slug) => {
    setDeleteSlug(slug);
    setDeleteOpen(true);
  };

  // CONFIRM DELETE
  const handleConfirmDelete = async () => {
    const toastId = toast.loading("Deleting news...");

    try {
      await deleteNews(deleteSlug);

      toast.success("News deleted successfully", { id: toastId });

      setDeleteOpen(false);
      setDeleteSlug(null);

      fetchAllNews();
    } catch (err) {
      toast.error("Failed to delete news", { id: toastId });
    }
  };

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
      ) : !Array.isArray(news) || news.length === 0 ? (
        <div className="bg-white rounded-xl shadow p-10 text-center text-gray-500">
          No news added yet.
        </div>
      ) : (
        <div className="space-y-4">
          {news.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow p-6"
            >
              <div className="flex justify-between items-start gap-4">
                {/* Content */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-[#231A15] mb-2">
                    {item.heading}
                  </h2>

                  <p className="text-sm text-gray-600 line-clamp-3">
                    {item.body}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => handleView(item)}
                    className="p-2 rounded-lg border hover:bg-gray-100"
                    title="View"
                  >
                    <FiEye />
                  </button>

                  <button
                    onClick={() => handleEdit(item)}
                    className="p-2 rounded-lg border hover:bg-gray-100"
                    title="Edit"
                  >
                    <FiEdit />
                  </button>

                  <button
                    onClick={() => openDeletePopup(item.slug)}
                    className="p-2 rounded-lg border border-red-300
                    text-red-600 hover:bg-red-50"
                    title="Delete"
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add News Modal */}
      <AddNewsModal
        open={open}
        onClose={() => setOpen(false)}
      />

      {/* Edit News Modal */}
      <EditNewsModal
        open={editOpen}
        news={selectedNews}
        onClose={() => {
          setEditOpen(false);
          setSelectedNews(null);
          fetchAllNews();
        }}
      />

      {/* Delete Confirm Modal */}
      <DeleteConfirmModal
        open={deleteOpen}
        loading={loading}
        onClose={() => {
          setDeleteOpen(false);
          setDeleteSlug(null);
        }}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
}
