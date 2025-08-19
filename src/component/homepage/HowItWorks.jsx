// "use client";

// import React from "react";
// import { UserPlus, Search, MessageCircle } from "lucide-react"; // Lucide icons

// export default function HowItWorks() {
//   const steps = [
//     {
//       icon: <UserPlus className="h-6 w-6 text-white" />,
//       title: "Step 1: Create",
//       description: "Create your profile and account",
//     },
//     {
//       icon: <Search className="h-6 w-6 text-white" />,
//       title: "Step 2: Consider",
//       description:
//         "Browse compatible profiles based on your preferences and requirements",
//     },
//     {
//       icon: <MessageCircle className="h-6 w-6 text-white" />,
//       title: "Step 3: Connect",
//       description:
//         "Express interest and start meaningful conversations with potential matches",
//     },
//   ];

//   return (
//     <section className="bg-[#fff5f5] py-20 px-4">
//       <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//         How It Works
//       </h2>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
//         {steps.map((step, index) => (
//           <div key={index}>
//             <div className="w-16 h-16 mx-auto bg-red-600 rounded-full flex items-center justify-center mb-4">
//               {step.icon}
//             </div>
//             <h3 className="text-lg font-semibold text-gray-900">
//               {step.title}
//             </h3>
//             <p className="mt-2 text-sm text-gray-600">{step.description}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import React from "react";
import { UserPlus, Search, MessageCircle } from "lucide-react"; // Lucide icons
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-6 w-6 text-white" />,
      title: "Step 1: Create",
      description: "Create your profile and account",
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Step 2: Consider",
      description:
        "Browse compatible profiles based on your preferences and requirements",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-white" />,
      title: "Step 3: Connect",
      description:
        "Express interest and start meaningful conversations with potential matches",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
    id="how-it-works"
      className="bg-[#fff5f5] py-20 px-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.h2
        className="text-3xl font-bold text-center text-gray-900 mb-12"
        variants={itemVariants}
      >
        How It Works
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        variants={containerVariants}
      >
        {steps.map((step, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div className="w-16 h-16 mx-auto bg-red-600 rounded-full font-semibold flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
            <p className="mt-2 text-lg text-gray-600 font-semibold">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
