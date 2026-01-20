import { mockData } from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState(mockData);
    const [filteredRestaurants ,setFilteredRestaurants] =useState(listOfRestaurants);
    const [searchedRestaurants , setSearchedRestaurants] = useState ("");

    const status=useOnlineStatus();
    if(!status) return (<h2>Oppps! You are Offline.</h2>);
  return (
    <div className="body">
      <div className="filter">
        <input type="text" 
        placeholder="Enter the restaurant name" 
        value ={searchedRestaurants}
        onChange={(e)=>(setSearchedRestaurants(e.target.value))}/>

        
        <button onClick={()=>{
          const searchList = listOfRestaurants.filter((rest)=>rest.name.toLowerCase().includes(searchedRestaurants.toLowerCase()));
          setFilteredRestaurants(searchList);
        }}>Search</button>
        <button 
        onClick ={()=>{
            const filterData=mockData.filter(rest=>rest.rating>4);
                setFilteredRestaurants(filterData);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key ={restaurant.id} resData={restaurant}/>
        ))}
      </div>
    </div>
  );
};

export default Body;
