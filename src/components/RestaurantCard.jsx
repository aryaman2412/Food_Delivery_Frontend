const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, image, cuisine, rating, etaMinutes } = resData;

  return (
    <div className="res-card">
      <img className="rest-logo" src={image} alt={name} />
      <h3>{name}</h3>
      <h4>{cuisine.join(", ")}</h4>
      <h4>⭐ {rating}</h4>
      <h4>⏱️ {etaMinutes} mins</h4>
    </div>
  );
};

export default RestaurantCard;
