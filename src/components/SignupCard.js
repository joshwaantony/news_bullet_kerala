
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
  const router = useRouter();

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register, loading, error, isLoggedIn, isAdmin, isUser } =
    useAuthStore();

  // 🔥 Auto redirect if already logged in
  useEffect(() => {
    if (isLoggedIn && isAdmin) router.replace("/dashboard");
    if (isLoggedIn && isUser) router.replace("/donation");
  }, [isLoggedIn, isAdmin, isUser, router]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateFields = () => {
    if (!form.fullName.trim()) {
      toast.error("Full Name is required");
      return false;
    }

    if (!form.email.trim()) {
      toast.error("Email is required");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Enter a valid email address");
      return false;
    }

    if (!form.phone.trim()) {
      toast.error("Phone number is required");
      return false;
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(form.phone)) {
      toast.error("Enter a valid 10-digit phone number");
      return false;
    }

    if (!form.password) {
      toast.error("Password is required");
      return false;
    }

    if (form.password.length < 3) {
      toast.error("Password must be at least 3 characters");
      return false;
    }

    if (form.password !== form.confirmPassword) {
      toast.error("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateFields()) return;

    try {
      const data = await register(
        form.fullName,
        form.email,
        form.password,
        form.phone
      );

      toast.success("Account created successfully!");
      router.push("/donation");
    } catch (err) {
      toast.error(error || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E87331] to-[#563D2F] p-6">
      <div className="w-full max-w-[430px] bg-white border border-[#f1ece8] rounded-2xl shadow-xl p-8">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <div className="size-20 rounded-full bg-white border shadow-sm flex items-center justify-center">
            <img src="/logo.jpg" className="object-contain" alt="logo" />
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
            <Link
              href="/signin"
              className="flex justify-center items-center flex-1 py-2 rounded-lg text-sm font-medium text-[#6f6158]"
            >
              Sign In
            </Link>

            <button
              type="button"
              className="flex-1 py-2 rounded-lg text-sm font-medium bg-white text-orange-600 shadow-sm"
            >
              Sign Up
            </button>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-[#2b2019] mb-1">
              Full Name
            </label>
            <input
              name="fullName"
              value={form.fullName}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] 
              rounded-lg outline-none focus:ring-2 focus:ring-orange-200 
              placeholder:text-gray-300 text-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#2b2019] mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] 
              rounded-lg outline-none focus:ring-2 focus:ring-orange-200 
              placeholder:text-gray-300 text-black"
            />
          </div>

          {/* Phone (NEW – same style) */}
          <div>
            <label className="block text-sm font-medium text-[#2b2019] mb-1">
              Phone Number
            </label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="9876543210"
              className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] 
              rounded-lg outline-none focus:ring-2 focus:ring-orange-200 
              placeholder:text-gray-300 text-black"
            />
          </div>

          {/* Password */}
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

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-[#2b2019] mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <input
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 pr-10 bg-[#fbf8f6] border border-[#eee5de] 
                rounded-lg outline-none focus:ring-2 focus:ring-orange-200 
                placeholder:text-gray-300 text-black"
              />
              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash size={18} />
                ) : (
                  <FaEye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Store Error */}
          {error && (
            <p className="text-center text-red-600 text-sm">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-b from-[#f06b14] to-[#e86f24] 
            text-white font-medium rounded-xl shadow-md hover:opacity-95 
            transition disabled:opacity-50"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
