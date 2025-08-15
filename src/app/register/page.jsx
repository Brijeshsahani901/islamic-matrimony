// pages/register.tsx
"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/api/auth.api";
import { Eye, EyeOff } from "lucide-react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"; 

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
  console.log(data);

  const token = data?.data?.token;
  sessionStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(data.data.user));

  // ✅ Navigate directly to complete-profile
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 border-neutral-300 to-white flex items-center flex-col justify-center px-4">
      <div className="flex flex-col items-start w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mt-5">
          <div className="flex items-center w-full">
            <span className="text-red-600 text-5xl">❤️</span>
            <div className="flex flex-col ml-2">
              <span className="text-2xl font-bold text-red-700">WIFE4LIFE</span>
              <span className="text-xs text-gray-700 -mt-1">
                Marriage The Halal Way
              </span>
            </div>
          </div>

          <p className="text-md text-gray-600 mt-2 text-center">
            Begin your journey to find your perfect match
          </p>
        </div>
      </div>

      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 my-5">
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-2xl font-bold text-center">Create Account</h1>
          <p className="text-gray-500 text-sm text-center">
            Join our community and find your soulmate
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-semibold">Username</label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Enter username"
              className="w-full mt-1 px-3 py-2 border rounded-md border-neutral-300 outline-none focus:ring-2 ring-red-300"
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full mt-1 px-3 py-2 border rounded-md border-neutral-300 outline-none focus:ring-2 ring-red-300"
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full mt-1 px-3 py-2 border rounded-md border-neutral-300 outline-none focus:ring-2 ring-red-300"
              required
            />
          </div>

          <div className="relative">
            <label className="text-sm font-semibold">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter password"
              className="w-full mt-1 px-3 py-2 border border-neutral-300 rounded-md outline-none focus:ring-2 ring-red-300"
              required
            />
            <div
              className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          <div className="relative">
            <label className="text-sm font-semibold">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full mt-1 px-3 py-2 border border-neutral-300 rounded-md outline-none focus:ring-2 ring-red-300"
              required
            />
            <div
              className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md"
          >
            {isPending ? "Creating..." : "Create Account"}
          </button>

     

        {isError && (
  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mt-4">
    <div className="flex items-start space-x-2">
      <svg
        className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856C19.07 20 20 19.105 20 18V6c0-1.105-.93-2-2.082-2H6.082C4.93 4 4 4.895 4 6v12c0 1.105.93 2 2.082 2z" />
      </svg>

      <div>
        <p className="font-semibold">Something went wrong</p>

        {typeof error === 'string' ? (
          <p className="text-sm mt-1">{error}</p>
        ) : (
          <ul className="list-disc list-inside text-sm mt-1 space-y-1">
            {Object.entries(error?.errors || {}).map(([key, messages]) =>
              messages.map((msg, i) => <li key={`${key}-${i}`}>{msg}</li>)
            )}
          </ul>
        )}
      </div>
    </div>
  </div>
)}

        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-red-600 font-medium hover:underline">
            Sign in here
          </a>
        </p>
      </div>

      <div className="text-center my-3">
        <a href="/" className="text-sm text-gray-500 hover:underline">
          ← Back to Home
        </a>
      </div>
    </div>
  );
}
