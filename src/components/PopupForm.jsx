import React, { useState } from "react";
import "../assets/PopupForm.css";

const PopupForm = ({ show, onClose }) => {
  if (!show) return null;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    Location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/.netlify/functions/addNumber", {
        method: "POST",
        body: JSON.stringify({ phone: formData.phone }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      console.log(data);

      alert("Registered successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        Location: "",
      });
      onClose();
    } catch (err) {
      console.error("Error saving user", err);
      alert("Failed to register");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h2>Submit Your Details</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <select
            name="Location"
            value={formData.Location}
            onChange={handleChange}
            required
          >
            <option value="">Select Location</option>
            <option value="Abia State">Abia State</option>
            <option value="Imo State">Imo State</option>
            <option value="Rivers">Rivers</option>
          </select>

          <button type="submit">Submit</button>
        </form>

        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
