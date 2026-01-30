import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const destination = location.destination?.destination;

  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    travelers: 1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter valid email address";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Booking Successfully");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Booking Page</h2>

      {destination && (
        <div className="mb-4">
          <h4>{destination.name}</h4>
          <p>Price:{destination.price}</p>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""} `}
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className={`form-control ${errors.email ? "is-invalid" : ""} `}
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label">Number of Travelers</label>
          <input
            type="number"
            name="travelers"
            value={formData.travelers}
            onChange={handleChange}
            className="form-control"
            min={1}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
