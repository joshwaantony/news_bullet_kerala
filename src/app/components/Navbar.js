"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // <-- Detect current route

  // Reusable style helper
  const isActive = (path) =>
    pathname === path ? "text-orange-600 font-semibold" : "text-black";

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="font-semibold text-lg text-black">
            News Bullet Kerala
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/video"
            className={`${isActive("/video")} font-medium hover:opacity-70`}
          >
            Videos
          </Link>

          <Link
            href="/contact"
            className={`${isActive("/contact")} font-medium hover:opacity-70`}
          >
            Contact
          </Link>

          <Link href="/support">
            <button
              className="px-5 py-2 text-white font-semibold rounded-lg shadow
              bg-gradient-to-r from-orange-400 to-orange-700 hover:opacity-90 transition"
            >
              Support Us
            </button>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white shadow-md border-t animate-fadeIn">
          <div className="flex flex-col items-start px-6 py-4 gap-4">
            <Link
              href="/video"
              className={`${isActive("/video")} font-medium`}
              onClick={() => setOpen(false)}
            >
              Videos
            </Link>

            <Link
              href="/contact"
              className={`${isActive("/contact")} font-medium`}
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

            <Link href="/support" onClick={() => setOpen(false)}>
              <button className="text-black  hover:opacity-80 transition">
                Support Us
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
