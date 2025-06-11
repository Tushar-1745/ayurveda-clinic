// 4. Doctors.jsx
import React from 'react';

const doctors = [
  {
    name: "Dr. Anjali Sharma",
    qualification: "BAMS, MD (Ayurveda)",
    experience: "10 years",
    specialty: "Panchakarma, Women's Health"
  },
  {
    name: "Dr. Rajeev Nair",
    qualification: "BAMS",
    experience: "8 years",
    specialty: "Joint Disorders, Detox"
  }
];

export default function Doctors() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Meet Our Practitioners</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {doctors.map((doc, i) => (
          <div key={i} className="border rounded-lg p-4 shadow">
            <h3 className="text-xl font-semibold">👨‍⚕️ {doc.name}</h3>
            <p><strong>Qualification:</strong> {doc.qualification}</p>
            <p><strong>Experience:</strong> {doc.experience}</p>
            <p><strong>Specialties:</strong> {doc.specialty}</p>
            <button className="mt-2 px-4 py-2 bg-green-700 text-white rounded">Book Consultation</button>
          </div>
        ))}
      </div>
    </div>
  );
}
