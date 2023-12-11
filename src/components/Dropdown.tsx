import { Link, useLocation } from "react-router-dom";
import { ICloseDropdown } from "../helpers/interfaces/ICloseDropdown";

const Dropdown = ({ closeDropdown }: ICloseDropdown) => {
    const location = useLocation();

    return (
        <ul className="dropdown">
            <li className="dropdown-item">
                <Link to={"/"} className={`dropdown-item__link ${location.pathname === "/" ? "current" : ""}`} onClick={closeDropdown}>Home</Link>
            </li>
            <li className="dropdown-item">
                <Link to={"/about"} className={`dropdown-item__link ${location.pathname === "/about" ? "current" : ""}`} onClick={closeDropdown}>About</Link>
            </li>
            <li className="dropdown-item">
                <Link to={"/portfolio"} className={`dropdown-item__link ${location.pathname.includes("/portfolio")  ? "current" : ""}`} onClick={closeDropdown}>Portfolio</Link>
            </li>
        </ul>
    );
};

export default Dropdown;