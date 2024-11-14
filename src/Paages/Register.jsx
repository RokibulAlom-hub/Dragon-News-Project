import { useContext } from "react";
import { Link } from "react-router-dom";
import { Authcontext } from "../Providers/AuthProvider";


const Register = () => {
    const { createUser,setUser } = useContext(Authcontext)
    const handleSubmit = (e) => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');

        console.log({ name, photo, email, password });

        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode,errorMessage);
                
            });
    }
    return (
        <div>
            <div className="flex flex-col justify-center items-center">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-3">
                    <h2 className="text-center text-xl font-bold">Register Account</h2>
                    <form onSubmit={handleSubmit} className="card-body">
                        {/* name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name"
                                type="text" placeholder="name" className="input input-bordered"
                            />
                        </div>
                        {/* photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input name="photo"
                                type="text" placeholder="Photo Url" className="input input-bordered"
                            />
                        </div>
                        {/* email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input name="email"
                                type="email" placeholder="email" className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password"
                                type="password" placeholder="password" className="input input-bordered"
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary bg-gray-800">Register</button>
                        </div>
                        <p>Already have  an account ? <Link to='/auth/login' className="text-red-500 text-center">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;