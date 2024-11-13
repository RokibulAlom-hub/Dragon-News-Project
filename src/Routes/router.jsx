import { createBrowserRouter } from "react-router-dom";
import Homelayouts from "../Layouts/Homelayouts";


const router = createBrowserRouter([
    {
        path:'/',
        element: <Homelayouts></Homelayouts>
    },
    {
        path:'news',
        element: <div>this is news</div>
    }
])
export default router;