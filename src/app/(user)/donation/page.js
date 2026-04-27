import Donation from "@/components/Donation";
import ProtectedRoute from "@/components/ProtectedRoute";
import React from "react";

function page() {
  return (
    <ProtectedRoute>
      <Donation/>
    </ProtectedRoute>
  );
}

export default page;