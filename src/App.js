import React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import HeadingComponent from "./components/HeadingComponent";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";



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
            }
        ]
    }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
