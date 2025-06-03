import React, { useState } from "react";

const FAQItem = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-200">
    <button
      onClick={onClick}
      className="w-full text-left py-4 px-4 flex justify-between items-center focus:outline-none"
    >
      <span className="text-lg font-medium text-gray-800">{question}</span>
      <span className="text-gray-500 text-xl">{isOpen ? "^" : "+"}</span>
    </button>
    {isOpen && (
      <div className="px-4 pb-4 text-gray-600 text-sm">
        {answer}
      </div>
    )}
  </div>
);

const faq = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-md shadow-lg overflow-hidden">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => toggle(index)}
        />
      ))}
    </div>
  );
};

export default faq;
