"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { userLogin } from "@/api/auth.api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { FiMail, FiLock } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const {
    mutate: login,
    isPending,
  } = useMutation({
    mutationFn: userLogin,
    onSuccess: (data) => {
      toast.success("Logged in successfully!");
      localStorage.setItem("user", JSON.stringify(data.data.user));
      sessionStorage.setItem("token", data.data.token);
      setTimeout(() => {
        router.push("/dashboard");
      }, 500);
    },
    onError: (err) => {
      console.error(err);
      toast.error(err.message || "Login failed. Please try again.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex items-center justify-center px-4">
      <motion.div
        {...fadeIn}
        className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 sm:p-10"
      >
        {/* Logo */}
        <div className="flex flex-col items-center mb-4">
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
        </div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-2xl font-semibold text-gray-800 mb-1 text-center"
        >
          Welcome Back
        </motion.h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign in to your account to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <motion.div {...fadeIn}>
            <label className="block text-sm text-gray-700 mb-1">Email Address</label>
            <div className="relative">
              <FiMail className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition-all"
              />
            </div>
          </motion.div>

          {/* Password Field */}
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-3.5 text-gray-400" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition-all"
              />
            </div>
          </motion.div>

          {/* Options */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="flex justify-between items-center text-sm"
          >
            <label className="flex items-center space-x-2 text-gray-600">
              <input type="checkbox" className="accent-red-500" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-red-500 hover:underline">
              Forgot password?
            </a>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            {...fadeIn}
            transition={{ delay: 0.4 }}
            type="submit"
            disabled={isPending}
            className="w-full cursor-pointer bg-red-600 text-white py-2.5 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-md font-medium disabled:opacity-70"
          >
            {isPending ? "Signing in..." : "Sign In"}
          </motion.button>
        </form>

        {/* Sign up link */}
        <motion.p
          {...fadeIn}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-600 mt-6"
        >
          Don’t have an account?{" "}
          <Link href="/register" className="text-red-500 hover:underline font-medium cursor-pointer">
            Sign Up
          </Link>
        </motion.p>

        {/* Legal links */}
        <motion.p
          {...fadeIn}
          transition={{ delay: 0.6 }}
          className="text-xs text-center text-gray-400 mt-4"
        >
          By signing in, you agree to our{" "}
          <Link href="/terms-and-conditions" className="text-red-500 hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy-policy" className="text-red-500 hover:underline">
            Privacy Policy
          </Link>
          .
        </motion.p>
      </motion.div>
    </div>
  );
}
