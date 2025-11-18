

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll && currentScroll > 50) {
        // scrolling down → hide navbar
        setVisible(false);
      } else {
        // scrolling up → show navbar
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
                  ${visible ? "translate-y-0" : "-translate-y-full"} 
                  bg-white shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo" className="size-14 rounded-full" />
          <span className="font-semibold text-2xl text-black">
            News Bullet Kerala
          </span>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-6">
          <Link href="/video" className="text-black font-medium hover:opacity-70">
            Videos
          </Link>
          <Link href="/contact" className="text-black font-medium hover:opacity-70">
            Contact
          </Link>
          <Link href="/support">
            <button className="px-5 py-2 text-white font-semibold rounded-lg shadow
              bg-gradient-to-r from-orange-400 to-orange-700 hover:opacity-90 transition">
              Support Us
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
