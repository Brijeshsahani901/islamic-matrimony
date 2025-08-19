"use client";

import Link from "next/link";
import React from "react";
import {
  FaArrowLeft,
  FaShieldAlt,
  FaInfoCircle,
  FaUsers,
  FaLock,
  FaCookieBite ,
  FaQuestionCircle ,
  FaBullseye ,
  FaExclamationTrangle,
  FaPhone,
} from "react-icons/fa";
import Footer from "@/component/homepage/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  const fadeInUp = (delay = 0) => ({
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay, duration: 0.5, ease: "easeOut" },
  });

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-4 sm:mx-6 lg:mx-10 h-16 flex items-center justify-between"
        >
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/images/Logo.PNG"
              alt="Logo"
              width={40}
              height={40}
              className="hover:scale-110 transition-transform duration-500 ease-in-out"
              priority={true}
            />
            <span className="text-xl font-bold text-red-700">Marrying Muslims</span>
          </Link>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 md:px-10 lg:px-80 space-y-10">
        <motion.div {...fadeInUp(0.2)}>
          <Link
            href="/login"
            className="text-red-600 font-semibold flex items-center hover:underline"
          >
            <FaArrowLeft className="mr-2" />
            Back To Home
          </Link>
        </motion.div>

        <motion.h1
          {...fadeInUp(0.4)}
          className="text-3xl font-bold text-gray-800"
        >
          Privacy Policy
        </motion.h1>

      {/* Card 1: Our Use of Cookies */}
      <motion.section
        {...fadeInUp(0.2)}
        className="bg-white p-6 rounded-lg shadow space-y-3"
      >
        <h2 className="flex items-center text-lg font-semibold text-gray-900">
          <FaCookieBite className="text-red-600 mr-3 text-xl" />
          Our Use of Cookies
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          This Cookie Policy explains how Marrying Muslims uses cookies and similar tracking
          technologies to recognise you when you visit our website. It explains what these
          technologies are, why we use them, and your rights to control their use.
        </p>
      </motion.section>

      {/* Card 2: What Are Cookies? */}
      <motion.section
        {...fadeInUp(0.4)}
        className="bg-white p-6 rounded-lg shadow space-y-3"
      >
        <h2 className="flex items-center text-lg font-semibold text-gray-900">
          <FaQuestionCircle className="text-red-600 mr-3 text-xl" />
          What Are Cookies?
        </h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          Cookies are small data files placed on your device that help enhance your browsing
          experience by remembering your preferences, login information, and browsing activity.
        </p>
      </motion.section>

      {/* Card 3: Why We Use Cookies */}
      <motion.section
        {...fadeInUp(0.6)}
        className="bg-white p-6 rounded-lg shadow space-y-3"
      >
        <h2 className="flex items-center text-lg font-semibold text-gray-900">
          <FaBullseye className="text-red-600 mr-3 text-xl" />
          Why We Use Cookies
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
          <li>To remember your login details and preferences</li>
          <li>To improve website performance and speed</li>
          <li>To understand user interactions and improve user experience</li>
          <li>To show relevant content and match suggestions</li>
          <li>To ensure the website functions properly and securely</li>
        </ul>
      </motion.section>

{/* Card 3: Types of Cookies We Use */}
<motion.section
  {...fadeInUp(0.9)}
  className="bg-white p-6 rounded-lg shadow space-y-4"
>
  <h2 className="flex items-center text-xl font-semibold text-gray-900">
    <FaUsers className="text-red-600 mr-3 text-2xl" />
    Types of Cookies We Use
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="bg-[#fff4f4] p-4 rounded-lg">
      <h3 className="font-semibold text-gray-900 mb-1 text-lg">
        Essential Cookies
      </h3>
      <p className="text-gray-700 text-sm">
        Required for core functionalities like secure login and account management.
      </p>
    </div>

    <div className="bg-[#fff4f4] p-4 rounded-lg">
      <h3 className="font-semibold text-gray-900 mb-1 text-lg">
        Analytics Cookies
      </h3>
      <p className="text-gray-700 text-sm">
        Help us understand how users interact with the site.
      </p>
    </div>

    <div className="bg-[#fff4f4] p-4 rounded-lg">
      <h3 className="font-semibold text-gray-900 mb-1 text-lg">
        Preference Cookies
      </h3>
      <p className="text-gray-700 text-sm">
        Remember your settings and customization preferences.
      </p>
    </div>

    <div className="bg-[#fff4f4] p-4 rounded-lg">
      <h3 className="font-semibold text-gray-900 mb-1 text-lg">
        Third-Party Cookies
      </h3>
      <p className="text-gray-700 text-sm">
        Used by third-party services integrated into our site (e.g., Google, social login).
      </p>
    </div>
  </div>
</motion.section>

{/* Card 4: Why We Use Cookies */}
<motion.section
  {...fadeInUp(1.1)}
  className="bg-white p-6 rounded-lg shadow space-y-4"
>
  <h2 className="flex items-center text-xl font-semibold text-gray-900">
    <FaInfoCircle className="text-red-600 mr-3 text-2xl" />
    Why We Use Cookies
  </h2>

  <ul className="list-disc list-inside text-gray-700 space-y-2 pl-2">
    <li>To remember your login details and preferences</li>
    <li>To improve website performance and speed</li>
    <li>To understand user interactions and improve user experience</li>
    <li>To show relevant content and match suggestions</li>
    <li>To ensure the website functions properly and securely</li>
  </ul>
</motion.section>

{/* Card 5: How to Manage Cookies */}
<motion.section
  {...fadeInUp(1.3)}
  className="bg-white p-6 rounded-lg shadow space-y-4"
>
  <h2 className="flex items-center text-xl font-semibold text-gray-900">
    <FaLock className="text-red-600 mr-3 text-2xl" />
    How to Manage Cookies
  </h2>
  <p className="text-gray-700 text-sm">
    You have the right to accept or reject cookies. Most browsers automatically accept cookies, but you can usually modify your settings to decline them. However, doing so may impact the functionality of certain parts of the platform.
  </p>
</motion.section>

{/* Card 6: Contact Us */}
<motion.section
  {...fadeInUp(1.5)}
  className="bg-white p-6 rounded-lg shadow space-y-4"
>
  <h2 className="flex items-center text-xl font-semibold text-gray-900">
    <FaPhone className="text-red-600 mr-3 text-2xl" />
    Contact Us
  </h2>
  <p className="text-gray-700 text-sm">
    For more information about our use of cookies, feel free to contact us at{" "}
    <a href="mailto:help@marryingmuslims.com" className="text-red-600 font-medium">
      help@marryingmuslims.com
    </a>
  </p>
</motion.section>

      </main>

      <Footer />
    </div>
  );
}
