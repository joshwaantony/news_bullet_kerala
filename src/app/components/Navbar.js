

// // "use client";

// // import { useEffect, useState } from "react";
// // import Link from "next/link";

// // export default function Navbar() {
// //   const [visible, setVisible] = useState(true);
// //   const [lastScroll, setLastScroll] = useState(0);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScroll = window.pageYOffset;

// //       if (currentScroll > lastScroll && currentScroll > 50) {
// //         // scrolling down → hide navbar
// //         setVisible(false);
// //       } else {
// //         // scrolling up → show navbar
// //         setVisible(true);
// //       }

// //       setLastScroll(currentScroll);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [lastScroll]);

// //   return (
// //     <nav
// //       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
// //                   ${visible ? "translate-y-0" : "-translate-y-full"} 
// //                   bg-white shadow-md`}
// //     >
// //       <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

// //         {/* Logo */}
// //         <div className="flex items-center gap-3">
// //           <img src="/logo.jpg" alt="Logo" className="size-14 rounded-full" />
// //           <span className="font-semibold text-2xl text-black">
// //             News Bullet Kerala
// //           </span>
// //         </div>

// //         {/* Menu */}
// //         <div className="flex items-center gap-6">
// //           <Link href="/video" className="text-black font-medium hover:opacity-70">
// //             Videos
// //           </Link>
// //           <Link href="/contact" className="text-black font-medium hover:opacity-70">
// //             Contact
// //           </Link>
// //           <Link href="/support">
// //             <button className="px-5 py-2 text-white font-semibold rounded-lg shadow
// //               bg-gradient-to-r from-orange-400 to-orange-700 hover:opacity-90 transition">
// //               Support Us
// //             </button>
// //           </Link>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }





// // "use client";

// // import { useEffect, useState } from "react";
// // import Link from "next/link";

// // export default function Navbar() {
// //   const [visible, setVisible] = useState(true);
// //   const [lastScroll, setLastScroll] = useState(0);
// //   const [menuOpen, setMenuOpen] = useState(false);

// //   // 🔥 Auto-hide navbar on scroll
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScroll = window.pageYOffset;

// //       if (currentScroll > lastScroll && currentScroll > 50) {
// //         setVisible(false); // hide when scrolling down
// //       } else {
// //         setVisible(true); // show when scrolling up
// //       }

// //       setLastScroll(currentScroll);
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [lastScroll]);

// //   return (
// //     <>
// //       {/* NAVBAR */}
// //       <nav
// //         className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300
// //         ${visible ? "translate-y-0" : "-translate-y-full"}`}
// //       >
// //         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

// //           {/* Logo */}
// //           <div className="flex items-center gap-3">
// //             <img src="/logo.jpg" alt="Logo" className="size-12 rounded-full" />
// //             <span className="font-semibold text-xl text-black">
// //               News Bullet Kerala
// //             </span>
// //           </div>

// //           {/* DESKTOP MENU */}
// //           <div className="hidden md:flex items-center gap-6">
// //             <Link href="/video" className="text-black font-medium hover:opacity-70">
// //               Videos
// //             </Link>
// //             <Link href="/contact" className="text-black font-medium hover:opacity-70">
// //               Contact
// //             </Link>
// //             <Link href="/support">
// //               <button className="px-5 py-2 text-white font-semibold rounded-lg shadow
// //                 bg-gradient-to-r from-orange-400 to-orange-700 hover:opacity-90 transition">
// //                 Support Us
// //               </button>
// //             </Link>
// //           </div>

// //           {/* MOBILE MENU BUTTON */}
// //           <button
// //             className="md:hidden text-3xl text-black"
// //             onClick={() => setMenuOpen(!menuOpen)}
// //           >
// //             ☰
// //           </button>
// //         </div>

// //         {/* MOBILE MENU DROPDOWN */}
// //         {menuOpen && (
// //           <div className="md:hidden bg-white border-t shadow-lg animate-slideDown">
// //             <div className="flex flex-col px-6 py-4 gap-4">

// //               <Link
// //                 href="/video"
// //                 className="text-black font-medium hover:text-orange-600"
// //                 onClick={() => setMenuOpen(false)}
// //               >
// //                 Videos
// //               </Link>

// //               <Link
// //                 href="/contact"
// //                 className="text-black font-medium hover:text-orange-600"
// //                 onClick={() => setMenuOpen(false)}
// //               >
// //                 Contact
// //               </Link>

// //               <Link href="/support" onClick={() => setMenuOpen(false)}>
// //                 <button 
// //                               className="text-black font-medium hover:text-orange-600">

// //                   Support Us
// //                 </button>
// //               </Link>

// //             </div>
// //           </div>
// //         )}
// //       </nav>

// //       {/* Add spacing so page content doesn't hide behind navbar */}
// //       <div className="h-20"></div>
// //     </>
// //   );
// // }







// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Navbar() {
//   const pathname = usePathname(); // ⭐ current route
//   const [visible, setVisible] = useState(true);
//   const [lastScroll, setLastScroll] = useState(0);
//   const [menuOpen, setMenuOpen] = useState(false);

//   // 🔥 Auto-hide navbar on scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.pageYOffset;

//       if (currentScroll > lastScroll && currentScroll > 50) {
//         setVisible(false); // hide on scroll down
//       } else {
//         setVisible(true); // show on scroll up
//       }

//       setLastScroll(currentScroll);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScroll]);

//   // ⭐ Active route styling
//   const activeClass = "text-orange-600 font-semibold";
//   const normalClass = "text-black font-medium hover:text-orange-600 transition";

//   return (
//     <>
//       <nav
//         className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300
//         ${visible ? "translate-y-0" : "-translate-y-full"}`}
//       >
//         <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <img src="/logo.jpg" alt="Logo" className="size-12 rounded-full" />
//             <span className="font-semibold text-xl text-black">
//               News Bullet Kerala
//             </span>
//           </div>

//           {/* DESKTOP MENU */}
//           <div className="hidden md:flex items-center gap-6">

//             <Link
//               href="/video"
//               className={pathname === "/video" ? activeClass : normalClass}
//             >
//               Videos
//             </Link>

//             <Link
//               href="/contact"
//               className={pathname === "/contact" ? activeClass : normalClass}
//             >
//               Contact
//             </Link>

//             <Link href="/support">
//               <button
//                 className={`px-5 py-2 rounded-lg shadow font-semibold transition 
//                 ${
//                   pathname === "/support"
//                     ? "text-white bg-gradient-to-r from-orange-500 to-orange-700"
//                     : "text-white bg-gradient-to-r from-orange-400 to-orange-700"
//                 }`}
//               >
//                 Support Us
//               </button>
//             </Link>

//           </div>

//           {/* MOBILE MENU BUTTON */}
//           <button
//             className="md:hidden text-3xl text-black"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             ☰
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         {menuOpen && (
//           <div className="md:hidden bg-white border-t shadow-lg animate-slideDown">
//             <div className="flex flex-col px-6 py-4 gap-4">

//               <Link
//                 href="/video"
//                 className={pathname === "/video" ? activeClass : normalClass}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Videos
//               </Link>

//               <Link
//                 href="/contact"
//                 className={pathname === "/contact" ? activeClass : normalClass}
//                 onClick={() => setMenuOpen(false)}
//               >
//                 Contact
//               </Link>

//               <Link href="/support" onClick={() => setMenuOpen(false)}>
//                 <span
//                   className={
//                     pathname === "/support" ? activeClass : normalClass
//                   }
//                 >
//                   Support Us
//                 </span>
//               </Link>

//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Prevent layout shift */}
//       <div className="h-20"></div>
//     </>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { isLoggedIn, logout, user } = useAuthStore();

  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // 🔥 Auto-hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 50) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const activeClass = "text-orange-600 font-semibold";
  const normalClass = "text-black font-medium hover:text-orange-600 transition";

  const handleLogout = () => {
    logout();
    localStorage.clear(); // clear everything
    router.replace("/signin");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-md transition-all duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo" className="size-12 rounded-full" />
            <span className="font-semibold text-xl text-black">
              News Bullet Kerala
            </span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">

            <Link
              href="/video"
              className={pathname === "/video" ? activeClass : normalClass}
            >
              Videos
            </Link>

            <Link
              href="/contact"
              className={pathname === "/contact" ? activeClass : normalClass}
            >
              Contact
            </Link>

            <Link href="/support">
              <button
                className={`px-5 py-2 rounded-lg shadow font-semibold transition ${
                  pathname === "/support"
                    ? "text-white bg-gradient-to-r from-orange-500 to-orange-700"
                    : "text-white bg-gradient-to-r from-orange-400 to-orange-700"
                }`}
              >
                Support Us
              </button>
            </Link>

            {/* ⭐ LOGIN / LOGOUT */}
            {!isLoggedIn ? (
              <Link href="/signin" className={normalClass}>
                Sign In
              </Link>
            ) : (
              <button
                onClick={() => setShowConfirm(true)}
                className="text-red-600 font-medium hover:text-red-800 transition"
              >
                Logout
              </button>
            )}

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl text-black"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg animate-slideDown">
            <div className="flex flex-col px-6 py-4 gap-4">

              <Link
                href="/video"
                className={pathname === "/video" ? activeClass : normalClass}
                onClick={() => setMenuOpen(false)}
              >
                Videos
              </Link>

              <Link
                href="/contact"
                className={pathname === "/contact" ? activeClass : normalClass}
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </Link>

              <Link
                href="/support"
                className={pathname === "/support" ? activeClass : normalClass}
                onClick={() => setMenuOpen(false)}
              >
                Support Us
              </Link>

              {/* ⭐ MOBILE LOGIN / LOGOUT */}
              {!isLoggedIn ? (
                <Link
                  href="/signin"
                  className={normalClass}
                  onClick={() => setMenuOpen(false)}
                >
                  Sign In
                </Link>
              ) : (
                <button
                  onClick={() => {
                    setMenuOpen(false);
                    setShowConfirm(true);
                  }}
                  className="text-red-600 font-medium text-left"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Prevent layout shift */}
      <div className="h-20"></div>

      {/* CONFIRM LOGOUT POPUP */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[300px] shadow-lg">
            <h3 className="text-lg font-semibold text-center">Confirm Logout</h3>
            <p className="text-gray-600 text-sm text-center mt-2">
              Are you sure you want to logout?
            </p>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 border rounded-md hover:bg-gray-100 transition"
              >
                Cancel
              </button>

              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
