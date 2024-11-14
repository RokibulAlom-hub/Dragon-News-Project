import { Link } from "react-router-dom";
import userlogo from "../assets/user.png"
import { useContext } from "react";
import { Authcontext } from "../Providers/AuthProvider";
const Navbar = () => {
    const {user,logout} = useContext(Authcontext)
    return (
        <div className="flex justify-between items-center py-3">
            <div>
                {
                    <h2>{user?.email}</h2>
                }
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
               {
                user && user?.email ? 
                <button onClick={logout} className="btn btn-neutral rounded-none">Logout</button>
                : <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
               }
            </div>
        </div>
    );
};

export default Navbar;