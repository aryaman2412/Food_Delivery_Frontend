import { mockData } from "../utils/mockData";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCard ,{withPromotedLabel}from "./RestaurantCard";
import { useState } from "react";


const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState(mockData);
    const [filteredRestaurants ,setFilteredRestaurants] =useState(listOfRestaurants);
    const [searchedRestaurants , setSearchedRestaurants] = useState ("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    const status=useOnlineStatus();
    if(!status) return (<h2>Oppps! You are Offline.</h2>);
  return (
    <div className="body">
      <div className="p-4 m-4">
        <input type="text" 
        className="p-4 m-3 border border-solid  boreder-black"
        placeholder="Enter the restaurant name" 
        value ={searchedRestaurants}
        onChange={(e)=>(setSearchedRestaurants(e.target.value))}/>

        
        <button className="px-4 py-2 mr-2 bg-green-100 rounded-lg"onClick={()=>{
          const searchList = listOfRestaurants.filter((rest)=>rest.name.toLowerCase().includes(searchedRestaurants.toLowerCase()));
          setFilteredRestaurants(searchList);
        }}>Search</button>
        <button className="px-4 py-2 bg-gray-100 rounded-lg"
        onClick ={()=>{
            const filterData=mockData.filter(rest=>rest.rating>4);
                setFilteredRestaurants(filterData);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="flex flex-wrap" >
        {filteredRestaurants.map((restaurant) => (
          restaurant.promoted ? 
          (
          <RestaurantCardPromoted key ={restaurant.id} resData={restaurant}/>)
           :(
             <RestaurantCard key ={restaurant.id} resData={restaurant}/>
           )
        ))}
      </div>
    </div>
  );
};

export default Body;
