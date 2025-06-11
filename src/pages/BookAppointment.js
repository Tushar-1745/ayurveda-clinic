import React, { useState } from 'react';

export default function BookAppointment() {
  const [formData, setFormData] = useState({ name: '', phone: '', treatment: '', date: '', message: '' });
  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert("Appointment request submitted!");
  };
  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
      {['name', 'phone', 'treatment', 'date', 'message'].map(field => (
        <input
          key={field}
          name={field}
          type={field === 'date' ? 'date' : 'text'}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          className="w-full mb-3 p-2 border rounded"
          onChange={handleChange}
          required={field !== 'message'}
        />
      ))}
      <button type="submit" className="bg-green-700 text-white py-2 px-4 rounded">Submit</button>
    </form>
  );
}