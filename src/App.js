import React from "react";
import * as ReactDOM from "react-dom/client";
import HeadingComponent from "./components/HeadingComponent";
import Body from "./components/Body";



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
