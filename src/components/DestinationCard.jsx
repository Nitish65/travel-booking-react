import "../styles/global.css";

const DestinationCard = ({ destination }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img
          src={destination.image}
          alt={destination.name}
          className="card-img-top destination-img"
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{destination.name}</h5>
          <p className="card-text text-muted">{destination.description}</p>
          <h6 className="mt-auto text-primary">₹ {destination.price}</h6>
          <button className="btn btn-primary mt-2">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
