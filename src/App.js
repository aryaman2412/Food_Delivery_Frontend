import React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import HeadingComponent from "./components/HeadingComponent";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import MenuCard from "./components/MenuCard";
import "./index.css";



const AppLayout = () => {
return (
    <div  className="app">
        <HeadingComponent />
        <Outlet/>
    </div>

)
};


const router = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
            path:"/About",
            element:<About/>
            },
            {
            path:"/Contact",
            element:<Contact/>
            },
            {
            path:"/restaurant/:resId",
            element:<MenuCard/>
            }
        ]
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
