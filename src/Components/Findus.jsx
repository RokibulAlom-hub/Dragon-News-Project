import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Findus = () => {
    return (
        <div>
            <div>
                <h2 className="font-bold">Find Us On</h2>
                <div className="join flex *:bg-white my-2 join-vertical">
                    <button className="btn justify-start join-item">
                    <FaFacebookSquare /> Facebook</button>
                    <button className="btn justify-start join-item">
                    <FaInstagram />  Instragram</button>
                    <button className="btn justify-start join-item">
                    <FaTwitter />  Twitter</button>
                </div>
            </div>
        </div>
    );
};

export default Findus;