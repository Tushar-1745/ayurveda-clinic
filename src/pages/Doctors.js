import React from "react";
import { motion } from "framer-motion";

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
  },
  {
    name: "Dr. Arun Sharma",
    qualification: "BAMS, PGDYN",
    experience: "12 years",
    specialty: "Digestive Disorders, Panchakarma"
  },
  {
    name: "Dr. Kavita Iyer",
    qualification: "BAMS",
    experience: "6 years",
    specialty: "Skin & Hair Treatments"
  },
  {
    name: "Dr. Sandeep Verma",
    qualification: "BAMS, M.Sc Yoga",
    experience: "15 years",
    specialty: "Chronic Illnesses, Stress Management"
  },
  {
    name: "Dr. Neha Kulkarni",
    qualification: "BAMS",
    experience: "9 years",
    specialty: "Weight Management, Women's Wellness"
  }
];

const getInitialsImage = (name) => {
  const initials = name
    .replace("Dr. ", "")
    .split(" ")
    .map((n) => n[0])
    .join("");
  return `https://ui-avatars.com/api/?name=${initials}&background=0D8F4F&color=fff&size=128`;
};

export default function Doctors() {
  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-12 text-gray-800">
      <motion.h2
        className="text-4xl font-bold text-center text-green-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        👨‍⚕️ Meet Our Practitioners
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctors.map((doc, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl border border-gray-100 shadow-md p-6 text-center hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <img
              src={getInitialsImage(doc.name)}
              alt={doc.name}
              className="mx-auto rounded-full mb-4 w-24 h-24 object-cover border-4 border-green-200"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-1">{doc.name}</h3>
            <p className="text-sm text-gray-600 mb-1"><strong>Qualification:</strong> {doc.qualification}</p>
            <p className="text-sm text-gray-600 mb-1"><strong>Experience:</strong> {doc.experience}</p>
            <p className="text-sm text-gray-600 mb-3"><strong>Specialties:</strong> {doc.specialty}</p>
            <button className="mt-2 px-4 py-2 bg-green-700 text-white rounded-full hover:bg-green-800 transition">
              Book Consultation
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
