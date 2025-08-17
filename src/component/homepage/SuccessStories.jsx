"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SuccessStories() {
const videos = [
  { id: 1, url: "https://online-rishta-main.netlify.app/images/1.mp4" },
  { id: 2, url: "https://online-rishta-main.netlify.app/images/2.mp4" },
  { id: 3, url: "https://online-rishta-main.netlify.app/images/3.mp4" } // Matrimony Meet || Creative adda films
];


  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section className="py-20 px-4bg-white ">
      {/* Video Section */}
      <motion.div
        initial="initial"
        whileInView="whileInView"
        transition="transition"
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20 px-2"
      >
        {videos.map((video) => (
          <motion.video
            key={video.id}
            src={video.url}
            controls
            whileHover={{ scale: 1.02 }}
            className="rounded-xl shadow-lg w-full h-64 object-cover border border-gray-200"
          />
        ))}
      </motion.div>

      {/* Our Vision */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.h2
          {...fadeInUp}
          className="text-4xl sm:text-5xl font-extrabold text-red-700 mb-8"
        >
          ❤️ Our Vision
        </motion.h2>

        <motion.p
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-700 mb-16"
        >
          Marrying Muslims is more than a matchmaking service — it's a mission to
          uphold Islamic values and bring hearts together in a halal and
          meaningful way.
        </motion.p>
      </div>

      {/* 3 Vision Sections */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center px-4">
        {/* Section 1: In */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-600"
        >
          <h3 className="text-2xl font-bold text-red-700 mb-4">In</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Joining Marrying Muslims offers a safe and respectful space for Muslims
            seeking meaningful connections. Our platform helps you explore
            potential partners who share your values and beliefs, prioritising
            privacy and open communication to support lasting partnerships in
            line with our faith.
          </p>
        </motion.div>

        {/* Section 2: Helping */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.5 }}
          className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-600"
        >
          <h3 className="text-2xl font-bold text-red-700 mb-4">Helping</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Explore detailed profiles that go beyond basic information. Our
            profiles include insights into likes, values, and relationship
            aspirations, allowing you to connect on a deeper level. Engage with
            potential partners through our platform to discover your ideal
            match.
          </p>
        </motion.div>

        {/* Section 3: You */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.7 }}
          className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-600"
        >
          <h3 className="text-2xl font-bold text-red-700 mb-4">You</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            We are committed to providing a 100% Shariah-compliant platform that
            ensures all user interactions are respectful and appropriate. Our
            guidelines promote meaningful connections while upholding Islamic
            values, encouraging users to engage in respectful dialogue.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
