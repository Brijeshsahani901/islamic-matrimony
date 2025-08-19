"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SuccessStories() {
const videos = [
  { id: 1, url: "/videos/1.mp4" },
  { id: 2, url: "/videos/2.mp4" },
  { id: 3, url: "/videos/3.mp4" } // Matrimony Meet || Creative adda films
];


  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section id="success-stories" className="py-20 px-4bg-white ">
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

      {/* Our Vision Title */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <motion.h2
          {...fadeInUp}
          className="text-4xl sm:text-5xl font-bold text-gray-900 mb-10"
        >
          Our Vision
        </motion.h2>
      </div>

      {/* Vision Boxes: In | Helping | You */}
    <motion.div
  initial="initial"
  whileInView="whileInView"
  transition="transition"
  className="px-10 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
>
  {/* Box 1: In */}
  <div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">In</h3>
    <motion.div
      {...fadeInUp}
      transition={{ ...fadeInUp.transition, delay: 0.2 }}
      className="bg-red-50 text-left p-6 rounded-xl shadow-sm border border-red-100"
    >
      <p className="text-sm text-gray-800 leading-relaxed">
        Joining Marrying Muslims offers a safe and respectful space for Muslims
        seeking meaningful connections. Our platform helps you explore potential
        partners who share your values and beliefs, prioritising privacy and open
        communication to support lasting partnerships in line with our faith.
      </p>
    </motion.div>
  </div>

  {/* Box 2: Helping */}
  <div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Helping</h3>
    <motion.div
      {...fadeInUp}
      transition={{ ...fadeInUp.transition, delay: 0.4 }}
      className="bg-red-50 text-left p-6 rounded-xl shadow-sm border border-red-100"
    >
      <p className="text-sm text-gray-800 leading-relaxed">
        Explore detailed profiles that go beyond basic information. Our profiles
        include insights into likes, values, and relationship aspirations,
        allowing you to connect on a deeper level. Engage with potential partners
        through our platform to discover your ideal match.
      </p>
    </motion.div>
  </div>

  {/* Box 3: You */}
  <div>
    <h3 className="text-xl font-semibold text-gray-900 mb-4">You</h3>
    <motion.div
      {...fadeInUp}
      transition={{ ...fadeInUp.transition, delay: 0.6 }}
      className="bg-red-50 text-left p-6 rounded-xl shadow-sm border border-red-100"
    >
      <p className="text-sm text-gray-800 leading-relaxed">
        We are committed to providing a 100% Shariah-compliant platform that
        ensures all user interactions are respectful and appropriate. Our guidelines
        promote meaningful connections while upholding Islamic values, encouraging
        users to engage in respectful dialogue.
      </p>
    </motion.div>
  </div>
</motion.div>

    </section>
  );
}
