



// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   FaTachometerAlt,
//   FaUsers,
//   FaCogs,
//   FaLayerGroup,
//   FaTimes,
// } from "react-icons/fa";

// export default function Sidebar({ isOpen, setIsOpen }) {
//   const pathname = usePathname();

//   const menu = [
//     { title: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
//     { title: "Subscription Plans", icon: <FaLayerGroup />, path: "/create" },
//     { title: "Users", icon: <FaUsers />, path: "/users" },
//     { title: "Settings", icon: <FaCogs />, path: "/settings" },
//   ];

//   return (
//     <>
//       {/* ===== MOBILE OVERLAY ===== */}
//       {isOpen && (
//         <div
//           onClick={() => setIsOpen(false)}
//           className="fixed inset-0 bg-black/40 z-40 sm:hidden"
//         />
//       )}

//       {/* ===== SIDEBAR / DRAWER ===== */}
//       <aside
//         className={`
//           fixed top-0 left-0 h-screen w-64 bg-[#231A15] text-white 
//           p-6 shadow-xl flex flex-col z-50 
//           transition-transform duration-300 ease-out
//           sm:translate-x-0
//           ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
//         `}
//       >
//         {/* Close Button (mobile only) */}
//         <button
//           onClick={() => setIsOpen(false)}
//           className="sm:hidden absolute right-4 top-4 text-white text-xl"
//         >
//           <FaTimes />
//         </button>

//         {/* Logo / Heading */}
//         <div className="mb-10 mt-4 sm:mt-0">
//           <h2 className="text-2xl font-extrabold tracking-wide">Admin Panel</h2>
//           <div className="w-10 mt-3 h-[3px] bg-gradient-to-r from-orange-500 to-orange-700 rounded-full"></div>
//         </div>

//         {/* Menu */}
//         <nav className="flex flex-col gap-3">
//           {menu.map((item, index) => {
//             const isActive = pathname === item.path;

//             return (
//               <Link
//                 key={index}
//                 href={item.path}
//                 onClick={() => setIsOpen(false)} // close drawer on mobile
//                 className={`
//                   flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
//                   transition-all duration-200
//                   ${
//                     isActive
//                       ? "bg-gradient-to-r from-orange-500 to-orange-700 shadow-lg text-white"
//                       : "text-gray-300 hover:bg-white/10 hover:text-white"
//                   }
//                 `}
//               >
//                 <span className="text-lg">{item.icon}</span>
//                 {item.title}
//               </Link>
//             );
//           })}
//         </nav>

//         {/* Footer */}
//         <div className="mt-auto pt-10 text-xs text-gray-500">
//           © 2025 News Bullet Admin
//         </div>
//       </aside>
//     </>
//   );
// }



"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaTachometerAlt,
  FaUsers,
  FaCogs,
  FaLayerGroup,
  FaTimes,
  FaNewspaper, // 🆕 NEWS ICON
} from "react-icons/fa";

export default function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();

  const menu = [
    { title: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { title: "Subscription Plans", icon: <FaLayerGroup />, path: "/create" },

    // 🆕 NEWS MENU
    { title: "News", icon: <FaNewspaper />, path: "/newsone" },

    { title: "Users", icon: <FaUsers />, path: "/users" },
    { title: "Settings", icon: <FaCogs />, path: "/settings" },
  ];

  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 sm:hidden"
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-[#231A15] text-white 
          p-6 shadow-xl flex flex-col z-50 
          transition-transform duration-300 ease-out
          sm:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full sm:translate-x-0"}
        `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="sm:hidden absolute right-4 top-4 text-white text-xl"
        >
          <FaTimes />
        </button>

        <div className="mb-10 mt-4 sm:mt-0">
          <h2 className="text-2xl font-extrabold">Admin Panel</h2>
          <div className="w-10 mt-3 h-[3px] bg-gradient-to-r from-orange-500 to-orange-700 rounded-full" />
        </div>

        <nav className="flex flex-col gap-3">
          {menu.map((item, index) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={index}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                  transition-all duration-200
                  ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-orange-700 shadow-lg"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }
                `}
              >
                <span className="text-lg">{item.icon}</span>
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto pt-10 text-xs text-gray-500">
          © 2025 News Bullet Admin
        </div>
      </aside>
    </>
  );
}
