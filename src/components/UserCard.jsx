import {useState} from "react"

const UserCard = (props) => {
    const {name, location }= props;
    const [count]= useState(0);
    return (
        <div className="user-card">
            <h2>Count: {count}</h2>
            <h2>Name : {name}</h2>
            <h3>Location: {location}</h3>
        </div>
    )
};

export default UserCard;