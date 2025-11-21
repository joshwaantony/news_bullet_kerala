// import React from "react";

// function page() {
//   return <div>Dashboard</div>;
// }

// export default page;
 


// import StatsCard from "./components/StatsCard";

// export default function AdminDashboard() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

//       <StatsCard title="Total Users" value="1,240" />
//       <StatsCard title="Active Subscriptions" value="320" />
//       <StatsCard title="Subscription Plans" value="5" />

//     </div>
//   );
// }


import { FaUsers, FaCheckCircle, FaListAlt } from "react-icons/fa";
import StatsCard from "./components/StatsCard";

export default function AdminDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      <StatsCard 
        title="Total Users" 
        value="1,240" 
        icon={<FaUsers />} 
      />

      <StatsCard 
        title="Active Subscriptions" 
        value="320" 
        icon={<FaCheckCircle />} 
      />

      <StatsCard 
        title="Subscription Plans" 
        value="5" 
        icon={<FaListAlt />} 
      />

    </div>
  );
}
