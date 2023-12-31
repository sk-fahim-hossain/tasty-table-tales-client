import {
    createBrowserRouter,
  } from "react-router-dom";
import Homelayout from "../layouts/Homelayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import ChefDetails from "../pages/ChefDetails";
import About from "../pages/About";
import Blog from "../pages/Blog";

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
            {
                path:'/chefs/:id',
                element:<ChefDetails/>,
                loader: ({params})=>fetch(`https://tastytable-hsgd437xv-fahim-hossains-projects.vercel.app/chefs/${params.id}`),
            },
            {
                path:'/about',
                element:<About></About>,
            },
            {
                path:'/blog',
                element:<Blog></Blog>,
                loader: () =>fetch('https://tastytable-hsgd437xv-fahim-hossains-projects.vercel.app/blogs')
            },
        ]
    },
    
])
export default router