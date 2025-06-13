import React, { useState } from 'react';

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    treatment: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.contact.trim()) newErrors.contact = "Contact number is required.";
    else if (!/^\d{10}$/.test(formData.contact.trim())) newErrors.contact = "Enter a valid 10-digit number.";
    if (!formData.treatment) newErrors.treatment = "Please select a treatment type.";
    if (!formData.date) newErrors.date = "Date is required.";
    return newErrors;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Submitted Data:", formData);
      alert("Appointment request submitted!");
      // You can send `formData` to your backend here.
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-green-800">Book an Appointment</h2>

      <div className="mb-3">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="mb-3">
        <input
          name="contact"
          type="tel"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
      </div>

      <div className="mb-3">
        <select
          name="treatment"
          value={formData.treatment}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Treatment Type</option>
          <option value="Panchakarma">Panchakarma</option>
          <option value="Detox">Detox</option>
          <option value="Rejuvenation">Rejuvenation</option>
          <option value="Joint Pain Therapy">Joint Pain Therapy</option>
          <option value="Skin Treatment">Skin Treatment</option>
        </select>
        {errors.treatment && <p className="text-red-500 text-sm">{errors.treatment}</p>}
      </div>

      <div className="mb-3">
        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
      </div>

      <div className="mb-4">
        <textarea
          name="message"
          rows="4"
          placeholder="Message (optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        ></textarea>
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
