import React from "react";
import { motion } from "framer-motion";

// Reusable animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

function AboutUs() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-800">
      {/* Intro */}
      <motion.section
        className="mb-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl font-bold text-green-900 mb-4">About Our Clinic</h2>
        <p className="max-w-3xl mx-auto text-lg">
          At our Ayurveda Clinic, we believe in healing the body, mind, and spirit through natural, time-tested methods.
          Our holistic approach blends ancient wisdom with modern understanding, offering patients long-term wellness.
        </p>
      </motion.section>

      {/* Image & History */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
        <motion.img
          src="https://c8.alamy.com/comp/A85W0Y/the-ayurvedic-herbal-health-centre-the-maldives-A85W0Y.jpg"
          alt="Ayurveda heritage"
          className="rounded-xl shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomIn}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
        >
          <h3 className="text-2xl font-semibold text-green-800 mb-2">Our History & Philosophy</h3>
          <p className="mb-3">
            Rooted in the 5,000-year-old science of Ayurveda, our clinic honors the traditional principles laid out by ancient sages.
            We follow a personalized treatment philosophy based on the balance of the doshas—Vata, Pitta, and Kapha—to restore harmony.
          </p>
          <p>
            Founded by a family of Ayurvedic practitioners, our clinic has evolved into a trusted name for authentic Ayurvedic care,
            maintaining integrity, purity, and patient-centric values.
          </p>
        </motion.div>
      </section>

      {/* Environment & Staff */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-green-800 mb-2">Clinic Environment & Our Team</h3>
          <p className="mb-3">
            Our clinic provides a serene, eco-friendly setting that promotes healing from the moment you enter.
            Herbal aromas, soft lighting, and calming music make each visit therapeutic in itself.
          </p>
          <p>
            Our team consists of certified Ayurvedic doctors, trained therapists, nutritionists, and friendly staff—each committed
            to delivering compassionate and personalized care.
          </p>
        </motion.div>
        <motion.img
          src="https://www.shutterstock.com/image-photo/young-man-preparing-ayurvedic-medicine-600nw-320588870.jpg"
          alt="Ayurveda clinic"
          className="rounded-xl shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={zoomIn}
        />
      </section>

      {/* Mission & Vision */}
      <motion.section
        className="mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={1}
      >
        <h3 className="text-2xl font-semibold text-green-800 mb-4 text-center">Our Mission & Vision</h3>
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div className="bg-green-50 p-6 rounded-xl shadow-sm" variants={fadeInUp} custom={2}>
            <h4 className="font-bold text-lg text-green-700 mb-2">Our Mission</h4>
            <p>
              To provide holistic and natural healing through authentic Ayurvedic practices, making wellness accessible and sustainable for all.
            </p>
          </motion.div>
          <motion.div className="bg-green-50 p-6 rounded-xl shadow-sm" variants={fadeInUp} custom={3}>
            <h4 className="font-bold text-lg text-green-700 mb-2">Our Vision</h4>
            <p>
              To be a global symbol of trust in Ayurveda by combining tradition with innovation, and nurturing a world that heals naturally.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h3 className="text-2xl font-semibold text-green-800 mb-4">Why Choose Our Clinic</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Authentic Ayurvedic treatments",
            "Personalized wellness programs",
            "Trained & certified professionals",
            "Eco-friendly, peaceful ambiance",
            "Affordable and ethical care",
            "Long-term health support",
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-green-100 p-4 rounded-xl shadow hover:shadow-md transition"
              variants={fadeInUp}
              custom={idx + 1}
            >
              <p className="text-green-900 font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

export default AboutUs;
