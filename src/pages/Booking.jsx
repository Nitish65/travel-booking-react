import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Booking = () => {
  const location = useLocation();
  const destination = location.destination?.destination;

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

    if (!formData.name || !formData.email) {
      alert("Please fill all the required details");
      return;
    }
    alert("Booking Successful");
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
            className="form-control"
            onChange={handleChange}
            name="name"
            value={formData.name}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
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
