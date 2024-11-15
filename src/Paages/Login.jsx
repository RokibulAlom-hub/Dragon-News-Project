import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../Providers/AuthProvider";


const Login = () => {
    const { signIn } = useContext(Authcontext)
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState({});
    console.log(location);

    const handleLogin = (e) => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');

        console.log({ email, password });

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                navigate(location?.state ? location.state : '/')
                console.log(user);

            })
            .catch((err) => {
                setError({ ...error, login: err.code })
            });
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-3">
                <h2 className="text-center text-xl font-bold">Login Your Account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input name="email"
                            type="email" placeholder="email" className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        {
                            error.login && <div>
                                <label className="label">
                                    <a  className="label-text-alt text-red-600 link link-hover">{error.login}</a>
                                </label>
                            </div>
                        }
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary bg-gray-800">Login</button>
                    </div>
                    <p>Dont have account ? <Link to='/auth/register' className="text-red-500 text-center">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;