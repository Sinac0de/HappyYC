"use client";

import { useState } from "react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I submit my startup idea?",
      answer:
        "Simply create an account and navigate to the 'Create' page where you can pitch your startup idea with all the necessary details.",
    },
    {
      question: "How does the voting system work?",
      answer:
        "All registered users can vote on startup pitches. Each user gets one vote per pitch, and the most voted ideas get featured prominently.",
    },
    {
      question: "Is there a cost to use this platform?",
      answer:
        "HappyYC is completely free to use for all entrepreneurs and startup enthusiasts.",
    },
    {
      question: "How can I connect with other entrepreneurs?",
      answer:
        "You can connect through comments on pitches, direct messaging (coming soon), and our community forums.",
    },
    {
      question: "What makes a successful pitch?",
      answer:
        "Successful pitches clearly explain the problem, solution, market opportunity, and team. Visuals and a compelling story also help.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-30-bold mb-4 text-black dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-16-medium text-gray-600 dark:text-gray-300">
            Everything you need to know about the platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border-[5px] border-black dark:border-gray-600 rounded-[22px] shadow-200 dark:shadow-200-dark overflow-hidden"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <h3 className="text-20-medium text-black dark:text-white">
                  {faq.question}
                </h3>
                <span className="text-2xl text-black dark:text-white">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-6 pb-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
