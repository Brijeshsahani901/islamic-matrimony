

"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/api/auth.api";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiUser, FiLock } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function Register() {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    mutate,
    isPending,
    isError,
    error,
  } = useMutation({
    mutationFn: async () => {
      const payload = {
        username: form.username,
        email: form.email,
        phone: form.phone,
        password: form.password,
        password_confirmation: form.confirmPassword,
      };

      return await register(payload);
    },
    onSuccess: (data) => {
      const token = data?.data?.token;
      sessionStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(data.data.user));
      router.push("/complete-profile");
    },
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate();
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex flex-col items-center justify-center px-4">
        
      <motion.div {...fadeInUp} className="w-full max-w-md mb-6  mt-10">
         <div className="mb-4">
        <a href="/" className="text-sm text-gray-500 hover:underline">
          ← Back to Home
        </a>
      </div>
        <div className="flex items-center">
          {/* <span className="text-4xl text-red-600">❤️</span> */}
              <img
                  src="/images/Logo.PNG"
                  alt="Logo"
                  width={100}
                  height={100}
                  className="hover:scale-110 transition-transform duration-500 ease-in-out"
                  priority
                />
          <div>
            <h1 className="text-2xl font-bold text-red-700">Marrying Muslims</h1>
            <p className="text-xs text-gray-600 -mt-1">Marriage The Halal Way</p>
          </div>
        </div>
        <p className="text-sm text-gray-600 mt-2">
          Begin your journey to find your perfect match
        </p>
      </motion.div>

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md bg-white shadow-md rounded-xl p-8"
      >
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold mb-1">Create Account</h2>
          <p className="text-sm text-gray-500">Join our community today</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label className="text-sm font-medium text-gray-700">Username</label>
            <div className="relative">
              <FiUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter username"
                className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <div className="relative">
              <FiPhone className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="pl-10 pr-3 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="pl-10 pr-10 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
                required
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-3 text-gray-400" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="pl-10 pr-10 py-2 w-full rounded-md border border-gray-300 focus:ring-2 focus:ring-red-400 outline-none"
                required
              />
              <div
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2.5 text-gray-500 cursor-pointer"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition duration-200 cursor-pointer"
          >
            {isPending ? "Creating..." : "Create Account"}
          </button>

          {/* Error Handling */}
          {isError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mt-2">
              <div className="flex items-start space-x-2">
                <svg
                  className="w-5 h-5 mt-0.5 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856C19.07 20 20 19.105 20 18V6c0-1.105-.93-2-2.082-2H6.082C4.93 4 4 4.895 4 6v12c0 1.105.93 2 2.082 2z"
                  />
                </svg>
                <div>
                  <p className="font-semibold">Something went wrong</p>
                  {typeof error === "string" ? (
                    <p className="text-sm mt-1">{error}</p>
                  ) : (
                    <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                      {Object.entries(error?.errors || {}).map(
                        ([key, messages]) =>
                                                  messages.map((msg, i) => (
                            <li key={`${key}-${i}`}>{msg}</li>
                          ))
                      )}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          )}
        </form>

        <p className="text-sm text-center mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-red-600 font-medium hover:underline ">
            Sign in here
          </Link>
        </p>
      </motion.div>

   
    </div>
  );
}

