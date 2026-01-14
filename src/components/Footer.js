"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    // Set year on client side to avoid hydration mismatch
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-gradient-to-r from-[#563D2F] to-[#E87331] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt="Logo" className="size-10 rounded-full" />
              <span className="font-semibold text-lg">News Bullet Kerala</span>
            </div>
            <p className="text-sm text-white/90">
              Independent journalism you can trust. Bringing you the latest news 
              from Kerala, India, and around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/news" className="hover:text-orange-200 transition">
                  News
                </Link>
              </li>
              <li>
                <Link href="/video" className="hover:text-orange-200 transition">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-orange-200 transition">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/donation" className="hover:text-orange-200 transition">
                  Subscribe
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/terms" className="hover:text-orange-200 transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-orange-200 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-orange-200 transition">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80">
            <p>
              © {currentYear} News Bullet Kerala. All rights reserved.
            </p>
            <p className="mt-2 md:mt-0">
              Powered by Razorpay for secure payments
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
