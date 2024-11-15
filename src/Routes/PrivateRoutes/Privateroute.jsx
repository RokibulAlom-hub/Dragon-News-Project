import { useContext } from "react";
import { Authcontext } from "../../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../Components/Loading";


const Privateroute = ({children}) => {
    const{user,loading} = useContext(Authcontext);
    const location = useLocation();
    console.log(location);
    
    if(loading){
        return <Loading></Loading>
    }
    if(user && user?.email){
        return children
    }
    return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default Privateroute;