// export default function Topbar() {
//   return (
//     <header className="h-16 bg-white shadow flex items-center justify-between px-6">
//       <h3 className="text-lg font-semibold">Admin Dashboard</h3>

//       <div className="flex items-center gap-3">
//         <p className="text-gray-600 text-sm">Admin</p>
//         <img src="/profile.jpg" className="w-10 h-10 rounded-full border" />
//       </div>
//     </header>
//   );
// }



// "use client";

// import { useState } from "react";
// import { useAuthStore } from "@/store/authStore";
// import { useRouter } from "next/navigation";

// export default function Topbar() {
//   const router = useRouter();
//   const { logout, user } = useAuthStore();

//   const [showConfirm, setShowConfirm] = useState(false);

//   const handleLogout = () => {
//     logout();                // Clear Zustand
//     localStorage.clear();    // Clear everything
//     router.replace("/signin");
//   };

//   return (
//     <>
//       {/* TOPBAR */}
//       <header className="h-16 bg-white shadow flex items-center justify-between px-6">
//         <h3 className="text-lg font-semibold">Admin Dashboard</h3>

//         <div className="flex items-center gap-3">
//           <p className="text-gray-600 text-sm">
//             {user?.name || "Admin"}
//           </p>

//           <img src="/profile.jpg" className="w-10 h-10 rounded-full border" />

//           {/* Logout Button */}
//           <button
//             onClick={() => setShowConfirm(true)}
//             className="px-4 py-1.5 bg-red-600 text-white text-sm rounded-md hover:bg-red-700 transition"
//           >
//             Logout
//           </button>
//         </div>
//       </header>

//       {/* CONFIRM POPUP */}
//       {showConfirm && (
//         <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-lg w-[320px] p-6">
//             <h4 className="text-lg font-semibold text-gray-800 text-center">
//               Confirm Logout
//             </h4>
//             <p className="text-sm text-gray-600 text-center mt-2">
//               Are you sure you want to logout?
//             </p>

//             <div className="flex justify-center gap-4 mt-6">
//               <button
//                 onClick={() => setShowConfirm(false)}
//                 className="px-4 py-2 text-sm border rounded-md hover:bg-gray-100"
//               >
//                 Cancel
//               </button>

//               <button
//                 onClick={handleLogout}
//                 className="px-4 py-2 text-sm bg-red-600 text-white rounded-md hover:bg-red-700"
//               >
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }



"use client";

import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { FaChevronDown, FaSignOutAlt, FaUser } from "react-icons/fa";

export default function Topbar() {
  const router = useRouter();
  const { logout, user } = useAuthStore();

  const [dropdown, setDropdown] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogout = () => {
    logout();
    localStorage.clear();
    router.replace("/signin");
  };

  return (
    <>
      {/* TOPBAR */}
      <header className="h-16 bg-white shadow-md flex items-center justify-between px-6 relative z-40">

        {/* Left: Title */}
        <h3 className="text-xl font-extrabold text-[#563D2F] tracking-wide">
          Admin Dashboard
        </h3>

        {/* Right: Profile + Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdown(!dropdown)}
            className="flex items-center gap-3 px-4 py-2 bg-white/70 backdrop-blur 
                       rounded-xl shadow hover:shadow-md transition"
          >
            <img
              src="/profile.jpg"
              className="w-10 h-10 rounded-full border shadow-sm"
            />

            <div className="text-left">
              <p className="text-sm font-semibold text-gray-800">{user?.name}</p>
              <span className="text-xs text-gray-500 capitalize">{user?.role}</span>
            </div>

            <FaChevronDown
              className={`text-gray-600 text-sm transition ${
                dropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* DROPDOWN MENU */}
          {dropdown && (
            <div className="absolute right-0 mt-2 w-44 bg-white shadow-xl rounded-xl p-2 
                            border border-gray-100 animate-slideDown">
              <button
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg 
                           hover:bg-gray-100 text-gray-700 text-sm"
              >
                <FaUser /> Profile
              </button>

              <button
                onClick={() => {
                  setShowConfirm(true);
                  setDropdown(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg 
                           hover:bg-red-50 text-red-600 text-sm"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Accent Gradient Line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-orange-500 to-orange-800"></div>

      {/* LOGOUT CONFIRM MODAL */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white rounded-xl shadow-2xl w-[340px] p-6 animate-scaleIn">

            <h4 className="text-lg font-bold text-center text-gray-800">
              Logout Confirmation
            </h4>
            <p className="text-center text-gray-600 text-sm mt-2">
              Are you sure you want to logout?
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-lg border text-sm hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-orange-500 to-orange-700 
                           text-white text-sm shadow hover:opacity-90"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style>{`
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.25s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-scaleIn {
          animation: scaleIn 0.25s ease-out;
        }
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </>
  );
}
