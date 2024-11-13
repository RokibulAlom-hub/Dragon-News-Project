import moment from "moment";
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex flex-col justify-center gap-3 items-center py-3">
            {/* logo */}
            <div>
                <img src={logo} alt="" />
            </div>
            <h3 className="text-gray-600">Journalism without Fear and Favour </h3>
            <p className="font-semibold">{moment().format('dddd , MMMM , Do YYYY')}</p>
        </div>
    );
};

export default Header;