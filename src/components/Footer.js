


"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const [currentYear, setCurrentYear] = useState(2024);
  const isVideoPage = pathname === "/video";

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer
      className={`bg-gradient-to-r from-[#563D2F] to-[#E87331] text-white py-6 px-4 ${
        isVideoPage ? "sticky bottom-0 z-40" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Razorpay Policy Links */}
        <div className="pt-4 border-t border-white/20">
          <h3 className="font-semibold text-lg mb-4">
            Payment Gateway Policies
          </h3>

          <div className="flex flex-wrap gap-4 text-sm">
            <a
              href="https://merchant.razorpay.com/policy/Rw9b1isAdIz9Q0/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-200 transition underline"
            >
              Razorpay Terms
            </a>

            <span className="text-white/60">|</span>

            <a
              href="https://merchant.razorpay.com/policy/Rw9b1isAdIz9Q0/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-200 transition underline"
            >
              Razorpay Privacy
            </a>

            <span className="text-white/60">|</span>

            <a
              href="https://merchant.razorpay.com/policy/Rw9b1isAdIz9Q0/refund"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-200 transition underline"
            >
              Razorpay Refund
            </a>

            <span className="text-white/60">|</span>

            <a
              href="https://merchant.razorpay.com/policy/Rw9b1isAdIz9Q0/shipping"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-200 transition underline"
            >
              Razorpay Shipping
            </a>

            <span className="text-white/60">|</span>

            <a
              href="https://merchant.razorpay.com/policy/Rw9b1isAdIz9Q0/contact_us"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-200 transition underline"
            >
              Razorpay Contact
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-4 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
            <p>© {currentYear} News Bullet Kerala. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Powered by Razorpay for secure payments
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
