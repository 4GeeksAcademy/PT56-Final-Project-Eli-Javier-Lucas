import { Link } from "react-router-dom";
import Icon from "../assets/img/Icon.jpeg"

export const Navbar = () => {

	return (
		<nav className="navbar container-fluid d-flex justify-content-start">
			<div className="m-2">
				<Link to="/Home">
					<img
						src={Icon}
						alt="Work in progress"
						width={90}
						height={90}
						className="rounded-4 border border-success border-4"
					/>
				</Link>
			</div>
			<div className="">
				<h1>Billetera Familiar</h1>
			</div>
		</nav>

	);
};