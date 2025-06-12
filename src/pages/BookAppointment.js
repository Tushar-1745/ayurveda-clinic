import React, { useState } from 'react';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    address: '',
    message: '',
    images: [],
    video: null
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = e => {
    setFormData(prev => ({ ...prev, images: Array.from(e.target.files) }));
  };

  const handleVideoChange = e => {
    setFormData(prev => ({ ...prev, video: e.target.files[0] }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert("Appointment request submitted!");
    // You may add logic to send formData to a server using FormData API
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Book an Appointment</h2>

      <input
        name="name"
        type="text"
        placeholder="Name"
        className="w-full mb-3 p-2 border rounded"
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        type="tel"
        placeholder="Phone"
        className="w-full mb-3 p-2 border rounded"
        onChange={handleChange}
        required
      />

      <input
        name="address"
        type="text"
        placeholder="Address"
        className="w-full mb-3 p-2 border rounded"
        onChange={handleChange}
        required
      />

      <input
        name="date"
        type="date"
        className="w-full mb-3 p-2 border rounded"
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Message (optional)"
        rows="4"
        className="w-full mb-3 p-2 border rounded"
        onChange={handleChange}
      ></textarea>

      <div className="mb-3">
        <label className="block mb-1 font-medium text-gray-700">Upload Images (optional)</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleImageChange}
          className="w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium text-gray-700">Upload Video (optional)</label>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoChange}
          className="w-full"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-700 hover:bg-green-800 text-white py-2 px-4 rounded transition"
      >
        Submit
      </button>
    </form>
  );
}
