// 3. Treatments.jsx
import React from 'react';

const treatments = [
  {
    name: "Panchakarma",
    description: "A detoxification therapy for balancing doshas.",
    benefits: "Improves digestion, boosts immunity, and removes toxins.",
    duration: "7–21 days",
    icon: "🧘‍♂️"
  },
  {
    name: "Shirodhara",
    description: "Warm oil poured on the forehead for relaxation.",
    benefits: "Reduces stress, anxiety, and improves sleep.",
    duration: "45 minutes",
    icon: "💆‍♀️"
  }
];

export default function Treatments() {
  return (
    <div className="p-6 bg-green-50">
      <h2 className="text-3xl font-bold mb-4 text-green-800">Our Ayurvedic Treatments</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {treatments.map((t, i) => (
          <div key={i} className="border rounded-lg p-4 shadow bg-white">
            <h3 className="text-xl font-semibold text-green-700">{t.icon} {t.name}</h3>
            <p><strong>Description:</strong> {t.description}</p>
            <p><strong>Benefits:</strong> {t.benefits}</p>
            <p><strong>Duration:</strong> {t.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}