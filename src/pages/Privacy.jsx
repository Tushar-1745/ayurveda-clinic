import React, { useEffect, useState } from 'react';

const privacyContent = [
  {
    title: "Data Collection",
    description: "We collect personal data you provide such as name, email, and phone when booking appointments or contacting us."
  },
  {
    title: "Use of Information",
    description: "Your information is used solely to improve user experience and communicate with you regarding our services."
  },
  {
    title: "Data Sharing",
    description: "We do not share your data with third parties unless legally required or with your consent."
  },
  {
    title: "Security",
    description: "We take appropriate security measures to protect your personal information from unauthorized access."
  }
];

export default function Privacy() {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    privacyContent.forEach((_, i) => {
      setTimeout(() => {
        setVisibleIndexes(prev => [...prev, i]);
      }, i * 200);
    });
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-4xl font-bold text-center text-green-800 mb-10">Privacy Policy</h2>
      <div className="space-y-6">
        {privacyContent.map((item, index) => (
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
