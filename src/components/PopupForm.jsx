import React, { useState } from "react";
import "../assets/PopupForm.css"; // optional styling

const PopupForm = ({ show, onClose }) => {
  if (!show) return null; // don't render popup if show = false

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose(); // close popup after submit
  };

  return (
    <div className="popup-overlay ">
      <div className="popup-container">
        <h2>Contact Us</h2>
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
            type="phone"
            name="phone"
            placeholder="Your phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </form>
          <button type="submit">Submit</button>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupForm;
