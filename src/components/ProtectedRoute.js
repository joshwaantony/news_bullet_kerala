"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();
  const [isClient, setIsClient] = useState(false);

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Only redirect after client-side hydration
    if (isClient && !isLoggedIn) {
      // Redirect to signup page if not logged in
      router.replace("/signup");
    }
  }, [isClient, isLoggedIn, router]);

  // Show loading state during SSR or before hydration
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-[#E87331] to-[#563D2F]">
        <div className="text-center">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  // Only render children if user is logged in
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-[#E87331] to-[#563D2F]">
        <div className="text-center">
          <p>Redirecting to signup...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}