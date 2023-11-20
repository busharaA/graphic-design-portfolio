import { Link } from "react-router-dom"

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="logo">
				<h3>AB</h3>
			</div>
			<ul className="navigation">
				<li>
					<Link to={"/"} className="navigation__link">Home</Link>
				</li>
				<li>
					<Link to={"/about"} className="navigation__link">About</Link>
				</li>
				<li>
					<Link to={"/portfolio"} className="navigation__link">Portfolio</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
