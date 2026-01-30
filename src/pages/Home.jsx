import React, { useState } from "react";
import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDestinations = destinations.filter((destination) =>
    destination.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mt-4 ">
      <h2 className="mb-4">Explore Destinations</h2>

      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="search destinations..."
          value={searchTerm}
          onChange={handleChange}
        />
      </div>

      <div className="row">
        {filteredDestinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Home;
