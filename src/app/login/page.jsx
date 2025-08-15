"use client"

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { userLogin } from "@/api/auth.api";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

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
      console.log(data)
       localStorage.setItem("user", JSON.stringify(data.data.user));
  localStorage.setItem("token", data.data.token);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500); // delay for UX
    },
    onError: (err) => {
      console.error(err)
      toast.error(err.message || "Login failed. Please try again.");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-pink-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-xl p-8 sm:p-10">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 text-red-600 text-3xl font-bold">
            <span className="text-4xl">❤️</span>
            <span>WIFE4LIFE</span>
          </div>
          <p className="text-gray-500 text-sm">Marriage The Halal Way</p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mb-1 text-center">Welcome Back</h2>
        <p className="text-sm text-gray-500 text-center mb-6">
          Sign in to your account to continue
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center space-x-2 text-gray-600">
              <input type="checkbox" className="accent-red-500" />
              <span>Remember me</span>
            </label>
            <a href="#" className="text-red-500 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-red-600 text-white py-2.5 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-md font-medium disabled:opacity-70"
          >
            {isPending ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?
          <a href="/register" className="text-red-500 hover:underline font-medium">Sign Up</a>
        </p>

        <p className="text-xs text-center text-gray-400 mt-4">
          By signing in, you agree to our
          <a href="#" className="text-red-500 hover:underline">Terms of Service</a> and
          <a href="#" className="text-red-500 hover:underline">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
