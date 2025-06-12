import React from "react";
import { motion } from "framer-motion";

const treatments = [
  {
    name: "Panchakarma",
    description: "A full-body detoxification therapy to purify and rejuvenate.",
    benefits: "Improves digestion, boosts immunity, removes toxins, and balances doshas.",
    duration: "7–21 days",
    icon: "🧘‍♂️"
  },
  {
    name: "Shirodhara",
    description: "Continuous flow of warm oil on the forehead to calm the mind.",
    benefits: "Reduces anxiety, enhances sleep, and soothes the nervous system.",
    duration: "45 minutes",
    icon: "💆‍♀️"
  },
  {
    name: "Abhyanga",
    description: "Full body massage using warm herbal oils.",
    benefits: "Nourishes skin, improves circulation, and reduces stress.",
    duration: "60 minutes",
    icon: "🌿"
  },
  {
    name: "Nasya",
    description: "Therapeutic administration of oil through the nose.",
    benefits: "Clears sinuses, relieves headaches, and balances Prana.",
    duration: "30 minutes",
    icon: "👃"
  },
  {
    name: "Udvartana",
    description: "Dry herbal powder massage for detox and fat reduction.",
    benefits: "Improves lymphatic drainage and tones the skin.",
    duration: "45 minutes",
    icon: "🪶"
  },
  {
    name: "Swedana",
    description: "Herbal steam therapy to open channels and eliminate toxins.",
    benefits: "Relieves muscle stiffness and increases circulation.",
    duration: "30–40 minutes",
    icon: "♨️"
  }
];

export default function Treatments() {
  return (
    <section className="bg-green-50 py-10 px-4 sm:px-6 lg:px-12 text-gray-800">
      <motion.h2
        className="text-4xl font-bold text-center text-green-800 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🌿 Our Ayurvedic Treatments
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {treatments.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white border border-green-100 p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-2">{t.icon} {t.name}</h3>
            <p className="mb-2"><span className="font-semibold text-green-600">Description:</span> {t.description}</p>
            <p className="mb-2"><span className="font-semibold text-green-600">Benefits:</span> {t.benefits}</p>
            <p><span className="font-semibold text-green-600">Duration:</span> {t.duration}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
