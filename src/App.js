import React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HeadingComponent from "./components/HeadingComponent";
import Body from "./components/Body";
import About from "./components/About";



const AppLayout = () => {
return (
    <div  className="app">
        <HeadingComponent />
        <Body />
    </div>

)
};


const router = createBrowserRouter([
    {
        path:"/About",
        element:<About/>
    },{
        path:"/",
        element:<AppLayout/>
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
