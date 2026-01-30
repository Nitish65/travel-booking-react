import React from "react";
import destinations from "../data/destinations";
import DestinationCard from "../components/DestinationCard";

const Home = () => {
  return (
    <div className="container mt-4 ">
      <h2 className="mb-4">Explore Destinations</h2>
      <div className="row">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default Home;
