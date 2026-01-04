import React from "react";
import * as ReactDOM from "react-dom/client";

const HeadingComponent = () => {
return (
    <div className="header">
        <div className="logo-contianer">
            <img className="logo" src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg"></img>
        </div>
        <div className ="nav-item">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>

            </ul>
        </div>
    </div>
)
}
const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img
            className="rest-logo" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToXogU2xLguKcjGFHbhRXp-ylhxBFiOfPyvA&s"></img>
            <h3>Meghana Foods</h3>
            <h4>Biryani,North Indian, Asian</h4>
            <h4>4.4stars</h4>
            <h4>38 minutes</h4>
        </div>
    )
}
const Body = () => {
    return (
    <div className="body">
        <div className="search">Search</div>
        <div className="rest-container">
           <RestaurantCard/>
        </div>
    </div>
)}



const AppLayout = () => {
return (
    <div  className="app">
        <HeadingComponent />
        <Body />
    </div>

)
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
