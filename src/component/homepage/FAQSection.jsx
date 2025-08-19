"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is Marrying Muslims?",
    answer: "Marrying Muslims is an Islamic matrimonial platform dedicated to helping practicing Muslims find their life partners in alignment with Islamic principles. Our focus is on upholding Islamic values, encouraging family involvement, and ensuring guardian supervision in all interactions.",
  },
  {
    question: "Who can join Marrying Muslims?",
    answer: "Practicing Sunni Muslims who are serious about marriage in line with Islamic principles are welcome. We embrace both reverts and those born into the faith, as long as they are dedicated to upholding Islamic values..",
  },
  {
    question: "How does guardian (Wali) involvement work?",
    answer: "The Wali can communicate with the third-party Wali by making a respectful introduction.",
  },
  {
    question: "How do I create a profile?",
    answer: "Click Sign Up and fill out our comprehensive Islamic-focused form. You’ll need to provide personal details, Islamic background, Wali (guardian) contact details, and your expectations for marriage. You must use the Wali contact details when signing up with us, this is to ensure we are doing things the correct way when contact is made.",
  },
  {
    question: "Why do I need guardian information?",
    answer: "Islamic marriage requires guardian (wali) involvement, especially for women. This ensures proper Islamic procedures are followed and maintains the dignity and protection that Islam provides in the marriage process.",
  },
  {
    question: "How long does profile approval take?",
    answer: "Profile approval usually takes 24–48 hours. We manually review each profile to ensure authenticity and sincerity in line with Islamic values.",
  },
  {
    question: "How do I contact someone I’m interested in?",
    answer: "Once you have created a profile and it has been approved, you will need to make your payment to access the Wali contact details and reach out to potential matches.",
  },
  {
    question: "Can I talk directly to potential matches?",
    answer: "Direct communication between non-mahram without guardian supervision is not permitted to maintain Islamic guidelines. All initial contact and arrangements are made through guardians to ensure proper Islamic conduct.",
  },
 
  {
    question: "What behavior is not allowed?",
    answer: "Prohibited: Non-Islamic behavior, inappropriate messages, bypassing guardian involvement, false information, non-serious intentions, requesting photos before proper introduction, and any conduct that violates Islamic principles.",
  },
  {
    question: "What happens if Islamic guidlines are violated?",
    answer: "Profiles violating Islamic guidelines will be immediately suspended or permanently banned. We take Islamic compliance very seriously and have zero tolerance for inappropriate behavior.",
  },
   {
    question: "How much does Marrying Muslims Cost?",
    answer: "Creating and listing your profile on our site is free. However, to view more information about potential matches and their contact details, you must pay a one-time fee of £50. This fee ensures that all profiles represent real individuals.",
  },
  {
    question: "Is there a refund policy?",
    answer: "You are free to browse the site and understand our platform. Once payment is made, there are no refunds. This policy ensures commitment and prevents misuse, so please make sure you understand this before proceeding with your payment. If you have any questions, please contact us at help@marryingmuslims.com.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept PayPal, bank transfers, and all major credit and debit cards. Before we list your profile live on our site, you may be required to provide evidence of your email address, personal credentials, and bank history for confirmation purposes or in the event of a dispute. If you have questions, please reach out to us at help@marryingmuslims.com",
  },
   {
    question: "How can i get help?",
    answer: "For assistance, please contact help@marryingmuslims.com. We are here to help with profile setup, technical issues, payment problems and general platform questions. Our typical response time is 24–48 hours.",
  },
   {
    question: "Online Nikah Service?",
    answer: "We may be able to offer an online Nikah service, depending on availability. For more information, please email us at help@marryingmuslims.com.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-rose-50 py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-red-700 text-white text-center p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-bold flex justify-center items-center gap-2">
            <ChevronDown className="w-6 h-6" />
            FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="bg-red-700 rounded-lg overflow-hidden">
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
