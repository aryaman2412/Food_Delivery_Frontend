import { LOGO_URL } from "../utils/mockData";

const HeadingComponent = () => {
return (
    <div className="header">
        <div className="logo-contianer">
            <img className="logo" src={LOGO_URL}></img>
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

export default HeadingComponent;