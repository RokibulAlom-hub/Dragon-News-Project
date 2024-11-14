import { createBrowserRouter, Navigate } from "react-router-dom";
import Homelayouts from "../Layouts/Homelayouts";
import CategoryNews from "../Paages/CategoryNews";


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
        path:'news',
        element: <div>this is news</div>
    }
])
export default router;