import { FOOD_IMG_URL } from "../utils/mockData";

const RestaurantCard = (props) => {
    const {resName, resCusine}  = props;
    return (
        <div className="res-card">
            <img
            className="rest-logo" 
            src={FOOD_IMG_URL}></img>
            <h3>{resName}</h3>
            <h4>{resCusine}</h4>
            <h4>4.4stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
export default RestaurantCard;