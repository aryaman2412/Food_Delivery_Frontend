import { useState } from "react";
import { LOGO_URL } from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 

const HeadingComponent = () => {
    const [loginBtn , setloginBtn] = useState("Login"); 
    const status = useOnlineStatus();
return (
    <div className="header">
        <div className="logo-contianer">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className ="nav-item">
            <ul>
                <li>
                    Online Status: {status ? "🟢" : "🔴"}
                </li>
                <li>
                    <Link to="/" >Home </Link>
                </li>
                <li>
                    <Link to="/About">About Us</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact Us</Link>
                </li>
                <li>
                <Link to="">Cart</Link>
                </li>
                <li>
                <Link to="/grocery">Grocery</Link>
                </li>
            <li>
                <button onClick={()=>{
                    loginBtn==="Login"? setloginBtn("Logout"):setloginBtn("Login") ;
                }}
                >{loginBtn}</button>
            </li>
            </ul>
              

        </div>
    </div>
)
}

export default HeadingComponent;