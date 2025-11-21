"use client";

import { useEffect } from "react";

export default function LoadingPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/signup";  // Redirect after 3 sec
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-br from-[#E87331] to-[#563D2F]">
      {/* Logo animation */}
      <img
        src="/logo.jpg"
        alt="Loading Logo"
        className="w-24 h-24 animate-bounce rounded-full"
      />
    </div>
  );
}
