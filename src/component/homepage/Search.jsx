"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function Search() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-extrabold text-red-700 tracking-tight leading-tight">
          🔍 Find Your Match
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-xl mx-auto">
          Refine your search and explore profiles curated just for you
        </p>
      </div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 shadow-xl backdrop-blur mb-12"
      >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
  {[0, 1, 2].map((index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
    >
      {index === 0 && (
        <select className="border border-gray-300 rounded-lg w-full px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition">
          <option disabled selected>
            Age Range
          </option>
          <option>18-25</option>
          <option>26-35</option>
          <option>36-45</option>
          <option>46+</option>
        </select>
      )}

      {index === 1 && (
        <select className="border border-gray-300 rounded-lg w-full px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition">
          <option disabled selected>
            Country
          </option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
          <option>Pakistan</option>
          <option>Other</option>
        </select>
      )}

      {index === 2 && (
        <select className="border border-gray-300 rounded-lg w-full px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 transition">
          <option disabled selected>
            Gender
          </option>
          <option>Male</option>
          <option>Female</option>
        </select>
      )}
    </motion.div>
  ))}
</div>


        {/* Search Button with Toast */}
        <button
          onClick={() =>
            toast.error("Please register before searching profiles.", {
              style: {
                background: "#dc2626", // red-600
                color: "#fff",
              },
              iconTheme: {
                primary: "#fff",
                secondary: "#dc2626",
              },
            })
          }
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg text-sm flex justify-center items-center gap-2 transition-all duration-200 cursor-pointer"
        >
          🔍 Search Profiles
        </button>
      </motion.div>

      {/* Profiles Grid */}
      <div className="mt-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {profiles.map((profile, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 rounded-t-2xl bg-gradient-to-r from-red-500 to-red-700"></div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="w-24 h-24 mx-auto mb-5 transition-transform"
            >
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover rounded-full bg-gray-100 border-4 border-white shadow-md"
              />
            </motion.div>

            <h3 className="font-semibold text-xl text-red-700">
              {profile.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              {profile.age} years old • {profile.gender}
            </p>

            <div className="mt-4 text-sm text-gray-700 leading-relaxed text-left">
              <strong className="block text-gray-900 mb-1 text-sm">
                About Me
              </strong>
              <p className="line-clamp-4">{profile.about}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 flex justify-center">
        <Link
          href="/register"
          className="bg-gradient-to-r from-red-500 to-red-700 text-white text-lg font-bold px-8 py-3 rounded-full shadow-xl transition-all hover:bg-red-800 hover:scale-105"
        >
          ✨ Sign up Today to see full profiles
        </Link>
      </div>
    </section>
  );
}

// Mock data
const profiles = [
  {
    name: "Ahmed Khan",
    age: 28,
    gender: "Male",
    about:
      "Practicing Sunni Muslim who values faith, honesty, and family life. Seeking a pious partner for a halal marriage.",
    image: "/images/MaleProfile.jpeg",
  },
  {
    name: "Fatima Zahra",
    age: 25,
    gender: "Female",
    about:
      "Modest and respectful sister, committed to Islamic values. Looking for a righteous Sunni Muslim husband.",
    image: "/images/femaleProfile.png",
  },
  {
    name: "Usman Farooq",
    age: 30,
    gender: "Male",
    about:
      "Sunni Muslim who follows the Sunnah and values sincerity. Wants to build a faith-centered home with a practicing wife.",
    image: "/images/femaleProfile.png",
  },
];
