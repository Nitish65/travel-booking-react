import React from "react";

const Hero = () => {
  return (
    <div className="hero-section d-flex align-items-center">
      <div className="container text-white">
        <h1 className="display-5 fw-bold">Explore The World With Us</h1>
        <p className="lead fw-bold">
          Find and book amazing travel destinations at the best prices.
        </p>
        <button className="btn btn-warning btn-lg mt-3">
          Explore Destinations
        </button>
      </div>
    </div>
  );
};

export default Hero;
