// BookingForm.js
import React, { useState } from "react";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    requests: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
    // Submit form data to the server or API endpoint
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="phone">Phone:</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      />

      <label htmlFor="guests">Number of Guests:</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={formData.guests}
        onChange={handleChange}
        required
        min="1"
        max="20"
      />

      <label htmlFor="requests">Special Requests:</label>
      <textarea
        id="requests"
        name="requests"
        value={formData.requests}
        onChange={handleChange}
      ></textarea>

      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;
