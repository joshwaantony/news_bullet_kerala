// import Link from "next/link";

// export default function Sidebar() {
//   return (
//     <aside className="w-64 bg-[#231A15] text-white fixed h-screen p-6">
//       <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

//       <nav className="space-y-4">
//         <Link href="/dashboard" className="block hover:text-orange-400">
//           Dashboard
//         </Link>
//         <Link href="/create" className="block hover:text-orange-400">
//           Subscription Plans
//         </Link>
//         <Link href="/users" className="block hover:text-orange-400">
//           Users
//         </Link>
//       </nav>
//     </aside>
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
} from "react-icons/fa";

export default function Sidebar() {
  const pathname = usePathname();

  const menu = [
    { title: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
    { title: "Subscription Plans", icon: <FaLayerGroup />, path: "/create" },
    { title: "Users", icon: <FaUsers />, path: "/users" },
    { title: "Settings", icon: <FaCogs />, path: "/settings" },
  ];

  return (
    <aside className="w-64 bg-[#231A15] text-white fixed h-screen p-6 shadow-xl flex flex-col">
      
      {/* Logo / Heading */}
      <div className="mb-10">
        <h2 className="text-2xl font-extrabold tracking-wide">Admin Panel</h2>
        <div className="w-10 mt-3 h-[3px] bg-gradient-to-r from-orange-500 to-orange-700 rounded-full"></div>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-3">
        {menu.map((item, index) => {
          const active = pathname === item.path;

          return (
            <Link
              key={index}
              href={item.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                transition-all duration-200
                ${
                  active
                    ? "bg-gradient-to-r from-orange-500 to-orange-700 shadow-lg text-white"
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

      {/* Footer / Version */}
      <div className="mt-auto pt-10 text-xs text-gray-500">
        © 2025 News Bullet Admin
      </div>
    </aside>
  );
}
