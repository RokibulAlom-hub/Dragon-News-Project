import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const Authlayout = () => {
    return (
        <div className="p-2 w-11/12 mx-auto bg-gray-100" >
            <header>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default Authlayout;