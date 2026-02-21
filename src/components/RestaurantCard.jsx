import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { id,name, image, cuisine, rating, etaMinutes,data } = resData;
   

  return (
    <div className="m-4 p-4 w-100 bg-gray-100 rounded-2xl hover:bg-gray-300" data-testid="restaurant-card">
      <Link  className="res-link" to={`/restaurant/${id}` } >
      <img className="rounded-xl" src={image} alt={name} />
      <h3 className="py-2 font-bold text-lg">{name}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>⭐ {rating}</h4>
      <h4>⏱️ {etaMinutes} mins</h4></Link>
      
    </div>
  );
};


export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return(
      <div data-testid="promoted-restaurant-card">
      <label className="absolute bg-black text-white m-2 p-2 rounded-lg">PROMOTED</label>
      <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;
