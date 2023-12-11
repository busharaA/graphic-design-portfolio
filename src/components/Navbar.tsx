import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom"
import Dropdown from "./Dropdown";

const Navbar = () => {
	const [showDropdown, setShowDropdown] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 768;

	const location = useLocation();

	const handleShowDropdown = () => {
		setShowDropdown((showDropdown) => !showDropdown);
	}

	useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));
		return () => window.removeEventListener("resize", () => setWidth(window.innerWidth));
	}, [])

	useEffect(() => {
		if (width >= breakpoint) {
			setShowDropdown(false);
		}
	}, [width])

	return (
		<header className="navbar">
			<div className="logo">
				<h3>AISHA BUSHARA</h3>
			</div>
			{width >= breakpoint &&
				<ul className="nav-container">
					<li className="nav-item">
						<Link to={"/"} className={`nav-item__link ${location.pathname === "/" ? "current" : ""}`}>Home</Link>
					</li>
					<li className="nav-item">
						<Link to={"/about"} className={`nav-item__link ${location.pathname === "/about" ? "current" : ""}`}>About</Link>
					</li>
					<li className="nav-item">
						<Link to={"/portfolio"} className={`nav-item__link ${location.pathname.includes("/portfolio")  ? "current" : ""}`}>Portfolio</Link>
					</li>
				</ul>
			}
			{width < breakpoint && 
				<button className="hamburger-menu" onClick={handleShowDropdown}>
					{!showDropdown && <i className="fa-solid fa-bars"></i>}
					{showDropdown && <i className="fa-solid fa-xmark"></i>}
				</button>
			}
			{showDropdown && <Dropdown closeDropdown={handleShowDropdown} />}
		</header>
	);
};

export default Navbar;
