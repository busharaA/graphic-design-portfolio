import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
	const location = useLocation();

	return (
		<header className="navbar">
			<div className="logo">
				<h3>AISHA BUSHARA</h3>
			</div>
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
		</header>
	);
};

export default Navbar;
