import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-bold">Login With</h2>
            <div className="*:w-full my-2 space-y-3">
                <button className="btn">
                    <FaGoogle />
                    Log in with Google
                </button>
                <button className="btn">
                    <FaGithub />
                    Log in with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;