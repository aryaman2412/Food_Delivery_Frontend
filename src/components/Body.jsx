import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
    <div className="body">
        <div className="search">Search</div>
        <div className="res-container">
           <RestaurantCard
           resName="Meghana Foods"
           resCusine="Biryani , North Indian" />
           <RestaurantCard
           resName="KFC"
           resCusine="Burger, Fast Food" />
        </div>
    </div>
)}

export default Body;