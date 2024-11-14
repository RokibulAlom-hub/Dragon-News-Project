import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-3">
            <h2 className="text-center text-xl font-bold">Login Your Account</h2>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email Address</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
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