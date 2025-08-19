// "use client";

// import Link from "next/link";
// import React from "react";
// import { FaArrowLeft, FaFileContract, FaUserShield } from "react-icons/fa";
// import { motion } from "framer-motion";

// export default function TermsAndConditions() {
//   return (
//     <div className="min-h-screen bg-pink-50">
//       {/* Header */}
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//         <motion.div
//           initial={{ y: -50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           className="mx-4 sm:mx-6 lg:mx-10 h-16 flex items-center justify-between"
//         >
//           <Link href="/" className="flex items-center space-x-2">
//             <img
//               src="/images/Logo.PNG"
//               alt="Logo"
//               width={40}
//               height={40}
//               className="hover:scale-110 transition-transform duration-500 ease-in-out"
//               priority="true"
//             />
//             <span className="text-xl font-bold text-red-700">Marrying Muslims</span>
//           </Link>
//         </motion.div>
//       </header>

//       {/* Main content */}
//       <main className="pt-24 pb-12 px-4 md:px-10 lg:px-48 space-y-10">
//         {/* Back Button */}
//         <motion.div
//           initial={{ x: -30, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           <Link href="/" className="text-red-600 font-semibold flex items-center hover:underline">
//             <FaArrowLeft className="mr-2" />
//             Back To Home
//           </Link>
//         </motion.div>

//         {/* Page Title */}
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4, duration: 0.6 }}
//           className="text-3xl font-bold text-gray-800"
//         >
//           Terms & Privacy
//         </motion.h1>

//         {/* Section 1: Agreement To Our Terms */}
//         <motion.section
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//           className="bg-white p-6 rounded-lg shadow"
//         >
//           <div className="flex items-start space-x-3 mb-4">
//             <FaFileContract className="text-red-600 text-2xl mt-1" />
//             <h2 className="text-xl font-semibold text-gray-900">Agreement To Our Terms</h2>
//           </div>
//           <p className="text-gray-700">
//             These Terms and Conditions outline the rules and regulations for the use of the Marrying Muslims Islamic
//             Matrimonial Platform. By accessing this platform, you agree to these terms. Please refrain from using
//             Marrying Muslims if you do not accept all the terms stated on this page.
//           </p>
//         </motion.section>

//         {/* Section 2: User Responsibilities */}
//         <motion.section
//           initial={{ y: 30, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.8, duration: 0.5 }}
//           className="bg-white p-6 rounded-lg shadow"
//         >
//           <div className="flex items-start space-x-3 mb-4">
//             <FaUserShield className="text-red-600 text-2xl mt-1" />
//             <h2 className="text-xl font-semibold text-gray-900">User Responsibilities</h2>
//           </div>
//           <ul className="list-disc list-inside text-gray-700 space-y-2">
//             <li>Provide accurate, honest and complete information when creating a profile.</li>
//             <li>Use the platform respectfully and solely for lawful matrimonial purposes.</li>
//             <li>Avoid sharing or promoting any offensive, misleading, or inappropriate content.</li>
//           </ul>
//         </motion.section>
//       </main>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import React from "react";
import {
  FaArrowLeft,
  FaFileContract,
  FaUserShield,
  FaLock,
  FaCopyright,
  FaExclamationTriangle,
  FaShieldAlt,
  FaGlobe,
  FaPhone
} from "react-icons/fa";
import Footer from "@/component/homepage/Footer";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
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
              priority="true"
            />
            <span className="text-xl font-bold text-red-700">Marrying Muslims</span>
          </Link>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-4 md:px-10 lg:px-80 space-y-10">
        {/* Back Button */}
        <motion.div {...fadeInUp(0.2)}>
          <Link href="/login" className="text-red-600 font-semibold flex items-center hover:underline">
            <FaArrowLeft className="mr-2" />
            Back To Home
          </Link>
        </motion.div>

        {/* Page Title */}
        <motion.h1 {...fadeInUp(0.4)} className="text-3xl font-bold text-gray-800">
          Terms & Privacy
        </motion.h1>

        {/* Terms Sections */}
        <motion.section {...fadeInUp(0.6)} className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start space-x-3 mb-4">
            <FaFileContract className="text-red-600 text-2xl mt-1" />
            <h2 className="text-xl font-semibold text-gray-900">Agreement To Our Terms</h2>
          </div>
          <p className="text-gray-700">
            These Terms and Conditions outline the rules and regulations for the use of the Marrying Muslims Islamic
            Matrimonial Platform. By accessing this platform, you agree to these terms. Please refrain from using
            Marrying Muslims if you do not accept all the terms stated on this page.
          </p>
        </motion.section>

        <motion.section {...fadeInUp(0.7)} className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start space-x-3 mb-4">
            <FaUserShield className="text-red-600 text-2xl mt-1" />
            <h2 className="text-xl font-semibold text-gray-900">User Responsibilities</h2>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Provide accurate, honest and complete information when creating a profile.</li>
            <li>Use the platform respectfully and solely for lawful matrimonial purposes.</li>
            <li>Avoid sharing or promoting any offensive, misleading, or inappropriate content.</li>
          </ul>
        </motion.section>

        <motion.section {...fadeInUp(0.8)} className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start space-x-3 mb-4">
            <FaLock className="text-red-600 text-2xl mt-1" />
            <h2 className="text-xl font-semibold text-gray-900">Privacy & Data Use</h2>
          </div>
          <p className="text-gray-700">
            Your use of the platform is also governed by our Privacy Policy. We collect and use your data as outlined
            there, with appropriate safeguards in place to protect your privacy and security.
          </p>
          <p className="text-gray-700 mt-2">
            By using Marrying Muslims, you consent to our data collection and use practices.
          </p>
        </motion.section>

        <motion.section {...fadeInUp(0.9)} className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start space-x-3 mb-4">
            <FaCopyright className="text-red-600 text-2xl mt-1" />
            <h2 className="text-xl font-semibold text-gray-900">Intellectual Property Rights</h2>
          </div>
          <p className="text-gray-700">
            Unless otherwise stated, Marrying Muslims and/or its licensors own the intellectual property rights for all
            material on the platform. You may access this for personal use, but you must not republish, sell, or exploit
            content without permission.
          </p>
        </motion.section>

        <motion.section {...fadeInUp(1)} className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start space-x-3 mb-4">
            <FaExclamationTriangle className="text-red-600 text-2xl mt-1" />
            <h2 className="text-xl font-semibold text-gray-900">Limitation Of Liability</h2>
          </div>
          <p className="text-gray-700">
            While we strive to provide a safe and secure experience, the owner, business, or brand of Marrying Muslims
            shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or
            inability to use the platform.
          </p>
        </motion.section>

        <motion.section {...fadeInUp(1.1)} className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start space-x-3 mb-4">
            <FaShieldAlt className="text-red-600 text-2xl mt-1" />
            <h2 className="text-xl font-semibold text-gray-900">Protective Measures For Our Business</h2>
          </div>
          <ul className="text-gray-700 space-y-2 list-disc list-inside">
            <li>
              <strong className="text-red-600">User Profile Verification:</strong> We maintain a stringent verification
              process for user profiles to ensure authenticity and reduce fraudulent activity on the platform.
            </li>
            <li>
              <strong className="text-red-600">Content Moderation:</strong> Our team actively monitors and reviews content to promptly remove
              any offensive or inappropriate material, safeguarding our community standards.
            </li>
            <li>
              <strong className="text-red-600">Account Termination:</strong> We reserve the right to remove any account or profile without warning
              or explanation if we believe it violates our terms or poses a risk to the platform.
            </li>
            <li>
              <strong className="text-red-600">Exclusion of Liability Claims:</strong> The owner, business, or brand of Marrying Muslims is not
              liable for any disputes arising from interactions between users, including emotional distress or
              financial loss. Marrying Muslims shall not be held responsible for any direct, indirect, incidental, or
              consequential damages arising from the use or inability to use the platform.
            </li>
          </ul>
        </motion.section>

        <motion.section {...fadeInUp(1.2)} className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-start space-x-3 mb-4">
            <FaGlobe className="text-red-600 text-2xl mt-1" />
            <h2 className="text-xl font-semibold text-gray-900">Platform Usage</h2>
          </div>
          <p className="text-gray-700">
            We reserve the right to restrict or terminate accounts that violate our terms. All interactions and
            communications on the platform must remain respectful and align with Islamic principles.
          </p>
          <p className="text-gray-700 mt-2">
            Marrying Muslims is not responsible for the accuracy of user-generated content or the outcomes of any
            matches made.
          </p>
        </motion.section>
        <motion.section {...fadeInUp(1.3)} className="bg-white p-6 rounded-lg shadow">
  <div className="flex items-start space-x-3 mb-4">
    <FaShieldAlt className="text-red-600 text-2xl mt-1" />
    <h2 className="text-xl font-semibold text-gray-900">Your Privacy Matters To Us</h2>
  </div>

  <p className="text-gray-700 mb-4">
    At Marrying Muslims, we are committed to protecting your privacy and ensuring the security of your personal
    information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use
    our Islamic matrimonial platform. <strong>Last updated: August 2025.</strong>
  </p>

  <h3 className="font-semibold text-gray-800 mb-2">Information We Collect:</h3>
  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
    <li>Full name, age, and date of birth</li>
    <li>Contact information (email, phone number, address)</li>
    <li>Profile photos and personal descriptions</li>
    <li>Religious preferences and practices</li>
    <li>Educational and professional background</li>
    <li>Family information and marital history</li>
    <li>Partner preferences and requirements</li>
    <li>Other relevant data that may be collected</li>
  </ul>

  <h3 className="font-semibold text-gray-800 mb-2">How We Use Your Information:</h3>
  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
    <li>To connect you with compatible matches based on your preferences and Islamic values.</li>
    <li>To facilitate respectful communication between potential matches.</li>
    <li>To verify profiles, prevent fraud, and maintain a safe environment.</li>
    <li>To enhance our platform features and user experience.</li>
  </ul>

  <h3 className="font-semibold text-gray-800 mb-2">Information Sharing And Disclosure:</h3>
  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
    <li><span className="text-red-600 font-semibold">With Other Users:</span> Profile information you choose to make visible.</li>
    <li><span className="text-red-600 font-semibold">Service Providers:</span> Trusted partners who help operate our platform.</li>
    <li><span className="text-red-600 font-semibold">Legal Requirements:</span> When required by law or to protect safety.</li>
    <li><span className="text-red-600 font-semibold">Business Transfers:</span> In case of merger or acquisition.</li>
  </ul>

  <h3 className="font-semibold text-gray-800 mb-2">Security Measures:</h3>
  <p className="text-gray-700 mb-2">
    We implement industry-standard security measures to protect your personal information:
  </p>
  <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
    <li>
      <span className="text-red-600 font-semibold">Technical Safeguards:</span> Data Protection, Robust Hosting Infrastructure,
      Continuous Security Evaluations, Enhanced Authentication Methods
    </li>
    <li>
      <span className="text-red-600 font-semibold">Administrative Safeguards:</span> Restricted Data Access, Third-Party Risk
      Assessments, Information Security Awareness, Crisis Management
    </li>
  </ul>

  <h3 className="font-semibold text-gray-800 mb-2">Your Rights And Choices:</h3>
  <p className="text-gray-700 mb-2">
    You can view and modify your profile information at any time. To request the deletion of your data, please contact
    us at <a href="mailto:help@marryingmuslims.com" className="text-red-600 font-semibold">help@marryingmuslims.com</a>
  </p>

  <p className="text-gray-700 mt-2"><strong>Limitation of Liability:</strong> Marrying Muslims and its owners shall not be liable for any damages arising from the use of your personal information or from any interactions between users. By using our platform, you acknowledge that you understand and agree to this Privacy Policy.</p>

  <p className="text-gray-700 mt-2"><strong>Indemnification:</strong> You agree to indemnify and not to hold Marrying Muslims, its owners, and its affiliates from any claims, losses, liabilities, damages, costs, or expenses, including reasonable solicitor fees, arising out of or relating to your use of the platform or your violation of this Privacy Policy.</p>
</motion.section>

<motion.section {...fadeInUp(1.4)} className="bg-white p-6 rounded-lg shadow">
  <div className="flex items-start space-x-3">
    <FaPhone className="text-red-600 text-2xl mt-1" />
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h2>
      <p className="text-gray-700">
        If you have any questions about these Terms & Conditions, please reach out to us at<br />
        <a href="mailto:help@marryingmuslims.com" className="text-red-600 font-medium">
          help@marryingmuslims.com
        </a>
      </p>
    </div>
  </div>
</motion.section>


      </main>
<Footer/>
      
    </div>
  );
}
