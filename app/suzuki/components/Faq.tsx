// src/FAQ.tsx
"use client";
import React, { useState } from "react";

const Faq: React.FC = () => {
  const faqItems = [
    {
      question: "How do I register?",
      answer: "Answer to question 1 goes here.",
    },
    {
      question: "What is the schedule?",
      answer: "Answer to question 2 goes here.",
    },
    {
      question: "Can anyone attend?",
      answer: "Answer to question 2 goes here.",
    },
    // Add more FAQ items as needed
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto mt-14 p-11 sm:px-6 lg:px-8 max-w-4xl mb-48">
      <div className="mt-1  max-width " id="discover ">
        <div className="flex items-center flex-col text-gray-600 ">
          <h1 className="text-5xl font-extrabold">FAQ'S</h1>
          <h2 className="text-1.5xl font-bold pl-2 ">
            Find the answers to common questions
          </h2>
        </div>

        <div className="home__filters">
          <div className="home__filter-container">
            {/* <CustomFilter title='fuel' options={fuels} />
            <CustomFilter title='year' options={yearsOfProduction} /> */}
          </div>
        </div>
      </div>
      <div className="divide-y divide-gray-300">
        {faqItems.map((item, index) => (
          <div key={index} className="py-4">
            <button
              className="flex justify-between items-center w-full focus:outline-none"
              onClick={() => toggleDropdown(index)}
            >
              <h2 className="text-xl font-semibold">{item.question}</h2>
              <svg
                className={`w-6 h-6 transition-transform transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={openIndex === index ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                />
              </svg>
            </button>
            {openIndex === index && <p className="mt-2">{item.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
