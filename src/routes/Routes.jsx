import {
    createBrowserRouter,
  } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Homelayout></Homelayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>,
            },
            {
                path:'register',
                element:<Register></Register>,
            },
        ]
    },
    
])
export default router