"use client";

import Link from "next/link";
import React from "react";
import {
  FaArrowLeft,
  FaShieldAlt,
  FaInfoCircle,
  FaUsers,
  FaLock,
  FaExclamationTriangle,
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

        {/* Card 1: Privacy Commitment */}
        <motion.section
          {...fadeInUp(0.5)}
          className="bg-white p-6 rounded-lg shadow space-y-4"
        >
          <h2 className="flex items-center text-xl font-semibold text-gray-900">
            <FaShieldAlt className="text-red-600 mr-3 text-2xl" />
            Your Privacy Matters To Us
          </h2>
          <p className="text-gray-700">
            At Marrying Muslims, we are committed to protecting your privacy and
            ensuring the security of your personal information. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your
            information when you use our Islamic matrimonial platform.{" "}
            <strong>Last updated: August 2025.</strong>
          </p>
        </motion.section>

        {/* Card 2: Information We Collect */}
        <motion.section
          {...fadeInUp(0.7)}
          className="bg-white p-6 rounded-lg shadow space-y-3"
        >
          <h2 className="flex items-center text-xl font-semibold text-gray-900">
            <FaInfoCircle className="text-red-600 mr-3 text-2xl" />
            Information We Collect
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Full name, age, and date of birth</li>
            <li>Contact information (email, phone number, address)</li>
            <li>Profile photos and personal descriptions</li>
            <li>Religious preferences and practices</li>
            <li>Educational and professional background</li>
            <li>Family information and marital history</li>
            <li>Partner preferences and requirements</li>
            <li>Other relevant data that may be collected</li>
          </ul>
        </motion.section>

        {/* Card 3: How We Use Your Information */}
   <motion.section
  {...fadeInUp(0.9)}
  className="bg-white p-6 rounded-lg shadow space-y-4 grid grid-cols-2 gap-6"
>
  <h2 className="flex items-center text-xl font-semibold text-gray-900 col-span-2">
    <FaUsers className="text-red-600 mr-3 text-2xl" />
    How We Use Your Information
  </h2>
  <div className="bg-[#fff4f4] p-3  rounded-lg">
    <h3 className="font-semibold text-gray-900 mb-2 text-xl">Profile Matching</h3>
    <p className="text-gray-700 text-sm">
      To connect you with compatible matches based on your preferences and Islamic values.
    </p>
  </div>
  <div className="bg-[#fff4f4] p-3  rounded-lg">
    <h3 className="font-semibold text-gray-900 mb-2 text-xl">Communication</h3>
    <p className="text-gray-700 text-sm">
      To facilitate respectful communication between potential matches.
    </p>
  </div>
  <div className="bg-[#fff4f4] p-3  rounded-lg">
    <h3 className="font-semibold text-gray-900 mb-2 text-xl">Safety & Security</h3>
    <p className="text-gray-700 text-sm">
      To verify profiles, prevent fraud and maintain a safe environment.
    </p>
  </div>
  <div className="bg-[#fff4f4] p-3  rounded-lg">
    <h3 className="font-semibold text-gray-900 mb-2 text-xl">Service Improvement</h3>
    <p className="text-gray-700 text-sm">
      To enhance our platform features and user experience.
    </p>
  </div>
</motion.section>

        {/* Card 4: Information Sharing And Disclosure */}
        <motion.section
          {...fadeInUp(1.1)}
          className="bg-white p-6 rounded-lg shadow space-y-3"
        >
          <h2 className="flex items-center text-xl font-semibold text-gray-900">
            <FaExclamationTriangle className="text-red-600 mr-3 text-2xl" />
            Information Sharing And Disclosure
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <span className="font-semibold text-red-600">With Other Users:</span>{" "}
              Profile information you choose to make visible.
            </li>
            <li>
              <span className="font-semibold text-red-600">Service Providers:</span>{" "}
              Trusted partners who help operate our platform.
            </li>
            <li>
              <span className="font-semibold text-red-600">Legal Requirements:</span>{" "}
              When required by law or to protect safety.
            </li>
            <li>
              <span className="font-semibold text-red-600">Business Transfers:</span>{" "}
              In case of merger or acquisition.
            </li>
          </ul>
        </motion.section>

        {/* Card 5: Security Measures */}
        <motion.section
          {...fadeInUp(1.3)}
          className="bg-white p-6 rounded-lg shadow space-y-3"
        >
          <h2 className="flex items-center text-xl font-semibold text-gray-900">
            <FaLock className="text-red-600 mr-3 text-2xl" />
            Security Measures
          </h2>
          <p className="text-gray-700">
            We implement industry-standard security measures to protect your
            personal information:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>
              <span className="font-semibold text-red-600">Technical Safeguards:</span>{" "}
              Data Protection, Robust Hosting Infrastructure, Continuous Security
              Evaluations, Enhanced Authentication Methods
            </li>
            <li>
              <span className="font-semibold text-red-600">Administrative Safeguards:</span>{" "}
              Restricted Data Access, Third-Party Risk Assessments, Information
              Security Awareness, Crisis Management
            </li>
          </ul>
        </motion.section>

        {/* Card 6: Your Rights And Choices */}
<motion.section
  {...fadeInUp(1.5)}
  className="bg-white p-6 rounded-lg shadow space-y-3"
>
  <h2 className="flex items-center text-xl font-semibold text-gray-900">
    <FaUsers className="text-red-600 mr-3 text-2xl" />
    Your Rights And Choices
  </h2>
  <p className="text-gray-900">
    You have the following rights regarding your personal information:
  </p>
  <div className="bg-[#fff0f0] p-4 rounded-md">
    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
      <span className="w-3 h-3 rounded-full bg-red-600 inline-block"></span>
      Access and Update
    </h3>
    <p className="text-gray-700 text-sm">
      You can view and modify your profile information at any time. To request the deletion of your data, please contact us at:{" "}
      <a href="mailto:help@marryingmuslims.com" className="text-red-600">
        help@marryingmuslims.com
      </a>
    </p>
  </div>
</motion.section>
      </main>

      <Footer />
    </div>
  );
}
