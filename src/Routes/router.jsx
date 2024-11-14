import { createBrowserRouter, Navigate } from "react-router-dom";
import Homelayouts from "../Layouts/Homelayouts";
import CategoryNews from "../Paages/CategoryNews";
import Authlayout from "../Layouts/Authlayout";
import Login from "../Paages/Login";
import Register from "../Paages/Register";
import Newsdetails from "../Paages/Newsdetails";



const router = createBrowserRouter([
    {
        path:'/',
        element: <Homelayouts></Homelayouts>,
        children:[
            {
              path:'',
              element:<Navigate to={'category/01'}></Navigate>
            },
            {
                path:"/category/:id",
                element:<CategoryNews></CategoryNews>,
                loader:({params}) => 
                fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            },
        ]
    },
    {
        path:'news/:id',
        element: <Newsdetails></Newsdetails>,
        
    },
    {
        path:'/',
        element:<Authlayout></Authlayout>,
        children:[
            {
                path:'auth/login',
                element:<Login></Login>
            },
            {
                path:'auth/register',
                element:<Register></Register>
            }
        ]
    }
])
export default router;