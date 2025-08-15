"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is WIFE4LIFE?",
    answer: "WIFE4LIFE is a platform designed to help individuals find compatible marriage partners with family and guardian involvement.",
  },
  {
    question: "Who can join WIFE4LIFE?",
    answer: "Anyone seeking a serious and respectful path to marriage can join WIFE4LIFE.",
  },
  {
    question: "How does guardian (Wali) involvement work?",
    answer: "Guardians are involved throughout the process to ensure trust, transparency, and religious alignment.",
  },
  {
    question: "How do I create a profile?",
    answer: "Click on 'Create Profile' and follow the step-by-step instructions. Make sure to include guardian details if required.",
  },
  {
    question: "Why do I need guardian information?",
    answer: "Guardian information ensures a respectful and responsible environment for communication and matchmaking.",
  },
  {
    question: "How long does profile approval take?",
    answer: "Profile approvals typically take 24–48 hours after submission.",
  },
  {
    question: "How do I contact someone I’m interested in?",
    answer: "Once matched or approved, you can message through the platform with guardian oversight.",
  },
  {
    question: "Can I talk directly to potential matches?",
    answer: "Communication is allowed but monitored or facilitated through guardians to maintain Islamic principles.",
  },
  {
    question: "What if I don’t have a guardian?",
    answer: "If you don’t have a guardian, contact support for alternative arrangements.",
  },
  {
    question: "What behavior is not allowed?",
    answer: "Disrespect, harassment, and inappropriate content are strictly prohibited and result in immediate suspension.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-rose-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-red-600 text-white text-center p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-bold flex justify-center items-center gap-2">
            <ChevronDown className="w-6 h-6" />
            FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="bg-red-600 rounded-lg overflow-hidden">
                <button
                  className="w-full text-left px-6 py-4 text-white font-semibold flex justify-between items-center"
                  onClick={() => toggle(index)}
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Answer container */}
                <div
                  className={`bg-white text-gray-800 px-6 transition-all duration-500 ease-in-out overflow-hidden`}
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                    opacity: isOpen ? 1 : 0,
                    paddingTop: isOpen ? "1rem" : "0",
                    paddingBottom: isOpen ? "1rem" : "0",
                  }}
                >
                  <div className="text-sm">{faq.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
