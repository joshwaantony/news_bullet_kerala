



// export default function Layout({ children }) {
//   return (
//     <html lang="en">
//       <head>
   
//       </head>

//       <body>
        
//         {children}
//       </body>
//     </html>
//   );
// }




// "use client";

// import Sidebar from "./dashboard/components/Sidebar";
// import Topbar from "./dashboard/components/Topbar";



// export default function AdminLayout({ children }) {
//   return (
//     <div className="min-h-screen flex bg-gray-100">
//       <Sidebar />

//       <div className="flex-1 ml-64">
//         <Topbar />
//         <main className="p-6">{children}</main>
//       </div>
//     </div>
//   );
// }


"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import Sidebar from "./dashboard/components/Sidebar";
import Topbar from "./dashboard/components/Topbar";

export default function AdminLayout({ children }) {
  const router = useRouter();
  const { isLoggedIn, isAdmin } = useAuthStore();

  useEffect(() => {
    // Not logged in → go to signin
    if (!isLoggedIn) {
      router.replace("/signin");
      return;
    }

    // Logged in but NOT admin → block
    if (!isAdmin) {
      router.replace("/donation");
      return;
    }
  }, [isLoggedIn, isAdmin]);

  return (
    <div className="min-h-screen flex bg-gray-100">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
