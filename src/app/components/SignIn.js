// "use client"
// import Link from "next/link";
// import React, { useState } from "react";

// export default function SignIn() {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Sign In Success:\n" + JSON.stringify(form, null, 2));
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E87331] to-[#563D2F]  p-6">
//       <div className="w-full max-w-[430px] bg-white border border-[#f1ece8] rounded-2xl shadow-xl p-8">

//         {/* Logo */}
//         <div className="flex justify-center mb-4">
//           <div className="size-20 rounded-full bg-white border shadow-sm flex items-center justify-center">
//             <img src="/logo.jpg" className="" />
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
//             {/* Active tab */}
//             <button
//               type="button"
//               className="flex-1 py-2 rounded-lg text-sm font-medium bg-white text-orange-600 shadow-sm"
//             >
//               Sign In
//             </button>

//             {/* Inactive tab */}
//             <Link href={"/signup"}
//               type="button"
//               className=" flex justify-center items-center flex-1 py-2 rounded-lg text-sm font-medium text-[#6f6158]"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">

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

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-gradient-to-b from-[#f06b14] to-[#e86f24] 
//             text-white font-medium rounded-xl shadow-md hover:opacity-95 transition"
//           >
//             Sign In
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

// export default function SignIn() {
//   const [form, setForm] = useState({
//     phone: "",
//     password: "",
//   });

//   const { login, loading, error } = useAuthStore();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await login(form.phone, form.password);
//       console.log("LOGIN SUCCESS:", res);
//       alert("Login Success!");
//     } catch (err) {
//       console.log("LOGIN FAILED");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E87331] to-[#563D2F] p-6">

//       <div className="w-full max-w-[430px] bg-white border border-[#f1ece8] rounded-2xl shadow-xl p-8">

//         {/* Logo */}
//         <div className="flex justify-center mb-4">
//           <div className="size-20 rounded-full bg-white border shadow-sm flex items-center justify-center">
//             <img src="/logo.jpg" />
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
//             <button className="flex-1 py-2 rounded-lg text-sm font-medium bg-white text-orange-600 shadow-sm">
//               Sign In
//             </button>
//             <Link
//               href={"/signup"}
//               className="flex justify-center items-center flex-1 py-2 rounded-lg text-sm font-medium text-[#6f6158]"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">

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
//               className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de]
//               rounded-lg outline-none focus:ring-2 focus:ring-orange-200 
//               placeholder:text-gray-300 text-black"
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
//               rounded-lg outline-none focus:ring-2 focus:ring-orange-200
//               placeholder:text-gray-300 text-black"
//             />
//           </div>

//           {/* Error */}
//           {error && <p className="text-center text-red-600 text-sm">{error}</p>}

//           {/* Submit */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 bg-gradient-to-b from-[#f06b14] to-[#e86f24]
//             text-white font-medium rounded-xl shadow-md hover:opacity-95 transition 
//             disabled:opacity-50"
//           >
//             {loading ? "Signing In..." : "Sign In"}
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
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";

// export default function SignIn() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     phone: "",
//     password: "",
//   });

//   const { login, loading, error } = useAuthStore();

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // allow only numbers in phone input
//     if (name === "phone" && !/^\d*$/.test(value)) return;

//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   // VALIDATION
//   const validate = () => {
//     if (!form.phone) {
//       toast.error("Mobile number is required");
//       return false;
//     }
//     if (form.phone.length !== 10) {
//       toast.error("Mobile number must be exactly 10 digits");
//       return false;
//     }
//     if (!form.password) {
//       toast.error("Password is required");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     try {
//       const res = await login(form.phone, form.password);
// console.log(res);

//       // backend response success format:
//       // { statusCode: 200, data: { user: { role }, accessToken }, message }

//       if (res?.user) {
//         toast.success("Login Successful!");

//         // ROLE-BASED REDIRECT
//         if (res.user.role === "admin") {
//           router.push("/dashboard");
//         } else if (res.data.user.role === "user") {
//           router.push("/donation");
//         } else {
//           router.push("/");
//         }
//       }
//     } catch (err) {
//       toast.error(error || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E87331] to-[#563D2F] p-6">

//       <div className="w-full max-w-[430px] bg-white border border-[#f1ece8] rounded-2xl shadow-xl p-8">

//         {/* Logo */}
//         <div className="flex justify-center mb-4">
//           <div className="size-20 rounded-full bg-white border shadow-sm flex items-center justify-center">
//             <img src="/logo.jpg" className="object-contain" />
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
//             <button className="flex-1 py-2 rounded-lg text-sm font-medium bg-white text-orange-600 shadow-sm">
//               Sign In
//             </button>

//             <Link
//               href={"/signup"}
//               className="flex justify-center items-center flex-1 py-2 rounded-lg text-sm font-medium text-[#6f6158]"
//             >
//               Sign Up
//             </Link>
//           </div>
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-[#2b2019] mb-1">
//               Mobile Number
//             </label>
//             <input
//               name="phone"
//               type="tel"
//               value={form.phone}
//               maxLength={10}
//               onChange={handleChange}
//               placeholder="9633535716"
//               className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de]
//               rounded-lg outline-none focus:ring-2 focus:ring-orange-200 
//               placeholder:text-gray-300 text-black"
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
//               rounded-lg outline-none focus:ring-2 focus:ring-orange-200
//               placeholder:text-gray-300 text-black"
//             />
//           </div>

//           {/* Store Error */}
//           {error && <p className="text-center text-red-600 text-sm">{error}</p>}

//           {/* Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 bg-gradient-to-b from-[#f06b14] to-[#e86f24]
//             text-white font-medium rounded-xl shadow-md hover:opacity-95 transition 
//             disabled:opacity-50"
//           >
//             {loading ? "Signing In..." : "Sign In"}
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }



// "use client";

// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { useAuthStore } from "@/store/authStore";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";

// export default function SignIn() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     phone: "",
//     password: "",
//   });

//   const { login, loading, error, isLoggedIn, isAdmin, isUser } = useAuthStore();

//   // 🔥 Auto redirect if already logged in
//   useEffect(() => {
//     if (isLoggedIn && isAdmin) {
//       router.replace("/dashboard");
//     }
//     if (isLoggedIn && isUser) {
//       router.replace("/donation");
//     }
//   }, [isLoggedIn, isAdmin, isUser]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     if (name === "phone" && !/^\d*$/.test(value)) return;

//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const validate = () => {
//     if (!form.phone) {
//       toast.error("Mobile number is required");
//       return false;
//     }
//     if (form.phone.length !== 10) {
//       toast.error("Mobile number must be exactly 10 digits");
//       return false;
//     }
//     if (!form.password) {
//       toast.error("Password is required");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!validate()) return;

//     try {
//       const res = await login(form.phone, form.password);

//       if (res?.user) {
//         toast.success("Login Successful!");

//         if (res.user.role === "admin") {
//           router.push("/dashboard");   // ✅ Correct path
//         } else if (res.user.role === "user") {
//           router.push("/donation");          // user route
//         } else {
//           router.push("/");
//         }
//       }
//     } catch (err) {
//       toast.error(error || "Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E87331] to-[#563D2F] p-6">
//       <div className="w-full max-w-[430px] bg-white border border-[#f1ece8] rounded-2xl shadow-xl p-8">

//         {/* Logo */}
//         <div className="flex justify-center mb-4">
//           <div className="size-20 rounded-full bg-white border shadow-sm flex items-center justify-center">
//             <img src="/logo.jpg" className="object-contain" />
//           </div>
//         </div>

//         {/* Title */}
//         <h1 className="text-2xl font-extrabold text-center text-[#2b2019]">News Bullet Kerala</h1>
//         <p className="text-center text-sm text-[#7b7068] mt-1">Join our independent journalism community</p>

//         {/* Tabs */}
//         <div className="mt-6 w-full">
//           <div className="flex items-center gap-2 bg-[#f6f2ef] rounded-lg p-1">
//             <button className="flex-1 py-2 rounded-lg text-sm font-medium bg-white text-orange-600 shadow-sm">
//               Sign In
//             </button>
//             <Link href="/signup" className="flex justify-center items-center flex-1 py-2 rounded-lg text-sm font-medium text-[#6f6158]">
//               Sign Up
//             </Link>
//           </div>
//         </div>

//         {/* FORM */}
//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">

//           {/* Phone */}
//           <div>
//             <label className="block text-sm font-medium text-[#2b2019] mb-1">Mobile Number</label>
//             <input
//               name="phone"
//               type="tel"
//               value={form.phone}
//               maxLength={10}
//               onChange={handleChange}
//               placeholder="9633535716"
//               className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <label className="block text-sm font-medium text-[#2b2019] mb-1">Password</label>
//             <input
//               name="password"
//               type="password"
//               value={form.password}
//               onChange={handleChange}
//               placeholder="••••••••"
//               className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
//             />
//           </div>

//           {/* Store Error */}
//           {error && <p className="text-center text-red-600 text-sm">{error}</p>}

//           {/* Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full py-3 bg-gradient-to-b from-[#f06b14] to-[#e86f24] text-white font-medium rounded-xl shadow-md hover:opacity-95 transition disabled:opacity-50"
//           >
//             {loading ? "Signing In..." : "Sign In"}
//           </button>

//         </form>
//       </div>
//     </div>
//   );
// }





"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useAuthStore } from "@/store/authStore";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { login, loading, error, isLoggedIn, isAdmin, isUser } = useAuthStore();

  // 🔥 Auto redirect if already logged in
  useEffect(() => {
    if (isLoggedIn && isAdmin) router.replace("/dashboard");
    if (isLoggedIn && isUser) router.replace("/donation");
  }, [isLoggedIn, isAdmin, isUser]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Email + Password Validation
  const validate = () => {
    if (!form.email.trim()) {
      toast.error("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      toast.error("Enter a valid email address");
      return false;
    }
    if (!form.password.trim()) {
      toast.error("Password is required");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await login(form.email, form.password);

      if (res?.user) {
        toast.success("Login Successful!");

        if (res.user.role === "admin") {
          router.push("/dashboard");
        } else if (res.user.role === "user") {
          router.push("/donation");
        } else {
          router.push("/");
        }
      }
    } catch (err) {
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
        <h1 className="text-2xl font-extrabold text-center text-[#2b2019]">News Bullet Kerala</h1>
        <p className="text-center text-sm text-[#7b7068] mt-1">Join our independent journalism community</p>

        {/* Tabs */}
        <div className="mt-6 w-full">
          <div className="flex items-center gap-2 bg-[#f6f2ef] rounded-lg p-1">
            <button className="flex-1 py-2 rounded-lg text-sm font-medium bg-white text-orange-600 shadow-sm">
              Sign In
            </button>
            <Link href="/signup" className="flex justify-center items-center flex-1 py-2 rounded-lg text-sm font-medium text-[#6f6158]">
              Sign Up
            </Link>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">

          {/* EMAIL */}
          <div>
            <label className="block text-sm font-medium text-[#2b2019] mb-1">Email Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm font-medium text-[#2b2019] mb-1">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-[#fbf8f6] border border-[#eee5de] rounded-lg outline-none focus:ring-2 focus:ring-orange-200 placeholder:text-gray-300 text-black"
            />
          </div>

          {/* Store Error */}
          {error && <p className="text-center text-red-600 text-sm">{error}</p>}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-b from-[#f06b14] to-[#e86f24] text-white font-medium rounded-xl shadow-md hover:opacity-95 transition disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

        </form>
      </div>
    </div>
  );
}
