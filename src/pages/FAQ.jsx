import React, { useState, useEffect } from 'react';

const faqData = [
  {
    question: "What is Ayurveda?",
    answer: "Ayurveda is an ancient system of medicine that promotes holistic healing through natural therapies, diet, and lifestyle changes."
  },
  {
    question: "Do I need a prior appointment?",
    answer: "Yes, we recommend booking an appointment in advance to ensure a dedicated consultation slot."
  },
  {
    question: "Is Ayurvedic treatment safe?",
    answer: "Yes, when supervised by certified practitioners, Ayurvedic treatments are safe and have minimal side effects."
  },
  {
    question: "What treatments do you offer?",
    answer: "We offer Panchakarma, detox therapies, rejuvenation packages, joint pain therapy, skin care, and more."
  },
  {
    question: "Can I combine Ayurveda with modern medicine?",
    answer: "Yes, but inform both your Ayurvedic practitioner and medical doctor to avoid interactions."
  },
  {
    question: "Are the herbs used safe and natural?",
    answer: "Yes, we use certified and natural herbs sourced from trusted suppliers."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    let delay = 0;
    faqData.forEach((_, i) => {
      setTimeout(() => {
        setVisibleIndexes(prev => [...prev, i]);
      }, delay);
      delay += 200; // Stagger each by 200ms
    });
  }, []);

  const toggle = index => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-10 animate-fadeIn">Frequently Asked Questions</h2>
      <div className="space-y-5">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`transform transition duration-700 ease-in-out ${
              visibleIndexes.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            } border-l-4 border-green-600 bg-green-50 shadow-md rounded-md overflow-hidden`}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-green-100 transition-colors duration-700"
            >
              <span className="text-lg font-semibold text-green-900">{faq.question}</span>
              <span className={`transition-transform duration-500 text-2xl text-green-700 ${openIndex === index ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            <div
              className={`px-6 text-gray-700 transition-all duration-700 ease-in-out ${
                openIndex === index ? 'max-h-40 py-2 opacity-100' : 'max-h-0 py-0 opacity-0'
              } overflow-hidden`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
