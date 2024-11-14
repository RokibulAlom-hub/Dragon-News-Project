import { Link } from "react-router-dom";
import userlogo from "../assets/user.png"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-3">
            <div>

            </div>
            <div className="space-x-3">
                <Link to='/'>Home</Link> 
                <Link to='/about'>About</Link> 
                <Link to='/Career'>Career</Link> 
            </div>
            <div className="flex gap-2 items-center">
                <div>
                    <img src={userlogo} alt="" />
                </div>
                <button className="btn btn-neutral rounded-none">Login</button>
            </div>
        </div>
    );
};

export default Navbar;