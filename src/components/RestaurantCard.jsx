import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { id,name, image, cuisine, rating, etaMinutes } = resData;

  return (
    <div className="res-card">
      <Link  className="res-link" to={`/restaurant/${id}` } >
      <img className="rest-logo" src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>⭐ {rating}</h4>
      <h4>⏱️ {etaMinutes} mins</h4></Link>
      
    </div>
  );
};

export default RestaurantCard;
