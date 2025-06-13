import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Contact Form Submitted:", form);
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000); // Auto-hide success message
  };

  return (
    <div className="px-4 py-8 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center mb-6 text-green-800"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info and Map */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-lg">
            <p><strong>Address:</strong> 123 Herbal Road, Wellness City</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Email:</strong> info@ayurvedaclinic.com</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.4871671147754!2d73.87061917423899!3d18.551479969518297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1332df214cf%3A0x9eaf2dc9f0bfc3f6!2sAyurveda%20Panchakarma%20Clinic!5e0!3m2!1sen!2sin!4v1718287540321!5m2!1sen!2sin"
            className="w-full h-64 border rounded"
            allowFullScreen=""
            loading="lazy"
            title="Clinic Location"
          ></iframe>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-6 space-y-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {submitted && (
            <motion.div
              className="text-green-600 font-medium bg-green-100 p-2 rounded text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              ✅ Message sent! We’ll get back to you shortly.
            </motion.div>
          )}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-green-700 hover:bg-green-800 text-white font-medium py-3 rounded transition duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
}
