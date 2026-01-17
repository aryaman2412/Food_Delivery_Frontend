import { useParams } from "react-router-dom";
import { mockData } from "../utils/mockData";

const MenuCard = () => {
  const { resId } = useParams();
 console.log(resId);

  const restaurant = mockData.find(
    (res) => res.id === Number(resId)
  );



 

  return (
    <div>
      <h1>{restaurant.name}</h1>
    
      <p>Still making....</p>
    </div>
  );
};

export default MenuCard;
