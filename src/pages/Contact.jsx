import React from 'react';

export default function Contact() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p><strong>Location:</strong> 123 Herbal Road, Wellness City</p>
      <p><strong>Phone:</strong> +91 98765 43210</p>
      <p><strong>Email:</strong> info@ayurvedaclinic.com</p>
      <iframe
        src="https://www.google.com/maps/embed?..."
        className="w-full h-64 mt-4 border"
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}