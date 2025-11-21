// "use client"
// import Link from "next/link";
// import React, { useState } from "react";

// export default function SignUp() {
//   const [form, setForm] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     alert("Sign Up Success:\n" + JSON.stringify(form, null, 2));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E87331] to-[#563D2F]  p-6">
//       <div className="w-full max-w-[430px] bg-white border border-[#f1ece8] rounded-2xl shadow-xl p-8">

//         {/* Logo */}
//         <div className="flex justify-center mb-4">
//           <div className="size-20 rounded-full bg-white border shadow-sm flex items-center justify-center">
//             <img src="/logo.jpg" className=" " />
//           </div>
//         </div>

//         {/* Title */}
//         <h1 className="text-2xl font-extrabold text-center text-[#2b2019]">
//           News Bullet Kerala
//         </h1>
//         <p className="text-center text-sm text-[#7b7068] mt-1">
//           Join our independent journalism community
//         </p>

//         {/* Tabs */}
//         <div className="mt-6 w-full">
//           <div className="flex items-center gap-2 bg-[#f6f2ef] rounded-lg p-1">
//             <Link href={"/signin"}
//               type="button"
//               className="  flex justify-center items-center flex-1 py-2 rounded-lg text-sm font-medium text-[#6f6158]"
//             >
//               Sign In
//             </Link>

//             <button
//               type="button"
//               className="flex-1 py-2 rounded-lg text-sm font-medium bg-white text-orange-600 shadow-sm"
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">

//           {/* Full Name */}
//           <div>
//             <label className="block text-sm font-medium text-[#2b2019] mb-1">
//               Full Name
//             </label>
//             <input
//               name="fullName"
//               value={form.fullName}
//               onChange={handleChange}
//               placeholder="Your Name"
//               className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] 
//               rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label className="block text-sm font-medium text-[#2b2019] mb-1">
//               Email
//             </label>
//             <input
//               name="email"
//               type="email"
//               value={form.email}
//               onChange={handleChange}
//               placeholder="your@email.com"
//               className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] 
//               rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-[#2b2019] mb-1">
//               Password
//             </label>
//             <input
//               name="password"
//               type="password"
//               value={form.password}
//               onChange={handleChange}
//               placeholder="••••••••"
//               className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] 
//               rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-sm font-medium text-[#2b2019] mb-1">
//               Confirm Password
//             </label>
//             <input
//               name="confirmPassword"
//               type="password"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               placeholder="••••••••"
//               className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] 
//               rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-gradient-to-b from-[#f06b14] to-[#e86f24] 
//             text-white font-medium rounded-xl shadow-md hover:opacity-95 transition"
//           >
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }





// "use client";

// import Link from "next/link";
// import React, { useState } from "react";
// import { useAuthStore } from "@/store/authStore"; 

// export default function SignUp() {
//   const [form, setForm] = useState({
//     fullName: "",
//     phone: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const { register, loading, error } = useAuthStore();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       const data = await register(form.fullName, form.phone, form.password);
//       // registration success
//       console.log("REGISTER SUCCESS:", data);
//       alert("Sign Up successful!");
//       // optionally redirect or clear form
//     } catch (err) {
//       console.error("REGISTER FAILED", err);
//       // error is also available from store.error
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E87331] to-[#563D2F] p-6">
//       <div className="w-full max-w-[430px] bg-white border border-[#f1ece8] rounded-2xl shadow-xl p-8">

//         {/* Logo */}
//         <div className="flex justify-center mb-4">
//           <div className="size-20 rounded-full bg-white border shadow-sm flex items-center justify-center">
//             <img src="/logo.jpg" className="object-contain" alt="logo"/>
//           </div>
//         </div>

//         {/* Title */}
//         <h1 className="text-2xl font-extrabold text-center text-[#2b2019]">
//           News Bullet Kerala
//         </h1>
//         <p className="text-center text-sm text-[#7b7068] mt-1">
//           Join our independent journalism community
//         </p>

//         {/* Tabs */}
//         <div className="mt-6 w-full">
//           <div className="flex items-center gap-2 bg-[#f6f2ef] rounded-lg p-1">
//             <Link
//               href={"/signin"}
//               className="flex justify-center items-center flex-1 py-2 rounded-lg text-sm font-medium text-[#6f6158]"
//             >
//               Sign In
//             </Link>

//             <button
//               type="button"
//               className="flex-1 py-2 rounded-lg text-sm font-medium bg-white text-orange-600 shadow-sm"
//             >
//               Sign Up
//             </button>
//           </div>
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">

//           {/* Full Name */}
//           <div>
//             <label className="block text-sm font-medium text-[#2b2019] mb-1">
//               Full Name
//             </label>
//             <input
//               name="fullName"
//               value={form.fullName}
//               onChange={handleChange}
//               placeholder="Your Name"
//               className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-[#2b2019] mb-1">
//               Mobile Number
//             </label>
//             <input
//               name="phone"
//               type="tel"
//               value={form.phone}
//               onChange={handleChange}
//               placeholder="9633535716"
//               className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-[#2b2019] mb-1">
//               Password
//             </label>
//             <input
//               name="password"
//               type="password"
//               value={form.password}
//               onChange={handleChange}
//               placeholder="••••••••"
//               className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
//             />
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <label className="block text-sm font-medium text-[#2b2019] mb-1">
//               Confirm Password
//             </label>
//             <input
//               name="confirmPassword"
//               type="password"
//               value={form.confirmPassword}
//               onChange={handleChange}
//               placeholder="••••••••"
//               className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
//             />
//           </div>

//           {/* Error from store */}
//           {error && <p className="text-center text-red-600 text-sm">{error}</p>}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 bg-gradient-to-b from-[#f06b14] to-[#e86f24] text-white font-medium rounded-xl shadow-md hover:opacity-95 transition disabled:opacity-50"
//           >
//             {loading ? "Signing Up..." : "Sign Up"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }




"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";

export default function SignUp() {
      const router = useRouter();
    
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const { register, loading, error, isLoggedIn, isAdmin, isUser } = useAuthStore();
  
    // 🔥 Auto redirect if already logged in
    useEffect(() => {
      if (isLoggedIn && isAdmin) {
        router.replace("/dashboard");
      }
      if (isLoggedIn && isUser) {
        router.replace("/donation");
      }
    }, [isLoggedIn, isAdmin, isUser]);
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Only allow digits for phone number
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return; 
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateFields = () => {
    if (!form.fullName.trim()) {
      toast.error("Full Name is required");
      return false;
    }

    if (!form.phone) {
      toast.error("Mobile number is required");
      return false;
    }

    if (form.phone.length !== 10) {
      toast.error("Mobile number must be exactly 10 digits");
      return false;
    }

    if (!form.password) {
      toast.error("Password is required");
      return false;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
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

    if (!validateFields()) return; // stop API call if validation fails

    try {
      const data = await register(form.fullName, form.phone, form.password);

      toast.success("Account created successfully!");

      console.log("REGISTER SUCCESS:", data);
       router.push("/donation");
    } catch (err) {
      toast.error(error || "Registration failed");
      console.error("REGISTER FAILED:", err);
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
              href={"/signin"}
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
              className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-[#2b2019] mb-1">
              Mobile Number
            </label>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              maxLength={10}
              placeholder="9633535716"
              className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[#2b2019] mb-1">
              Password
            </label>
            <input
              name="password"
              type="text"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-[#2b2019] mb-1">
              Confirm Password
            </label>
            <input
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
            />
          </div>

          {/* Store Error */}
          {error && <p className="text-center text-red-600 text-sm">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-b from-[#f06b14] to-[#e86f24] text-white font-medium rounded-xl shadow-md hover:opacity-95 transition disabled:opacity-50"
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
