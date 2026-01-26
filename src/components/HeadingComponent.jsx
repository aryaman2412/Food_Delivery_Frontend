import { useState } from "react";
import { LOGO_URL } from "../utils/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 

const HeadingComponent = () => {
    const [loginBtn , setloginBtn] = useState("Login"); 
    const status = useOnlineStatus();
return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
        <div>
            <img className="w-40" src={LOGO_URL}></img>
        </div>
        <div className ="flex items-center">
            <ul className="flex p-4 m-4 ">
                <li className="px-4">
                    Online Status: {status ? "🟢" : "🔴"}
                </li>
               <li className="px-4">
                    <Link to="/" >Home </Link>
                </li>
                   <li className="px-4">
                    <Link to="/About">About Us</Link>
                </li>
           <li className="px-4">
                    <Link to="/Contact">Contact Us</Link>
                </li>
                   <li className="px-4">
                <Link to="">Cart</Link>
                </li>
               <li className="px-4">
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