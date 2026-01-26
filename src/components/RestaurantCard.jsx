import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { id,name, image, cuisine, rating, etaMinutes } = resData;

  return (
    <div className="m-4 p-4 w-100 bg-gray-100 rounded-2xl hover:bg-gray-300">
      <Link  className="res-link" to={`/restaurant/${id}` } >
      <img className="rounded-xl" src={image} alt={name} />
      <h3 className="py-2 font-bold text-lg">{name}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>⭐ {rating}</h4>
      <h4>⏱️ {etaMinutes} mins</h4></Link>
      
    </div>
  );
};

export default RestaurantCard;
