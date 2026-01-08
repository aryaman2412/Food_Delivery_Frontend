import { mockData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    let [listOfRestaurants,setListOfRestaurants] = useState(mockData);
  return (
    <div className="body">
      <div className="filter">
        <button 
        onClick ={()=>{
            const filterData=mockData.filter(rest=>rest.rating>4);
            console.log(filterData);
                setListOfRestaurants(filterData);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key ={restaurant.id} resData={restaurant}/>
        ))}
      </div>
    </div>
  );
};

export default Body;
