
"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignIn() {
  const router = useRouter();

  const [form, setForm] = useState({
    identifier: "", // 👈 email OR phone
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { login, loading, error, isLoggedIn, isAdmin, isUser } =
    useAuthStore();

  useEffect(() => {
    if (isLoggedIn && isAdmin) router.replace("/dashboard");
    if (isLoggedIn && isUser) router.replace("/donation");
  }, [isLoggedIn, isAdmin, isUser, router]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // ✅ Email OR Phone validation
  const validate = () => {
    if (!form.identifier.trim()) {
      toast.error("Email or phone is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (
      !emailRegex.test(form.identifier) &&
      !phoneRegex.test(form.identifier)
    ) {
      toast.error("Enter a valid email or phone number");
      return false;
    }

    if (!form.password.trim()) {
      toast.error("Password is required");
      return false;
    }

    if (form.password.length < 3) {
      toast.error("Password must be at least 3 characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await login(form.identifier, form.password);

      if (res?.user) {
        toast.success("Login Successful!");

        if (res.user.role === "admin") router.push("/dashboard");
        else if (res.user.role === "user") router.push("/donation");
        else router.push("/");
      }
    } catch {
      toast.error(error || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E87331] to-[#563D2F] p-6">
      <div className="w-full max-w-[430px] bg-white border border-[#f1ece8] rounded-2xl shadow-xl p-8">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="size-20 rounded-full bg-white border shadow-sm flex items-center justify-center">
            <img src="/logo.jpg" className="object-contain" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-extrabold text-center text-[#2b2019]">
          News Bullet Kerala
        </h1>

        <p className="text-center text-sm text-[#7b7068] mt-1">
          Join our independent journalism community
        </p>

        {/* Tabs */}
        <div className="mt-6 w-full">
          <div className="flex items-center gap-2 bg-[#f6f2ef] rounded-lg p-1">
            <button className="flex-1 py-2 rounded-lg text-sm font-medium bg-white text-orange-600 shadow-sm">
              Sign In
            </button>
            <Link
              href="/signup"
              className="flex justify-center items-center flex-1 py-2 rounded-lg text-sm font-medium text-[#6f6158]"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          {/* EMAIL OR PHONE */}
          <div>
            <label className="block text-sm font-medium text-[#2b2019] mb-1">
              Email or Phone Number
            </label>
            <input
              name="identifier"
              value={form.identifier}
              onChange={handleChange}
              placeholder="Email or phone number"
              className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de]
              rounded-lg outline-none focus:ring-2 focus:ring-orange-200
              placeholder:text-gray-300 text-black"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-[#2b2019] mb-1">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 pr-10 bg-[#fbf8f6] border border-[#eee5de]
                rounded-lg outline-none focus:ring-2 focus:ring-orange-200
                placeholder:text-gray-300 text-black"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-center text-red-600 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-b from-[#f06b14] to-[#e86f24]
            text-white font-medium rounded-xl shadow-md hover:opacity-95
            transition disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
