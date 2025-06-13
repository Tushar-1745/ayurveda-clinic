import React, { useState } from 'react';

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
    question: "How long does a typical session take?",
    answer: "Sessions typically last between 30 to 90 minutes depending on the treatment type."
  },
  {
    question: "Are the herbs used in treatments natural?",
    answer: "Yes, we use 100% natural and high-quality herbs that are sourced responsibly."
  },
  {
    question: "Can I take Ayurvedic treatment along with modern medicine?",
    answer: "Yes, but it's advisable to consult both your Ayurvedic and allopathic doctor for a safe combined approach."
  },
  {
    question: "Is your clinic open on weekends?",
    answer: "Yes, our clinic operates 7 days a week, though appointments are preferred on weekends due to higher footfall."
  },
  {
    question: "Do you provide diet plans?",
    answer: "Yes, our doctors provide customized diet and lifestyle plans as part of the treatment."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = index => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center bg-green-100 hover:bg-green-200 transition"
            >
              <span className="font-medium">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-white">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
