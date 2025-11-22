// "use client";

// import { useEffect, useState } from "react";
// import api from "@/api/axios";

// export default function UsersPage() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const getUsers = async () => {
//     try {
//       const res = await api.get("/users"); // <-- change based on your API route
//       setUsers(res.data.data || []);
//     } catch (err) {
//       console.error("Error fetching users:", err);
//     }
//     setLoading(false);
//   };

//   useEffect(() => {
//     getUsers();
//   }, []);

//   if (loading)
//     return (
//       <p className="p-6 text-center text-gray-500">Loading Users...</p>
//     );

//   return (
//     <div>
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-xl font-semibold">Users</h1>
//       </div>

//       {/* Users Table */}
//       <div className="overflow-x-auto rounded-lg shadow bg-white">
//         <table className="w-full text-left">
//           <thead className="bg-gray-100 border-b">
//             <tr>
//               <th className="p-3">Name</th>
//               <th className="p-3">Phone</th>
//               <th className="p-3">Role</th>
//               <th className="p-3">Status</th>
//               <th className="p-3">Created</th>
//             </tr>
//           </thead>

//           <tbody>
//             {users.map((user) => (
//               <tr
//                 key={user._id}
//                 className="border-b hover:bg-gray-50 transition"
//               >
//                 <td className="p-3">{user.name}</td>
//                 <td className="p-3">{user.phone}</td>
//                 <td className="p-3 capitalize">{user.role}</td>
//                 <td className="p-3">
//                   {user.status === "active" ? (
//                     <span className="px-3 py-1 rounded-lg bg-green-100 text-green-700 text-sm">
//                       Active
//                     </span>
//                   ) : (
//                     <span className="px-3 py-1 rounded-lg bg-red-100 text-red-700 text-sm">
//                       Blocked
//                     </span>
//                   )}
//                 </td>
//                 <td className="p-3 text-sm text-gray-500">
//                   {new Date(user.createdAt).toLocaleDateString()}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {users.length === 0 && (
//         <p className="text-center text-gray-600 mt-6">
//           No users found.
//         </p>
//       )}
//     </div>
//   );
// }





"use client";

import { useEffect, useState } from "react";
import api from "@/api/axios";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getUsers = async () => {
    try {
      const res = await api.get("/users"); // Adjust your API
      setUsers(res.data.data || []);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
    setLoading(false);
  };

  // useEffect(() => {
  //   getUsers();
  // }, []);

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading)
    return (
      <p className="p-6 text-center text-gray-500 animate-pulse">
        Loading Users...
      </p>
    );

  return (
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-[#231A15]">
          Users Management
        </h1>
        <p className="text-gray-600">View all registered users</p>

        <div className="w-28 h-1 bg-gradient-to-r from-orange-500 to-orange-700 rounded-full mt-3"></div>
      </div>

      {/* Search Bar */}
      <div className="flex justify-end mb-6">
        <input
          type="text"
          placeholder="Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-64 px-4 py-2 rounded-lg border bg-gray-50 focus:ring-2 
                     focus:ring-orange-400 placeholder:text-gray-400"
        />
      </div>

      {/* Users Table Card */}
      <div className="overflow-x-auto rounded-2xl shadow-lg bg-white border border-gray-200">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-orange-500 to-orange-700 text-white">
            <tr>
              <th className="p-4 text-left text-sm font-semibold">Name</th>
              <th className="p-4 text-left text-sm font-semibold">Phone</th>
              <th className="p-4 text-left text-sm font-semibold">Role</th>
              <th className="p-4 text-left text-sm font-semibold">Status</th>
              <th className="p-4 text-left text-sm font-semibold">Created</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((user, index) => (
              <tr
                key={user._id}
                className={`transition ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } hover:bg-orange-50`}
              >
                <td className="p-4 font-medium">{user.name}</td>
                <td className="p-4">{user.phone}</td>

                <td className="p-4 capitalize">
                  <span className="px-3 py-1 rounded-lg text-sm font-semibold bg-blue-100 text-blue-700">
                    {user.role}
                  </span>
                </td>

                <td className="p-4">
                  {user.status === "active" ? (
                    <span className="px-3 py-1 rounded-lg bg-green-100 text-green-700 text-sm font-semibold">
                      Active
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-lg bg-red-100 text-red-700 text-sm font-semibold">
                      Blocked
                    </span>
                  )}
                </td>

                <td className="p-4 text-sm text-gray-600">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-600 mt-6">No users found.</p>
      )}
    </div>
  );
}
