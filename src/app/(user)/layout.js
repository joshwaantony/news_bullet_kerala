"use client";

import { useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function UserLayout({ children }) {
  const router = useRouter();
  const { isLoggedIn, isUser, isAdmin } = useAuthStore();

  useEffect(() => {
    if (!isLoggedIn) return; // allow public user pages

    // Admin logged in → redirect to dashboard
    if (isAdmin) {
      router.replace("/dashboard");
      return;
    }

    // User logged in → redirect to donation page
    if (isUser) {
      router.replace("/donation");
      return;
    }
  }, [isLoggedIn, isUser, isAdmin]);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
