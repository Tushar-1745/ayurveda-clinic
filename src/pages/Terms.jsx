import React, { useEffect, useState } from 'react';

const termsContent = [
  {
    title: "Acceptance of Terms",
    description: "By accessing and using our website, you accept and agree to be bound by the terms and provision of this agreement."
  },
  {
    title: "Use of Services",
    description: "Our services are intended for lawful purposes only. Misuse may result in termination of access."
  },
  {
    title: "Modifications",
    description: "We reserve the right to change these terms at any time without prior notice."
  },
  {
    title: "Limitation of Liability",
    description: "We are not responsible for any damages arising from the use or inability to use the website."
  }
];

export default function Terms() {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    termsContent.forEach((_, i) => {
      setTimeout(() => {
        setVisibleIndexes(prev => [...prev, i]);
      }, i * 200);
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-10">Terms & Conditions</h2>
      <div className="space-y-6">
        {termsContent.map((item, index) => (
          <div
            key={index}
            className={`transition duration-700 transform ${
              visibleIndexes.includes(index)
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
