"use client";

import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";

export default function HeroSection() {
  return (
    <section className="bg-[#fff5f5] py-20 px-4 ">
      <div className="max-w-5xl mx-auto text-center ">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mt-20">
          Find Your Ideal <span className="text-red-600">Life Partner</span>
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-[90vh] items-center mx-auto">
          Connect with compatible Muslims in a safe, respectful environment
          designed for serious matrimonial intentions.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/register" className="bg-red-600 text-white text-lg px-7 py-2 rounded-md font-semibold hover:bg-red-700 transition">
            Sign Up Today
          </Link>
          <button    onClick={() =>
            toast.error("Please register before Browsing profiles.", {
              style: {
                background: "#dc2626", // red-600
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#dc2626",
              },
            })
          } className="border border-red-600 text-lg text-red-600 px-7 py-2 rounded-md font-semibold hover:bg-red-50 transition cursor-pointer">
            Browse Profiles
          </button>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span>⏱️</span>
            <span>100% Halal</span>
          </div>
          <div className="flex items-center gap-2">
            <span>✅</span>
            <span>Verified Profiles</span>
          </div>
          <div className="flex items-center gap-2">
            <span>🕌</span>
            <span>Online Nikah Service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
